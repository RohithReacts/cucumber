import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import fs from "fs";
import path from "path";

// --------------------
// Global timeout (e.g., 2 minutes)
// --------------------
setDefaultTimeout(120 * 1000); // 120s

// Global objects (shared between steps)
let browser: Browser;
let context: BrowserContext;
let page: Page;

export function getPage() {
  return page;
}

// --------------------
// Before Hook → Setup browser + context with video
// --------------------
Before(async function () {
  const videoDir = path.join(process.cwd(), "reports/videos");
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
  }

  browser = await chromium.launch({ headless: true, slowMo: 700 });
  context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
    recordVideo: {
      dir: videoDir,
      size: { width: 1366, height: 768 },
    },
  });

  page = await context.newPage();
  this.page = page; // attach to cucumber world
});

// --------------------
// After Hook → Save screenshot + close browser
// --------------------
After(async function (scenario) {
  const screenshotDir = path.join(process.cwd(), "reports/screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const screenshotPath = path.join(
    screenshotDir,
    `${scenario.pickle.name.replace(/\s+/g, "_")}.png`
  );

  await page.screenshot({ path: screenshotPath });

  await page.close();
  await context.close();
  await browser.close();
});
