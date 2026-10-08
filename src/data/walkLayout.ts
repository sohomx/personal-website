/**
 * Topographic walk overlay - hiking-map geometry over the 1280×720 basemap.
 * Soft organic trails, short trail-marker names, left inset so labels never clip.
 */

export const WALK_VIEW = { w: 1280, h: 720 } as const;

/** Portrait mobile column (~390 CSS px wide, tall scroll). */
export const WALK_MOBILE_VIEW = { w: 390, h: 2100 } as const;

export type WalkLabelSide = "left" | "right" | "above" | "below";

export type WalkWaypoint = {
  id: string;
  x: number;
  y: number;
  label: WalkLabelSide;
};

export type WalkTrailDef = {
  id: string;
  name: string;
  /** muted earth trail colour */
  color: string;
  /** SVG path in viewBox coords */
  d: string;
  /** group label in a clearing */
  pill: { x: number; y: number };
  waypointIds: string[];
};

/**
 * Short trail-marker text from real names/handles only - never invented nicknames.
 * Full name stays on the hover card. Disambiguate only with parts of the real name.
 */
export const walkTrailLabels: Record<string, string> = {
  "jason-liu": "jason liu",
  "nirant-kasliwal": "nirant",
  teknium: "teknium",
  "minh-nhat-nguyen": "minh",
  pili: "pili",
  sphinx: "sphinx",
  "prathosh-ap": "prathosh",
  ghuubear: "@ghuubear",
  phil: "phil",
  "simon-tokumin": "simon",
  "andrew-ng": "andrew ng",
  theo: "theo",
  dax: "dax",
  "charlie-holtz": "charlie",
  "thorsten-ball": "thorsten",
  "sunil-pai": "sunil",
  "emanuele-di-pietro": "emanuele",
  "pranav-hari": "pranav",
  "tanmay-sonawane": "tanmay",
  kyzo: "kyzo",
  "virgile-rietsch": "virgile",
  mageframe: "mageframe",
  jitesh: "jitesh",
  "jamon-holmgren": "jamon",
  dhh: "dhh",
  levelsio: "@levelsio",
  guru: "guru",
  tokenbender: "tokenbender",
  "elie-bakouch": "elie",
  "archie-sengupta": "archie",
  "ankit-jxa": "ankit jxa",
  "chris-barber": "chris barber",
  vixhal: "vixhal",
  "sanyam-jain": "sanyam",
  suhail: "suhail",
  nick: "nick",
  maharshi: "maharshi",
  "arpit-bhayani": "arpit",
  "daniel-lockyer": "daniel",
  "devanshu-sharma": "devanshu",
  "can-duruk": "can",
  "karan-shingde": "karan",
  akshay: "akshay",
  judah: "judah",
  ankit: "ankit",
  srijan: "srijan",
  siddharth: "siddharth",
  "andrew-alimbuyuguen": "alimbuyuguen",
  felipe: "felipe",
  "lenard-floeren": "lenard",
  "ma-baytas": "m.a. baytaş",
  sarv: "sarv",
  "henrik-karlsson": "henrik",
  "paras-chopra": "paras",
  "zara-zhang": "zara",
  "simon-sarris": "simon sarris",
  "chris-lakin": "chris lakin",
  christian: "christian",
  "sanskar-pandey": "sanskar",
  shrinath: "shrinath",
};

/** Soft organic hiking path (Catmull-Rom → cubic) with light contour wobble. */
function organicPath(ids: string[], pts: Record<string, WalkWaypoint>): string {
  const points = ids.map((id) => {
    const p = pts[id];
    if (!p) throw new Error(`missing walk waypoint ${id}`);
    return { x: p.x, y: p.y };
  });
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  if (points.length === 2) {
    const a = points[0];
    const b = points[1];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const ox = (-dy / len) * Math.min(28, len * 0.22);
    const oy = (dx / len) * Math.min(28, len * 0.22);
    return `M ${a.x} ${a.y} Q ${mx + ox} ${my + oy} ${b.x} ${b.y}`;
  }

  const extended = [points[0], ...points, points[points.length - 1]];
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < extended.length - 2; i++) {
    const p0 = extended[i - 1];
    const p1 = extended[i];
    const p2 = extended[i + 1];
    const p3 = extended[i + 2];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    // slight contour bias so segments don't read as transit diagonals
    const bias = ((i % 3) - 1) * 4;
    d += ` C ${(c1x + bias * 0.3).toFixed(1)} ${(c1y - bias * 0.5).toFixed(1)}, ${(c2x - bias * 0.2).toFixed(1)} ${(c2y + bias * 0.4).toFixed(1)}, ${p2.x} ${p2.y}`;
  }
  return d;
}

/**
 * Desktop waypoints - left margin keeps short markers inside 1024-1440 crops.
 * SW cluster fans into empty paper; trails snake, not stack.
 */
