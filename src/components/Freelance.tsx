import { Reveal } from "@/components/Reveal";
import { freelance } from "@/data/content";

export function Freelance() {
  return (
    <section
      id="freelance"
      className="scroll-mt-20 border-t border-[var(--line)] bg-[var(--surface)]"
      aria-labelledby="freelance-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            How I help
          </p>
          <h2
            id="freelance-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl text-balance"
          >
            {freelance.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">{freelance.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {freelance.offers.map((offer, index) => (
            <li key={offer.title}>
              <Reveal delay={Math.min(index * 0.05, 0.2)}>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                  {offer.title}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{offer.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.12}>
          <div className="mt-12">
            <a href="#contact" className="btn-primary">
              {freelance.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
