import { site } from "./content";

export type Person = {
  id: string;
  name: string;
  href: string;
  domain: string;
  x: string;
  avatar: string;
  note: string;
};

export type MetroLineDef = {
  id: string;
  name: string;
  color: string;
  stationIds: string[];
  interchange?: boolean;
};

export type MetroLine = {
  id: string;
  name: string;
  color: string;
  interchange?: boolean;
  people: Person[];
};

export const internetIntro = {
  title: "map of my internet",
  lead: "people whose sites i keep going back to. tap a station.",
} as const;

const PEOPLE: Record<string, Omit<Person, "avatar">> = {
  "jason-liu": {
    id: "jason-liu",
    name: "jason liu",
    href: "https://jxnl.co",
    domain: "jxnl.co",
    x: "jxnlco",
    note: "dx engineer on the codex team at openai, made instructor. his site mixes rag, agents and evals with posts on ambition and self-worth, on purpose.",
  },
  "nirant-kasliwal": {
    id: "nirant-kasliwal",
    name: "Nirant Kasliwal",
    href: "https://nirantk.com",
    domain: "nirantk.com",
    x: "NirantK",
    note: "wrote an nlp book for software engineers, built fastembed, contributed to ragas. also made the starter guide to bengaluru.",
  },
  "teknium": {
    id: "teknium",
    name: "Teknium",
    href: "https://github.com/teknium1",
    domain: "github.com",
    x: "Teknium",
    note: "cofounder and lead engineer of hermes agent at nous research, previously at stability. hermes started as agent building blocks for data generation and rl.",
  },
  "minh-nhat-nguyen": {
    id: "minh-nhat-nguyen",
    name: "Minh Nhat Nguyen",
    href: "https://linktr.ee/menhguin",
    domain: "linktr.ee",
    x: "menhguin",
    note: "trains programmable-weights llms, previously at hud evals, and built ai hub central to a million users before it sold. hard sci-fi fan.",
  },
  "pili": {
    id: "pili",
    name: "pili",
    href: "https://0xpili.xyz",
    domain: "0xpili.xyz",
    x: "0xpili_",
    note: "writes \"thoughtful technology\" essays on crypto, ai and being human, like the agentic middle layer and requests for agentfi primitives. got her agents writing in simplified technical english to cut the slop.",
  },
  "sphinx": {
    id: "sphinx",
    name: "sphinx",
    href: "https://sphinxstack.com",
    domain: "sphinxstack.com",
    x: "protosphinx",
    note: "founder of deskera, now building erp.ai and a pile of open things: partmode (cad), bomwiki and sphinxstack, a free library of agent skills. writes short posts about agency.",
  },
  "prathosh-ap": {
    id: "prathosh-ap",
    name: "prathosh A P",
    href: "https://prathosh.in",
    domain: "prathosh.in",
    x: "prathoshap",
    note: "professor at iisc working on trustworthy ml, machine unlearning and ai for medicine. cofounded latentforce, which launched a shared workspace for teams of agents today.",
  },
  "ghuubear": {
    id: "ghuubear",
    name: "@ghuubear",
    href: "https://snakeoilsalesman.in",
    domain: "snakeoilsalesman.in",
    x: "ghuubear",
    note: "lead yapper at metaforms. his blog is about truth and deception, with posts like \"the real bottleneck for autonomous agents is usable context\" and \"why llm writing feels dead\".",
  },
  "phil": {
    id: "phil",
    name: "Phil",
    href: "https://practicecents.com",
    domain: "practicecents.com",
    x: "Phil_Holland",
    note: "post-training lead at spacexai, air force veteran, trained at eastman school of music. made a mac skill that talks to reminders, calendar, notes, contacts and messages. his profile links a free tuner and metronome for band kids.",
  },
  "simon-tokumin": {
    id: "simon-tokumin",
    name: "Simon",
    href: "https://x.com/tokumin",
    domain: "x.com",
    x: "tokumin",
    note: "builds products at google labs, currently thinking about family assistants.",
  },
  "andrew-ng": {
    id: "andrew-ng",
    name: "Andrew Ng",
    href: "https://www.andrewng.org",
    domain: "andrewng.org",
    x: "AndrewYNg",
    note: "coursera cofounder, teaches at stanford. recently put out the ai engineering skills map, a guide to what to learn when you build with models.",
  },
  "theo": {
    id: "theo",
    name: "Theo",
    href: "https://t3.gg",
    domain: "t3.gg",
    x: "theo",
    note: "runs t3 code and t3.chat, made create-t3-app, and makes youtube videos about all of it.",
  },
  "dax": {
    id: "dax",
    name: "dax",
    href: "https://thdxr.com",
    domain: "thdxr.com",
    x: "thdxr",
    note: "building opencode at anomaly. \"i build things then try to remember to write about them.\" just shipped opentunnel, end-to-end encrypted public urls for local apps.",
  },
  "charlie-holtz": {
    id: "charlie-holtz",
    name: "Charlie Holtz",
    href: "https://charlieholtz.com",
    domain: "charlieholtz.com",
    x: "charlieholtz",
    note: "makes conductor, a mac app for running a team of coding agents in parallel. before that, hacker in residence at replicate, and quant finance before that.",
  },
  "thorsten-ball": {
    id: "thorsten-ball",
    name: "Thorsten Ball",
    href: "https://thorstenball.com",
    domain: "thorstenball.com",
    x: "thorstenball",
    note: "works on amp, writes the register spill newsletter, wrote the interpreter and compiler books.",
  },
  "sunil-pai": {
    id: "sunil-pai",
    name: "sunil pai",
    href: "https://sunilpai.dev",
    domain: "sunilpai.dev",
    x: "threepointone",
    note: "worked on react, cloudflare workers and partykit, now on durable infra. wrote \"the senior engineer death spiral\" and is giving a talk called \"your ai agent is a distributed system\".",
  },
  "emanuele-di-pietro": {
    id: "emanuele-di-pietro",
    name: "Emanuele Di Pietro",
    href: "https://emanueledipietro.com",
    domain: "emanueledipietro.com",
    x: "emanueledpt",
    note: "indie hacker in italy shipping synara, an open source desktop workspace for coding agents (90 releases in 6 months), and remodex, codex on your iphone.",
  },
  "pranav-hari": {
    id: "pranav-hari",
    name: "Pranav Hari",
    href: "https://pranavhari.com",
    domain: "pranavhari.com",
    x: "pHequals7",
    note: "makes muesli, local-first dictation and meeting transcription. his pinned post is the dune litany rewritten for fomo.",
  },
  "tanmay-sonawane": {
    id: "tanmay-sonawane",
    name: "Tanmay Sonawane",
    href: "https://tanmay.me",
    domain: "tanmay.me",
    x: "tanmays",
    note: "ios developer and ux designer in mumbai. made finma, soor, vero, wdgts and write, and just shipped halo, a personal assistant that sorts out what matters right now.",
  },
  "kyzo": {
    id: "kyzo",
    name: "kyzo",
    href: "https://kyzo.io",
    domain: "kyzo.io",
    x: "ky__zo",
    note: "twice-exited founder, \"you can just hack things\". building one, a mac inbox where you hear and answer questions from your agents by voice.",
  },
  "virgile-rietsch": {
    id: "virgile-rietsch",
    name: "Virgile Rietsch",
    href: "https://go.blitzreels.com/x",
    domain: "go.blitzreels.com",
    x: "virgilerietsch",
    note: "building blitzreels, a video clipping agent. also open sourced blitzclean, a ram monitor and disk cleaner for mac.",
  },
  "mageframe": {
    id: "mageframe",
    name: "mageframe",
    href: "https://github.com/mageframe",
    domain: "github.com",
    x: "mageframeEXE",
    note: "built zero, which watches your screen and writes a timeline of your day. also wired pokémon red's memory into a video model to make an endless anime.",
  },
  "jitesh": {
    id: "jitesh",
    name: "jitesh",
    href: "https://jiteshcodes.com",
    domain: "jiteshcodes.com",
    x: "Jitesh_117",
    note: "lives in vim. built and open sourced vim royale, multiplayer vim duels with elo. engineer at consuma, keeps a learning blog.",
  },
  "jamon-holmgren": {
    id: "jamon-holmgren",
    name: "Jamon Holmgren",
    href: "https://jamon.dev",
    domain: "jamon.dev",
    x: "jamonholmgren",
    note: "coding since 1992, cofounded infinite red, makes games on the side. wrote about how his agent workflow got faster and fun again.",
  },
  "dhh": {
    id: "dhh",
    name: "DHH",
    href: "https://dhh.dk",
    domain: "dhh.dk",
    x: "dhh",
    note: "made ruby on rails and omarchy, runs 37signals, races at le mans. recently wrote \"pencils down\" about the end of writing code by hand.",
  },
  "levelsio": {
    id: "levelsio",
    name: "@levelsio",
    href: "https://levels.io",
    domain: "levels.io",
    x: "levelsio",
    note: "builds startups alone and bootstrapped: nomads.com, remote ok, photo ai, interior ai. wrote a book called make.",
  },
  "guru": {
    id: "guru",
    name: "guru",
    href: "https://hackyguru.com",
    domain: "hackyguru.com",
    x: "hackyguru",
    note: "devrel lead at logos, formerly walletconnect and protocol labs. kept his whoop strap, dropped the subscription, and runs it fully local on his own fork.",
  },
  "tokenbender": {
    id: "tokenbender",
    name: "tokenbender",
    href: "https://tokenbender.com",
    domain: "tokenbender.com",
    x: "tokenbender",
    note: "abhishek mishra, founder of deus experiments, works on post-training and autoresearch harnesses. went from intel server firmware to rl and sparsity.",
  },
  "elie-bakouch": {
    id: "elie-bakouch",
    name: "elie bakouch",
    href: "https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook",
    domain: "huggingface.co",
    x: "eliebakouch",
    note: "research at prime intellect, previously hugging face. co-wrote the smol training playbook, 200+ pages on training llms end to end. recently ran a big open experiment with agents iterating on a research environment and shared the traces.",
  },
  "archie-sengupta": {
    id: "archie-sengupta",
    name: "Archie Sengupta",
    href: "https://archiesengupta.com",
    domain: "archiesengupta.com",
    x: "archiexzzz",
    note: "does pre- and post-training at sarvam and robotics and simulation research at midcentury. wants to work on hard problems in biology, and his family were doctors.",
  },
  "ankit-jxa": {
    id: "ankit-jxa",
    name: "Ankit Jxa",
    href: "https://hireankit.bearblog.dev",
    domain: "hireankit.bearblog.dev",
    x: "kingofknowwhere",
    note: "eight years of math and llms, now contact center engineering and audio llms, building agiathome. keeps a list of research problems that are fun rather than sensible.",
  },
  "chris-barber": {
    id: "chris-barber",
    name: "Chris Barber",
    href: "https://chrisbarber.co",
    domain: "chrisbarber.co",
    x: "chrisbarber",
    note: "makes lists and surveys about data, compute and ai: the breakout list of startups, the frontier list, and an rl environment faq written with epoch ai.",
  },
  "vixhal": {
    id: "vixhal",
    name: "vixhal",
    href: "https://github.com/vixhal-baraiya",
    domain: "github.com",
    x: "TheVixhal",
    note: "physics and ml double major building a graph database at hydra db. wrote up how they turned qwen3-4b into a decision model on a macbook with mlx.",
  },
  "sanyam-jain": {
    id: "sanyam-jain",
    name: "Sanyam Jain",
    href: "https://www.sanyam-ai.in",
    domain: "sanyam-ai.in",
    x: "Sanyam0605",
    note: "ml engineer and researcher at iit delhi who likes reading papers and writing code in the same week. wrote up 40 days and 20 companies of ai hiring in india.",
  },
  "suhail": {
    id: "suhail",
    name: "Suhail",
    href: "https://x.com/Suhail",
    domain: "x.com",
    x: "Suhail",
    note: "founded mixpanel, now starting something new that \"started w 2 8xB200s\".",
  },
  "nick": {
    id: "nick",
    name: "Nick",
    href: "https://x.com/nickcammarata",
    domain: "x.com",
    x: "nickcammarata",
    note: "mechanistic interpretability and meditation, per his bio.",
  },
  "maharshi": {
    id: "maharshi",
    name: "maharshi",
    href: "https://maharshi.bearblog.dev",
    domain: "maharshi.bearblog.dev",
    x: "maharshii",
    note: "ml performance at fal. wrote \"vibecoding gpu kernels\", arguing kernels are easy to check so models can write them, and says inference work has moved up the abstraction ladder.",
  },
  "arpit-bhayani": {
    id: "arpit-bhayani",
    name: "Arpit Bhayani",
    href: "https://arpitbhayani.me",
    domain: "arpitbhayani.me",
    x: "arpit_bhayani",
    note: "principal engineer at razorpay, made dicedb, building a lightweight ide called px0. curates tdd.cat, an engineering newspaper on databases, system design and applied ai.",
  },
  "daniel-lockyer": {
    id: "daniel-lockyer",
    name: "Daniel Lockyer",
    href: "https://daniellockyer.com",
    domain: "daniellockyer.com",
    x: "DanielLockyer",
    note: "performance consultant who fixes high cpu, memory leaks, slow apis and cloud bills. once found and patched a scroll lag bug on x's web app. runs a 2:43 marathon.",
  },
  "devanshu-sharma": {
    id: "devanshu-sharma",
    name: "Devanshu Sharma",
    href: "https://devanshusharma.com",
    domain: "devanshusharma.com",
    x: "DevanshuXi",
    note: "distributed systems and databases person who cares about correctness. now on infra at mastra, got into cal.com with a cold email.",
  },
  "can-duruk": {
    id: "can-duruk",
    name: "Can Duruk",
    href: "https://justoffbyone.com",
    domain: "justoffbyone.com",
    x: "can",
    note: "leads product engineering at modal, former cto of felt, early at uber. writes off by one about engineering and managing engineers.",
  },
  "karan-shingde": {
    id: "karan-shingde",
    name: "Karan Shingde",
    href: "https://kmeanskaran.com",
    domain: "kmeanskaran.com",
    x: "kmeanskaran",
    note: "mlops and inference engineer in pune who consults on llm infra and rag. writes long posts on what interviews actually ask.",
  },
  "akshay": {
    id: "akshay",
    name: "Akshay",
    href: "https://join.dailydoseofds.com",
    domain: "join.dailydoseofds.com",
    x: "akshay_pachaar",
    note: "cofounder of daily dose of data science, formerly at lightning ai. writes plain-language explainers on llms, agents and rag, like an llm engineer's handbook for inference serving.",
  },
  "judah": {
    id: "judah",
    name: "judah",
    href: "https://joodaloop.com",
    domain: "joodaloop.com",
    x: "joodalooped",
    note: "\"ordinary genius\" who makes very good websites through webcraft. joodaloop.com is his eternal notepad of riffs and evergreen notes.",
  },
  "ankit": {
    id: "ankit",
    name: "Ankit",
    href: "https://ankitkr0.com",
    domain: "ankitkr0.com",
    x: "ankitkr0",
    note: "makes his own products, like gone, an indiranagar café atlas and polymarket times, a newspaper run on prediction odds. has worked on gigabrain, buy me a coffee and spenny.",
  },
  "srijan": {
    id: "srijan",
    name: "srijan",
    href: "https://srijan.is",
    domain: "srijan.is",
    x: "srijancse",
    note: "lives in bangalore, grew up all over india, learning catalan to talk to fellow barça fans. the site is just writing and listening.",
  },
  "siddharth": {
    id: "siddharth",
    name: "siddharth",
    href: "https://itsiddharth.design",
    domain: "itsiddharth.design",
    x: "itsiddharth_",
    note: "designer, engineer, artist in new york. did gold card work at robinhood and writes at timecapsule.co.in.",
  },
  "andrew-alimbuyuguen": {
    id: "andrew-alimbuyuguen",
    name: "andrew alimbuyuguen",
    href: "https://alimbuyuguen.com",
    domain: "alimbuyuguen.com",
    x: "aalimbuyuguen",
    note: "vc and design partner at internet studio. his site is a design and illustration portfolio.",
  },
  "felipe": {
    id: "felipe",
    name: "Felipe",
    href: "https://felipe.design",
    domain: "felipe.design",
    x: "felipedotdesign",
    note: "designer at aave, previously x. seven years of 0 to 1 products and interfaces built for ai.",
  },
  "lenard-floeren": {
    id: "lenard-floeren",
    name: "Lenard Flören",
    href: "https://lenardfloeren.com",
    domain: "lenardfloeren.com",
    x: "LenardFloeren",
    note: "art director and product designer in berlin who built himself a workout and yoga app with no coding background.",
  },
  "ma-baytas": {
    id: "ma-baytas",
    name: "M.A. Baytaş",
    href: "https://baytas.net",
    domain: "baytas.net",
    x: "doctorbaytas",
    note: "designer and engineer with a phd in interaction design. creative director at moment, previously design engineer at attio, hosts design discipline.",
  },
  "sarv": {
    id: "sarv",
    name: "sarv",
    href: "https://kami.so",
    domain: "kami.so",
    x: "SarvasvKulpati",
    note: "\"computers for human flourishing\". building kami, a small colorful talking pocket computer that gives you an excuse to leave your phone behind.",
  },
  "henrik-karlsson": {
    id: "henrik-karlsson",
    name: "Henrik Karlsson",
    href: "https://www.henrikkarlsson.xyz",
    domain: "henrikkarlsson.xyz",
    x: "phokarlsson",
    note: "writes escaping flatland, essays on writing as thinking, relationships, self-cultivation and llms. pinned: treat people like they are too complex to fit in your head.",
  },
  "paras-chopra": {
    id: "paras-chopra",
    name: "Paras Chopra",
    href: "https://invertedpassion.com",
    domain: "invertedpassion.com",
    x: "paraschopra",
    note: "building lossfunk, an ai lab. his site's motto is \"know what's true and do what's right\", plus a book on mental models and hundreds of threads. ✔ lossfunk gave us the openrouter credits for beacon.",
  },
  "zara-zhang": {
    id: "zara-zhang",
    name: "Zara Zhang",
    href: "https://zarazhang.com",
    domain: "zarazhang.com",
    x: "zarazhangrui",
    note: "builder who made a claude skill that makes slides on the web, and writes essays like \"to learn anything, first unlearn school\".",
  },
  "simon-sarris": {
    id: "simon-sarris",
    name: "Simon Sarris",
    href: "https://simonsarris.com",
    domain: "simonsarris.com",
    x: "simonsarris",
    note: "essays, projects and recipes from new hampshire. \"the map is mostly water.\" latest: some notes on pleasure.",
  },
  "chris-lakin": {
    id: "chris-lakin",
    name: "Chris Lakin",
    href: "https://chrislakin.com",
    domain: "chrislakin.com",
    x: "chrislakin",
    note: "researches the inner bottlenecks of people working to help superintelligence go well. writes locally optimal.",
  },
  "christian": {
    id: "christian",
    name: "christian",
    href: "https://cxgonzalez.substack.com",
    domain: "cxgonzalez.substack.com",
    x: "cxgonzalez",
    note: "runs seeing clearly, a podcast and newsletter on predictive processing, identity and creative practice. his latest is an argument about where eden was.",
  },
  "sanskar-pandey": {
    id: "sanskar-pandey",
    name: "Sanskar Pandey",
    href: "https://scholar.google.com/citations?user=04PtMiIAAAAJ",
    domain: "scholar.google.com",
    x: "sanskxr02",
    note: "building fidelity dynamics, post-training and evals for robot learning, previously at sarvam. ✔ beacon co-author.",
  },
  "shrinath": {
    id: "shrinath",
    name: "shrinath",
    href: "https://github.com/ShrinathNR",
    domain: "github.com",
    x: "shrinathx",
    note: "working on light research, teaches and builds at solana turbine. ✔ built gauntlet with me.",
  }
};

