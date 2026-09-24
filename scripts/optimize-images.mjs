// Convierte las fotos originales del repo (carpetas con espacios y acentos)
// en WebP optimizados dentro de public/img y genera src/data/gallery.json.
// Uso: npm run images
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "img");
const MANIFEST = path.join(ROOT, "src", "data", "gallery.json");
const MAX_WIDTH = 1920;

// Carpeta de origen -> categoría de la web
const SOURCES = [
  { dir: "ESIM. COMPARTIDO/LOGISTICA/ACONDICIONAMIENTO DE DUCTOS", category: "ductos" },
  { dir: "ESIM. COMPARTIDO/LOGISTICA/CIVIL/CAMIONES CON HIDROGRUA", category: "izaje" },
  { dir: "TERCEROS (CLIENTES VARIOS)/AJUSTE", category: "ajuste" },
  { dir: "TERCEROS (CLIENTES VARIOS)/REPUESTOS", category: "repuestos" },
  { dir: "TERCEROS (CLIENTES VARIOS)/OFICINA TÉCNICA/MODELOS 3D", category: "oficina-tecnica" },
];

const IMAGE_EXT = /\.(jpe?g|png)$/i;

const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\.[a-z]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (IMAGE_EXT.test(e.name)) files.push(full);
  }
  return files;
}

const manifest = [];
for (const { dir, category } of SOURCES) {
  const srcDir = path.join(ROOT, dir);
  const outDir = path.join(OUT_DIR, category);
  await mkdir(outDir, { recursive: true });
  const files = await walk(srcDir);
  let i = 0;
  for (const file of files) {
    i += 1;
    const rel = path.relative(srcDir, file);
    // Subcarpeta = nombre del proyecto (ej. "BOMBA B8 YPF POLIDUCTO")
    const project = rel.includes(path.sep) ? rel.split(path.sep)[0] : null;
    const base = project ? `${slugify(project)}-${String(i).padStart(2, "0")}` : `${category}-${String(i).padStart(2, "0")}`;
    const outFile = path.join(outDir, `${base}.webp`);
    const info = await sharp(file)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outFile);
    manifest.push({
      src: `/img/${category}/${base}.webp`,
      category,
      project,
      width: info.width,
      height: info.height,
    });
  }
  console.log(`${category}: ${files.length} imágenes`);
}

await mkdir(path.dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Manifest: ${manifest.length} imágenes -> ${path.relative(ROOT, MANIFEST)}`);
