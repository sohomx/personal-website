import { Contact } from "@/components/Contact";
import { Experiments } from "@/components/Experiments";
import { Hero } from "@/components/Hero";
import { Now } from "@/components/Now";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Now />
      <Work />
      <Experiments />
      <Contact />
    </>
  );
}
