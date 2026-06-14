import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const SRC = "public/images";
const OUT = "public/images-opt";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (/\.(jpe?g|png)$/i.test(e.name)) files.push(p);
  }
  return files;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = await walk(SRC);
  let count = 0;
  for (const f of files) {
    const name = basename(f, extname(f));
    const outBase = join(OUT, name);
    const data = sharp(f);
    await data.clone().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${outBase}.webp`);
    await data.clone().resize({ width: 1200, withoutEnlargement: true }).avif({ quality: 55 }).toFile(`${outBase}.avif`);
    count++;
  }
  console.log(`Optimized ${count} images to ${OUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
