#!/usr/bin/env node
// pdf-fonts.mjs — list font names used in a PDF (works with compressed object streams)
import { readFileSync } from "node:fs";
import { inflateSync } from "node:zlib";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/pdf-fonts.mjs <file.pdf>");
  process.exit(1);
}

const buf = readFileSync(file);
const latin = buf.toString("latin1");
const names = new Set();

function harvest(text) {
  for (const m of text.matchAll(/\/BaseFont\s*\/([A-Za-z0-9+\-_,.]+)/g)) names.add(m[1]);
  for (const m of text.matchAll(/\/FontName\s*\/([A-Za-z0-9+\-_,.]+)/g)) names.add(m[1]);
  for (const m of text.matchAll(/\/FontFamily\s*\(([^)]+)\)/g)) names.add(m[1]);
}

harvest(latin);

// inflate every stream that looks like Flate data
let idx = 0;
let count = 0;
while ((idx = latin.indexOf("stream", idx)) !== -1) {
  let start = idx + 6;
  if (latin[start] === "\r") start++;
  if (latin[start] === "\n") start++;
  const end = latin.indexOf("endstream", start);
  if (end === -1) break;
  const chunk = buf.subarray(start, end);
  try {
    const out = inflateSync(chunk);
    count++;
    harvest(out.toString("latin1"));
  } catch {
    /* not flate */
  }
  idx = end + 9;
}

console.log("streams inflated:", count);
console.log([...names].sort().join("\n") || "(no font names found)");
