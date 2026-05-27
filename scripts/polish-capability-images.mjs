/**
 * Normalize capability hero art: true PNG output, 4:3 canvas with side/top
 * padding so object-cover on the service hero does not clip HUD content.
 */
import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CAP_DIR = path.join(__dirname, "../public/images/capabilities");
const TARGET_ASPECT = 4 / 3;
/** Matches dark HUD / tech art backgrounds */
const PAD_BG = { r: 8, g: 10, b: 14, alpha: 1 };

async function padToFourThree(inputPath) {
  const input = sharp(inputPath);
  const meta = await input.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  if (!width || !height) {
    throw new Error(`Invalid dimensions: ${inputPath}`);
  }

  const currentAspect = width / height;
  let canvasW;
  let canvasH;

  if (currentAspect > TARGET_ASPECT) {
    canvasW = width;
    canvasH = Math.round(width / TARGET_ASPECT);
  } else {
    canvasH = height;
    canvasW = Math.round(height * TARGET_ASPECT);
  }

  const left = Math.floor((canvasW - width) / 2);
  const top = Math.floor((canvasH - height) / 2);

  const raster = await input.rotate().toBuffer();

  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: PAD_BG,
    },
  })
    .composite([{ input: raster, left, top }])
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(inputPath);
}

const files = await readdir(CAP_DIR);
const pngs = files.filter((f) => f.endsWith(".png"));

for (const file of pngs) {
  const full = path.join(CAP_DIR, file);
  const before = await sharp(full).metadata();
  await padToFourThree(full);
  const after = await sharp(full).metadata();
  console.log(
    `${file}: ${before.width}x${before.height} → ${after.width}x${after.height} (4:3 PNG)`
  );
}
