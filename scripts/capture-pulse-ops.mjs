import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects/pulse-ops");
const base = "https://kentkong.github.io/pulse-ops-ai";

const WIDTH = 1600;
const HEIGHT = 1000;

const pages = [
  { slug: "operations", path: "/" },
  { slug: "lifecycle", path: "/lifecycle" },
  { slug: "workflows", path: "/workflows" },
  { slug: "insights", path: "/insights" },
  { slug: "events", path: "/events" },
  { slug: "architecture", path: "/architecture" },
];

const browser = await chromium.launch();
try {
  for (const page of pages) {
    const tab = await browser.newPage();
    await tab.setViewportSize({ width: WIDTH, height: HEIGHT });
    await tab.goto(`${base}${page.path}`, { waitUntil: "networkidle", timeout: 60_000 });
    await tab.waitForTimeout(2000);
    await tab.screenshot({
      path: path.join(outDir, `${page.slug}.png`),
      fullPage: false,
    });
    console.log("Captured", page.slug);
    await tab.close();
  }
} finally {
  await browser.close();
}

console.log("Done →", outDir);
