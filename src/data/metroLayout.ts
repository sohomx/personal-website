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
  charW: 7.1,
  dyAbove: -18,
  dyBelow: 20,
  pad: 2,
} as const;

/**
 * Spacious layout: left margin for terminus pills, tall lower band,
 * problem clusters pulled apart (lower-middle, archie/daniel, ankit/judah).
 */
export const stationPositions: Record<string, StationPos> = {
  // --- eval (upper mid) ∩ shipping at jason, ∩ research at andrew ---
  "jason-liu": { x: 360, y: 260, side: "below", angle: -45, anchor: "start" },
  "nirant-kasliwal": { x: 560, y: 200, side: "above", angle: -45, anchor: "start" },
  "minh-nhat-nguyen": { x: 780, y: 200, side: "below", angle: -45, anchor: "start" },
  "andrew-ng": { x: 1000, y: 200, side: "above", angle: -45, anchor: "start" },
  "prathosh-ap": { x: 1100, y: 380, side: "below", angle: -45, anchor: "start" },

  // --- research (top, clear of personal/design) ---
  "ankit-jxa": { x: 1160, y: 90, side: "above", angle: -45, anchor: "start" },
  "chris-barber": { x: 1360, y: 90, side: "below", angle: -45, anchor: "start" },
  "sanyam-jain": { x: 1540, y: 90, side: "above", angle: -45, anchor: "start" },
  suhail: { x: 1680, y: 140, side: "above", angle: -45, anchor: "start" },
  nick: { x: 1860, y: 300, side: "below", angle: -45, anchor: "end" },

  // --- shipping ---
  teknium: { x: 250, y: 400, side: "below", angle: -45, anchor: "start" },
  pili: { x: 320, y: 320, side: "below", angle: -45, anchor: "start" },
  phil: { x: 520, y: 390, side: "above", angle: -45, anchor: "start" },
  sphinx: { x: 720, y: 520, side: "above", angle: -45, anchor: "start" },
  "simon-tokumin": { x: 940, y: 520, side: "below", angle: -45, anchor: "start" },
  ghuubear: { x: 1100, y: 540, side: "above", angle: -45, anchor: "start" },

  // --- coding ---
  theo: { x: 250, y: 700, side: "below", angle: -45, anchor: "start" },
  dax: { x: 460, y: 700, side: "above", angle: -45, anchor: "start" },
  "charlie-holtz": { x: 680, y: 700, side: "above", angle: -45, anchor: "start" },
  "thorsten-ball": { x: 660, y: 560, side: "above", angle: -45, anchor: "end" },
  "sunil-pai": { x: 1060, y: 640, side: "below", angle: -45, anchor: "start" },
  "emanuele-di-pietro": {
    x: 1320,
    y: 760,
    side: "below",
    angle: -45,
    anchor: "start",
  },

  // --- gpu (mid-low, west; clear of systems) ---
  tokenbender: { x: 250, y: 840, side: "below", angle: -45, anchor: "start" },
  "elie-bakouch": { x: 440, y: 940, side: "above", angle: -45, anchor: "start" },
  "archie-sengupta": { x: 580, y: 980, side: "below", angle: -45, anchor: "start" },
  maharshi: { x: 820, y: 1020, side: "below", angle: -45, anchor: "end" },
  vixhal: { x: 1060, y: 1080, side: "below", angle: -45, anchor: "start" },
  "sanskar-pandey": { x: 1280, y: 1320, side: "below", angle: -45, anchor: "start" },

  // --- systems (lower band, east of gpu) ---
  "arpit-bhayani": { x: 500, y: 1180, side: "below", angle: -45, anchor: "start" },
  "daniel-lockyer": { x: 780, y: 1180, side: "above", angle: -45, anchor: "start" },
  "devanshu-sharma": {
    x: 1340,
    y: 1120,
    side: "above",
    angle: -45,
    anchor: "start",
  },
  "can-duruk": { x: 1620, y: 1080, side: "above", angle: -45, anchor: "end" },
  shrinath: { x: 1860, y: 1220, side: "below", angle: -45, anchor: "start" },
  "karan-shingde": { x: 1960, y: 1340, side: "above", angle: -45, anchor: "start" },
  akshay: { x: 1960, y: 1480, side: "below", angle: -45, anchor: "start" },

  // --- indie (tall SW loop → sphinx → SE) ---
  "pranav-hari": { x: 240, y: 1240, side: "below", angle: -45, anchor: "start" },
  "tanmay-sonawane": { x: 240, y: 1400, side: "below", angle: -45, anchor: "start" },
  kyzo: { x: 460, y: 1500, side: "below", angle: -45, anchor: "start" },
  "virgile-rietsch": { x: 720, y: 1500, side: "above", angle: -45, anchor: "start" },
  mageframe: { x: 1000, y: 1400, side: "below", angle: -45, anchor: "start" },
  jitesh: { x: 700, y: 1100, side: "above", angle: -45, anchor: "start" },
  levelsio: { x: 1180, y: 900, side: "above", angle: -45, anchor: "start" },
  guru: { x: 1280, y: 1100, side: "above", angle: -45, anchor: "start" },
  "jamon-holmgren": { x: 1520, y: 1280, side: "below", angle: -45, anchor: "start" },
  dhh: { x: 1740, y: 1400, side: "above", angle: -45, anchor: "start" },

  // --- personal (right column, south of research) ---
  judah: { x: 1260, y: 440, side: "below", angle: -45, anchor: "start" },
  ankit: { x: 1400, y: 320, side: "above", angle: -45, anchor: "start" },
  "andrew-alimbuyuguen": {
    x: 1540,
    y: 240,
    side: "below",
    angle: -45,
    anchor: "end",
  },
  srijan: { x: 1660, y: 380, side: "below", angle: -45, anchor: "start" },
  "henrik-karlsson": { x: 1760, y: 520, side: "below", angle: -45, anchor: "start" },
  siddharth: { x: 1880, y: 660, side: "below", angle: -45, anchor: "end" },
  sarv: { x: 1940, y: 800, side: "above", angle: -45, anchor: "start" },

  // --- design (far top-right → simon) ---
  felipe: { x: 1780, y: 60, side: "above", angle: -45, anchor: "start" },
  "lenard-floeren": { x: 1900, y: 130, side: "below", angle: -45, anchor: "start" },
  "ma-baytas": { x: 1960, y: 260, side: "above", angle: -45, anchor: "start" },
  "simon-sarris": { x: 1700, y: 860, side: "above", angle: -45, anchor: "start" },

  // --- essays (east spine) ---
  "paras-chopra": { x: 1740, y: 640, side: "below", angle: -45, anchor: "start" },
  "zara-zhang": { x: 1580, y: 700, side: "above", angle: -45, anchor: "end" },
  "chris-lakin": { x: 1320, y: 980, side: "above", angle: -45, anchor: "start" },
  christian: { x: 1080, y: 1240, side: "below", angle: -45, anchor: "start" },
};

