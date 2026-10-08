import { CopyEmail } from "@/components/CopyEmail";
import { contact, site } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="site-shell scroll-mt-8 py-10"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="sr-only">
        contact
      </h2>
      <p className="max-w-xl">{contact.line}</p>
      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
        <CopyEmail email={site.email} />
        <a
          className="quiet-link"
          href={site.links.x}
          rel="noopener noreferrer"
        >
          x / @sxohom
        </a>
        <a
          className="quiet-link"
          href={site.links.github}
          rel="noopener noreferrer"
        >
          github
        </a>
      </p>
    </section>
  );
}
