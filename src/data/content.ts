export const site = {
  name: "sohom",
  title: "sohom — AI engineer",
  description:
    "AI engineer at Pocket. Evals, adversarial testing, tracing, and proof for agents that handle real decisions.",
  location: "23, bangalore",
  url: "https://sohom.xyz",
  links: {
    github: "https://github.com/sohomx",
    x: "https://x.com/sxohom",
    pocket: "https://getpocketapp.com/",
    lossfunk: "https://lossfunk.com/",
  },
} as const;

export const hero = {
  brand: "sohom",
  headline: "hi, i'm sohom.",
  role:
    "right now: ai engineer at pocket (ai-native solana wallet). i work on ai agents, evals, and debugging systems for workflows where wrong tool calls and hidden failures matter.",
  previous:
    "previously @lossfunk, working on sycophancy in language models: getting models to push back on weak claims instead of agreeing with you.",
  openTo:
    "open to freelance or consulting work around agent evals, observability, and production hardening.",
} as const;

export type WorkItem = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  href?: string;
  links?: { label: string; href: string }[];
  bullets?: string[];
};

export const featuredWork: WorkItem[] = [
  {
    id: "probable",
    title: "pocket / probable",
    eyebrow: "now",
    summary:
      "making polymarket-style research flows safe, testable, and debuggable — with a proof layer that survives after the demo.",
    body: [
      "i spent april at network school with the pocket team, working close to the product and engineering loop around agent wallets and prediction markets.",
      "the part i care about is the proof layer. if an agent says it found a market, created an alert, refused a trade, or ran a paper-only flow, i want to know which prompt caused it, which tools ran, what evidence came back, what side effect happened, and where to look when it breaks.",
    ],
    bullets: [
      "evals for wrong tool selection, unsafe side effects, missing market context, live-trading refusal, incomplete responses, and unprovable tool calls",
      "telegram end-to-end tests through the agent gateway verifying command id → conversation → turn → workflow → tools → ops → delivery",
      "ops console debugging from prompt to tools to side effects to final response",
      "connected traces, analytics/outbox events, tool evidence, and team-testing rows so a run can be debugged as a system",
      "local polymarket research brain for discovery, thesis/counter-thesis, watchlists, dry-run alerts, and paper-only strategy design",
    ],
    links: [
      { label: "pocket", href: "https://getpocketapp.com/" },
      { label: "network school", href: "https://ns.com/about" },
    ],
  },
  {
    id: "beacon",
    title: "beacon",
    eyebrow: "paper + benchmark",
    summary:
      "an open benchmark for measuring sycophancy — forced choice between the principled answer and the agreeable one.",
    body: [
      "instead of asking a model to write a free-form answer, force it to choose between two responses. one is more principled. the other is more agreeable. that turns a fuzzy alignment failure into something you can score.",
      "we built a 420-example dataset with human annotations for critical thinking and fluency, evaluated 12 frontier and open models, mapped failure modes like hedged sycophancy, tone penalty, emotional framing, and fluency bias, and tested prompt-level plus activation-level mitigations.",
    ],
    href: "https://arxiv.org/abs/2510.16727",
    links: [
      { label: "arxiv", href: "https://arxiv.org/abs/2510.16727" },
      {
        label: "dataset",
        href: "https://huggingface.co/datasets/sanskxr02/Beacon",
      },
    ],
  },
  {
    id: "solana-safety",
    title: "solana agent safety",
    eyebrow: "experiments",
    summary:
      "most teams test whether the agent completes the task. i build tooling for whether it should have done the task at all.",
    body: [
      "ai agents are starting to move real money on solana: swapping tokens, providing liquidity, trading prediction markets. gauntlet rewards agents for knowing when not to act.",
    ],
    links: [
      {
        label: "gauntlet leaderboard",
        href: "https://solana-gauntlet.vercel.app/",
      },
      { label: "simtest", href: "https://github.com/sohomx/simtest" },
    ],
    bullets: [
      "solana gauntlet — 96 adversarial scenarios across 4 difficulty levels and 7 attack categories; safety is 40% of the score",
      "solana sim engine — llm-powered fuzzing for anchor programs on surfpool with cwe-classified vulnerability reports",
      "solana idl agent — inspect idls, build instruction queues, simulate transactions, export or send with safety gates",
    ],
  },
  {
    id: "civic",
    title: "bengaluru civic truth engine",
    eyebrow: "building",
    summary:
      "a provenance-first civic memory system — source registry, raw archive, then answers that show their work.",
    body: [
      "if something breaks in your neighbourhood, the basic questions are still hard: who owns this, what has already happened, what data exists, and can i trust it?",
      "the product bet is that ai is useful here only if it can show its work. every answer needs source, freshness, and uncertainty attached.",
    ],
    links: [
      {
        label: "repo",
        href: "https://github.com/sohomx/bengaluru-civic-truth-engine",
      },
    ],
  },
];

export const sideProjects = [
  {
    title: "simtest",
    blurb:
      "deterministic fuzz tests for multi-step llm agents — fails the pr if schema, policy, or cost budgets break.",
    href: "https://github.com/sohomx/simtest",
  },
  {
    title: "evalsmith",
    blurb:
      "catch waste and drift from traces you already have: token-reuse, provider/model diffs, and regression trends.",
  },
  {
    title: "prism roadmaps",
    blurb:
      "fetch a research field, embed and cluster papers, write a citation-tight roadmap with an india-vs-global contrast.",
    href: "https://showmetheroadmap-production.up.railway.app/",
  },
  {
    title: "medimind",
    blurb:
      "ocr + embed messy clinic records into a clinical timeline where every claim points back to the original page.",
    href: "https://medimind-ui.onrender.com/",
  },
  {
    title: "civic contact resolver",
    blurb:
      "ask the problem, get the right corporation official — scraped, normalized, and searchable ward contacts.",
    href: "https://chennai-civic-frontend.onrender.com/",
  },
] as const;

export const careAbout = {
  primary:
    "i think a lot about what happens when ai agents start handling real money and real decisions. the interesting work is not another chat box. it is evals, adversarial testing, tracing, cost visibility, side-effect policy, and proof that survives after the demo.",
  aside:
    "i also think a lot about jungian psychology, contemplative practice, chess, and cooking bengali food. but that's a different website.",
  cta: "if you're working on similar stuff or want help making an agent safer and easier to debug, say hi.",
} as const;

export const olderProjects = [
  "quiz AI",
  "chatWithPdf",
  "SqlGenerator",
  "PosterGenerator",
  "ScriptGenerator",
  "MovieGenerator",
  "Scrapers",
  "decentralised-messenger dapp",
  "airdrop program",
  "crowd funding crypto platform for covid",
  "p2p messenger dapp with programs",
  "token count calculators for LLMs",
  "AI summariser",
  "solana pay implementation for college canteen outlets",
  "blog dapp",
  "Meme coin generator dapp",
  "NFT merchandise (during NEAR fellowship)",
  "casino dapp (betting + calculating winner through nodes)",
  "digital collectives game as a feature for a NFT project",
  "nft marketplace for a personalised touch",
  "yield aggregator",
  "file upload dapp",
  "geolocation tracking app",
] as const;
