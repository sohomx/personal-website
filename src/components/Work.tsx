import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/content";

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-[var(--line)]"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl text-balance"
          >
            Selected work
          </h2>
          <p className="mt-4 max-w-xl text-[var(--muted)]">
            Five projects. Title, outcome, proof hook, writeup — text first for
            humans and agents.
          </p>
        </Reveal>

        <ol className="mt-14 list-none space-y-0 p-0">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.05, 0.2)}>
              <li className="border-t border-[var(--line)] py-10">
                <article className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] sm:text-3xl">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="link-title"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-2xl text-[var(--muted)]">
                      {project.outcome}
                    </p>
                    <p className="mt-2 font-mono text-xs tracking-[0.04em] text-[var(--accent)]">
                      {project.proofHook}
                    </p>
                    {project.primaryArtifact && (
                      <p className="mt-3 text-sm text-[var(--muted)]">
                        Primary artifact:{" "}
                        <a
                          href={project.primaryArtifact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-quiet text-[var(--ink)]"
                        >
                          {project.primaryArtifact.label}
                        </a>
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] link-quiet hover:text-[var(--accent)] md:justify-self-end"
                  >
                    {project.title} writeup
                  </Link>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
