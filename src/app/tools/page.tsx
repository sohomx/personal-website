import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  codeWith,
  olderTools,
  projectHref,
  toolGroups,
  toolsIntro,
  type TakePart,
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

function Take({ parts }: { parts: TakePart[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (part.kind === "text") {
          return <span key={`t-${i}`}>{part.text}</span>;
        }
        return (
          <Link
            key={`${part.slug}-${i}`}
            href={projectHref(part.slug)}
            className="quiet-link"
          >
            {part.label}
          </Link>
        );
      })}
    </>
  );
}

function ToolRow({ tool }: { tool: Tool }) {
  return (
    <li className="text-[1.0625rem] leading-relaxed">
      <a
        href={tool.href}
        className="quiet-link font-medium"
        rel="noopener noreferrer"
      >
        {tool.name}
      </a>
      <span className="text-muted">
        {" · "}
        <Take parts={tool.take} />
      </span>
    </li>
  );
}

export default function ToolsPage() {
  return (
    <article className="site-shell py-10">
      <JsonLd />
      <p className="text-sm text-muted">
        <Link href="/" className="quiet-link">
          back to home
        </Link>
      </p>
      <h1 className="mt-6 text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
        {toolsIntro.title}
      </h1>
      <p className="mt-4 text-muted">{toolsIntro.lead}</p>

      {toolGroups.map((group) => (
        <section key={group.id} className="mt-10 space-y-3" aria-labelledby={group.id}>
          <h2 id={group.id} className="text-sm font-medium">
            {group.title}
          </h2>
          <ul className="list-none space-y-3 p-0">
            {group.tools.map((tool) => (
              <ToolRow key={tool.name} tool={tool} />
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-10 space-y-3" aria-labelledby="older">
        <h2 id="older" className="text-sm font-medium">
          older stuff
        </h2>
        <ul className="list-none space-y-3 p-0">
          {olderTools.map((tool) => (
            <ToolRow key={tool.name} tool={tool} />
          ))}
        </ul>
      </section>

      <p className="mt-12 text-sm text-muted">
        what i code with: {codeWith}
      </p>
    </article>
  );
}
