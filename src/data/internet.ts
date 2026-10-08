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
        id: "jason-liu",
        name: "jason liu",
        href: "https://jxnl.co",
        domain: "jxnl.co",
        x: "jxnlco",
        avatar: "/people/jason-liu.webp",
        note: "rag and evals writing that's actually about shipping.",
      },
    ],
  },
  {
    id: "dev-tools",
    title: "dev tools",
    people: [
      {
        id: "theo",
        name: "Theo",
        href: "https://t3.gg",
        domain: "t3.gg",
        x: "theo",
        avatar: "/people/theo.webp",
        note: "i use t3 code and watch most of what he ships.",
      },
      {
        id: "dax",
        name: "dax",
        href: "https://thdxr.com",
        domain: "thdxr.com",
        x: "thdxr",
        avatar: "/people/dax.webp",
        note: "building opencode. says the quiet part about running a dozen agents at once.",
      },
      {
        id: "charlie-holtz",
        name: "Charlie Holtz",
        href: "https://charlieholtz.com",
        domain: "charlieholtz.com",
        x: "charlieholtz",
        avatar: "/people/charlie-holtz.webp",
        note: "makes conductor, which is how i run agents side by side. whole homepage is one paragraph.",
      },
      {
        id: "thorsten-ball",
        name: "Thorsten Ball",
        href: "https://thorstenball.com",
        domain: "thorstenball.com",
        x: "thorstenball",
        avatar: "/people/thorsten-ball.webp",
        note: "register spill, and a note on ownership i saved.",
      },
      {
        id: "sunil-pai",
        name: "sunil pai",
        href: "https://sunilpai.dev",
        domain: "sunilpai.dev",
        x: "threepointone",
        avatar: "/people/sunil-pai.webp",
        note: "the senior engineer death spiral post.",
      },
      {
        id: "arpit-bhayani",
        name: "Arpit Bhayani",
        href: "https://arpitbhayani.me",
        domain: "arpitbhayani.me",
        x: "arpit_bhayani",
        avatar: "/people/arpit-bhayani.webp",
        note: "databases and a daily curated engineering paper.",
      },
    ],
  },
  {
    id: "training-research",
    title: "training and research",
    people: [
      {
        id: "tokenbender",
        name: "tokenbender",
        href: "https://tokenbender.com",
        domain: "tokenbender.com",
        x: "tokenbender",
        avatar: "/people/tokenbender.webp",
        note: "writes about rl and sparsity.",
      },
      {
        id: "ankit-jxa",
        name: "Ankit Jxa",
        href: "https://hireankit.bearblog.dev",
        domain: "hireankit.bearblog.dev",
        x: "kingofknowwhere",
        avatar: "/people/ankit-jxa.webp",
        note: "keeps a list of research problems that are fun, not fundable.",
      },
      {
        id: "elie-bakouch",
        name: "elie bakouch",
        href: "https://x.com/eliebakouch",
        domain: "x.com",
        x: "eliebakouch",
        avatar: "/people/elie-bakouch.webp",
        note: "200+ pages on training llms end to end, including what didn't work.",
      },
      {
        id: "archie-sengupta",
        name: "Archie Sengupta",
        href: "https://archiesengupta.com",
        domain: "archiesengupta.com",
        x: "archiexzzz",
        avatar: "/people/archie-sengupta.webp",
        note: "wrote the distributed gpu training article i reposted.",
      },
      {
        id: "paras-chopra",
        name: "Paras Chopra",
        href: "https://invertedpassion.com",
        domain: "invertedpassion.com",
        x: "paraschopra",
        avatar: "/people/paras-chopra.webp",
        note: 'runs lossfunk, where i did beacon. "work really hard" is pinned in my bookmarks.',
      },
      {
        id: "maharshi",
        name: "maharshi",
        href: "https://maharshi.bearblog.dev",
        domain: "maharshi.bearblog.dev",
        x: "maharshii",
        avatar: "/people/maharshi.webp",
        note: "ml perf at fal. writes about inference optimisation as a context problem.",
      },
    ],
  },
  {
    id: "design-personal",
    title: "design and personal sites",
    people: [
      {
        id: "judah",
        name: "judah",
        href: "https://joodaloop.com",
        domain: "joodaloop.com",
        x: "joodalooped",
        avatar: "/people/judah.webp",
        note: "the reason i have a /buy page. two colours, borders, and a site that works offline.",
      },
      {
        id: "ankit",
        name: "Ankit",
        href: "https://www.ankitkr0.com",
        domain: "ankitkr0.com",
        x: "ankitkr0",
        avatar: "/people/ankit.webp",
        note: "built a newspaper out of polymarket odds. his site is half the reason mine is quiet now.",
      },
    ],
  },
  {
    id: "build-with",
    title: "people i build with",
    people: [
      {
        id: "sanskar-pandey",
        name: "Sanskar Pandey",
        href: "https://x.com/sanskxr02",
        domain: "x.com",
        x: "sanskxr02",
        avatar: "/people/sanskar-pandey.webp",
        note: "beacon co-author. now doing post-training and evals for robot learning.",
      },
      {
        id: "shrinath",
        name: "shrinath",
        href: "https://x.com/shrinathx",
        domain: "x.com",
        x: "shrinathx",
        avatar: "/people/shrinath.webp",
        note: "built gauntlet with me.",
      },
    ],
  },
];

export function getPeopleStats(): { personCount: number; topicCount: number } {
  return {
    personCount: personGroups.reduce((n, g) => n + g.people.length, 0),
    topicCount: personGroups.length,
  };
}

export function buildInternetMarkdown(siteUrl: string = site.url): string {
  const sections = personGroups
    .map((group) => {
      const lines = group.people
        .map(
          (person) =>
            `- [${person.name}](${person.href}) ([${person.domain}](${person.href}), [@${person.x}](https://x.com/${person.x})): ${person.note}`,
        )
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
