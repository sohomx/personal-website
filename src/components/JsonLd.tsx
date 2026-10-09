import { site } from "@/data/content";

/** Sitewide Person node. Home also gets ProfilePage via HomeJsonLd. */
export function personNode() {
  return {
    "@type": "Person" as const,
    "@id": site.personId,
    name: site.fullName,
    alternateName: [site.name, "sxohom"],
    url: site.url,
    email: site.email,
    jobTitle: site.jobTitle,
    homeLocation: {
      "@type": "Place" as const,
      name: `${site.homeLocation.locality}, ${site.homeLocation.countryName}`,
      address: {
        "@type": "PostalAddress" as const,
        addressLocality: site.homeLocation.locality,
        addressCountry: site.homeLocation.country,
      },
    },
    sameAs: [...site.sameAs],
  };
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    ...personNode(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      personNode(),
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: `${site.url}/`,
        name: site.title,
        description: site.description,
        mainEntity: { "@id": site.personId },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${site.url}/#website`,
          name: site.fullName,
          url: site.url,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
