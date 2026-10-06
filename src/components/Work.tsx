import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/content";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 border-t border-[var(--line)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="font-display mt-3 max-w-2xl text-4xl font-bold uppercase tracking-tight text-[var(--ink)] sm:text-5xl"
          >
            Proof over chat boxes
          </h2>
          <p className="mt-4 max-w-xl text-[var(--muted)]">
            Five projects. Each writeup covers what I did, how I did it, and
            images of the work — not a feature list alone.
          </p>
        </Reveal>

        <ol className="mt-16 list-none space-y-0 p-0">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.05, 0.2)}>
              <li className="work-row border-t border-[var(--line)]">
                <Link
                  href={`/projects/${project.slug}`}
                  className="grid gap-3 py-10 no-underline md:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1.4fr)] md:items-baseline md:gap-10"
                >
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--ink)] sm:text-3xl">
                      <span className="link-title">{project.title}</span>
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {project.proofHook}
                    </p>
                  </div>
                  <p className="text-[var(--muted)] md:pt-1">{project.outcome}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
