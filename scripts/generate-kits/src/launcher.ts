import { chromium } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

export const launcher = async ({ headless, url }) => {
  chromium.use(stealth());

  const extraOptions = {}

  const browser = await chromium.launch({
    channel: "chrome",
    headless,
    ...extraOptions,
  });

  const page = await browser.newPage();

  // Block images from being loaded
  await page.route("**/*", (route) => {
    if (route.request().resourceType() === "image") {
      return route.abort();
    }

    return route.continue();
  });

  await page.goto(url);
  // await page.goto(url, { waitUntil: "networkidle" });

  return { page, browser };
};
