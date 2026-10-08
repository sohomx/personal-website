import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { MetroMap } from "@/components/MetroMap";
import { StationIndex } from "@/components/StationIndex";
import {
  getPeopleStats,
  internetIntro,
  metroLines,
} from "@/data/internet";

export const metadata: Metadata = {
  title: "map of my internet",
  description:
    "A Namma Metro-style map of people Sohom Pal keeps going back to: 60 stations across topic lines for evals, agents, tools, research, systems, design, and writing.",
  alternates: { canonical: "/internet/" },
  openGraph: {
    title: "map of my internet · Sohom Pal",
    description:
      "People whose sites Sohom keeps going back to, drawn as a quiet Bangalore metro map.",
    url: "/internet/",
  },
  twitter: {
    title: "map of my internet · Sohom Pal",
    description:
      "People whose sites Sohom keeps going back to, drawn as a quiet Bangalore metro map.",
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
        <p className="mt-3 text-sm text-faint">
          {personCount} stations, {lineCount} lines
        </p>
        <ul className="metro-legend list-none p-0" aria-label="line legend">
          {metroLines.map((line) => (
            <li key={line.id} className="metro-legend-item">
              <span
                className="metro-chip"
                style={{ background: line.color }}
                aria-hidden="true"
              />
              <span>{line.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="metro-shell mt-8">
        <MetroMap lines={metroLines} />
      </div>

      <StationIndex lines={metroLines} />
    </article>
  );
}
