#!/usr/bin/env node
/**
 * extract-pdf-images.mjs — pull embedded raster images out of a PDF.
 *
 * Figma "export PDF" (and most PDF writers) store photos as DCTDecode
 * (JPEG) or FlateDecode (raw) XObjects. JPEGs can be copied out byte for
 * byte; Flate images are inflated and wrapped as PNG.
 *
 * Usage: node scripts/extract-pdf-images.mjs <file.pdf> <outDir>
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { inflateSync } from "node:zlib";
import { basename, join } from "node:path";

const [pdfPath, outDir = "assets/pdf-images"] = process.argv.slice(2);
if (!pdfPath) {
  console.error("Usage: node scripts/extract-pdf-images.mjs <file.pdf> [outDir]");
  process.exit(1);
}

const buf = readFileSync(pdfPath);
const latin = buf.toString("latin1");
const name = basename(pdfPath, ".pdf").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
mkdirSync(outDir, { recursive: true });

/* ---- tiny PNG encoder (for Flate pixel data) ---- */
import { deflateSync } from "node:zlib";

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
const crc32 = (b) => {
  let c = -1;
  for (let i = 0; i < b.length; i++) c = CRC_TABLE[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};
function encodePng(width, height, rgb) {
  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgb.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ---- scan for image XObjects ---- */
const re = /\/Subtype\s*\/Image([\s\S]{0,600}?)stream\r?\n/g;
const found = [];
let m;
let index = 0;

while ((m = re.exec(latin))) {
  const dict = m[1];
  const num = (key) => {
    const hit = dict.match(new RegExp(`/${key}\\s+(\\d+)`));
    return hit ? Number(hit[1]) : null;
  };
  const width = num("Width");
  const height = num("Height");
  if (!width || !height || width < 200 || height < 200) continue; // skip icons/masks

  const start = m.index + m[0].length;
  const end = latin.indexOf("endstream", start);
  if (end === -1) continue;

  let data = buf.subarray(start, end);
  // tolerate trailing EOL before endstream
  if (data[data.length - 1] === 0x0a) data = data.subarray(0, data.length - 1);
  if (data[data.length - 1] === 0x0d) data = data.subarray(0, data.length - 1);

  const isDct = /\/Filter\s*\/DCTDecode/.test(dict) || /\/DCTDecode/.test(dict);
  const isFlate = /\/Filter\s*\/FlateDecode/.test(dict) || /\/FlateDecode/.test(dict);
  const isGray = /\/DeviceGray/.test(dict);
  const isCmyk = /\/DeviceCMYK/.test(dict);

  index += 1;
  const stem = `${name}-img${index}-${width}x${height}`;

  try {
    if (isDct) {
      const file = join(outDir, `${stem}.jpg`);
      writeFileSync(file, data);
      found.push({ file, width, height, format: "jpeg", bytes: data.length });
    } else if (isFlate) {
      const raw = inflateSync(data);
      const channels = isGray ? 1 : isCmyk ? 4 : 3;
      if (raw.length < width * height * channels) continue;
      const rgb = Buffer.alloc(width * height * 3);
      for (let p = 0; p < width * height; p++) {
        const s = p * channels;
        let r, g, b;
        if (channels === 1) r = g = b = raw[s];
        else if (channels === 4) {
          // naive CMYK -> RGB
          const [c, mm, y, k] = [raw[s], raw[s + 1], raw[s + 2], raw[s + 3]];
          r = 255 - Math.min(255, c + k);
          g = 255 - Math.min(255, mm + k);
          b = 255 - Math.min(255, y + k);
        } else [r, g, b] = [raw[s], raw[s + 1], raw[s + 2]];
        rgb[p * 3] = r;
        rgb[p * 3 + 1] = g;
        rgb[p * 3 + 2] = b;
      }
      const file = join(outDir, `${stem}.png`);
      writeFileSync(file, encodePng(width, height, rgb));
      found.push({ file, width, height, format: "png", bytes: raw.length });
    }
  } catch (err) {
    console.error(`skip ${stem}: ${err.message}`);
  }
}

if (!found.length) {
  console.log("No embedded raster images found (the design may be vector-only).");
} else {
  found.sort((a, b) => b.width * b.height - a.width * a.height);
  for (const f of found) console.log(`${f.file}  ${f.width}x${f.height}  ${f.format}  ${(f.bytes / 1024).toFixed(0)} KiB`);
}
