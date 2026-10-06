import { Reveal } from "@/components/Reveal";
import { proofSignals } from "@/data/content";

export function Proof() {
  return (
    <section
      id="proof"
      className="scroll-mt-20 border-t border-[var(--line)]"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <h2
            id="proof-heading"
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]"
          >
            Proof
          </h2>
        </Reveal>
        <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {proofSignals.map((signal, index) => (
            <li key={signal.label} className="py-5">
              <Reveal delay={Math.min(index * 0.04, 0.16)}>
                <div className="grid gap-1 sm:grid-cols-[minmax(10rem,0.32fr)_1fr] sm:items-baseline sm:gap-8">
                  <span className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                    {signal.href ? (
                      <a
                        href={signal.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-title"
                      >
                        {signal.label}
                      </a>
                    ) : (
                      signal.label
                    )}
                  </span>
                  <span className="text-[var(--muted)]">{signal.detail}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
