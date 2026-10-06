import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects, site } from "@/data/content";

export const metadata: Metadata = {
  title: {
    absolute: `Projects — ${site.fullName}`,
  },
  description:
    "Selected AI engineering projects by Sohom Pal — Pocket/Probable, Beacon, Solana agent safety, OpenIssue, and Simtest.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
          Projects
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] sm:text-5xl text-balance">
          Selected work
        </h1>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          Crawlable writeups for hiring managers, clients, and agents.
        </p>
      </Reveal>

      <ol className="mt-14 list-none space-y-0 border-t border-[var(--line)] p-0">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-[var(--line)] py-8">
            <Reveal delay={Math.min(index * 0.05, 0.2)}>
              <article>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] sm:text-3xl">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="link-title"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-[var(--muted)]">
                  {project.outcome}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--accent)]"
                >
                  {project.title} writeup
                </Link>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
