import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects/sprintiq");
const base = "https://kentkong.github.io/sprintiq-ai";

const WIDTH = 1600;
const HEIGHT = 1000;

async function capture(page, slug) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(outDir, `${slug}.png`),
    fullPage: false,
  });
  console.log("Captured", slug);
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setViewportSize({ width: WIDTH, height: HEIGHT });

  await page.goto(`${base}/`, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForSelector(".mission-progress-track", { timeout: 15_000 });
  await page.waitForTimeout(1500);
  await capture(page, "objective");

  const generateBtn = page.getByRole("button", { name: /generate blueprint/i });
  if (await generateBtn.isVisible()) {
    await generateBtn.click();
    await page.waitForURL(/\/blueprint/, { timeout: 30_000 });
    await page.waitForSelector(".mission-progress-track", { timeout: 15_000 });
    await page.waitForTimeout(2000);
    await capture(page, "blueprint");
  } else {
    console.warn("Generate blueprint button not found — skipping workflow steps");
  }

  await page.goto(`${base}/review`, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForSelector(".mission-progress-track", { timeout: 15_000 });
  await page.waitForTimeout(1500);
  await capture(page, "review");

  await page.goto(`${base}/ready`, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForSelector(".mission-progress-track", { timeout: 15_000 });
  await page.waitForTimeout(1500);
  await capture(page, "ready");

  await page.close();
} finally {
  await browser.close();
}

console.log("Done →", outDir);
