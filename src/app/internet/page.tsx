import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  getPeopleStats,
  internetIntro,
  personGroups,
  type Person,
} from "@/data/internet";

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

function PersonCard({ person }: { person: Person }) {
  const xHref = `https://x.com/${person.x}`;
  return (
    <li className="person-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="person-avatar"
        src={person.avatar}
        alt=""
        width={44}
        height={44}
        loading="lazy"
        decoding="async"
      />
      <div className="person-meta">
        <a
          href={person.href}
          className="person-name"
          rel="noopener noreferrer"
          target="_blank"
        >
          {person.name}
        </a>
        <p className="person-links">
          <a
            href={person.href}
            className="person-domain"
            rel="noopener noreferrer"
            target="_blank"
          >
            {person.domain}
            <span aria-hidden="true"> ↗</span>
          </a>
          <span className="person-sep" aria-hidden="true">
            ·
          </span>
          <a
            href={xHref}
            className="person-x"
            rel="noopener noreferrer"
            target="_blank"
          >
            @{person.x}
          </a>
        </p>
        <p className="person-note">{person.note}</p>
      </div>
    </li>
  );
}

export default function InternetPage() {
  const { personCount, topicCount } = getPeopleStats();

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
          {personCount} people, {topicCount} topics
        </p>
      </div>

      {personGroups.map((group) => (
        <section
          key={group.id}
          className="people-section"
          aria-labelledby={group.id}
        >
          <div className="site-shell">
            <h2 id={group.id} className="people-cat">
              {group.title}
            </h2>
          </div>
          <ul className="people-grid list-none p-0">
            {group.people.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
