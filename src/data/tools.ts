import { site } from "./content";

export type UsedIn = {
  slug: string;
  label: string;
};

export type Tool = {
  id: string;
  name: string;
  href: string;
  logo: string;
  take: string;
  usedIn: UsedIn[];
};

export type ToolGroup = {
  id: string;
  title: string;
  tools: Tool[];
};

export type CodeTool = {
  id: string;
  name: string;
  href: string;
  logo: string;
};

export const toolsIntro = {
  title: "tools i use for evals and agent testing",
  lead: "things that showed up in my own repos or in how i talk about the work. logos link out; chips link to project pages on this site.",
} as const;

const P = {
  openissue: { slug: "openissue", label: "openissue" },
  pocket: { slug: "pocket-probable", label: "pocket / probable" },
  beacon: { slug: "beacon", label: "beacon" },
  solana: { slug: "solana-agent-safety", label: "solana agent safety" },
  simtest: { slug: "simtest", label: "simtest" },
} as const;

export const toolGroups: ToolGroup[] = [
  {
    id: "tracing",
    title: "tracing",
    tools: [
      {
        id: "langfuse",
        name: "Langfuse",
        href: "https://langfuse.com",
        logo: "/tools/langfuse.webp",
        take: "the trace store openissue reads from. read-only on purpose. a seeded trace proves the api path works, not that anyone had the incident.",
        usedIn: [P.openissue],
      },
      {
        id: "opentelemetry",
        name: "OpenTelemetry + OpenInference",
        href: "https://opentelemetry.io",
        logo: "/tools/opentelemetry.webp",
        take: "if your spans are otel, openissue reads them without an adapter. the reference lab has to pass on fixtures and on otel, or it doesn't count. openinference is the span shape i used in the lab fixtures.",
        usedIn: [P.openissue],
      },
      {
        id: "langsmith",
        name: "LangSmith",
        href: "https://www.langchain.com/langsmith",
        logo: "/tools/langsmith.webp",
        take: "simtest can turn a langsmith trace into a seed file, so a bad run becomes a test case instead of a screenshot.",
        usedIn: [P.simtest],
      },
    ],
  },
  {
    id: "evals",
    title: "evals",
    tools: [
      {
        id: "eve",
        name: "eve evals",
        href: "https://github.com/vercel/eve",
        logo: "/tools/eve.webp",
        take: "scaffolded the local research brain with it and fought the node version first. the smoke evals run on a deterministic shim so ci doesn't need a key. the live ones need a real model and a judge.",
        usedIn: [P.pocket],
      },
    ],
  },
  {
    id: "testing",
    title: "testing",
    tools: [
      {
        id: "vitest",
        name: "Vitest",
        href: "https://vitest.dev",
        logo: "/tools/vitest.webp",
        take: "where the boring checks live. the brain has a test that it refuses a live trade, which matters more than anything in the ui.",
        usedIn: [P.openissue, P.pocket, P.solana],
      },
      {
        id: "pytest",
        name: "pytest",
        href: "https://docs.pytest.org",
        logo: "/tools/pytest.webp",
        take: "default for the python side: simtest, gauntlet, and the sim engine.",
        usedIn: [P.simtest, P.solana],
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        href: "https://github.com/features/actions",
        logo: "/tools/github-actions.webp",
        take: "simtest runs on every pr as an eval gate. i added a branch that's supposed to fail, so i know the red actually shows up.",
        usedIn: [P.simtest],
      },
    ],
  },
  {
    id: "sims",
    title: "sims",
    tools: [
      {
        id: "surfpool",
        name: "Surfpool",
        href: "https://www.surfpool.run",
        logo: "/tools/surfpool.webp",
        take: "local solana validator i run exploit transactions against. gauntlet has a mock mode, but the real runs go through surfpool.",
        usedIn: [P.solana],
      },
    ],
  },
  {
    id: "models-infra",
    title: "models / infra",
    tools: [
      {
        id: "openai",
        name: "OpenAI API",
        href: "https://platform.openai.com/docs",
        logo: "/tools/openai.webp",
        take: "in openissue the model only explains what the detector found. structured output, store off, and it can't touch the counts. also showed up in gauntlet and sim-engine model runs.",
        usedIn: [P.openissue, P.solana],
      },
      {
        id: "anthropic",
        name: "Anthropic API",
        href: "https://docs.anthropic.com",
        logo: "/tools/anthropic.webp",
        take: "second provider in openissue, same contract as the first. also the anthropic path in the local research brain.",
        usedIn: [P.openissue, P.pocket],
      },
      {
        id: "ai-sdk",
        name: "Vercel AI SDK",
        href: "https://ai-sdk.dev",
        logo: "/tools/ai-sdk.webp",
        take: "wired into the local research brain via the anthropic provider. i'm not claiming live gateway judge evals here.",
        usedIn: [P.pocket],
      },
      {
        id: "openrouter",
        name: "OpenRouter",
        href: "https://openrouter.ai",
        logo: "/tools/openrouter.webp",
        take: "how we ran twelve models for beacon without twelve accounts. lossfunk gave us the credits.",
        usedIn: [P.beacon],
      },
    ],
  },
];

