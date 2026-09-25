import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { olderProjects } from "@/data/content";

export const metadata: Metadata = {
  title: "archive",
  description: "Projects built before 2024 — experiments across AI, Solana, and web.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
          archive
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
          projects before 2024
        </h1>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          earlier experiments across AI tools, Solana dapps, and web apps —
          kept here for the trail, not the pitch.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--ink)]"
        >
          ← back home
        </Link>
      </Reveal>

      <Reveal delay={0.08}>
        <ol className="mt-14 columns-1 gap-x-12 border-t border-[var(--line)] pt-10 sm:columns-2">
          {olderProjects.map((project, index) => (
            <li
              key={project}
              className="mb-3 break-inside-avoid border-b border-[var(--line)] py-3 text-[var(--ink)]"
            >
              <span className="mr-3 font-mono text-[11px] text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project}
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}
