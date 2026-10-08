/** Handcrafted desktop transit geometry. Angles are 0 / 45 / 90 only. */

export type LabelSide = "above" | "below";

export type StationPos = {
  x: number;
  y: number;
  /** label side relative to the track */
  side: LabelSide;
  /** text rotation in degrees (usually -40) */
  angle: number;
  anchor?: "start" | "middle" | "end";
};

/** Unique station positions (interchanges share one point). */
export const stationPositions: Record<string, StationPos> = {
  // eval ∩ shipping
  "jason-liu": { x: 230, y: 210, side: "above", angle: -40, anchor: "start" },
  "nirant-kasliwal": { x: 400, y: 170, side: "above", angle: -40, anchor: "start" },
  "minh-nhat-nguyen": { x: 570, y: 170, side: "below", angle: -40, anchor: "start" },
  // eval ∩ research
  "andrew-ng": { x: 740, y: 170, side: "above", angle: -40, anchor: "start" },
  "prathosh-ap": { x: 900, y: 260, side: "below", angle: -40, anchor: "start" },

  // research
  "ankit-jxa": { x: 900, y: 110, side: "above", angle: -40, anchor: "start" },
  "chris-barber": { x: 1060, y: 110, side: "below", angle: -40, anchor: "start" },
  "sanyam-jain": { x: 1220, y: 110, side: "above", angle: -40, anchor: "start" },
  suhail: { x: 1380, y: 170, side: "above", angle: -40, anchor: "start" },
  nick: { x: 1460, y: 300, side: "below", angle: -40, anchor: "start" },

  // shipping
  teknium: { x: 70, y: 330, side: "above", angle: -40, anchor: "start" },
  pili: { x: 130, y: 250, side: "below", angle: -40, anchor: "start" },
  phil: { x: 350, y: 310, side: "above", angle: -40, anchor: "start" },
  // shipping ∩ indie
  sphinx: { x: 490, y: 400, side: "above", angle: -40, anchor: "start" },
  "simon-tokumin": { x: 650, y: 400, side: "below", angle: -40, anchor: "start" },
  ghuubear: { x: 800, y: 450, side: "above", angle: -40, anchor: "start" },

  // coding
  theo: { x: 100, y: 530, side: "above", angle: -40, anchor: "start" },
  dax: { x: 260, y: 530, side: "below", angle: -40, anchor: "start" },
  "charlie-holtz": { x: 430, y: 530, side: "above", angle: -40, anchor: "start" },
  "thorsten-ball": { x: 600, y: 530, side: "below", angle: -40, anchor: "start" },
  // coding ∩ systems
  "sunil-pai": { x: 800, y: 530, side: "above", angle: -40, anchor: "start" },
  "emanuele-di-pietro": { x: 980, y: 620, side: "below", angle: -40, anchor: "start" },

  // systems
  "arpit-bhayani": { x: 380, y: 700, side: "below", angle: -40, anchor: "start" },
  "daniel-lockyer": { x: 560, y: 700, side: "above", angle: -40, anchor: "start" },
  "devanshu-sharma": { x: 980, y: 700, side: "below", angle: -40, anchor: "start" },
  "can-duruk": { x: 1120, y: 700, side: "above", angle: -40, anchor: "start" },
  // systems ∩ build
  shrinath: { x: 1240, y: 700, side: "below", angle: -40, anchor: "start" },
  "karan-shingde": { x: 1360, y: 760, side: "above", angle: -40, anchor: "start" },
  akshay: { x: 1480, y: 820, side: "below", angle: -40, anchor: "start" },

  // gpu
  tokenbender: { x: 140, y: 630, side: "above", angle: -40, anchor: "start" },
  "elie-bakouch": { x: 300, y: 670, side: "below", angle: -40, anchor: "start" },
  "archie-sengupta": { x: 470, y: 670, side: "above", angle: -40, anchor: "start" },
  maharshi: { x: 640, y: 670, side: "below", angle: -40, anchor: "start" },
  vixhal: { x: 800, y: 720, side: "above", angle: -40, anchor: "start" },
  // gpu ∩ build
  "sanskar-pandey": { x: 1000, y: 800, side: "below", angle: -40, anchor: "start" },

  // indie (winds up through sphinx then east)
  "pranav-hari": { x: 40, y: 780, side: "below", angle: -40, anchor: "start" },
  "tanmay-sonawane": { x: 40, y: 900, side: "below", angle: -40, anchor: "start" },
  kyzo: { x: 180, y: 960, side: "below", angle: -40, anchor: "start" },
  "virgile-rietsch": { x: 360, y: 960, side: "above", angle: -40, anchor: "start" },
  mageframe: { x: 520, y: 900, side: "below", angle: -40, anchor: "start" },
  jitesh: { x: 520, y: 640, side: "above", angle: -40, anchor: "end" },
  levelsio: { x: 680, y: 560, side: "below", angle: -40, anchor: "start" },
  guru: { x: 860, y: 620, side: "above", angle: -40, anchor: "start" },
  "jamon-holmgren": { x: 1020, y: 680, side: "below", angle: -40, anchor: "start" },
  dhh: { x: 1180, y: 760, side: "above", angle: -40, anchor: "start" },

  // personal
  judah: { x: 920, y: 200, side: "below", angle: -40, anchor: "start" },
  ankit: { x: 980, y: 140, side: "above", angle: -40, anchor: "start" },
  // design ∩ personal
  "andrew-alimbuyuguen": {
    x: 1060,
    y: 70,
    side: "above",
    angle: -40,
    anchor: "start",
  },
  srijan: { x: 1140, y: 200, side: "below", angle: -40, anchor: "start" },
  // essays ∩ personal
  "henrik-karlsson": { x: 1220, y: 340, side: "above", angle: -40, anchor: "start" },
  siddharth: { x: 1360, y: 400, side: "below", angle: -40, anchor: "start" },
  sarv: { x: 1480, y: 480, side: "above", angle: -40, anchor: "start" },

  // design
  felipe: { x: 1200, y: 50, side: "above", angle: -40, anchor: "start" },
  "lenard-floeren": { x: 1340, y: 90, side: "below", angle: -40, anchor: "start" },
  "ma-baytas": { x: 1480, y: 170, side: "above", angle: -40, anchor: "start" },
  // essays ∩ design
  "simon-sarris": { x: 1100, y: 560, side: "above", angle: -40, anchor: "start" },

  // essays
  "paras-chopra": { x: 1180, y: 440, side: "below", angle: -40, anchor: "start" },
  "zara-zhang": { x: 1140, y: 500, side: "above", angle: -40, anchor: "end" },
  "chris-lakin": { x: 1020, y: 660, side: "below", angle: -40, anchor: "start" },
  christian: { x: 920, y: 780, side: "above", angle: -40, anchor: "start" },
};

export const MAP_VIEW = { w: 1580, h: 1040, pad: 48 } as const;

type Pt = { x: number; y: number };

/** Build a 0/45/90° polyline between two points. */
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
  const pts: Pt[] = [];
  for (let i = 0; i < ids.length; i++) {
    const p = stationPositions[ids[i]];
    if (!p) throw new Error(`missing layout for ${ids[i]}`);
    if (i === 0) {
      pts.push({ x: p.x, y: p.y });
    } else {
      const prev = pts[pts.length - 1];
      const seg = metroSegment(prev, { x: p.x, y: p.y });
      pts.push(...seg.slice(1));
    }
  }
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

/** Terminus pill sits past the first station, opposite the second. */
export function terminusAnchor(
  firstId: string,
  secondId: string | undefined,
): { x: number; y: number; anchor: "start" | "end" } {
  const a = stationPositions[firstId];
  const b = secondId ? stationPositions[secondId] : null;
  if (!a) throw new Error(`missing layout for ${firstId}`);
  if (!b) return { x: a.x - 12, y: a.y, anchor: "end" };
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x: a.x - ux * 28,
    y: a.y - uy * 28,
    anchor: ux >= 0 ? "end" : "start",
  };
}
