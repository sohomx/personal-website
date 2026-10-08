import { about, contact, hero, nowLine, projects, receipts, site } from "@/data/content";

export function buildLlmsTxt(): string {
  const projectIndex = projects
    .map(
      (p) =>
        `- [${p.title}](${site.url}/projects/${p.slug}/): ${p.subtitle}. ${p.box[0]}`,
    )
    .join("\n");

  const projectBodies = projects
    .map((p) => {
      const body = p.paragraphs.join("\n\n");
      const artifacts = p.artifacts
        .map((a) => `- ${a.label}: ${a.href}`)
        .join("\n");
      return `## ${p.title}\n\n${body}\n\n### artifacts\n${artifacts}`;
    })
    .join("\n\n");

  return `# ${site.name}

> ${hero.owning} ${hero.sub}

${site.fullName}. ${site.jobTitle} at Pocket (Probable). Based in ${site.location} (IST).

${about.paragraphs[0]}

${nowLine}

## Contact

${contact.line}

- email: ${site.email}
- X: ${site.links.x}
- GitHub: ${site.links.github}
- site: ${site.url}
- colophon: ${site.url}/colophon/
- this file: ${site.url}/llms.txt
- markdown twin: ${site.url}/llms.md

## Receipts

${receipts.map((r) => `- ${r.line} — ${r.href}`).join("\n")}

## Projects

${projectIndex}

${projectBodies}
`;
}

export function buildLlmsMd(): string {
  return buildLlmsTxt();
}
