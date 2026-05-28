/**
 * Extracts the first page of each machine PDF as a PNG thumbnail.
 * Uses pdfjs-dist with node-canvas.
 * Run with: node scripts/extract-machine-images.mjs
 */

import { createCanvas, Image, ImageData } from "canvas";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Polyfill browser globals that pdfjs needs for image rendering
globalThis.Image = Image;
globalThis.ImageData = ImageData;

const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const MACHINES = [
  { slug: "cdm6060n", pdf: "C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6060N（Weichai） coninmaqsas.pdf" },
  { slug: "cdm6306",  pdf: "C:/Users/PC/Downloads/EXCAVADORA 36 ton - CDM6306(Cummins Euro V & Tier 4F) coninmaq sas.pdf" },
  { slug: "cdm6150f", pdf: "C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6150F (Cummins Euro V & Tier 4F) coninmaqsas.pdf" },
  { slug: "cdm6035",  pdf: "C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6035 coninmaqsas-1.pdf" },
  { slug: "cdm835h",  pdf: "C:/Users/PC/Downloads/CARGADOR LONKING -CDM835H (Weichai EUⅢ) coninmaqsas.pdf" },
  { slug: "cdm312",   pdf: "C:/Users/PC/Downloads/MINICARGADOR LONKING CDM312 Kubota (Tier IV & EU Stage V+pilot) coninmaqsas.pdf" },
  { slug: "cdm6225",  pdf: "C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6225 (Cummins Euro V & Tier 4F) coninmaqsas.pdf" },
  { slug: "cdm856h",  pdf: "C:/Users/PC/Downloads/CARGADOR LONKING -CDM856H Weichai EUⅢ coninmaqsas.pdf" },
  { slug: "83d",      pdf: "C:/Users/PC/Downloads/83D Backhoe Loader(Perkins Tier 4F &Euro V Carraro) coninmaqsas-1.pdf" },
];

const OUT_IMG = path.join(ROOT, "public", "machines");
const OUT_PDF = path.join(ROOT, "public", "pdfs");

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  }
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
  }
}

async function renderPage(pdfPath, slug) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const canvasFactory = new NodeCanvasFactory();

  const doc = await getDocument({
    data,
    canvasFactory,
    useWorkerFetch: false,
    isEvalSupported: false,
    useSystemFonts: true,
    disableFontFace: true,
  }).promise;

  const page = await doc.getPage(1);
  const scale = 2.0;
  const viewport = page.getViewport({ scale });

  const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);

  await page.render({
    canvasContext: canvasAndContext.context,
    viewport,
    canvasFactory,
  }).promise;

  const outPath = path.join(OUT_IMG, `${slug}.png`);
  const buffer = canvasAndContext.canvas.toBuffer("image/png");
  fs.writeFileSync(outPath, buffer);

  canvasFactory.destroy(canvasAndContext);
  page.cleanup();
  await doc.destroy();

  return buffer.length;
}

function copyPdf(src, slug) {
  const dest = path.join(OUT_PDF, `${slug}.pdf`);
  fs.copyFileSync(src, dest);
  return fs.statSync(dest).size;
}

(async () => {
  let ok = 0, fail = 0;
  for (const m of MACHINES) {
    if (!fs.existsSync(m.pdf)) {
      console.warn(`⚠  Not found: ${m.pdf}`);
      fail++;
      continue;
    }
    try {
      process.stdout.write(`  ${m.slug}... `);
      const imgSize = await renderPage(m.pdf, m.slug);
      const pdfSize = copyPdf(m.pdf, m.slug);
      console.log(`✓  img ${Math.round(imgSize/1024)}KB | pdf ${Math.round(pdfSize/1024)}KB`);
      ok++;
    } catch (err) {
      console.error(`\n  ✗ ${m.slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed`);
})();
