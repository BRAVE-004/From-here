#!/usr/bin/env node
/**
 * figma-dump.mjs - pull a Figma frame and turn it into a build spec.
 *
 * Usage:
 *   node scripts/figma-dump.mjs                 # defaults to the FROM HERE file, node 3:24
 *   node scripts/figma-dump.mjs --node 12:34    # another frame
 *   node scripts/figma-dump.mjs --images        # also download image fills as PNG
 *   node scripts/figma-dump.mjs --depth 8
 *   node scripts/figma-dump.mjs --from fixture.json   # parse a saved API response, no network
 *
 * Token: reads the first line of ./figma.token (gitignored), else FIGMA_TOKEN env var.
 * Needs a Figma personal access token with `file_content:read` (Figma > Settings > Security).
 *
 * Output (never includes the token):
 *   design/<node>-raw.json  full node tree straight from the API
 *   design/<node>-spec.md   human/agent readable: sections, copy, type, colors, spacing, assets
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const FILE_KEY = "6pWLBci7u6vMixeik59MqR";
const API = "https://api.figma.com/v1";

const argv = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const next = argv[i + 1];
  return next && !next.startsWith("--") ? next : true;
};

const nodeId = String(flag("node", "3:24"));
const depth = Number(flag("depth", 10));
const wantImages = Boolean(flag("images", false));
const slug = nodeId.replace(/[:;]/g, "-");
const outDir = join(process.cwd(), "design");

function readToken() {
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN.trim();
  const p = join(process.cwd(), "figma.token");
  if (existsSync(p)) {
    return readFileSync(p, "utf8").split("\n")[0].trim();
  }
  console.error(
    "No token found.\n" +
      "Create ./figma.token containing a Figma personal access token with file_content:read.\n" +
      "Figma > top-left menu > Settings > Security > Personal access tokens.\n"
  );
  process.exit(1);
}

let token;

async function api(path) {
  token ??= readToken();
  const res = await fetch(`${API}${path}`, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${res.status} ${res.statusText} for ${path}\n${body.slice(0, 400)}`);
  }
  return res.json();
}

/* ---------- color + style helpers ---------- */

