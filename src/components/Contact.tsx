import { CopyEmail } from "@/components/CopyEmail";
import { contact, site } from "@/data/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="site-shell scroll-mt-20 py-10"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="display text-3xl">
        contact
      </h2>
      <p className="mt-3 max-w-xl">{contact.line}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <CopyEmail email={site.email} />
        <a className="btn" href={site.links.x} rel="noopener noreferrer">
          x / @sxohom
        </a>
        <a className="btn" href={site.links.github} rel="noopener noreferrer">
          github
        </a>
      </div>
    </section>
  );
}
