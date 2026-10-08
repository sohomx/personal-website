import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Receipts } from "@/components/Receipts";

export default function Home() {
  return (
    <>
      <Hero />
      <Receipts />
      <ProjectGrid />
      <Contact />
    </>
  );
}