export const walkWaypoints: Record<string, WalkWaypoint> = {
  // eval ∩ shipping
  "jason-liu": { id: "jason-liu", x: 435, y: 250, label: "left" },
  "nirant-kasliwal": { id: "nirant-kasliwal", x: 375, y: 195, label: "below" },
  "minh-nhat-nguyen": { id: "minh-nhat-nguyen", x: 500, y: 148, label: "above" },
  // eval ∩ research
  "andrew-ng": { id: "andrew-ng", x: 625, y: 135, label: "above" },
  "prathosh-ap": { id: "prathosh-ap", x: 535, y: 300, label: "left" },

  // research
  "ankit-jxa": { id: "ankit-jxa", x: 745, y: 115, label: "right" },
  "chris-barber": { id: "chris-barber", x: 865, y: 100, label: "above" },
  "sanyam-jain": { id: "sanyam-jain", x: 965, y: 142, label: "below" },
  suhail: { id: "suhail", x: 1080, y: 178, label: "right" },
  nick: { id: "nick", x: 1145, y: 248, label: "right" },

  // shipping
  teknium: { id: "teknium", x: 255, y: 290, label: "below" },
  pili: { id: "pili", x: 315, y: 225, label: "right" },
  phil: { id: "phil", x: 360, y: 310, label: "left" },
  sphinx: { id: "sphinx", x: 425, y: 370, label: "left" },
  "simon-tokumin": { id: "simon-tokumin", x: 515, y: 350, label: "right" },
  ghuubear: { id: "ghuubear", x: 575, y: 410, label: "right" },

  // coding ridge
  theo: { id: "theo", x: 205, y: 365, label: "right" },
  dax: { id: "dax", x: 240, y: 405, label: "left" },
  "charlie-holtz": { id: "charlie-holtz", x: 295, y: 440, label: "left" },
  "thorsten-ball": { id: "thorsten-ball", x: 355, y: 470, label: "above" },
  "sunil-pai": { id: "sunil-pai", x: 460, y: 505, label: "above" },
  "emanuele-di-pietro": {
    id: "emanuele-di-pietro",
    x: 555,
    y: 555,
    label: "right",
  },

  // gpu valley
  tokenbender: { id: "tokenbender", x: 185, y: 500, label: "right" },
  "elie-bakouch": { id: "elie-bakouch", x: 250, y: 548, label: "right" },
  "archie-sengupta": { id: "archie-sengupta", x: 335, y: 585, label: "right" },
  maharshi: { id: "maharshi", x: 430, y: 608, label: "below" },
  vixhal: { id: "vixhal", x: 535, y: 628, label: "below" },
  "sanskar-pandey": { id: "sanskar-pandey", x: 745, y: 642, label: "below" },

  // systems
  "arpit-bhayani": { id: "arpit-bhayani", x: 168, y: 630, label: "right" },
  "daniel-lockyer": { id: "daniel-lockyer", x: 280, y: 648, label: "above" },
  "devanshu-sharma": { id: "devanshu-sharma", x: 580, y: 592, label: "above" },
  "can-duruk": { id: "can-duruk", x: 705, y: 512, label: "above" },
  shrinath: { id: "shrinath", x: 825, y: 522, label: "right" },
  "karan-shingde": { id: "karan-shingde", x: 905, y: 500, label: "right" },
  akshay: { id: "akshay", x: 985, y: 460, label: "right" },

  // indie bottom fan into empty paper
  "pranav-hari": { id: "pranav-hari", x: 160, y: 570, label: "above" },
  "tanmay-sonawane": { id: "tanmay-sonawane", x: 175, y: 688, label: "right" },
  kyzo: { id: "kyzo", x: 310, y: 692, label: "above" },
  "virgile-rietsch": { id: "virgile-rietsch", x: 455, y: 690, label: "above" },
  mageframe: { id: "mageframe", x: 585, y: 668, label: "below" },
  jitesh: { id: "jitesh", x: 385, y: 535, label: "left" },
  levelsio: { id: "levelsio", x: 505, y: 425, label: "right" },
  guru: { id: "guru", x: 585, y: 485, label: "right" },
  "jamon-holmgren": { id: "jamon-holmgren", x: 645, y: 648, label: "below" },
  dhh: { id: "dhh", x: 725, y: 460, label: "above" },

  // personal / design / essays east
  judah: { id: "judah", x: 820, y: 238, label: "below" },
  ankit: { id: "ankit", x: 910, y: 228, label: "right" },
  "andrew-alimbuyuguen": {
    id: "andrew-alimbuyuguen",
    x: 990,
    y: 225,
    label: "right",
  },
  srijan: { id: "srijan", x: 1025, y: 298, label: "right" },
  "henrik-karlsson": { id: "henrik-karlsson", x: 1045, y: 378, label: "right" },
  siddharth: { id: "siddharth", x: 1105, y: 438, label: "right" },
  sarv: { id: "sarv", x: 1145, y: 518, label: "right" },

  felipe: { id: "felipe", x: 1075, y: 148, label: "right" },
  "lenard-floeren": { id: "lenard-floeren", x: 1145, y: 198, label: "right" },
  "ma-baytas": { id: "ma-baytas", x: 1185, y: 278, label: "right" },
  "simon-sarris": { id: "simon-sarris", x: 1085, y: 338, label: "left" },

  "paras-chopra": { id: "paras-chopra", x: 1005, y: 428, label: "right" },
  "zara-zhang": { id: "zara-zhang", x: 960, y: 458, label: "left" },
  "chris-lakin": { id: "chris-lakin", x: 920, y: 558, label: "right" },
  christian: { id: "christian", x: 855, y: 618, label: "below" },
};

