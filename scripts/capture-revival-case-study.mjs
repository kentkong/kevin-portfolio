import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../public/projects/revival/case-study-full-page.png");
const base = process.env.CAPTURE_BASE_URL ?? "http://127.0.0.1:43143";

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${base}/projects/revival/full-page`, {
    waitUntil: "networkidle",
    timeout: 120_000,
  });
  await page.waitForSelector(".revival-case", { timeout: 30_000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log("Wrote", outPath);
} finally {
  await browser.close();
}
