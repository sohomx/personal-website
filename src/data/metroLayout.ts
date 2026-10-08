/** Handcrafted desktop transit geometry. Angles are 0 / 45 / 90 only. */

export type LabelSide = "above" | "below";

export type StationPos = {
  x: number;
  y: number;
  side: LabelSide;
  angle: number;
  anchor?: "start" | "middle" | "end";
};

export const LABEL = {
  fontSize: 12.5,
  charW: 7.4,
  dyAbove: -20,
  dyBelow: 22,
  pad: 3,
} as const;

/**
 * Layout with generous left inset for terminus pills.
 * Content starts ~x=320 so long pills never hug the crop edge.
 */
export const stationPositions: Record<string, StationPos> = {
  // --- eval ∩ shipping at jason, ∩ research at andrew ---
  "jason-liu": { x: 480, y: 280, side: "below", angle: -45, anchor: "start" },
  "nirant-kasliwal": { x: 700, y: 210, side: "above", angle: -45, anchor: "start" },
  "minh-nhat-nguyen": { x: 920, y: 210, side: "below", angle: -45, anchor: "start" },
  "andrew-ng": { x: 1140, y: 210, side: "above", angle: -45, anchor: "start" },
  "prathosh-ap": { x: 1280, y: 400, side: "below", angle: -45, anchor: "start" },

  // --- research (top) ---
  "ankit-jxa": { x: 1320, y: 100, side: "above", angle: -45, anchor: "start" },
  "chris-barber": { x: 1520, y: 100, side: "below", angle: -45, anchor: "start" },
  "sanyam-jain": { x: 1700, y: 100, side: "above", angle: -45, anchor: "start" },
  suhail: { x: 1860, y: 170, side: "above", angle: -45, anchor: "start" },
  nick: { x: 2000, y: 320, side: "below", angle: -45, anchor: "end" },

  // --- shipping ---
  teknium: { x: 360, y: 420, side: "below", angle: -45, anchor: "start" },
  pili: { x: 420, y: 340, side: "below", angle: -45, anchor: "start" },
  phil: { x: 640, y: 410, side: "above", angle: -45, anchor: "start" },
  sphinx: { x: 860, y: 540, side: "above", angle: -45, anchor: "start" },
  "simon-tokumin": { x: 1080, y: 540, side: "below", angle: -45, anchor: "start" },
  ghuubear: { x: 1260, y: 580, side: "above", angle: -45, anchor: "start" },

  // --- coding ---
  theo: { x: 360, y: 720, side: "below", angle: -45, anchor: "start" },
  dax: { x: 580, y: 720, side: "above", angle: -45, anchor: "start" },
  "charlie-holtz": { x: 820, y: 720, side: "above", angle: -45, anchor: "start" },
  "thorsten-ball": { x: 780, y: 580, side: "above", angle: -45, anchor: "end" },
  "sunil-pai": { x: 1180, y: 680, side: "below", angle: -45, anchor: "start" },
  "emanuele-di-pietro": {
    x: 1460,
    y: 800,
    side: "below",
    angle: -45,
    anchor: "start",
  },

  // --- gpu ---
  tokenbender: { x: 360, y: 880, side: "below", angle: -45, anchor: "start" },
  "elie-bakouch": { x: 560, y: 980, side: "above", angle: -45, anchor: "start" },
  "archie-sengupta": { x: 740, y: 1040, side: "below", angle: -45, anchor: "end" },
  maharshi: { x: 1000, y: 1080, side: "above", angle: -45, anchor: "start" },
  vixhal: { x: 1220, y: 1160, side: "below", angle: -45, anchor: "start" },
  "sanskar-pandey": { x: 1440, y: 1420, side: "below", angle: -45, anchor: "start" },

  // --- systems (flat lower band, then SE spur) ---
  "arpit-bhayani": { x: 620, y: 1240, side: "below", angle: -45, anchor: "start" },
  "daniel-lockyer": { x: 900, y: 1240, side: "above", angle: -45, anchor: "start" },
  "devanshu-sharma": {
    x: 1480,
    y: 1180,
    side: "above",
    angle: -45,
    anchor: "start",
  },
  "can-duruk": { x: 1760, y: 1140, side: "above", angle: -45, anchor: "end" },
  shrinath: { x: 1960, y: 1280, side: "below", angle: -45, anchor: "start" },
  "karan-shingde": { x: 2080, y: 1420, side: "above", angle: -45, anchor: "start" },
  akshay: { x: 2080, y: 1560, side: "below", angle: -45, anchor: "start" },

  // --- indie (SW loop → sphinx → SE, clear of jamon/orange crossings) ---
  "pranav-hari": { x: 340, y: 1320, side: "below", angle: -45, anchor: "start" },
  "tanmay-sonawane": { x: 340, y: 1480, side: "below", angle: -45, anchor: "start" },
  kyzo: { x: 560, y: 1580, side: "below", angle: -45, anchor: "start" },
  "virgile-rietsch": { x: 840, y: 1580, side: "above", angle: -45, anchor: "start" },
  mageframe: { x: 1120, y: 1480, side: "below", angle: -45, anchor: "start" },
  jitesh: { x: 800, y: 1200, side: "above", angle: -45, anchor: "start" },
  levelsio: { x: 1320, y: 960, side: "above", angle: -45, anchor: "start" },
  guru: { x: 1460, y: 1240, side: "above", angle: -45, anchor: "start" },
  "jamon-holmgren": { x: 1680, y: 1380, side: "above", angle: -45, anchor: "start" },
  dhh: { x: 1900, y: 1540, side: "above", angle: -45, anchor: "start" },

  // --- personal (clear of design pill / andrew-a / ankit) ---
  judah: { x: 1380, y: 480, side: "below", angle: -45, anchor: "start" },
  ankit: { x: 1540, y: 360, side: "above", angle: -45, anchor: "start" },
  "andrew-alimbuyuguen": {
    x: 1680,
    y: 260,
    side: "below",
    angle: -45,
    anchor: "end",
  },
  srijan: { x: 1800, y: 400, side: "below", angle: -45, anchor: "start" },
  "henrik-karlsson": { x: 1900, y: 560, side: "below", angle: -45, anchor: "start" },
  siddharth: { x: 2020, y: 700, side: "below", angle: -45, anchor: "end" },
  sarv: { x: 2080, y: 860, side: "above", angle: -45, anchor: "start" },

  // --- design (start east of andrew-a so pill does not sit on his name) ---
  felipe: { x: 1900, y: 70, side: "above", angle: -45, anchor: "start" },
  "lenard-floeren": { x: 2040, y: 140, side: "below", angle: -45, anchor: "start" },
  "ma-baytas": { x: 2120, y: 280, side: "above", angle: -45, anchor: "start" },
  "simon-sarris": { x: 1820, y: 900, side: "above", angle: -45, anchor: "start" },

  // --- essays ---
  "paras-chopra": { x: 1880, y: 680, side: "below", angle: -45, anchor: "start" },
  "zara-zhang": { x: 1700, y: 760, side: "above", angle: -45, anchor: "end" },
  "chris-lakin": { x: 1460, y: 1020, side: "above", angle: -45, anchor: "start" },
  christian: { x: 1200, y: 1300, side: "below", angle: -45, anchor: "start" },
};

