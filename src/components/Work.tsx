import { Reveal } from "@/components/Reveal";
import { featuredWork } from "@/data/content";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            selected work
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            proof over chat boxes.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--muted)]">
            evals, adversarial testing, tracing, and systems where a wrong tool
            call actually matters.
          </p>
        </Reveal>

        <div className="mt-16 space-y-0">
          {featuredWork.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.06, 0.24)}>
              <article className="work-row grid gap-6 border-t border-[var(--line)] py-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")} · {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] sm:text-3xl">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-title"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-4 text-[var(--muted)]">{item.summary}</p>
                  {item.links && item.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                      {item.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-quiet hover:text-[var(--accent)]"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-[var(--ink)]/85">
                  {item.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                  {item.bullets && (
                    <ul className="mt-2 space-y-3 border-l border-[var(--line)] pl-4 text-[var(--muted)]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 48)}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