/** Muted earth trail colours - hiking map, not transit neon. */
const trailMeta: Omit<WalkTrailDef, "d">[] = [
  {
    id: "eval-nerds",
    name: "eval nerds",
    color: "#7A6570",
    pill: { x: 295, y: 118 },
    waypointIds: [
      "nirant-kasliwal",
      "jason-liu",
      "minh-nhat-nguyen",
      "andrew-ng",
      "prathosh-ap",
    ],
  },
  {
    id: "shipping-agents",
    name: "people shipping agents",
    color: "#5C706C",
    pill: { x: 170, y: 188 },
    waypointIds: [
      "teknium",
      "pili",
      "jason-liu",
      "phil",
      "sphinx",
      "simon-tokumin",
      "ghuubear",
    ],
  },
  {
    id: "coding-agent-gang",
    name: "coding agent gang",
    color: "#5A6A7C",
    pill: { x: 275, y: 300 },
    waypointIds: [
      "theo",
      "dax",
      "charlie-holtz",
      "thorsten-ball",
      "sunil-pai",
      "emanuele-di-pietro",
    ],
  },
  {
    id: "indie-shippers",
    name: "indie shippers",
    color: "#8F5E45",
    pill: { x: 385, y: 655 },
    waypointIds: [
      "pranav-hari",
      "tanmay-sonawane",
      "kyzo",
      "virgile-rietsch",
      "mageframe",
      "jitesh",
      "sphinx",
      "levelsio",
      "guru",
      "jamon-holmgren",
      "dhh",
    ],
  },
  {
    id: "gpu-line",
    name: "gpu poor and gpu rich",
    color: "#667854",
    // open clearing above mid-valley (between archie and maharshi)
    pill: { x: 500, y: 545 },
    waypointIds: [
      "tokenbender",
      "elie-bakouch",
      "archie-sengupta",
      "maharshi",
      "vixhal",
      "sanskar-pandey",
    ],
  },
  {
    id: "research-lists",
    name: "research lists",
    color: "#9A7E3C",
    pill: { x: 685, y: 82 },
    waypointIds: [
      "andrew-ng",
      "ankit-jxa",
      "chris-barber",
      "sanyam-jain",
      "suhail",
      "nick",
    ],
  },
  {
    id: "systems-people",
    name: "systems people",
    color: "#8A5348",
    pill: { x: 655, y: 538 },
    waypointIds: [
      "arpit-bhayani",
      "daniel-lockyer",
      "sunil-pai",
      "devanshu-sharma",
      "can-duruk",
      "shrinath",
      "karan-shingde",
      "akshay",
    ],
  },
  {
    id: "personal-sites",
    name: "personal site enjoyers",
    color: "#9A6E76",
    pill: { x: 748, y: 180 },
    waypointIds: [
      "judah",
      "ankit",
      "andrew-alimbuyuguen",
      "srijan",
      "henrik-karlsson",
      "siddharth",
      "sarv",
    ],
  },
  {
    id: "design-nerds",
    name: "design nerds",
    color: "#96866A",
    pill: { x: 1015, y: 105 },
    waypointIds: [
      "andrew-alimbuyuguen",
      "felipe",
      "lenard-floeren",
      "ma-baytas",
      "simon-sarris",
    ],
  },
  {
    id: "long-essays",
    name: "long essays",
    color: "#555550",
    pill: { x: 895, y: 365 },
    waypointIds: [
      "simon-sarris",
      "henrik-karlsson",
      "paras-chopra",
      "zara-zhang",
      "chris-lakin",
      "christian",
    ],
  },
  {
    id: "build-with",
    name: "people i build with",
    color: "#6E6E48",
    pill: { x: 780, y: 530 },
    waypointIds: ["sanskar-pandey", "shrinath"],
  },
];

export const walkTrailDefs: WalkTrailDef[] = trailMeta.map((t) => ({
  ...t,
  d: organicPath(t.waypointIds, walkWaypoints),
}));

