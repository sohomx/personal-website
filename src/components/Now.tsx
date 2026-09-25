import { Reveal } from "@/components/Reveal";
import { hero, site } from "@/data/content";

export function Now() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.35fr_1fr] md:gap-14 md:py-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            now
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-[var(--ink)]/90">
            <p>
              right now: ai engineer at{" "}
              <a
                href={site.links.pocket}
                target="_blank"
                rel="noopener noreferrer"
                className="link-title"
              >
                pocket
              </a>{" "}
              (ai-native solana wallet). i work on ai agents, evals, and
              debugging systems for workflows where wrong tool calls and hidden
              failures matter.
            </p>
            <p className="text-[var(--muted)]">
              previously{" "}
              <a
                href={site.links.lossfunk}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet hover:text-[var(--ink)]"
              >
                @lossfunk
              </a>
              , working on sycophancy in language models: getting models to push
              back on weak claims instead of agreeing with you.
            </p>
            <p className="border-l-2 border-[var(--accent)] pl-4 text-[var(--muted)]">
              {hero.openTo}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
