import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-[var(--line)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.38fr_1fr] md:gap-16 md:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            {about.heading}
          </p>
          <h2
            id="about-heading"
            className="font-display mt-3 text-4xl font-bold uppercase tracking-tight text-[var(--ink)] sm:text-5xl"
          >
            What I do
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-[var(--ink)]/90">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              Right now:{" "}
              <a
                href={site.links.pocket}
                target="_blank"
                rel="noopener noreferrer"
                className="link-title"
              >
                Pocket
              </a>
              . Previously{" "}
              <a
                href={site.links.lossfunk}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet hover:text-[var(--ink)]"
              >
                Lossfunk
              </a>{" "}
              on Beacon.
            </p>
            <p className="border-l-2 border-[var(--accent)] pl-4 text-[var(--muted)]">
              {about.openTo}{" "}
              <Link href="#contact" className="link-quiet text-[var(--ink)]">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
