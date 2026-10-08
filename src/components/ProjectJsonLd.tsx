import { personNode } from "@/components/JsonLd";
import type { Project } from "@/data/content";
import { site } from "@/data/content";

export function ProjectJsonLd({ project }: { project: Project }) {
  const pageUrl = `${site.url}/projects/${project.slug}/`;
  const workId = `${pageUrl}#work`;

  const isBeacon = project.slug === "beacon";
  const workType = isBeacon ? "ScholarlyArticle" : "SoftwareSourceCode";

  const work: Record<string, unknown> = {
    "@type": workType,
    "@id": workId,
    name: project.title,
    description: project.metaDescription,
    url: pageUrl,
    author: { "@id": site.personId },
    creator: { "@id": site.personId },
    datePublished: project.when.includes("2025")
      ? "2025"
      : project.when.includes("2026")
        ? "2026"
        : undefined,
  };

  if (isBeacon) {
    work.identifier = "arXiv:2510.16727";
    work.url = site.links.arxivBeacon;
    work.sameAs = [pageUrl, site.links.arxivBeacon];
  } else if (project.slug === "openissue") {
    work.codeRepository = site.links.npmOpenissue;
    work.sameAs = [site.links.npmOpenissue];
  } else if (project.slug === "simtest") {
    work.codeRepository = "https://github.com/sohomx/simtest";
  } else if (project.slug === "solana-agent-safety") {
    work.codeRepository = "https://github.com/light-research/gauntlet";
  }

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: site.fullName,
        item: `${site.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "projects",
        item: `${site.url}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: pageUrl,
      },
    ],
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [personNode(), work, breadcrumb],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
