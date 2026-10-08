/**
 * Topographic walk overlay geometry in the same viewBox as the basemap (1280×720).
 * Trails avoid the river corridor; a few bridges host interchanges.
 */

export const WALK_VIEW = { w: 1280, h: 720 } as const;

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
  /** muted topo colour */
  color: string;
  /** SVG path in viewBox coords */
  d: string;
  /** pill anchor along the trail */
  pill: { x: number; y: number };
  waypointIds: string[];
};

/** Unique waypoint positions (interchanges share one point). */
export const walkWaypoints: Record<string, WalkWaypoint> = {
  // eval ∩ shipping
  "jason-liu": { id: "jason-liu", x: 420, y: 250, label: "left" },
  "nirant-kasliwal": { id: "nirant-kasliwal", x: 360, y: 200, label: "below" },
  "minh-nhat-nguyen": { id: "minh-nhat-nguyen", x: 480, y: 155, label: "above" },
  // eval ∩ research (bridge near top)
  "andrew-ng": { id: "andrew-ng", x: 620, y: 140, label: "above" },
  "prathosh-ap": { id: "prathosh-ap", x: 520, y: 300, label: "left" },

  // research (right of upper river)
  "ankit-jxa": { id: "ankit-jxa", x: 740, y: 120, label: "right" },
  "chris-barber": { id: "chris-barber", x: 860, y: 105, label: "above" },
  "sanyam-jain": { id: "sanyam-jain", x: 960, y: 145, label: "below" },
  suhail: { id: "suhail", x: 1080, y: 180, label: "right" },
  nick: { id: "nick", x: 1140, y: 250, label: "right" },

  // shipping
  teknium: { id: "teknium", x: 230, y: 300, label: "below" },
  pili: { id: "pili", x: 290, y: 235, label: "right" },
  phil: { id: "phil", x: 340, y: 310, label: "left" },
  // shipping ∩ indie
  sphinx: { id: "sphinx", x: 400, y: 380, label: "left" },
  "simon-tokumin": { id: "simon-tokumin", x: 500, y: 360, label: "right" },
  ghuubear: { id: "ghuubear", x: 560, y: 420, label: "right" },

  // coding (west ridge)
  theo: { id: "theo", x: 170, y: 390, label: "right" },
  dax: { id: "dax", x: 200, y: 420, label: "left" },
  "charlie-holtz": { id: "charlie-holtz", x: 260, y: 460, label: "left" },
  "thorsten-ball": { id: "thorsten-ball", x: 320, y: 500, label: "left" },
  // coding ∩ systems
  "sunil-pai": { id: "sunil-pai", x: 400, y: 520, label: "below" },
  "emanuele-di-pietro": {
    id: "emanuele-di-pietro",
    x: 470,
    y: 580,
    label: "left",
  },

  // gpu (lower west valley)
  tokenbender: { id: "tokenbender", x: 140, y: 500, label: "left" },
  "elie-bakouch": { id: "elie-bakouch", x: 180, y: 560, label: "left" },
  "archie-sengupta": { id: "archie-sengupta", x: 240, y: 600, label: "left" },
  maharshi: { id: "maharshi", x: 320, y: 620, label: "below" },
  vixhal: { id: "vixhal", x: 420, y: 640, label: "below" },
  // gpu ∩ build (near lake approach)
  "sanskar-pandey": { id: "sanskar-pandey", x: 740, y: 630, label: "below" },

  // systems
  "arpit-bhayani": { id: "arpit-bhayani", x: 200, y: 640, label: "left" },
  "daniel-lockyer": { id: "daniel-lockyer", x: 300, y: 660, label: "below" },
  "devanshu-sharma": { id: "devanshu-sharma", x: 540, y: 600, label: "above" },
  "can-duruk": { id: "can-duruk", x: 700, y: 520, label: "above" },
  // systems ∩ build
  shrinath: { id: "shrinath", x: 820, y: 530, label: "right" },
  "karan-shingde": { id: "karan-shingde", x: 900, y: 510, label: "right" },
  akshay: { id: "akshay", x: 980, y: 470, label: "right" },

  // indie (south-west loop then to sphinx then SE)
  "pranav-hari": { id: "pranav-hari", x: 100, y: 580, label: "left" },
  "tanmay-sonawane": { id: "tanmay-sonawane", x: 80, y: 660, label: "left" },
  kyzo: { id: "kyzo", x: 160, y: 700, label: "below" },
  "virgile-rietsch": { id: "virgile-rietsch", x: 280, y: 700, label: "below" },
  mageframe: { id: "mageframe", x: 380, y: 680, label: "below" },
  jitesh: { id: "jitesh", x: 360, y: 560, label: "left" },
  levelsio: { id: "levelsio", x: 480, y: 440, label: "right" },
  guru: { id: "guru", x: 560, y: 500, label: "right" },
  "jamon-holmgren": { id: "jamon-holmgren", x: 580, y: 650, label: "below" },
  dhh: { id: "dhh", x: 720, y: 470, label: "above" },

  // personal (east ridge)
  judah: { id: "judah", x: 820, y: 240, label: "below" },
  ankit: { id: "ankit", x: 910, y: 230, label: "right" },
  // design ∩ personal
  "andrew-alimbuyuguen": {
    id: "andrew-alimbuyuguen",
    x: 980,
    y: 230,
    label: "right",
  },
  srijan: { id: "srijan", x: 1020, y: 300, label: "right" },
  // essays ∩ personal
  "henrik-karlsson": { id: "henrik-karlsson", x: 1040, y: 380, label: "right" },
  siddharth: { id: "siddharth", x: 1100, y: 440, label: "right" },
  sarv: { id: "sarv", x: 1140, y: 520, label: "right" },

  // design
  felipe: { id: "felipe", x: 1070, y: 150, label: "right" },
  "lenard-floeren": { id: "lenard-floeren", x: 1140, y: 200, label: "right" },
  "ma-baytas": { id: "ma-baytas", x: 1180, y: 280, label: "right" },
  // essays ∩ design
  "simon-sarris": { id: "simon-sarris", x: 1080, y: 340, label: "left" },

  // essays (east spine toward lake)
  "paras-chopra": { id: "paras-chopra", x: 1000, y: 430, label: "right" },
  "zara-zhang": { id: "zara-zhang", x: 960, y: 460, label: "left" },
  "chris-lakin": { id: "chris-lakin", x: 920, y: 560, label: "right" },
  christian: { id: "christian", x: 860, y: 620, label: "below" },
};