const clamp = (n) => Math.max(0, Math.min(1, n));
const hex = (c) =>
  "#" +
  [c.r, c.g, c.b]
    .map((v) => Math.round(clamp(v) * 255).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();

function paintLabel(paint) {
  if (paint.visible === false) return null;
  switch (paint.type) {
    case "SOLID": {
      const base = hex(paint.color);
      const a = paint.opacity ?? paint.color.a ?? 1;
      return a < 1 ? `${base} @ ${Math.round(a * 100)}%` : base;
    }
    case "GRADIENT_LINEAR":
    case "GRADIENT_RADIAL":
    case "GRADIENT_ANGULAR":
      return `${paint.type}(${paint.gradientStops
        .map((s) => `${hex(s.color)} ${Math.round(s.position * 100)}%`)
        .join(" → ")})`;
    case "IMAGE":
      return `IMAGE ${paint.imageRef ?? ""} (${paint.scaleMode ?? "fill"})`;
    default:
      return paint.type;
  }
}

// stable palette keys: colors without stroke weights or layer semantics
function paintKeys(paints) {
  return (paints || [])
    .filter((p) => p.visible !== false)
    .map((p) => {
      if (p.type === "SOLID") {
        const a = p.opacity ?? p.color.a ?? 1;
        return a < 1 ? `${hex(p.color)} @ ${Math.round(a * 100)}%` : hex(p.color);
      }
      if (p.type === "IMAGE") return `IMAGE_FILL`;
      return paintLabel(p);
    })
    .filter(Boolean);
}

function fillsOf(node) {
  const f = (node.fills || []).filter((p) => p.visible !== false).map(paintLabel).filter(Boolean);
  return f.length ? f.join(", ") : null;
}

function strokesOf(node) {
  const s = (node.strokes || []).filter((p) => p.visible !== false).map(paintLabel).filter(Boolean);
  if (!s.length) return null;
  const w = node.strokeWeight ?? 1;
  return `${s.join(", ")} ${w}px${node.strokeDashes?.length ? " dashed" : ""}`;
}

function effectsOf(node) {
  const e = (node.effects || []).filter((x) => x.visible !== false);
  if (!e.length) return null;
  return e
    .map((x) => {
      if (x.type === "DROP_SHADOW" || x.type === "INNER_SHADOW") {
        const a = x.color.a ?? 1;
        const c = a < 1 ? `${hex(x.color)} @ ${Math.round(a * 100)}%` : hex(x.color);
        return `${x.type.toLowerCase()} ${Math.round(x.offset.x)}px ${Math.round(
          x.offset.y
        )}px ${Math.round(x.radius)}px ${c}`;
      }
      return `${x.type} ${x.radius}px`;
    })
    .join(", ");
}

function radiusOf(node) {
  if (node.cornerRadius) return `${node.cornerRadius}px`;
  if (Array.isArray(node.rectangleCornerRadii)) return node.rectangleCornerRadii.join("/");
  return null;
}

function layoutOf(node) {
  const bits = [];
  if (node.layoutMode && node.layoutMode !== "NONE") {
    bits.push(`auto-layout ${node.layoutMode.toLowerCase()}`);
    const pad = [node.paddingTop, node.paddingRight, node.paddingBottom, node.paddingLeft];
    if (pad.some((p) => p)) bits.push(`padding ${pad.join(" ")}`);
    if (node.itemSpacing) bits.push(`gap ${node.itemSpacing}`);
    if (node.primaryAxisAlignItems) bits.push(`main ${node.primaryAxisAlignItems.toLowerCase()}`);
    if (node.counterAxisAlignItems) bits.push(`cross ${node.counterAxisAlignItems.toLowerCase()}`);
  }
  if (node.layoutSizingHorizontal) bits.push(`h:${node.layoutSizingHorizontal.toLowerCase()}`);
  if (node.layoutSizingVertical) bits.push(`v:${node.layoutSizingVertical.toLowerCase()}`);
  if (node.layoutWrap && node.layoutWrap !== "NO_WRAP") bits.push("wrap");
  return bits.join(", ") || null;
}

function typeOf(node) {
  const s = node.style;
  if (!s || !s.fontFamily) return null;
  const lh = s.lineHeightPx
    ? `${Math.round(s.lineHeightPx)}px${s.lineHeightUnit === "PERCENT" ? ` (${s.lineHeightPercentFontSize?.toFixed(0)}%)` : ""}`
    : "auto";
  const ls = s.letterSpacing ? ` ls ${s.letterSpacing}${s.letterSpacingUnit === "PERCENT" ? "%" : "px"}` : "";
  const tt = s.textCase && s.textCase !== "ORIGINAL" ? ` ${s.textCase.toLowerCase()}` : "";
  return `${s.fontFamily} ${s.fontWeight} / ${s.fontSize}px / lh ${lh}${ls}${tt}`;
}

const bbox = (n) =>
  n.absoluteBoundingBox
    ? `${Math.round(n.absoluteBoundingBox.width)}x${Math.round(n.absoluteBoundingBox.height)} @ ${Math.round(
        n.absoluteBoundingBox.x
      )},${Math.round(n.absoluteBoundingBox.y)}`
    : null;

/* ---------- collect ---------- */

const palette = new Map();
const typography = new Set();
const assets = new Map(); // imageRef -> node id
const components = new Set();
const copy = [];

function walkNested(node) {
  const fill = fillsOf(node);
  const type = typeOf(node);

  const stroke = strokesOf(node);
  [...paintKeys(node.fills), ...paintKeys(node.strokes)].forEach((k) =>
    palette.set(k, (palette.get(k) || 0) + 1)
  );
  if (type) typography.add(type);
  if (node.type === "INSTANCE" && node.name) components.add(node.name);
  if (node.type === "TEXT" && node.characters) copy.push({ name: node.name, text: node.characters, type: type || "" });
  (node.fills || []).forEach((p) => {
    if (p.type === "IMAGE" && p.imageRef) assets.set(p.imageRef, node.id);
  });

  return {
    id: node.id,
    name: node.name,
    type: node.type,
    size: bbox(node),
    fill,
    stroke,
    radius: radiusOf(node),
    effect: effectsOf(node),
    layout: layoutOf(node),
    clipContent: node.clipsContent || undefined,
    text: node.type === "TEXT" ? node.characters : undefined,
    style: type || undefined,
    charactersTruncated: node.type === "TEXT" && node.characters?.length > 900 ? true : undefined,
    children: (node.children || []).map(walkNested),
  };
}

function renderNode(node, indent = 0) {
  const pad = "  ".repeat(indent);
  const meta = [
    node.type,
    node.size,
    node.fill && `fill ${node.fill}`,
    node.stroke && `stroke ${node.stroke}`,
    node.radius && `radius ${node.radius}`,
    node.effect && `effect ${node.effect}`,
    node.layout && `[${node.layout}]`,
    node.clipContent && "clip",
  ]
    .filter(Boolean)
    .join(" · ");

  const lines = [`${pad}- **${node.name}** — ${meta}`];
  if (node.text) {
    lines.push(`${pad}  > ${JSON.stringify(node.text)}`);
    if (node.style) lines.push(`${pad}  > _${node.style}_`);
  }
  for (const child of node.children || []) lines.push(renderNode(child, indent + 1));
  return lines.join("\n");
}

/* ---------- main ---------- */

const data = flag("from")
  ? JSON.parse(readFileSync(String(flag("from")), "utf8"))
  : await api(`/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(nodeId)}&depth=${depth}&geometry=paths`);
const entry = data.nodes?.[nodeId];
if (!entry || !entry.document) {
  console.error(`Node ${nodeId} not found in response. Keys: ${Object.keys(data.nodes || {}).join(", ")}`);
  process.exit(1);
}
const doc = entry.document;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, `${slug}-raw.json`), JSON.stringify(data, null, 2));

