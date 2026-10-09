import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OpenIssueDemo } from "@/components/OpenIssueDemo";
import { ProjectJsonLd } from "@/components/ProjectJsonLd";
import { ProjectProofs } from "@/components/ProjectProofs";
import { gauntletWeighting, getProject, projects, site } from "@/data/content";

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
      title: `${project.title} · ${site.fullName}`,
      description: project.metaDescription,
      url: `/projects/${project.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · ${site.fullName}`,
      description: project.metaDescription,
      creator: "@sxohom",
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
  const showGauntlet = project.slug === "solana-agent-safety";
  const showOpenIssueDemo = project.slug === "openissue";

  return (
    <article className="site-shell py-10">
      <ProjectJsonLd project={project} />
      <p className="text-sm text-muted">
        <Link href="/projects/" className="quiet-link">
          back to projects
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
          {project.title}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {project.subtitle} · {project.when}
        </p>
      </header>

      <div className="mt-10 space-y-5 text-[1.0625rem] leading-relaxed">
        {project.paragraphs.map((para) => (
          <p key={para.slice(0, 48)}>{para}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <section aria-labelledby="did-heading">
          <h2 id="did-heading" className="text-sm font-medium">
            what i did
          </h2>
          <ul className="mt-3 list-none space-y-2 p-0 text-sm text-muted">
            {project.did.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="how-heading">
          <h2 id="how-heading" className="text-sm font-medium">
            how
          </h2>
          <ul className="mt-3 list-none space-y-2 p-0 text-sm text-muted">
            {project.how.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>
      </div>

      {showGauntlet ? (
        <section className="mt-12" aria-labelledby="score-heading">
          <h2 id="score-heading" className="text-sm font-medium">
            score weighting
          </h2>
          <p className="mt-2 text-sm text-muted">
            from the gauntlet readme. real score formula, not a mock.
          </p>
          <pre className="code-block mt-5 overflow-x-auto p-4 whitespace-pre-wrap">
            {gauntletWeighting}
          </pre>
        </section>
      ) : null}

      {showOpenIssueDemo ? <OpenIssueDemo /> : null}

      <ProjectProofs proofs={project.proofs} />

      <section className="mt-12" aria-labelledby="artifacts-heading">
        <h2 id="artifacts-heading" className="text-sm font-medium">
          artifacts
        </h2>
        <ul className="mt-4 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-sm">
          {project.artifacts.map((a) => (
            <li key={a.href}>
              <a className="quiet-link" href={a.href} rel="noopener noreferrer">
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav
        className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between"
        aria-label="adjacent projects"
      >
        {prev ? (
          <Link href={`/projects/${prev.slug}/`} className="quiet-link">
            previous: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}/`} className="quiet-link">
            next: {next.title}
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