/**
 * Muted topo trail colours (rust, olive, slate blue, ochre, plum, moss,
 * teal-grey, brick, sand, dusty pink, charcoal).
 */
export const walkTrailDefs: WalkTrailDef[] = [
  {
    id: "eval-nerds",
    name: "eval nerds",
    color: "#8A6A78",
    d: "M 360 200 C 381.0 217.5, 378.0 265.8, 420 250 C 462.0 234.3, 410.0 193.5, 480 155 C 550.0 116.5, 606.0 89.3, 620 140 C 634.0 190.8, 555.0 244.0, 520 300",
    pill: { x: 300, y: 130 },
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
    color: "#5F7A76",
    d: "M 230 300 C 251.0 277.3, 223.5 252.5, 290 235 C 356.5 217.5, 402.5 223.8, 420 250 C 437.5 276.3, 347.0 264.5, 340 310 C 333.0 355.5, 344.0 362.5, 400 380 C 456.0 397.5, 444.0 346.0, 500 360 C 556.0 374.0, 539.0 399.0, 560 420",
    pill: { x: 155, y: 205 },
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
    color: "#5A6E8A",
    d: "M 170 390 C 180.5 400.5, 168.5 395.5, 200 420 C 231.5 444.5, 218.0 432.0, 260 460 C 302.0 488.0, 271.0 479.0, 320 500 C 369.0 521.0, 347.5 492.0, 400 520 C 452.5 548.0, 445.5 559.0, 470 580",
    pill: { x: 105, y: 325 },
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
    color: "#A65D3F",
    d: "M 100 580 C 93.0 608.0, 59.0 618.0, 80 660 C 101.0 702.0, 90.0 686.0, 160 700 C 230.0 714.0, 203.0 707.0, 280 700 C 357.0 693.0, 352.0 729.0, 380 680 C 408.0 631.0, 353.0 665.0, 360 560 C 367.0 455.0, 358.0 422.0, 400 380 C 442.0 338.0, 424.0 398.0, 480 440 C 536.0 482.0, 525.0 426.5, 560 500 C 595.0 573.5, 524.0 660.5, 580 650 C 636.0 639.5, 671.0 533.0, 720 470",
    pill: { x: 70, y: 545 },
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
    color: "#6A7D55",
    d: "M 140 500 C 154.0 521.0, 145.0 525.0, 180 560 C 215.0 595.0, 191.0 579.0, 240 600 C 289.0 621.0, 257.0 606.0, 320 620 C 383.0 634.0, 273.0 636.5, 420 640 C 567.0 643.5, 628.0 633.5, 740 630",
    pill: { x: 100, y: 470 },
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
    color: "#B08D3E",
    d: "M 620 140 C 662.0 133.0, 656.0 132.3, 740 120 C 824.0 107.8, 783.0 96.3, 860 105 C 937.0 113.8, 883.0 118.8, 960 145 C 1037.0 171.3, 1017.0 143.3, 1080 180 C 1143.0 216.8, 1119.0 225.5, 1140 250",
    pill: { x: 680, y: 85 },
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
    color: "#9A5548",
    d: "M 200 640 C 235.0 647.0, 230.0 702.0, 300 660 C 370.0 618.0, 316.0 541.0, 400 520 C 484.0 499.0, 435.0 600.0, 540 600 C 645.0 600.0, 602.0 544.5, 700 520 C 798.0 495.5, 750.0 533.5, 820 530 C 890.0 526.5, 844.0 531.0, 900 510 C 956.0 489.0, 952.0 484.0, 980 470",
    pill: { x: 160, y: 610 },
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
    color: "#B07A84",
    d: "M 820 240 C 851.5 236.5, 854.0 233.5, 910 230 C 966.0 226.5, 941.5 205.5, 980 230 C 1018.5 254.5, 999.0 247.5, 1020 300 C 1041.0 352.5, 1012.0 331.0, 1040 380 C 1068.0 429.0, 1065.0 391.0, 1100 440 C 1135.0 489.0, 1126.0 492.0, 1140 520",
    pill: { x: 745, y: 185 },
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
    color: "#A99570",
    d: "M 980 230 C 1011.5 202.0, 1014.0 160.5, 1070 150 C 1126.0 139.5, 1101.5 154.5, 1140 200 C 1178.5 245.5, 1201.0 231.0, 1180 280 C 1159.0 329.0, 1115.0 319.0, 1080 340",
    pill: { x: 1010, y: 110 },
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
    d: "M 1080 340 C 1066.0 354.0, 1068.0 348.5, 1040 380 C 1012.0 411.5, 1028.0 402.0, 1000 430 C 972.0 458.0, 988.0 414.5, 960 460 C 932.0 505.5, 955.0 504.0, 920 560 C 885.0 616.0, 881.0 599.0, 860 620",
    pill: { x: 900, y: 370 },
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
    color: "#7A7A48",
    d: "M 740 630 C 768.0 595.0, 792.0 565.0, 820 530",
    pill: { x: 710, y: 630 },
    waypointIds: ["sanskar-pandey", "shrinath"],
  },
];

export const TRAILHEAD = { x: 70, y: 680 } as const;
export const COMPASS = { x: 1180, y: 640 } as const;
export const SCALE = { x: 1080, y: 690 } as const;

export const BASEMAP = {
  src: "/internet/topo-basemap.webp",
  src2x: "/internet/topo-basemap@2x.webp",
  fallback: "/internet/topo-basemap.jpg",
} as const;