const tree = walkNested(doc);

const md = [];
md.push(`# Figma spec — ${doc.name}`);
md.push("");
md.push(`- File: \`${FILE_KEY}\` (FROM HERE PROJECT)`);
md.push(`- Node: \`${nodeId}\``);
md.push(`- Frame size: ${bbox(doc)}`);
md.push(`- Dumped: ${new Date().toISOString()}`);
md.push("");
md.push("## Palette (by paint usage)");
md.push("");
for (const [color, count] of [...palette.entries()].sort((a, b) => b[1] - a[1])) {
  md.push(`- \`${color}\` — ${count} use${count === 1 ? "" : "s"}`);
}
md.push("");
md.push("## Typography");
md.push("");
for (const t of [...typography].sort()) md.push(`- ${t}`);
md.push("");
md.push("## Copy (in tree order)");
md.push("");
copy.forEach((c, i) => md.push(`${i + 1}. ${JSON.stringify(c.text)} — _${c.type || c.name}_`));
md.push("");
md.push("## Instances / components used");
md.push("");
if (components.size) for (const c of [...components].sort()) md.push(`- ${c}`);
else md.push("- (none — all plain layers)");
md.push("");
md.push("## Image fills (need exporting)");
md.push("");
if (assets.size) for (const [ref, id] of assets) md.push(`- \`${ref}\` on node \`${id}\``);
else md.push("- (none)");
md.push("");
md.push("## Layer tree");
md.push("");
md.push(renderNode(tree));
md.push("");

writeFileSync(join(outDir, `${slug}-spec.md`), md.join("\n"));

if (wantImages && assets.size) {
  const nodeIds = [...new Set([...assets.values()])];
  const imgData = await api(
    `/images/${FILE_KEY}?ids=${encodeURIComponent(nodeIds.join(","))}&format=png&scale=2`
  );
  let saved = 0;
  for (const [id, url] of Object.entries(imgData.images || {})) {
    if (!url) continue;
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(join(outDir, "images"), { recursive: true });
    writeFileSync(join(outDir, "images", `${id.replace(/[:;]/g, "-")}.png`), buf);
    saved += 1;
  }
  console.log(`Saved ${saved} image export(s) to design/images/`);
}

console.log(`Wrote design/${slug}-raw.json and design/${slug}-spec.md`);
console.log(`Frame: ${doc.name} — ${bbox(doc)}`);
console.log(`Text layers: ${copy.length} · colors: ${palette.size} · type styles: ${typography.size}`);