export const olderTools: Tool[] = [
  {
    id: "weave",
    name: "W&B Weave",
    href: "https://weave-docs.wandb.ai",
    logo: "/tools/weave.webp",
    take: "my first time wrapping a function so every call got logged. small 2024 notebook, but that's where traces started for me.",
    usedIn: [],
  },
  {
    id: "giskard",
    name: "Giskard",
    href: "https://www.giskard.ai",
    logo: "/tools/giskard.webp",
    take: "ran a hallucination scan on a rag model in late 2023. tutorial-level, be honest about that.",
    usedIn: [],
  },
  {
    id: "guardrails",
    name: "Guardrails AI",
    href: "https://www.guardrailsai.com",
    logo: "/tools/guardrails.webp",
    take: "early output validation experiment in 2023. a custom validator and a rail spec, nothing i ship on now.",
    usedIn: [],
  },
];

export const codeWith: CodeTool[] = [
  {
    id: "cursor",
    name: "Cursor",
    href: "https://cursor.com",
    logo: "/tools/cursor.webp",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    href: "https://claude.com/claude-code",
    logo: "/tools/claude-code.webp",
  },
  {
    id: "codex",
    name: "Codex",
    href: "https://openai.com/codex",
    logo: "/tools/codex.webp",
  },
  {
    id: "conductor",
    name: "Conductor",
    href: "https://conductor.build",
    logo: "/tools/conductor.webp",
  },
  {
    id: "coderabbit",
    name: "CodeRabbit",
    href: "https://www.coderabbit.ai",
    logo: "/tools/coderabbit.webp",
  },
];

export function projectHref(slug: string): string {
  return `/projects/${slug}/`;
}

export function projectAbsoluteHref(slug: string): string {
  return `${site.url}/projects/${slug}/`;
}

export function getToolsStats(): { toolCount: number; projectCount: number } {
  const tools = toolGroups.flatMap((g) => g.tools);
  const projects = new Set(tools.flatMap((t) => t.usedIn.map((u) => u.slug)));
  return { toolCount: tools.length, projectCount: projects.size };
}

export function buildToolsMarkdown(siteUrl: string = site.url): string {
  const { toolCount, projectCount } = getToolsStats();
  const sections = toolGroups
    .map((group) => {
      const lines = group.tools
        .map((tool) => {
          const used =
            tool.usedIn.length > 0
              ? ` used in: ${tool.usedIn
                  .map((u) => `[${u.label}](${projectAbsoluteHref(u.slug)})`)
                  .join(", ")}.`
              : "";
          return `- [${tool.name}](${tool.href}): ${tool.take}${used}`;
        })
        .join("\n");
      return `## ${group.title}\n\n${lines}`;
    })
    .join("\n\n");

  const older = olderTools
    .map((tool) => `- [${tool.name}](${tool.href}): ${tool.take}`)
    .join("\n");

  const code = codeWith
    .map((c) => `[${c.name}](${c.href})`)
    .join(", ");

  return `# ${toolsIntro.title}

> ${toolsIntro.lead}

${toolCount} tools, ${projectCount} projects.

Author: [${site.fullName}](${siteUrl}/)

${sections}

## older stuff

${older}

## what i code with

${code}

[html page](${siteUrl}/tools/) · [home](${siteUrl}/) · [llms.txt](${siteUrl}/llms.txt)
`;
}
