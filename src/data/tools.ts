import { site } from "./content";

export type TakePart =
  | { kind: "text"; text: string }
  | { kind: "project"; slug: string; label: string };

export type Tool = {
  name: string;
  href: string;
  take: TakePart[];
};

export type ToolGroup = {
  id: string;
  title: string;
  tools: Tool[];
};

export const toolsIntro = {
  title: "tools i use for evals and agent testing",
  lead: "things that showed up in my own repos or in how i talk about the work. project names link to pages on this site.",
} as const;

function project(slug: string, label: string): TakePart {
  return { kind: "project", slug, label };
}

function text(value: string): TakePart {
  return { kind: "text", text: value };
}

export const toolGroups: ToolGroup[] = [
  {
    id: "tracing",
    title: "tracing",
    tools: [
      {
        name: "Langfuse",
        href: "https://langfuse.com",
        take: [
          text("the trace store "),
          project("openissue", "openissue"),
          text(
            " reads from. read-only on purpose. a seeded trace proves the api path works, not that anyone had the incident.",
          ),
        ],
      },
      {
        name: "OpenTelemetry + OpenInference",
        href: "https://opentelemetry.io",
        take: [
          text("if your spans are otel, "),
          project("openissue", "openissue"),
          text(
            " reads them without an adapter. the reference lab has to pass on fixtures and on otel, or it doesn't count. openinference is the span shape i used in the lab fixtures.",
          ),
        ],
      },
      {
        name: "LangSmith",
        href: "https://www.langchain.com/langsmith",
        take: [
          project("simtest", "simtest"),
          text(
            " can turn a langsmith trace into a seed file, so a bad run becomes a test case instead of a screenshot.",
          ),
        ],
      },
    ],
  },
  {
    id: "evals",
    title: "evals",
    tools: [
      {
        name: "eve evals",
        href: "https://github.com/vercel/eve",
        take: [
          text("scaffolded the local research brain for "),
          project("pocket-probable", "pocket / probable"),
          text(
            " with it and fought the node version first. the smoke evals run on a deterministic shim so ci doesn't need a key. the live ones need a real model and a judge.",
          ),
        ],
      },
    ],
  },
  {
    id: "testing",
    title: "testing",
    tools: [
      {
        name: "Vitest",
        href: "https://vitest.dev",
        take: [
          text("where the boring checks live for "),
          project("openissue", "openissue"),
          text(", "),
          project("pocket-probable", "pocket / probable"),
          text(", and the idl agent under "),
          project("solana-agent-safety", "solana agent safety"),
          text(
            ". the brain has a test that it refuses a live trade, which matters more than anything in the ui.",
          ),
        ],
      },
      {
        name: "pytest",
        href: "https://docs.pytest.org",
        take: [
          text("default for the python side: "),
          project("simtest", "simtest"),
          text(", gauntlet, and the sim engine under "),
          project("solana-agent-safety", "solana agent safety"),
          text("."),
        ],
      },
      {
        name: "GitHub Actions",
        href: "https://github.com/features/actions",
        take: [
          project("simtest", "simtest"),
          text(
            " runs on every pr as an eval gate. i added a branch that's supposed to fail, so i know the red actually shows up.",
          ),
        ],
      },
    ],
  },
  {
    id: "sims",
    title: "sims",
    tools: [
      {
        name: "Surfpool",
        href: "https://www.surfpool.run",
        take: [
          text(
            "local solana validator i run exploit transactions against for ",
          ),
          project("solana-agent-safety", "solana agent safety"),
          text(
            ". gauntlet has a mock mode, but the real runs go through surfpool.",
          ),
        ],
      },
    ],
  },
  {
    id: "models-infra",
    title: "models / infra",
    tools: [
      {
        name: "OpenAI API",
        href: "https://platform.openai.com/docs",
        take: [
          text("in "),
          project("openissue", "openissue"),
          text(
            " the model only explains what the detector found. structured output, store off, and it can't touch the counts. also showed up in gauntlet and sim-engine model runs under ",
          ),
          project("solana-agent-safety", "solana agent safety"),
          text("."),
        ],
      },
      {
        name: "Anthropic API",
        href: "https://docs.anthropic.com",
        take: [
          text("second provider in "),
          project("openissue", "openissue"),
          text(
            ", same contract as the first. also the anthropic path in the local research brain for ",
          ),
          project("pocket-probable", "pocket / probable"),
          text("."),
        ],
      },
      {
        name: "Vercel AI SDK",
        href: "https://ai-sdk.dev",
        take: [
          text("wired into the local research brain for "),
          project("pocket-probable", "pocket / probable"),
          text(
            " via the anthropic provider. i'm not claiming live gateway judge evals here.",
          ),
        ],
      },
      {
        name: "OpenRouter",
        href: "https://openrouter.ai",
        take: [
          text("how we ran twelve models for "),
          project("beacon", "beacon"),
          text(" without twelve accounts. lossfunk gave us the credits."),
        ],
      },
    ],
  },
];

export const olderTools: Tool[] = [
  {
    name: "W&B Weave",
    href: "https://weave-docs.wandb.ai",
    take: [
      text(
        "my first time wrapping a function so every call got logged. small 2024 notebook, but that's where traces started for me.",
      ),
    ],
  },
  {
    name: "Giskard",
    href: "https://www.giskard.ai",
    take: [
      text(
        "ran a hallucination scan on a rag model in late 2023. tutorial-level, be honest about that.",
      ),
    ],
  },
  {
    name: "Guardrails AI",
    href: "https://www.guardrailsai.com",
    take: [
      text(
        "early output validation experiment in 2023. a custom validator and a rail spec, nothing i ship on now.",
      ),
    ],
  },
];

export const codeWith =
  "cursor, claude code, codex, conductor, coderabbit" as const;

export function projectHref(slug: string): string {
  return `/projects/${slug}/`;
}

export function projectAbsoluteHref(slug: string): string {
  return `${site.url}/projects/${slug}/`;
}

export function takeToPlain(parts: TakePart[]): string {
  return parts
    .map((part) => (part.kind === "text" ? part.text : part.label))
    .join("");
}

export function takeToMarkdown(parts: TakePart[]): string {
  return parts
    .map((part) => {
      if (part.kind === "text") return part.text;
      return `[${part.label}](${projectAbsoluteHref(part.slug)})`;
    })
    .join("");
}

export function buildToolsMarkdown(siteUrl: string = site.url): string {
  const sections = toolGroups
    .map((group) => {
      const lines = group.tools
        .map((tool) => `- [${tool.name}](${tool.href}): ${takeToMarkdown(tool.take)}`)
        .join("\n");
      return `## ${group.title}\n\n${lines}`;
    })
    .join("\n\n");

  const older = olderTools
    .map((tool) => `- [${tool.name}](${tool.href}): ${takeToMarkdown(tool.take)}`)
    .join("\n");

  return `# ${toolsIntro.title}

> ${toolsIntro.lead}

Author: [${site.fullName}](${siteUrl}/)

${sections}

## older stuff

${older}

## what i code with

${codeWith}

[html page](${siteUrl}/tools/) · [home](${siteUrl}/) · [llms.txt](${siteUrl}/llms.txt)
`;
}
