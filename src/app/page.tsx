import { Contact } from "@/components/Contact";
import { Freelance } from "@/components/Freelance";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Proof } from "@/components/Proof";
import { Work } from "@/components/Work";
import { site } from "@/data/content";

export default function Home() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    jobTitle: site.jobTitle,
    description: site.description,
    sameAs: [site.links.github, site.links.x],
    knowsAbout: [
      "AI engineering",
      "agent evals",
      "adversarial testing",
      "observability",
      "Solana agent safety",
    ],
  };

  return (
    <>
      <JsonLd data={personLd} />
      <Hero />
      <Proof />
      <Work />
      <Freelance />
      <Contact />
    </>
  );
}
