import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/content";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
          {project.context}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-[var(--ink)]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {project.lede}
        </p>
        <Link
          href="/#work"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--ink)]"
        >
          ← Selected work
        </Link>
      </Reveal>

      <Reveal delay={0.06}>
        <section
          aria-labelledby="what-heading"
          className="mt-16 border-t border-[var(--line)] pt-12"
        >
          <h2
            id="what-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--ink)]"
          >
            What I did
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-[var(--ink)]/90">
            {project.what.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section
          aria-labelledby="how-heading"
          className="mt-16 border-t border-[var(--line)] pt-12"
        >
          <h2
            id="how-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--ink)]"
          >
            How I did it
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-[var(--ink)]/90">
            {project.how.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section
          aria-labelledby="images-heading"
          className="mt-16 border-t border-[var(--line)] pt-12"
        >
          <h2
            id="images-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--ink)]"
          >
            Images
          </h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            Labeled slots for layout review — captions stay in HTML so claims
            remain agent-readable when real stills land.
          </p>
          <ul className="mt-8 grid list-none gap-6 p-0 md:grid-cols-2">
            {project.images.map((image) => (
              <li key={image.label} className="image-slot">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
                  {image.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {image.caption}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {project.artifacts.length > 0 && (
        <Reveal delay={0.12}>
          <section
            aria-labelledby="artifacts-heading"
            className="mt-16 border-t border-[var(--line)] pt-12"
          >
            <h2
              id="artifacts-heading"
              className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--ink)]"
            >
              Artifacts
            </h2>
            <ul className="mt-6 space-y-3">
              {project.artifacts.map((artifact) => (
                <li key={artifact.href + artifact.label}>
                  <a
                    href={artifact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-title font-mono text-sm uppercase tracking-[0.14em]"
                  >
                    {artifact.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      <nav
        aria-label="Adjacent projects"
        className="mt-20 flex flex-wrap justify-between gap-6 border-t border-[var(--line)] pt-10 font-mono text-xs uppercase tracking-[0.16em]"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="link-quiet text-[var(--muted)] hover:text-[var(--ink)]"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="link-quiet text-[var(--muted)] hover:text-[var(--ink)]"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
