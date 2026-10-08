import { site } from "@/data/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    jobTitle: site.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: [site.links.x, site.links.github],
    worksFor: {
      "@type": "Organization",
      name: "Pocket",
      url: site.links.pocket,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
