import { Reveal } from "@/components/Reveal";
import { contact, site } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-[var(--line)]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-[var(--ink)]">
            {contact.openToRoles} {contact.openToFreelance}
          </p>
          <p className="mt-3 max-w-xl text-[var(--muted)]">{contact.note}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-10 space-y-3 text-[var(--ink)]">
            {site.email ? (
              <li>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="link-title">
                  {site.email}
                </a>
              </li>
            ) : (
              <li className="text-[var(--muted)]">{contact.fallback}</li>
            )}
            <li>
              GitHub:{" "}
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                {site.links.github.replace("https://", "")}
              </a>
            </li>
            <li>
              X:{" "}
              <a
                href={site.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                @{site.links.x.split("/").pop()}
              </a>
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            {site.email ? (
              <a href={`mailto:${site.email}`} className="btn-primary">
                Email Sohom
              </a>
            ) : (
              <a
                href={site.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Say hi on X
              </a>
            )}
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