export const metroLineDefs: MetroLineDef[] = [
  {
    id: "eval-nerds",
    name: "eval nerds",
    color: "#6B5B95",
    stationIds: ["jason-liu", "nirant-kasliwal", "minh-nhat-nguyen", "andrew-ng", "prathosh-ap"],
  },
  {
    id: "shipping-agents",
    name: "people shipping agents",
    color: "#3E7A78",
    stationIds: ["teknium", "pili", "sphinx", "phil", "simon-tokumin", "ghuubear"],
  },
  {
    id: "coding-agent-gang",
    name: "coding agent gang",
    color: "#4A6FA5",
    stationIds: ["theo", "dax", "charlie-holtz", "thorsten-ball", "sunil-pai", "emanuele-di-pietro"],
  },
  {
    id: "indie-shippers",
    name: "indie shippers",
    color: "#C07A45",
    stationIds: ["pranav-hari", "tanmay-sonawane", "kyzo", "virgile-rietsch", "mageframe", "jitesh", "levelsio", "guru", "jamon-holmgren", "dhh"],
  },
  {
    id: "gpu-line",
    name: "gpu poor and gpu rich",
    color: "#3D7A5F",
    stationIds: ["tokenbender", "elie-bakouch", "archie-sengupta", "maharshi", "vixhal"],
  },
  {
    id: "research-lists",
    name: "research lists",
    color: "#A89040",
    stationIds: ["ankit-jxa", "chris-barber", "sanyam-jain", "suhail", "nick"],
  },
  {
    id: "systems-people",
    name: "systems people",
    color: "#A85A52",
    stationIds: ["arpit-bhayani", "daniel-lockyer", "devanshu-sharma", "can-duruk", "karan-shingde", "akshay"],
  },
  {
    id: "personal-sites",
    name: "personal site enjoyers",
    color: "#A86B78",
    stationIds: ["judah", "ankit", "srijan", "siddharth", "sarv"],
  },
  {
    id: "design-nerds",
    name: "design nerds",
    color: "#7A6B9A",
    stationIds: ["andrew-alimbuyuguen", "felipe", "lenard-floeren", "ma-baytas"],
  },
  {
    id: "long-essays",
    name: "long essays",
    color: "#5E6670",
    stationIds: ["henrik-karlsson", "paras-chopra", "zara-zhang", "simon-sarris", "chris-lakin", "christian"],
  },
  {
    id: "build-with",
    name: "people i build with",
    color: "#9A7B4F",
    stationIds: ["sanskar-pandey", "shrinath"],
    interchange: true,
  }
];

