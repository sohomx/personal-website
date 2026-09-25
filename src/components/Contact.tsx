import { Reveal } from "@/components/Reveal";
import { careAbout, site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            what i care about
          </p>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug tracking-tight text-[var(--ink)] sm:text-3xl">
            {careAbout.primary}
          </p>
          <p className="mt-6 max-w-xl text-[var(--muted)]">{careAbout.aside}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 border-t border-[var(--line)] pt-12">
            <p className="max-w-xl text-lg text-[var(--ink)]">{careAbout.cta}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                say hi on x
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                github
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