export const TRAILHEAD = { x: 115, y: 675 } as const;
export const COMPASS = { x: 1180, y: 640 } as const;
export const SCALE = { x: 1080, y: 690 } as const;

export const BASEMAP = {
  src: "/internet/topo-basemap.webp",
  src2x: "/internet/topo-basemap@2x.webp",
  fallback: "/internet/topo-basemap.jpg",
} as const;

/* -------------------------------------------------------------------------- */
/* Mobile continuous hike - tall portrait with per-trail terrain crops        */
/* -------------------------------------------------------------------------- */

export type MobileTrailSection = {
  id: string;
  name: string;
  color: string;
  pill: { x: number; y: number };
  d: string;
  waypoints: WalkWaypoint[];
  /** band top/height in viewBox units for terrain placement */
  bandY: number;
  bandH: number;
  terrain: string;
  /** optional connector into the next trail */
  continueTo?: { label: string; d: string; labelAt: { x: number; y: number } };
};

export function buildMobileWalkLayout(): {
  view: { w: number; h: number };
  trails: MobileTrailSection[];
  trailhead: { x: number; y: number };
  compass: { x: number; y: number };
  scale: { x: number; y: number };
  /** soft river ribbon down the page (decorative) */
  riverD: string;
} {
  const W = WALK_MOBILE_VIEW.w;
  const padX = 36;
  const usable = W - padX * 2;
  let y = 56;
  const trails: MobileTrailSection[] = [];
  const built: {
    meta: (typeof trailMeta)[number];
    waypoints: WalkWaypoint[];
    bandY: number;
    bandH: number;
    pill: { x: number; y: number };
    d: string;
  }[] = [];

  for (let ti = 0; ti < trailMeta.length; ti++) {
    const meta = trailMeta[ti];
    const n = meta.waypointIds.length;
    const bandH = Math.max(150, 56 + n * 34);
    const bandY = y;
    const startY = y + 44;
    const endY = y + bandH - 28;
    // alternate overall lean so the hike snakes left/right like a ridge walk
    const lean = ti % 2 === 0 ? 1 : -1;
    const waypoints: WalkWaypoint[] = meta.waypointIds.map((id, i) => {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const zigX = Math.sin(t * Math.PI * 1.7) * 42 * lean;
      const mid = padX + usable * (0.42 + lean * 0.08);
      const x = mid + (t - 0.5) * (usable * 0.72) + zigX;
      const wy = startY + t * (endY - startY);
      const label: WalkLabelSide = i % 2 === 0 ? "left" : "right";
      return {
        id,
        x: Math.min(W - 40, Math.max(40, x)),
        y: wy,
        label,
      };
    });

    const pts: Record<string, WalkWaypoint> = {};
    for (const wp of waypoints) pts[wp.id] = wp;
    const d = organicPath(
      waypoints.map((w) => w.id),
      pts,
    );
    // pill in a clearing near the first third of the band
    const pill = {
      x: Math.min(W - 90, Math.max(90, waypoints[0].x + lean * 28)),
      y: bandY + 22,
    };

    built.push({ meta, waypoints, bandY, bandH, pill, d });
    y += bandH + 28; // gap for connector footpath
  }

  for (let ti = 0; ti < built.length; ti++) {
    const cur = built[ti];
    const next = built[ti + 1];
    let continueTo: MobileTrailSection["continueTo"];
    if (next) {
      const a = cur.waypoints[cur.waypoints.length - 1];
      const b = next.waypoints[0];
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const d = `M ${a.x} ${a.y} Q ${mx + 18} ${my} ${b.x} ${b.y}`;
      continueTo = {
        label: `continue to ${next.meta.name}`,
        d,
        labelAt: { x: mx, y: my - 6 },
      };
    }
    trails.push({
      id: cur.meta.id,
      name: cur.meta.name,
      color: cur.meta.color,
      pill: cur.pill,
      d: cur.d,
      waypoints: cur.waypoints,
      bandY: cur.bandY,
      bandH: cur.bandH,
      terrain: `/internet/mobile/${cur.meta.id}.webp`,
      continueTo,
    });
  }

  const h = y + 72;
  const first = trails[0]?.waypoints[0];
  return {
    view: { w: W, h },
    trails,
    trailhead: {
      x: first ? first.x - 18 : padX + 8,
      y: first ? first.y - 28 : 28,
    },
    compass: { x: W - 48, y: h - 56 },
    scale: { x: W / 2 - 45, y: h - 28 },
    riverD: `M ${W * 0.72} 40 C ${W * 0.78} ${h * 0.2}, ${W * 0.55} ${h * 0.45}, ${W * 0.68} ${h * 0.7} S ${W * 0.82} ${h - 40}, ${W * 0.75} ${h - 20}`,
  };
}