/** Wide canvas; padX keeps terminus pills off the crop edge. */
export const MAP_VIEW = { w: 2240, h: 1700, padX: 56, padY: 24 } as const;

type Pt = { x: number; y: number };

export function metroSegment(a: Pt, b: Pt): Pt[] {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (dx === 0 || dy === 0 || Math.abs(Math.abs(dx) - Math.abs(dy)) < 0.5) {
    return [a, b];
  }
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  if (adx > ady) {
    return [a, { x: b.x - sx * ady, y: a.y }, b];
  }
  return [a, { x: a.x, y: b.y - sy * adx }, b];
}

export function pathThrough(ids: string[]): string {
  return trackPoints(ids)
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

export function trackPoints(ids: string[]): Pt[] {
  const pts: Pt[] = [];
  for (let i = 0; i < ids.length; i++) {
    const p = stationPositions[ids[i]];
    if (!p) throw new Error(`missing layout for ${ids[i]}`);
    if (i === 0) pts.push({ x: p.x, y: p.y });
    else
      pts.push(
        ...metroSegment(pts[pts.length - 1], { x: p.x, y: p.y }).slice(1),
      );
  }
  return pts;
}

/**
 * Terminus pill sits above the first station, nudged toward the second
 * station (interior of the map) so left-edge lines never clip.
 */
export function terminusPill(
  firstId: string,
  secondId: string | undefined,
  label: string,
): { x: number; y: number; w: number; h: number } {
  const a = stationPositions[firstId];
  if (!a) throw new Error(`missing layout for ${firstId}`);
  const w = Math.max(56, label.length * 6.5 + 24);
  const h = 18;

  let cx = a.x;
  let cy = a.y - 40;
  if (secondId) {
    const b = stationPositions[secondId];
    if (b) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      // nudge toward travel direction so long pills stay inside
      cx = a.x + (dx / len) * Math.min(48, w * 0.35);
      if (b.y < a.y - 20) {
        cy = a.y + 36;
      }
    }
  }

  let x = cx - w / 2;
  let y = cy - h / 2;
  x = Math.max(MAP_VIEW.padX, Math.min(x, MAP_VIEW.w - MAP_VIEW.padX - w));
  y = Math.max(MAP_VIEW.padY, Math.min(y, MAP_VIEW.h - MAP_VIEW.padY - h));
  return { x, y, w, h };
}

