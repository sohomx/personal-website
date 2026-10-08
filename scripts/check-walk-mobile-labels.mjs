/**
 * Mobile walk label clip check at multiple CSS widths.
 * Uses group translate + local getBBox (stable on tall SVGs).
 * Requires: npx serve out -l 3456
 */
import { chromium } from "playwright";

const BASE = process.env.CHECK_BASE || "http://127.0.0.1:3456";
const WIDTHS = [360, 390, 430];
const EDGE = 24;

function parseTranslate(transform) {
  if (!transform) return { x: 0, y: 0 };
  const m = /translate\(\s*([-\d.]+)[ ,]+([-\d.]+)\s*\)/.exec(transform);
  if (!m) return { x: 0, y: 0 };
  return { x: Number(m[1]), y: Number(m[2]) };
}

const browser = await chromium.launch({
  args: ["--force-device-scale-factor=1"],
});

let failed = false;

for (const width of WIDTHS) {
  const ctx = await browser.newContext({
    viewport: { width, height: 844 },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    localStorage.setItem("internet-map-mode", "walk");
  });
  await page.goto(`${BASE}/internet/`, {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });
  await page.waitForSelector(".walk-svg-mobile", { timeout: 15000 });
  // scroll to top so first labels paint, then mid for lazy terrain
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(350);

  const report = await page.evaluate((edge) => {
    const svg = document.querySelector(".walk-svg-mobile");
    if (!svg) return { error: "no svg" };
    const vb = svg.viewBox.baseVal;

    function parseTranslate(transform) {
      if (!transform) return { x: 0, y: 0 };
      const m = /translate\(\s*([-\d.]+)[ ,]+([-\d.]+)\s*\)/.exec(transform);
      if (!m) return { x: 0, y: 0 };
      return { x: Number(m[1]), y: Number(m[2]) };
    }

    const problems = [];
    const labels = [];
    for (const el of svg.querySelectorAll("[data-station-label]")) {
      const g = el.closest(".walk-waypoint-g");
      const { x: gx, y: gy } = parseTranslate(g?.getAttribute("transform"));
      const b = el.getBBox();
      const box = {
        id: el.getAttribute("data-station-label"),
        text: el.textContent ?? "",
        x: gx + b.x,
        y: gy + b.y,
        w: b.width,
        h: b.height,
      };
      labels.push(box);
      if (box.x < edge - 0.5) {
        problems.push(`left-clip ${box.id} (${box.text}) x=${box.x.toFixed(1)}`);
      }
      if (box.x + box.w > vb.width - edge + 0.5) {
        problems.push(
          `right-clip ${box.id} (${box.text}) right=${(box.x + box.w).toFixed(1)}`,
        );
      }
      if (box.y < -0.5 || box.y + box.h > vb.height + 0.5) {
        problems.push(`v-clip ${box.id} (${box.text}) y=${box.y.toFixed(1)}`);
      }
    }

    for (const g of svg.querySelectorAll(".walk-pill")) {
      const rect = g.querySelector("rect");
      const text = g.querySelector("text")?.textContent ?? "?";
      if (!rect) continue;
      const b = rect.getBBox();
      if (b.x < edge - 0.5 || b.x + b.width > vb.width - edge + 0.5) {
        problems.push(`pill-clip ${text} x=${b.x.toFixed(1)}`);
      }
    }

    const thG = svg.querySelector(".walk-trailhead");
    const thText = thG?.querySelector("text");
    const firstPill = svg.querySelector(
      '.walk-pill[data-pill="eval-nerds"] rect',
    );
    if (thG && thText && firstPill) {
      const t = parseTranslate(thG.getAttribute("transform"));
      const tb = thText.getBBox();
      const a = { x: t.x + tb.x, y: t.y + tb.y, w: tb.width, h: tb.height };
      const b = firstPill.getBBox();
      const gapY = b.y - (a.y + a.h);
      const overlap = !(
        a.x + a.w + 2 <= b.x ||
        b.x + b.w + 2 <= a.x ||
        a.y + a.h + 2 <= b.y ||
        b.y + b.h + 2 <= a.y
      );
      if (overlap) problems.push("trailhead∩eval-nerds-pill");
      else if (gapY < 10 && a.x + a.w > b.x && a.x < b.x + b.w) {
        problems.push(`trailhead-tight-on-pill gapY=${gapY.toFixed(1)}`);
      }
    }

    // no fake river SVG overlay
    if (svg.querySelector(".walk-river, [data-river]")) {
      problems.push("river-bar-present");
    }
    const thickBlue = [...svg.querySelectorAll("path")].some((p) => {
      const stroke = (p.getAttribute("stroke") || "").toLowerCase();
      const sw = Number(p.getAttribute("stroke-width") || 0);
      return sw >= 6 && (stroke.includes("9eb") || stroke.includes("b7c") || stroke.includes("blue"));
    });
    if (thickBlue) problems.push("thick-blue-path-present");

    const leftMin = Math.min(...labels.map((l) => l.x));
    return { problems, count: labels.length, leftMin };
  }, EDGE);

  if (report.error) {
    console.error(`width ${width}: ${report.error}`);
    failed = true;
  } else if (report.problems.length) {
    console.error(`width ${width}: FAIL ${report.problems.length}`);
    for (const p of report.problems) console.error(" -", p);
    failed = true;
  } else {
    console.log(
      `width ${width}: OK (${report.count} labels, leftMin=${report.leftMin.toFixed(1)}, edge ${EDGE})`,
    );
  }
  await ctx.close();
}

await browser.close();
if (failed) process.exit(1);
console.log("OK: mobile labels clear at 360/390/430");
