import { Reveal } from "@/components/Reveal";
import { sideProjects } from "@/data/content";

export function Experiments() {
  return (
    <section
      id="experiments"
      className="scroll-mt-20 border-t border-[var(--line)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            experiments
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            smaller probes, same obsession.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {sideProjects.map((project, index) => (
            <Reveal key={project.title} delay={Math.min(index * 0.05, 0.2)}>
              <div className="group grid gap-3 py-7 sm:grid-cols-[minmax(9rem,0.35fr)_1fr_auto] sm:items-baseline sm:gap-8">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                  {"href" in project && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-title"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-[var(--muted)]">{project.blurb}</p>
                {"href" in project && project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
                  >
                    open ↗
                  </a>
                ) : (
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]/60">
                    in progress
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
