import { Reveal } from "@/components/Reveal";
import { contact, site } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-[var(--line)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            {contact.heading}
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-3 text-4xl font-bold uppercase tracking-tight text-[var(--ink)] sm:text-5xl"
          >
            Say hi
          </h2>
          <p className="mt-4 max-w-xl text-lg text-[var(--ink)]">
            {contact.openToRoles}
          </p>
          <p className="mt-3 max-w-xl text-[var(--muted)]">{contact.note}</p>
          {site.email ? (
            <p className="mt-6 text-[var(--ink)]">
              Email:{" "}
              <a href={`mailto:${site.email}`} className="link-title">
                {site.email}
              </a>
            </p>
          ) : (
            <p className="mt-6 text-[var(--muted)]">{contact.fallback}</p>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              X / Twitter
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