function withAvatar(p: Omit<Person, "avatar">): Person {
  return { ...p, avatar: `/people/${p.id}.webp` };
}

export const metroLines: MetroLine[] = metroLineDefs.map((line) => ({
  id: line.id,
  name: line.name,
  color: line.color,
  interchange: line.interchange,
  people: line.stationIds.map((id) => {
    const person = PEOPLE[id];
    if (!person) throw new Error(`missing person: ${id}`);
    return withAvatar(person);
  }),
}));

/** Alias for older call sites. */
export const personGroups = metroLines.map((line) => ({
  id: line.id,
  title: line.name,
  people: line.people,
}));

export function getPeopleStats(): {
  personCount: number;
  lineCount: number;
  topicCount: number;
} {
  const personCount = metroLines.reduce((n, l) => n + l.people.length, 0);
  return {
    personCount,
    lineCount: metroLines.length,
    topicCount: metroLines.length,
  };
}

export function buildInternetMarkdown(siteUrl: string = site.url): string {
  const { personCount, lineCount } = getPeopleStats();
  const sections = metroLines
    .map((line) => {
      const rows = line.people
        .map(
          (p) =>
            `- [${p.name}](${p.href}) ([${p.domain}](${p.href}), [@${p.x}](https://x.com/${p.x})): ${p.note}`,
        )
        .join("\n");
      return `## ${line.name}\n\n${rows}`;
    })
    .join("\n\n");

  return `# ${internetIntro.title}

> ${internetIntro.lead}

${personCount} stations, ${lineCount} lines.

Author: [${site.fullName}](${siteUrl}/)

${sections}

[html page](${siteUrl}/internet/) · [home](${siteUrl}/) · [llms.txt](${siteUrl}/llms.txt)
`;
}