export const MAP_VIEW = { w: 2080, h: 1620, padX: 12, padY: 14 } as const;

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
    else pts.push(...metroSegment(pts[pts.length - 1], { x: p.x, y: p.y }).slice(1));
  }
  return pts;
}

/**
 * Terminus pill: prefer above the first station (metro signage style),
 * clamped inside the viewBox so left-edge lines never clip.
 */
export function terminusPill(
  firstId: string,
  secondId: string | undefined,
  label: string,
): { x: number; y: number; w: number; h: number } {
  const a = stationPositions[firstId];
  if (!a) throw new Error(`missing layout for ${firstId}`);
  const w = Math.max(56, label.length * 6.4 + 22);
  const h = 18;

  // Default: centred above the first station
  let x = a.x - w / 2;
  let y = a.y - 28 - h;

  // If the line leaves upward, put the pill below instead
  if (secondId) {
    const b = stationPositions[secondId];
    if (b && b.y < a.y - 20) {
      y = a.y + 28;
    }
  }

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
  const textH = LABEL.fontSize * 1.1;
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

/** Sample points along the label's text baseline in map space. */
export function labelBaselineSamples(id: string, name: string): Pt[] {
  const pos = stationPositions[id];
  if (!pos) throw new Error(`missing layout for ${id}`);
  const dy = pos.side === "above" ? LABEL.dyAbove : LABEL.dyBelow;
  const textW = Math.max(24, name.length * LABEL.charW);
  let localX = 0;
  if (pos.anchor === "middle") localX = -textW / 2;
  else if (pos.anchor === "end") localX = -textW;
  const samples: Pt[] = [];
  const n = Math.max(4, Math.ceil(textW / 10));
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
  const r = 9;
  return { id: `dot:${id}`, x: p.x - r, y: p.y - r, w: r * 2, h: r * 2 };
}
