#!/usr/bin/env node
/**
 * Rasterize the existing public/favicon.svg to the PNG sizes the site
 * already ships, and wrap a real ICO around the 16/32/48 PNGs so
 * /favicon.ico is a genuine Windows icon resource instead of SVG mislabeled
 * with an .ico extension. This is a FORMAT fix only -- it does not change
 * the favicon's visual design.
 *
 * Produces (by overwriting):
 *   public/favicon.ico                 (real multi-size ICO: 16, 32, 48)
 *   public/favicon-16x16.png
 *   public/favicon-32x32.png
 *   public/apple-touch-icon.png        (180x180)
 *   public/android-chrome-192x192.png
 *   public/android-chrome-512x512.png
 *
 * Source of truth: public/favicon.svg (left untouched).
 */

import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const publicDir = path.join(repoRoot, "public");
const faviconSrc = path.join(publicDir, "favicon.svg");

async function renderPng(svgBuffer, size) {
  // density=384 gives a crisp raster at small target sizes; sharp will
  // render the SVG at high resolution and then downsample.
  return sharp(svgBuffer, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

/**
 * Assemble a real .ico file wrapping one or more PNG images.
 * Format reference: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function buildIco(pngBuffers) {
  const ICONDIR_SIZE = 6;
  const ICONDIRENTRY_SIZE = 16;
  const count = pngBuffers.length;

  const header = Buffer.alloc(ICONDIR_SIZE);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = ICONDIR_SIZE + ICONDIRENTRY_SIZE * count;

  for (const { size, buf } of pngBuffers) {
    const entry = Buffer.alloc(ICONDIRENTRY_SIZE);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.buf)]);
}

async function main() {
  const svgBuffer = await fs.readFile(faviconSrc);

  const sizes = [16, 32, 48, 180, 192, 512];
  const rendered = {};
  for (const size of sizes) {
    rendered[size] = await renderPng(svgBuffer, size);
  }

  await fs.writeFile(path.join(publicDir, "favicon-16x16.png"), rendered[16]);
  await fs.writeFile(path.join(publicDir, "favicon-32x32.png"), rendered[32]);
  await fs.writeFile(path.join(publicDir, "apple-touch-icon.png"), rendered[180]);
  await fs.writeFile(path.join(publicDir, "android-chrome-192x192.png"), rendered[192]);
  await fs.writeFile(path.join(publicDir, "android-chrome-512x512.png"), rendered[512]);

  const ico = buildIco([
    { size: 16, buf: rendered[16] },
    { size: 32, buf: rendered[32] },
    { size: 48, buf: rendered[48] },
  ]);
  await fs.writeFile(path.join(publicDir, "favicon.ico"), ico);

  const stats = await Promise.all(
    [
      "favicon.ico",
      "favicon.svg",
      "favicon-16x16.png",
      "favicon-32x32.png",
      "apple-touch-icon.png",
      "android-chrome-192x192.png",
      "android-chrome-512x512.png",
    ].map(async (f) => {
      const s = await fs.stat(path.join(publicDir, f));
      return `  ${f.padEnd(34)} ${s.size.toLocaleString()} bytes`;
    })
  );
  console.log("Regenerated from public/favicon.svg (design unchanged):\n" + stats.join("\n"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
