import Link from "next/link";
import { projects } from "@/data/content";

export function ProjectGrid() {
  return (
    <section
      id="projects"
      className="site-shell scroll-mt-20 py-10"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="display text-3xl sm:text-4xl">
        stuff i&apos;ve made
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        five things with receipts. each opens into the longer story.
      </p>
      <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.slug} id={`project-${i + 1}`}>
            <Link
              href={`/projects/${p.slug}`}
              className="box group flex h-full flex-col p-5 no-underline"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="display text-2xl">{p.title}</h3>
                <span className="mono text-xs text-muted">{p.when}</span>
              </div>
              <p className="kicker mt-1">{p.subtitle}</p>
              <p className="mt-4 text-[0.98rem]">{p.box[0]}</p>
              <p className="mt-2 text-[0.98rem] text-muted">{p.box[1]}</p>
              <span className="mono mt-auto pt-5 text-sm text-accent group-hover:underline">
                read it →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
