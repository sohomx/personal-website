import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import {
  getAdjacentProjects,
  getProject,
  projects,
  site,
} from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Not found" };
  }

  return {
    title: {
      absolute: `${project.title} — ${site.fullName}`,
    },
    description: project.metaDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — ${site.fullName}`,
      description: project.metaDescription,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  const creativeWorkLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.lede,
    url: `${site.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: site.fullName,
      url: site.url,
    },
    ...(project.artifacts.length > 0
      ? {
          sameAs: project.artifacts.map((artifact) => artifact.href),
        }
      : {}),
  };

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
      <JsonLd data={creativeWorkLd} />

      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
          Project
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] sm:text-5xl text-balance">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--ink)]/90">
          {project.lede}
        </p>
        <ul className="mt-6 space-y-2 border-l border-[var(--line)] pl-4 text-[var(--muted)]">
          {project.proofBullets.map((bullet) => (
            <li key={bullet.slice(0, 48)}>{bullet}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-12 space-y-5 text-[1.05rem] leading-relaxed text-[var(--ink)]/90">
          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 64)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <section
          id="artifacts"
          className="mt-16 border-t border-[var(--line)] pt-10"
          aria-labelledby="artifacts-heading"
        >
          <h2
            id="artifacts-heading"
            className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]"
          >
            Artifacts
          </h2>
          {project.artifacts.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {project.artifacts.map((artifact) => (
                <li key={artifact.href} className="text-[var(--ink)]">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    {artifact.label}
                  </span>
                  <br />
                  <a
                    href={artifact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet break-all"
                  >
                    {artifact.href}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-[var(--muted)]">
              Public artifact URL forthcoming — writeup is the source of truth
              for now.
            </p>
          )}
        </section>
      </Reveal>

      <nav
        aria-label="Adjacent projects"
        className="mt-16 flex flex-col gap-4 border-t border-[var(--line)] pt-10 sm:flex-row sm:justify-between"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--accent)]"
          >
            ← {prev.title} writeup
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--accent)] sm:text-right"
          >
            {next.title} writeup →
          </Link>
        ) : (
          <Link
            href="/#contact"
            className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--accent)] sm:text-right"
          >
            Contact →
          </Link>
        )}
      </nav>
    </article>
  );
}
