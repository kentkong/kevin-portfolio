import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects");
const baseUrl = "https://kentkong.github.io/gen-pulse-dashboard/";

// Gen Pulse content maxes at ~1104px centred — capture near that width so the
// dashboard fills the frame (matches a real browser window), still 16:10 for
// the laptop mockup bezel.
const WIDTH = 1152;
const HEIGHT = 720;
const DPR = 2;

async function forceTheme(page, theme) {
  await page.evaluate((mode) => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${mode}`);
    try {
      localStorage.setItem("gen-pulse-theme", mode);
    } catch {
      /* ignore */
    }
  }, theme);
}

async function captureDesktop(browser, theme, filename) {
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: DPR,
  });
  const page = await context.newPage();
  await page.emulateMedia({ colorScheme: theme });
  await page.goto(`${baseUrl}?theme=${theme}`, { waitUntil: "networkidle", timeout: 60_000 });
  await forceTheme(page, theme);
  await page.waitForTimeout(2000);

  const info = await page.evaluate(() => {
    const hero = document.querySelector(".sn-hero")?.getBoundingClientRect();
    return {
      htmlClass: document.documentElement.className,
      viewport: window.innerWidth,
      heroWidth: hero?.width,
      heroLeft: hero?.left,
      fillPct: hero ? Math.round((hero.width / window.innerWidth) * 100) : 0,
    };
  });

  console.log(`${filename}:`, info);

  await page.screenshot({
    path: path.join(outDir, filename),
    fullPage: false,
  });

  await context.close();
}

const browser = await chromium.launch();
try {
  await captureDesktop(browser, "dark", "gen-pulse-desktop-dark.png");
  await captureDesktop(browser, "light", "gen-pulse-desktop-light.png");
  console.log(`Saved ${WIDTH}x${HEIGHT} @${DPR}x (16:10) → ${WIDTH * DPR}x${HEIGHT * DPR}px`);
} finally {
  await browser.close();
}
