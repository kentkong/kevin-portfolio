import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects");
const baseUrl = "https://kentkong.github.io/gen-pulse-dashboard/";

/** Match laptop bezel (16:10) — same spec as pulse-ops captures. */
const WIDTH = 1600;
const HEIGHT = 1000;

const CAPTURES = [
  { theme: "dark", team: "avast", filename: "gen-pulse-desktop-dark.png", mobile: false },
  { theme: "light", team: "email-norton", filename: "gen-pulse-desktop-light.png", mobile: false },
];

const MOBILE_WIDTH = 393;
const MOBILE_HEIGHT = 852;

async function preparePage(page, { theme, team }) {
  await page.emulateMedia({ colorScheme: theme });
  await page.goto(`${baseUrl}?theme=${theme}&team=${encodeURIComponent(team)}`, {
    waitUntil: "networkidle",
    timeout: 90_000,
  });

  await page.evaluate(
    ({ mode, teamSlug }) => {
      document.documentElement.classList.remove("theme-light", "theme-dark");
      document.documentElement.classList.add(`theme-${mode}`);
      document.body.dataset.team = teamSlug;
      try {
        localStorage.setItem("gen-pulse-theme", mode);
        localStorage.setItem("gen-pulse-team", teamSlug);
      } catch {
        /* ignore */
      }
      window.scrollTo(0, 0);
    },
    { mode: theme, teamSlug: team },
  );

  await page.reload({ waitUntil: "networkidle", timeout: 90_000 });
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.waitForFunction(
    () => !document.body?.textContent?.includes("Loading…"),
    { timeout: 20_000 },
  ).catch(() => undefined);

  await page.waitForSelector(".sn-hero", { state: "visible", timeout: 20_000 });
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(1500);
}

async function captureViewport(browser, capture) {
  const { theme, team, filename, mobile, metaFilename } = capture;
  const width = mobile ? MOBILE_WIDTH : WIDTH;
  const height = mobile ? MOBILE_HEIGHT : HEIGHT;

  const context = await browser.newContext({
    viewport: { width, height },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const page = await context.newPage();

  await preparePage(page, { theme, team });

  const meta = await page.evaluate(() => ({
    team: document.body.dataset.team,
    theme: document.documentElement.className,
    viewport: { w: window.innerWidth, h: window.innerHeight },
    scrollY: window.scrollY,
  }));
  console.log(`${filename}:`, meta);

  await page.screenshot({
    path: path.join(outDir, filename),
    fullPage: false,
    type: "png",
  });

  if (mobile && metaFilename) {
    const fs = await import("node:fs/promises");
    await fs.writeFile(
      path.join(outDir, metaFilename),
      `${JSON.stringify({ width, height, aspect: width / height }, null, 2)}\n`,
    );
  }

  await context.close();
}

const browser = await chromium.launch();
try {
  for (const capture of CAPTURES) {
    await captureViewport(browser, capture);
  }
  console.log(`Saved captures → ${outDir}`);
} finally {
  await browser.close();
}
