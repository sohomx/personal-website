import Link from "next/link";
import { projects } from "@/data/content";

export function ProjectGrid() {
  return (
    <section
      id="projects"
      className="site-shell scroll-mt-8 py-10"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="text-sm font-medium text-ink">
        stuff i&apos;ve made
      </h2>
      <ul className="mt-6 list-none space-y-0 border-t border-border p-0">
        {projects.map((p) => (
          <li key={p.slug} className="border-b border-border">
            <Link
              href={`/projects/${p.slug}/`}
              className="quiet-link group flex flex-col gap-1 py-4 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <span className="text-ink group-hover:underline">{p.title}</span>
                <span className="mt-1 block text-sm text-muted">{p.subtitle}</span>
              </div>
              <span className="shrink-0 text-sm text-faint">{p.when}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
