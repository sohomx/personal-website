import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OpenIssueDemo } from "@/components/OpenIssueDemo";
import { RefuseEasterEgg } from "@/components/RefuseEasterEgg";
import { gauntletWeighting, getProject, projects } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.metaDescription,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} · sohom`,
      description: project.metaDescription,
      url: `/projects/${project.slug}/`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <article className="site-shell py-10">
      <p className="kicker">
        <Link href="/#projects" className="hover:text-accent">
          ← stuff i&apos;ve made
        </Link>
      </p>
      <header className="mt-4 max-w-3xl">
        <h1 className="display text-[clamp(2.2rem,6vw,3.8rem)]">{project.title}</h1>
        <p className="mono mt-2 text-sm text-muted">
          {project.subtitle} · {project.when}
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-2xl space-y-5">
          {project.paragraphs.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="border border-border p-4">
            <h2 className="kicker">what i did</h2>
            <ul className="mt-3 list-none space-y-2 p-0 text-sm">
              {project.did.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-4">
            <h2 className="kicker">how</h2>
            <ul className="mt-3 list-none space-y-2 p-0 text-sm">
              {project.how.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {project.slug === "solana-agent-safety" ? (
        <pre className="terminal mt-10 overflow-x-auto p-4 whitespace-pre-wrap">
          {gauntletWeighting}
        </pre>
      ) : null}

      {project.slug === "openissue" ? <OpenIssueDemo /> : null}
      {project.slug === "pocket-probable" ? <RefuseEasterEgg /> : null}

      <section className="mt-12" aria-labelledby="images-heading">
        <h2 id="images-heading" className="display text-2xl">
          images
        </h2>
        <ul className="mt-4 grid list-none gap-4 p-0 md:grid-cols-2">
          {project.images.map((img) => (
            <li key={img.label} className="placeholder-slot">
              <p className="mono text-xs text-muted">{img.label}</p>
              <p className="mt-2 text-sm">{img.caption}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="artifacts-heading">
        <h2 id="artifacts-heading" className="display text-2xl">
          artifacts
        </h2>
        <ul className="mt-4 flex list-none flex-wrap gap-3 p-0">
          {project.artifacts.map((a) => (
            <li key={a.href}>
              <a className="btn" href={a.href} rel="noopener noreferrer">
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav
        className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between"
        aria-label="adjacent projects"
      >
        {prev ? (
          <Link href={`/projects/${prev.slug}/`} className="mono text-sm hover:text-accent">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}/`} className="mono text-sm hover:text-accent">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
