import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Projects by Sohom Pal — proof layer for AI agents: evals, traces, adversarial safety.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
          Selected work
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold uppercase tracking-tight text-[var(--ink)] sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          Same index as the homepage — each page is What / How / Images.
        </p>
      </Reveal>

      <ol className="mt-14 list-none space-y-0 border-t border-[var(--line)] p-0">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-[var(--line)]">
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col gap-2 py-8 no-underline sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--ink)]">
                <span className="link-title">{project.title}</span>
              </span>
              <span className="text-[var(--muted)] sm:ml-auto sm:max-w-md sm:text-right">
                {project.outcome}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
