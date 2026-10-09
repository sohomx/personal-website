import type { Metadata } from "next";
import Link from "next/link";
import { projects, site } from "@/data/content";

export const metadata: Metadata = {
  title: "projects",
  description:
    "Projects by Sohom Pal: proof layers, evals, traces, and safety checks with real public proof.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    title: `projects · ${site.fullName}`,
    description:
      "Projects by Sohom Pal: proof layers, evals, traces, and safety checks with real public proof.",
    url: "/projects/",
  },
  twitter: {
    title: `projects · ${site.fullName}`,
    description:
      "Projects by Sohom Pal: proof layers, evals, traces, and safety checks with real public proof.",
  },
};

export default function ProjectsIndexPage() {
  return (
    <article className="site-shell py-10">
      <p className="text-sm text-muted">
        <Link href="/" className="quiet-link">
          back to home
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
          projects
        </h1>
        <p className="mt-2 text-sm text-muted">
          real work with public proof. each page links the source.
        </p>
      </header>

      <ul className="mt-10 list-none space-y-0 border-t border-border p-0">
        {projects.map((p) => (
          <li key={p.slug} className="border-b border-border">
            <Link
              href={`/projects/${p.slug}/`}
              className="quiet-link group grid gap-4 py-6 no-underline sm:grid-cols-[7.5rem_1fr] sm:items-start"
            >
              <div className="proof-thumb">
                {p.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.thumb.src}
                    alt={p.thumb.alt}
                    width={120}
                    height={72}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="mono text-xs text-faint">{p.slug}</span>
                )}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-ink group-hover:underline">
                    {p.title}
                  </span>
                  <span className="shrink-0 text-sm text-faint">{p.when}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{p.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
