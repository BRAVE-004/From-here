#!/usr/bin/env node
// remove-white-bg.mjs — make near-white pixels transparent in a PNG
import { readFileSync, writeFileSync } from "node:fs";
import { inflateSync, deflateSync } from "node:zlib";

const input = process.argv[2];
const output = process.argv[3] || input.replace(/\.png$/i, "-nobg.png");
if (!input) {
  console.error("Usage: node scripts/remove-white-bg.mjs <input.png> [output.png]");
  process.exit(1);
}

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const buf = readFileSync(input);
if (!buf.subarray(0, 8).equals(PNG_SIG)) {
  console.error("Not a PNG file");
  process.exit(1);
}

function readU32BE(b, o) { return (b[o] << 24) | (b[o+1] << 16) | (b[o+2] << 8) | b[o+3]; }
function writeU32BE(b, o, v) { b[o] = v >>> 24; b[o+1] = (v >>> 16) & 255; b[o+2] = (v >>> 8) & 255; b[o+3] = v & 255; }

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(data) {
  let c = 0xffffffff;
  for (let i = 0; i < data.length; i++) c = CRC_TABLE[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

let offset = 8;
const idatChunks = [];
let ihdr = null;
let width = 0, height = 0, bitDepth = 8, colorType = 6;

while (offset < buf.length) {
  const len = readU32BE(buf, offset);
  const type = buf.toString("ascii", offset + 4, offset + 8);
  const data = buf.subarray(offset + 8, offset + 8 + len);
  const crc = readU32BE(buf, offset + 8 + len);

  if (type === "IHDR") {
    ihdr = data;
    width = readU32BE(data, 0);
    height = readU32BE(data, 4);
    bitDepth = data[8];
    colorType = data[9];
  } else if (type === "IDAT") {
    idatChunks.push(data);
  } else if (type === "IEND") {
    break;
  }
  offset += 12 + len;
}

let channels = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : null;
if (!channels) {
  console.error("Unsupported colorType:", colorType);
  process.exit(1);
}

const compressed = Buffer.concat(idatChunks);
const raw = inflateSync(compressed);

// Process: each row has a filter byte + width * channels bytes
const stride = width * channels;
const outChannels = 4; // always output RGBA
const out = Buffer.alloc(height * (width * outChannels + 1));

for (let y = 0; y < height; y++) {
  const rowStart = y * (stride + 1);
  const filter = raw[rowStart];
  const outRowStart = y * (width * outChannels + 1);
  out[outRowStart] = filter; // keep same filter

  for (let x = 0; x < width; x++) {
    const i = rowStart + 1 + x * channels;
    const o = outRowStart + 1 + x * outChannels;
    const r = raw[i];
    const g = raw[i + 1];
    const b = raw[i + 2];

    // If pixel is near-white (all channels > 200), make transparent
    const isWhite = r > 200 && g > 200 && b > 200;
    // Also handle near-white with slight color cast
    const maxCh = Math.max(r, g, b);
    const minCh = Math.min(r, g, b);
    const isNearWhite = maxCh > 180 && (maxCh - minCh) < 40;

    // Also catch very light pixels regardless of hue
    const isLight = (r + g + b) / 3 > 220;

    if (isWhite || isNearWhite || isLight) {
      out[o] = 0;
      out[o + 1] = 0;
      out[o + 2] = 0;
      out[o + 3] = 0;
    } else {
      out[o] = r;
      out[o + 1] = g;
      out[o + 2] = b;
      out[o + 3] = 255;
    }
  }
}

// Update IHDR to RGBA (colorType 6)
const newIhdr = Buffer.from(ihdr);
newIhdr[9] = 6; // colorType = 6 (RGBA)

const recompressed = deflateSync(out, { level: 9 });

// Rebuild PNG
const chunks = [];
chunks.push(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));

function pushChunk(type, data) {
  const len = Buffer.alloc(4);
  writeU32BE(len, 0, data.length);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  writeU32BE(crc, 0, crc32(td));
  chunks.push(len, td, crc);
}

pushChunk("IHDR", newIhdr);
pushChunk("IDAT", recompressed);
pushChunk("IEND", Buffer.alloc(0));

writeFileSync(output, Buffer.concat(chunks));
console.log(`Wrote ${output} (${width}x${height})`);