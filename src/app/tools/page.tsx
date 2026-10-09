import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  codeWith,
  getToolsStats,
  olderTools,
  projectHref,
  toolGroups,
  toolsIntro,
  type Tool,
} from "@/data/tools";

export const metadata: Metadata = {
  title: "tools i use for evals and agent testing",
  description:
    "Tools Sohom Pal uses for agent evals, tracing, testing, and sims: Langfuse, OpenTelemetry, eve, Vitest, pytest, Surfpool, LangSmith, and more.",
  alternates: { canonical: "/tools/" },
  openGraph: {
    title: "tools i use for evals and agent testing · Sohom Pal",
    description:
      "Tracing, evals, testing, sims, and models Sohom actually used in his projects.",
    url: "/tools/",
  },
  twitter: {
    title: "tools i use for evals and agent testing · Sohom Pal",
    description:
      "Tracing, evals, testing, sims, and models Sohom actually used in his projects.",
  },
};

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <li className="tool-card">
      <a
        href={tool.href}
        className="tool-head"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="tool-logo"
          src={tool.logo}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
        />
        <span className="tool-name">
          {tool.name}
          <span className="ext-arrow" aria-hidden="true">
            {" "}
            ↗
          </span>
        </span>
      </a>
      <p className="tool-take">{tool.take}</p>
      {tool.usedIn.length > 0 ? (
        <p className="tool-used">
          <span className="tool-used-label">used in</span>
          {tool.usedIn.map((u) => (
            <Link
              key={u.slug}
              href={projectHref(u.slug)}
              className="used-chip"
            >
              {u.label}
            </Link>
          ))}
        </p>
      ) : null}
    </li>
  );
}

export default function ToolsPage() {
  const { toolCount, projectCount } = getToolsStats();

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
          {toolsIntro.title}
        </h1>
        <p className="mt-4 max-w-xl text-muted">{toolsIntro.lead}</p>
        <p className="mt-3 text-sm text-faint">
          {toolCount} tools, {projectCount} projects
        </p>
      </div>

      {toolGroups.map((group) => (
        <section
          key={group.id}
          className="tools-section"
          aria-labelledby={group.id}
        >
          <div className="site-shell">
            <h2 id={group.id} className="tools-cat">
              {group.title}
            </h2>
          </div>
          <ul className="tools-grid list-none p-0">
            {group.tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </ul>
        </section>
      ))}

      <section className="tools-section" aria-labelledby="older">
        <div className="site-shell">
          <h2 id="older" className="tools-cat">
            older stuff
          </h2>
        </div>
        <ul className="tools-grid list-none p-0">
          {olderTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </ul>
      </section>

      <section className="site-shell mt-14" aria-labelledby="code-with">
        <h2 id="code-with" className="tools-cat">
          what i code with
        </h2>
        <ul className="code-with-list list-none p-0">
          {codeWith.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="code-with-item"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt=""
                  width={18}
                  height={18}
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