export function terminusAnchor(
  firstId: string,
  secondId: string | undefined,
): { x: number; y: number; anchor: "start" | "end" } {
  const pill = terminusPill(firstId, secondId, "x");
  return { x: pill.x, y: pill.y + pill.h / 2, anchor: "start" };
}

export type Rect = { x: number; y: number; w: number; h: number; id: string };

function rotate(px: number, py: number, angleDeg: number): Pt {
  const r = (angleDeg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return { x: px * c - py * s, y: px * s + py * c };
}

export function labelBounds(id: string, name: string): Rect {
  const pos = stationPositions[id];
  if (!pos) throw new Error(`missing layout for ${id}`);
  const dy = pos.side === "above" ? LABEL.dyAbove : LABEL.dyBelow;
  const textW = Math.max(24, name.length * LABEL.charW);
  const textH = LABEL.fontSize * 1.2;
  let localX = 0;
  if (pos.anchor === "middle") localX = -textW / 2;
  else if (pos.anchor === "end") localX = -textW;
  const corners = [
    { x: localX, y: -textH / 2 },
    { x: localX + textW, y: -textH / 2 },
    { x: localX + textW, y: textH / 2 },
    { x: localX, y: textH / 2 },
  ].map((p) => {
    const r = rotate(p.x, p.y + dy, pos.angle);
    return { x: pos.x + r.x, y: pos.y + r.y };
  });
  const xs = corners.map((p) => p.x);
  const ys = corners.map((p) => p.y);
  return {
    id,
    x: Math.min(...xs) - LABEL.pad,
    y: Math.min(...ys) - LABEL.pad,
    w: Math.max(...xs) - Math.min(...xs) + LABEL.pad * 2,
    h: Math.max(...ys) - Math.min(...ys) + LABEL.pad * 2,
  };
}

export function rectsOverlap(a: Rect, b: Rect): boolean {
  return !(
    a.x + a.w <= b.x ||
    b.x + b.w <= a.x ||
    a.y + a.h <= b.y ||
    b.y + b.h <= a.y
  );
}

function distPointSeg(p: Pt, a: Pt, b: Pt): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len2 = dx * dx + dy * dy || 1;
  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}

export function labelBaselineSamples(id: string, name: string): Pt[] {
  const pos = stationPositions[id];
  if (!pos) throw new Error(`missing layout for ${id}`);
  const dy = pos.side === "above" ? LABEL.dyAbove : LABEL.dyBelow;
  const textW = Math.max(24, name.length * LABEL.charW);
  let localX = 0;
  if (pos.anchor === "middle") localX = -textW / 2;
  else if (pos.anchor === "end") localX = -textW;
  const samples: Pt[] = [];
  const n = Math.max(4, Math.ceil(textW / 8));
  for (let i = 0; i <= n; i++) {
    const lx = localX + (textW * i) / n;
    const r = rotate(lx, dy, pos.angle);
    samples.push({ x: pos.x + r.x, y: pos.y + r.y });
  }
  return samples;
}

export function samplesNearTrack(
  samples: Pt[],
  tracks: Pt[][],
  clear: number,
): boolean {
  for (const poly of tracks) {
    for (let i = 0; i < poly.length - 1; i++) {
      for (const s of samples) {
        if (distPointSeg(s, poly[i], poly[i + 1]) < clear) return true;
      }
    }
  }
  return false;
}

export function stationDotRect(id: string): Rect {
  const p = stationPositions[id];
  if (!p) throw new Error(`missing layout for ${id}`);
  const r = 10;
  return { id: `dot:${id}`, x: p.x - r, y: p.y - r, w: r * 2, h: r * 2 };
}
