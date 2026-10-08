import { site } from "./content";

export type Person = {
  name: string;
  href: string;
  note: string;
};

export type PersonGroup = {
  id: string;
  title: string;
  people: Person[];
};

export const internetIntro = {
  title: "map of my internet",
  lead: "people i actually reply to, repost, or keep in curated bookmarks. not a follows dump.",
} as const;

export const personGroups: PersonGroup[] = [
  {
    id: "evals-agents",
    title: "evals and agents",
    people: [
      {
        name: "jason liu",
        href: "https://jxnl.co",
        note: "rag and evals writing that's actually about shipping.",
      },
    ],
  },
  {
    id: "dev-tools",
    title: "dev tools",
    people: [
      {
        name: "Theo",
        href: "https://t3.gg",
        note: "i use t3 code and keep asking him about ram.",
      },
      {
        name: "dax",
        href: "https://thdxr.com",
        note: "building opencode. says the quiet part about running a dozen agents at once.",
      },
      {
        name: "Charlie Holtz",
        href: "https://charlieholtz.com",
        note: "makes conductor, which is how i run agents side by side. whole homepage is one paragraph.",
      },
      {
        name: "Thorsten Ball",
        href: "https://thorstenball.com",
        note: "register spill, and a note on ownership i saved.",
      },
      {
        name: "sunil pai",
        href: "https://sunilpai.dev",
        note: "the senior engineer death spiral post.",
      },
      {
        name: "Arpit Bhayani",
        href: "https://arpitbhayani.me",
        note: "databases and a daily curated engineering paper.",
      },
    ],
  },
  {
    id: "training-research",
    title: "training and research",
    people: [
      {
        name: "tokenbender",
        href: "https://tokenbender.com",
        note: "rl, sparsity, and a sleep schedule people write threads about.",
      },
      {
        name: "Ankit Jxa",
        href: "https://hireankit.bearblog.dev",
        note: "keeps a list of research problems that are fun, not fundable.",
      },
      {
        name: "elie bakouch",
        href: "https://x.com/eliebakouch",
        note: "200+ pages on training llms end to end, including what didn't work.",
      },
      {
        name: "Archie Sengupta",
        href: "https://archiesengupta.com",
        note: "wrote the distributed gpu training article i reposted.",
      },
      {
        name: "Paras Chopra",
        href: "https://invertedpassion.com",
        note: 'runs lossfunk, where i did beacon. "work really hard" is pinned in my bookmarks.',
      },
      {
        name: "maharshi",
        href: "https://maharshi.bearblog.dev",
        note: "ml perf at fal. writes about inference optimisation as a context problem.",
      },
    ],
  },
  {
    id: "design-personal",
    title: "design and personal sites",
    people: [
      {
        name: "judah",
        href: "https://joodaloop.com",
        note: "the reason i have a /buy page. two colours, borders, and a site that works offline.",
      },
      {
        name: "Ankit",
        href: "https://www.ankitkr0.com",
        note: "built a newspaper out of polymarket odds. his site is half the reason mine is quiet now.",
      },
    ],
  },
  {
    id: "build-with",
    title: "people i build with",
    people: [
      {
        name: "Sanskar Pandey",
        href: "https://x.com/sanskxr02",
        note: "beacon co-author. now doing post-training and evals for robot learning.",
      },
      {
        name: "shrinath",
        href: "https://x.com/shrinathx",
        note: "built gauntlet with me.",
      },
    ],
  },
];

export function buildInternetMarkdown(siteUrl: string = site.url): string {
  const sections = personGroups
    .map((group) => {
      const lines = group.people
        .map((person) => `- [${person.name}](${person.href}): ${person.note}`)
        .join("\n");
      return `## ${group.title}\n\n${lines}`;
    })
    .join("\n\n");

  return `# ${internetIntro.title}

> ${internetIntro.lead}

Author: [${site.fullName}](${siteUrl}/)

${sections}

[html page](${siteUrl}/internet/) · [home](${siteUrl}/) · [llms.txt](${siteUrl}/llms.txt)
`;
}
