import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { HomeJsonLd } from "@/components/JsonLd";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Receipts } from "@/components/Receipts";

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <Receipts />
      <ProjectGrid />
      <Contact />
    </>
  );
}
