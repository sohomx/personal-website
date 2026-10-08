import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { internetIntro, personGroups } from "@/data/internet";

export const metadata: Metadata = {
  title: "map of my internet",
  description:
    "People Sohom Pal actually reads: evals and agents, dev tools, training and research, design sites, and collaborators.",
  alternates: { canonical: "/internet/" },
  openGraph: {
    title: "map of my internet · Sohom Pal",
    description:
      "A short map of people Sohom replies to, reposts, or keeps in curated bookmarks.",
    url: "/internet/",
  },
  twitter: {
    title: "map of my internet · Sohom Pal",
    description:
      "A short map of people Sohom replies to, reposts, or keeps in curated bookmarks.",
  },
};

export default function InternetPage() {
  return (
    <article className="site-shell py-10">
      <JsonLd />
      <p className="text-sm text-muted">
        <Link href="/" className="quiet-link">
          back to home
        </Link>
      </p>
      <h1 className="mt-6 text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
        {internetIntro.title}
      </h1>
      <p className="mt-4 text-muted">{internetIntro.lead}</p>

      {personGroups.map((group) => (
        <section
          key={group.id}
          className="mt-10 space-y-3"
          aria-labelledby={group.id}
        >
          <h2 id={group.id} className="text-sm font-medium">
            {group.title}
          </h2>
          <ul className="list-none space-y-3 p-0">
            {group.people.map((person) => (
              <li
                key={person.name}
                className="text-[1.0625rem] leading-relaxed"
              >
                <a
                  href={person.href}
                  className="quiet-link font-medium"
                  rel="noopener noreferrer"
                >
                  {person.name}
                </a>
                <span className="text-muted">
                  {" · "}
                  {person.note}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
