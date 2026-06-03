import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects/lifecycle-architecture-studio");
const base = "https://kentkong.github.io/lifecycle-architecture-studio/?v=b2255c6";

const WIDTH = 1600;
const HEIGHT = 1000;

const templates = [
  { slug: "modern-composable", label: "Modern Composable Customer Engagement Stack" },
  { slug: "legacy-enterprise", label: "Legacy Enterprise Marketing Stack" },
  { slug: "ai-powered-lifecycle", label: "AI-Powered Lifecycle Stack" },
  { slug: "product-led-growth", label: "Product-Led Growth Stack" },
  { slug: "customer-360", label: "Customer 360 Stack" },
];

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setViewportSize({ width: WIDTH, height: HEIGHT });
  await page.goto(base, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(2500);

  for (const template of templates) {
    await page.getByRole("tab", { name: template.label }).click();
    await page.waitForTimeout(1800);
    await page.screenshot({
      path: path.join(outDir, `${template.slug}.png`),
      fullPage: false,
    });
    console.log("Captured", template.slug);
  }
} finally {
  await browser.close();
}

console.log("Done →", outDir);
