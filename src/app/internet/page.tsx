import type { Metadata } from "next";
import Link from "next/link";
import { InternetMapShell } from "@/components/InternetMapShell";
import { JsonLd } from "@/components/JsonLd";
import { StationIndex } from "@/components/StationIndex";
import {
  getPeopleStats,
  internetIntro,
  metroLines,
} from "@/data/internet";

export const metadata: Metadata = {
  title: "map of my internet",
  description:
    "A topo trail map and Namma Metro-style map of people Sohom Pal keeps going back to: 60 stations across topic trails for evals, agents, tools, research, systems, design, and writing.",
  alternates: { canonical: "/internet/" },
  openGraph: {
    title: "map of my internet · Sohom Pal",
    description:
      "People whose sites Sohom keeps going back to, drawn as a quiet topo trail map (or take the metro).",
    url: "/internet/",
  },
  twitter: {
    title: "map of my internet · Sohom Pal",
    description:
      "People whose sites Sohom keeps going back to, drawn as a quiet topo trail map (or take the metro).",
  },
};

export default function InternetPage() {
  const { personCount, lineCount } = getPeopleStats();

  return (
    <article className="py-10">
      <JsonLd />

      <div className="site-shell">
        <p className="text-sm text-muted">
          <Link href="/" className="quiet-link">
            back to home
          </Link>
        </p>
        <h1 className="mt-6 text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
          {internetIntro.title}
        </h1>
        <p className="mt-4 max-w-xl text-muted">{internetIntro.lead}</p>
      </div>

      <InternetMapShell
        lines={metroLines}
        personCount={personCount}
        lineCount={lineCount}
      />

      <StationIndex lines={metroLines} />
    </article>
  );
}
