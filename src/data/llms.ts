import { buildBuyMarkdown } from "./buy";
import {
  about,
  contact,
  hero,
  nowLine,
  projects,
  receipts,
  site,
  type Project,
} from "./content";
import { buildInternetMarkdown } from "./internet";
import { buildToolsMarkdown } from "./tools";

export function buildHomeMarkdown(): string {
  const receiptLines = receipts.map((r) => `- [${r.line}](${r.href})`).join("\n");
  const projectLines = projects
    .map(
      (p) =>
        `- [${p.title}](${site.url}/projects/${p.slug}/) (${p.when}): ${p.subtitle}. [markdown](${site.url}/projects/${p.slug}.md)`,
    )
    .join("\n");

  return `# ${site.fullName}

> ${hero.owning} ${hero.sub}

${site.displayName}. ${site.jobTitle}. Based in ${site.homeLocation.locality}, ${site.homeLocation.countryName}.

${about.paragraphs[0]}

${nowLine}

## Contact

${contact.line}

- email: ${site.email}
- X: ${site.links.x}
- GitHub: ${site.links.github}
- site: ${site.url}

## Receipts

${receiptLines}

## Projects

${projectLines}

## Pages

- [home](${site.url}/)
- [home markdown](${site.url}/index.md)
- [colophon](${site.url}/colophon/)
- [tools](${site.url}/tools/) · [markdown](${site.url}/tools.md)
- [internet](${site.url}/internet/) · [markdown](${site.url}/internet.md)
- [things you could buy](${site.url}/buy/)
- [llms.txt](${site.url}/llms.txt)
- [llms-full.txt](${site.url}/llms-full.txt)
`;
}

export function buildProjectMarkdown(project: Project): string {
  const body = project.paragraphs.join("\n\n");
  const did = project.did.map((d) => `- ${d}`).join("\n");
  const how = project.how.map((h) => `- ${h}`).join("\n");
  const artifacts = project.artifacts
    .map((a) => `- [${a.label}](${a.href})`)
    .join("\n");

  return `# ${project.title}

> ${project.subtitle} · ${project.when}

Author: [${site.fullName}](${site.url}/)

${body}

## what i did

${did}

## how

${how}

## artifacts

${artifacts}

## links

- [html page](${site.url}/projects/${project.slug}/)
- [home](${site.url}/)
- [llms.txt](${site.url}/llms.txt)
`;
}

export function buildColophonMarkdown(): string {
  return `# colophon

site for ${site.fullName} (${site.displayName}).

## type

- system ui sans for body, headings, nav
- ibm plex mono for receipts and code

## colour

- paper: #f7f7f8
- ink: #1a1a1a
- muted: #666 / #999
- hairline: #e5e5e5

## stack

next.js static export, react, tailwind css v4, github pages. no analytics, no cookies, no tracking.

## built with

cursor agents, from a brief sohom wrote. quiet personal-site layout.

[home](${site.url}/) · [llms.txt](${site.url}/llms.txt)
`;
}

/** Spec-style llms.txt: H1, blockquote, linked sections. */
export function buildLlmsTxt(): string {
  const projectLinks = projects
    .map(
      (p) =>
        `- [${p.title}](${site.url}/projects/${p.slug}/): ${p.subtitle}. [md](${site.url}/projects/${p.slug}.md)`,
    )
    .join("\n");

  return `# ${site.fullName}

> ${hero.owning} ${hero.sub}

${site.displayName}. ${site.jobTitle}. Bangalore, India.

${about.paragraphs[0]}

${nowLine}

## Read first

- [Home](${site.url}/): ${site.title}
- [Home (markdown)](${site.url}/index.md)
- [Full plain text](${site.url}/llms-full.txt): every page in one file
- [Colophon](${site.url}/colophon/)
- [Tools](${site.url}/tools/): evals, tracing, testing, sims. [md](${site.url}/tools.md)
- [Internet](${site.url}/internet/): topo trail / metro map of people i keep going back to (60 stations). [md](${site.url}/internet.md)
- [Things you could buy](${site.url}/buy/): desk, sleep, software, and a MacBook Pro

## Projects

${projectLinks}

## Contact

${contact.line}

- Email: ${site.email}
- X: ${site.links.x}
- GitHub: ${site.links.github}

## Optional

- [Sitemap](${site.url}/sitemap.xml)
- [robots.txt](${site.url}/robots.txt)
`;
}

export function buildLlmsFullTxt(): string {
  const parts = [
    buildHomeMarkdown(),
    buildColophonMarkdown(),
    buildToolsMarkdown(site.url),
    buildInternetMarkdown(site.url),
    buildBuyMarkdown(site.url),
    ...projects.map((p) => buildProjectMarkdown(p)),
  ];
  return parts.join("\n\n---\n\n");
}

export function buildLlmsMd(): string {
  return buildLlmsTxt();
}
