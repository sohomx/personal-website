/**
 * Rendered bbox overlap check for the walk map (Playwright getBBox).
 * Requires a built site served locally: npx serve out -l 3456
 */
import { chromium } from "playwright";

const BASE = process.env.CHECK_BASE || "http://127.0.0.1:3456";

function overlap(a, b, pad = 1) {
  return !(
    a.x + a.w + pad <= b.x ||
    b.x + b.w + pad <= a.x ||
    a.y + a.h + pad <= b.y ||
    b.y + b.h + pad <= a.y
  );
}

const browser = await chromium.launch({
  args: ["--force-device-scale-factor=1"],
});
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.addInitScript(() => {
  localStorage.setItem("internet-map-mode", "walk");
});
await page.goto(`${BASE}/internet/`, { waitUntil: "networkidle" });
await page.waitForSelector(".walk-svg", { timeout: 10000 });
await page.waitForTimeout(400);

const report = await page.evaluate(() => {
  const svg = document.querySelector(".walk-svg");
  if (!svg) return { error: "no svg" };
  const labels = [...svg.querySelectorAll("[data-station-label]")].map((el) => {
    const b = el.getBBox();
    return {
      id: el.getAttribute("data-station-label"),
      x: b.x,
      y: b.y,
      w: b.width,
      h: b.height,
    };
  });
  const pills = [...svg.querySelectorAll(".walk-pill rect")].map((el, i) => {
    const b = el.getBBox();
    const text = el.parentElement?.querySelector("text")?.textContent ?? String(i);
    return { id: `pill:${text}`, x: b.x, y: b.y, w: b.width, h: b.height };
  });
  const dots = [...svg.querySelectorAll(".walk-dot")].map((el) => {
    const g = el.closest("[data-station]") || el.closest("a");
    const id = g?.getAttribute("data-station") ?? "dot";
    const b = el.getBBox();
    // getBBox is local to the circle's transform parent
    const ctm = el.getCTM();
    const pt = svg.createSVGPoint();
    pt.x = b.x + b.width / 2;
    pt.y = b.y + b.height / 2;
    const p = pt.matrixTransform(ctm);
    return {
      id: `dot:${id}`,
      x: p.x - b.width / 2,
      y: p.y - b.height / 2,
      w: b.width,
      h: b.height,
    };
  });

  // transform label bboxes into svg root space
  const labelRoot = [...svg.querySelectorAll("[data-station-label]")].map((el) => {
    const b = el.getBBox();
    const ctm = el.getCTM();
    const pts = [
      [b.x, b.y],
      [b.x + b.width, b.y],
      [b.x, b.y + b.height],
      [b.x + b.width, b.y + b.height],
    ].map(([x, y]) => {
      const pt = svg.createSVGPoint();
      pt.x = x;
      pt.y = y;
      return pt.matrixTransform(ctm);
    });
    const xs = pts.map((p) => p.x);
    const ys = pts.map((p) => p.y);
    return {
      id: el.getAttribute("data-station-label"),
      x: Math.min(...xs),
      y: Math.min(...ys),
      w: Math.max(...xs) - Math.min(...xs),
      h: Math.max(...ys) - Math.min(...ys),
    };
  });

  const problems = [];
  for (let i = 0; i < labelRoot.length; i++) {
    for (let j = i + 1; j < labelRoot.length; j++) {
      const a = labelRoot[i];
      const b = labelRoot[j];
      if (
        !(
          a.x + a.w + 1 <= b.x ||
          b.x + b.w + 1 <= a.x ||
          a.y + a.h + 1 <= b.y ||
          b.y + b.h + 1 <= a.y
        )
      ) {
        problems.push(`label∩label ${a.id} ↔ ${b.id}`);
      }
    }
  }
  for (const lab of labelRoot) {
    for (const pill of pills) {
      if (
        !(
          lab.x + lab.w + 1 <= pill.x ||
          pill.x + pill.w + 1 <= lab.x ||
          lab.y + lab.h + 1 <= pill.y ||
          pill.y + pill.h + 1 <= lab.y
        )
      ) {
        problems.push(`label∩pill ${lab.id} ↔ ${pill.id}`);
      }
    }
    for (const dot of dots) {
      if (dot.id === `dot:${lab.id}`) continue;
      if (
        !(
          lab.x + lab.w + 0.5 <= dot.x ||
          dot.x + dot.w + 0.5 <= lab.x ||
          lab.y + lab.h + 0.5 <= dot.y ||
          dot.y + dot.h + 0.5 <= lab.y
        )
      ) {
        problems.push(`label∩dot ${lab.id} ↔ ${dot.id}`);
      }
    }
  }
  return { count: labelRoot.length, problems, labels: labelRoot };
});

await browser.close();

if (report.error) {
  console.error(report.error);
  process.exit(1);
}
console.log(`checked ${report.count} rendered walk labels`);
if (report.problems.length) {
  console.error(`FAIL ${report.problems.length}:`);
  for (const p of report.problems) console.error(" -", p);
  process.exit(1);
}
console.log("OK: no rendered walk label overlaps");
