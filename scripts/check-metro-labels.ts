/**
 * Programmatic overlap check for /internet metro station labels.
 * Run: npx tsx scripts/check-metro-labels.ts
 */
import {
  LABEL,
  MAP_VIEW,
  labelBaselineSamples,
  labelBounds,
  rectsOverlap,
  samplesNearTrack,
  stationDotRect,
  stationPositions,
  terminusPill,
  trackPoints,
  type Rect,
} from "../src/data/metroLayout";
import { metroLineDefs, metroLines } from "../src/data/internet";

const names = new Map<string, string>();
for (const line of metroLines) {
  for (const p of line.people) names.set(p.id, p.name);
}

const membership = new Map<string, string[]>();
for (const line of metroLineDefs) {
  for (const id of line.stationIds) {
    const prev = membership.get(id) ?? [];
    prev.push(line.id);
    membership.set(id, prev);
  }
}

const labels: Rect[] = [...names.entries()].map(([id, name]) =>
  labelBounds(id, name),
);
const dots: Rect[] = Object.keys(stationPositions).map((id) =>
  stationDotRect(id),
);
const trackByLine = new Map(
  metroLines.map((line) => [
    line.id,
    trackPoints(line.people.map((p) => p.id)),
  ]),
);
const pills: Rect[] = metroLines.map((line) => {
  const ids = line.people.map((p) => p.id);
  const pill = terminusPill(ids[0], ids[1], line.name);
  return { id: `pill:${line.id}`, x: pill.x, y: pill.y, w: pill.w, h: pill.h };
});

const problems: string[] = [];

for (let i = 0; i < labels.length; i++) {
  for (let j = i + 1; j < labels.length; j++) {
    if (rectsOverlap(labels[i], labels[j])) {
      problems.push(`label∩label ${labels[i].id} ↔ ${labels[j].id}`);
    }
  }
}

for (const lab of labels) {
  for (const dot of dots) {
    if (dot.id === `dot:${lab.id}`) continue;
    if (rectsOverlap(lab, dot)) {
      problems.push(`label∩dot ${lab.id} ↔ ${dot.id}`);
    }
  }
}

// Foreign tracks only. Near own station / shared interchanges, lines
// legitimately cross, so ignore segments whose endpoints are close.
const trackClear = 5.5;
const nearR = 70;
for (const lab of labels) {
  const own = stationPositions[lab.id];
  const ownLines = new Set(membership.get(lab.id) ?? []);
  // stations that share a line with this person (incl. self)
  const related = new Set<string>();
  for (const line of metroLineDefs) {
    if (!ownLines.has(line.id)) continue;
    for (const id of line.stationIds) related.add(id);
  }
  const foreign = [...trackByLine.entries()]
    .filter(([lineId]) => !ownLines.has(lineId))
    .map(([, pts]) => {
      // drop segments near related stations
      const kept: typeof pts = [];
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const nearRelated = [...related].some((id) => {
          const s = stationPositions[id];
          return Math.hypot(p.x - s.x, p.y - s.y) < nearR;
        });
        if (!nearRelated) kept.push(p);
        else if (kept.length && kept[kept.length - 1]) {
          // break polyline
          kept.push({ x: NaN, y: NaN });
        }
      }
      // split on NaN markers
      const polys: (typeof pts)[] = [];
      let cur: typeof pts = [];
      for (const p of kept) {
        if (Number.isNaN(p.x)) {
          if (cur.length > 1) polys.push(cur);
          cur = [];
        } else cur.push(p);
      }
      if (cur.length > 1) polys.push(cur);
      return polys;
    })
    .flat();
  const samples = labelBaselineSamples(lab.id, names.get(lab.id)!);
  // also require not near own station
  const farSamples = samples.filter(
    (s) => Math.hypot(s.x - own.x, s.y - own.y) > 22,
  );
  if (samplesNearTrack(farSamples, foreign, trackClear)) {
    problems.push(`label∩track ${lab.id}`);
  }
}

// Pills vs labels: allow the terminus station of that line
const lineFirst = new Map(
  metroLines.map((line) => [line.id, line.people[0]?.id]),
);
for (const lab of labels) {
  for (const pill of pills) {
    const lineId = pill.id.replace("pill:", "");
    if (lineFirst.get(lineId) === lab.id) continue;
    if (rectsOverlap(lab, pill)) {
      problems.push(`label∩pill ${lab.id} ↔ ${pill.id}`);
    }
  }
}

for (const pill of pills) {
  if (
    pill.x < -0.5 ||
    pill.y < -0.5 ||
    pill.x + pill.w > MAP_VIEW.w + 0.5 ||
    pill.y + pill.h > MAP_VIEW.h + 0.5
  ) {
    problems.push(`pill clipped ${pill.id}`);
  }
}

for (const lab of labels) {
  if (
    lab.x < -12 ||
    lab.y < -12 ||
    lab.x + lab.w > MAP_VIEW.w + 12 ||
    lab.y + lab.h > MAP_VIEW.h + 12
  ) {
    problems.push(`label clipped ${lab.id}`);
  }
}

console.log(
  `checked ${labels.length} labels, font ${LABEL.fontSize}, view ${MAP_VIEW.w}x${MAP_VIEW.h}`,
);
if (problems.length) {
  console.error(`FAIL ${problems.length} overlaps:`);
  for (const p of problems) console.error(" -", p);
  process.exit(1);
}
console.log("OK: no label overlaps detected");
