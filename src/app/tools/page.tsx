import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  codeWith,
  projectHref,
  readingLead,
  readingList,
  testRules,
  thingsIBuilt,
  toolGroups,
  toolsIntro,
  worthKnowing,
  worthKnowingLead,
  type BuiltThing,
  type Tool,
  type WorthKnowing,
} from "@/data/tools";

export const metadata: Metadata = {
  title: "how i test agents",
  description:
    "Things Sohom Pal built for agent testing, the rules that came out of breaking them, the stack in his repos, and reading on benchmarks.",
  alternates: { canonical: "/tools/" },
  openGraph: {
    title: "how i test agents · Sohom Pal",
    description:
      "Built tools, testing rules, repo stack, and reading on agent benchmarks.",
    url: "/tools/",
  },
  twitter: {
    title: "how i test agents · Sohom Pal",
    description:
      "Built tools, testing rules, repo stack, and reading on agent benchmarks.",
  },
};

function BuiltCard({ item }: { item: BuiltThing }) {
  return (
    <li className="built-card">
      <div className="built-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="tool-logo"
          src={item.logo}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
        />
        <span className="built-name">{item.name}</span>
      </div>
      <p className="tool-take">{item.take}</p>
      <p className="built-links">
        {item.links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              className="built-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
              <span className="ext-arrow" aria-hidden="true">
                {" "}
                ↗
              </span>
            </a>
          ) : (
            <Link key={link.href} href={link.href} className="built-link">
              {link.label}
            </Link>
          ),
        )}
      </p>
    </li>
  );
}

function StackRow({ tool }: { tool: Tool }) {
  return (
    <li className="stack-row">
      <a
        href={tool.href}
        className="tool-head"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="tool-logo tool-logo-sm"
          src={tool.logo}
          alt=""
          width={22}
          height={22}
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

function KnowingCard({ item }: { item: WorthKnowing }) {
  return (
    <li className="knowing-card">
      <a
        href={item.href}
        className="tool-head"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="tool-logo"
          src={item.logo}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
        />
        <span className="tool-name">
          {item.name}
          <span className="ext-arrow" aria-hidden="true">
            {" "}
            ↗
          </span>
        </span>
      </a>
      <p className="knowing-org">{item.org}</p>
      <p className="tool-take">{item.take}</p>
      <p className="knowing-tag">worth knowing</p>
    </li>
  );
}

export default function ToolsPage() {
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
        <p className="mt-4 max-w-2xl text-muted">{toolsIntro.lead}</p>
      </div>

      <section
        className="tools-section tools-section-primary"
        aria-labelledby="built"
        data-section="built"
      >
        <div className="site-shell">
          <h2 id="built" className="tools-cat">
            things i built
          </h2>
        </div>
        <ul className="built-grid list-none p-0">
          {thingsIBuilt.map((item) => (
            <BuiltCard key={item.id} item={item} />
          ))}
        </ul>
      </section>

      <section
        className="tools-section tools-section-primary"
        aria-labelledby="rules"
        data-section="rules"
      >
        <div className="site-shell">
          <h2 id="rules" className="tools-cat">
            how i test agents
          </h2>
          <ol className="test-rules list-none p-0">
            {testRules.map((r) => (
              <li key={r.n} className="test-rule">
                <p className="test-rule-title">
                  <span className="test-rule-n" aria-hidden="true">
                    {r.n}.
                  </span>{" "}
                  <strong>{r.rule}</strong>
                </p>
                <p className="test-rule-detail">{r.detail}</p>
                <p className="test-rule-tags">
                  {r.tags.map((tag) => (
                    <span key={tag} className="rule-chip">
                      {tag}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="tools-section"
        aria-labelledby="stack"
        data-section="stack"
      >
        <div className="site-shell">
          <h2 id="stack" className="tools-cat">
            the stack
          </h2>
        </div>
        {toolGroups.map((group) => (
          <div key={group.id} className="stack-group">
            <div className="site-shell">
              <h3 id={group.id} className="stack-group-title">
                {group.title}
              </h3>
            </div>
            <ul className="stack-list list-none p-0">
              {group.tools.map((tool) => (
                <StackRow key={tool.id} tool={tool} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        className="tools-section"
        aria-labelledby="knowing"
        data-section="knowing"
      >
        <div className="site-shell">
          <h2 id="knowing" className="tools-cat">
            underrated, worth knowing
          </h2>
          <p className="section-lead">{worthKnowingLead}</p>
        </div>
        <ul className="knowing-grid list-none p-0">
          {worthKnowing.map((item) => (
            <KnowingCard key={item.id} item={item} />
          ))}
        </ul>
      </section>

      <section
        className="tools-section"
        aria-labelledby="reading"
        data-section="reading"
      >
        <div className="site-shell">
          <h2 id="reading" className="tools-cat">
            reading on benchmarks
          </h2>
          <p className="section-lead">{readingLead}</p>
          <ul className="reading-list list-none p-0">
            {readingList.map((item) => (
              <li key={item.id} className="reading-item">
                <a
                  href={item.href}
                  className="reading-title"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title}
                  <span className="ext-arrow" aria-hidden="true">
                    {" "}
                    ↗
                  </span>
                </a>
                <p className="reading-meta">
                  {item.source} · {item.year}
                </p>
                <p className="reading-note">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="site-shell mt-14"
        aria-labelledby="code-with"
        data-section="code-with"
      >
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
