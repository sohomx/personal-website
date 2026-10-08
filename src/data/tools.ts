import { site } from "./content";

export type UsedIn = {
  slug: string;
  label: string;
};

export type ToolLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type BuiltThing = {
  id: string;
  name: string;
  logo: string;
  take: string;
  links: ToolLink[];
};

export type TestRule = {
  n: number;
  rule: string;
  detail: string;
  tags: string[];
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

export type WorthKnowing = {
  id: string;
  name: string;
  href: string;
  logo: string;
  org: string;
  take: string;
};

export type ReadingItem = {
  id: string;
  title: string;
  href: string;
  source: string;
  year: string;
  note: string;
};

export type CodeTool = {
  id: string;
  name: string;
  href: string;
  logo: string;
};

export const toolsIntro = {
  title: "how i test agents",
  lead: "things i built, the rules i ended up with, the tools that are actually in my repos, and a short list of things i think more people should know. the last two sections are reading, not usage.",
} as const;

const P = {
  openissue: { slug: "openissue", label: "openissue" },
  pocket: { slug: "pocket-probable", label: "pocket / probable" },
  beacon: { slug: "beacon", label: "beacon" },
  solana: { slug: "solana-agent-safety", label: "solana agent safety" },
  simtest: { slug: "simtest", label: "simtest" },
} as const;

export const thingsIBuilt: BuiltThing[] = [
  {
    id: "openissue",
    name: "openissue",
    logo: "/tools/openissue.webp",
    take: "turns langfuse or otel traces into incident packets where every claim points at a span. the detectors are deterministic. the model only explains what they found.",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@sxohom/openissue",
        external: true,
      },
      { label: "project", href: "/projects/openissue/" },
    ],
  },
  {
    id: "simtest",
    name: "simtest",
    logo: "/tools/simtest.webp",
    take: "fuzzes an agent graph in ci and fails the pr on a schema, policy, exception or cost break. a bad langsmith or autogen trace becomes a seed file instead of a screenshot.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sohomx/simtest",
        external: true,
      },
      { label: "project", href: "/projects/simtest/" },
    ],
  },
  {
    id: "gauntlet",
    name: "gauntlet",
    logo: "/tools/gauntlet.webp",
    take: "safety benchmark for solana agents, built with shrinath. a naive agent scores 100% on levels 0 to 2, then swaps into a token with freeze authority on level 3. refusing everything doesn't pass either.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/light-research/gauntlet",
        external: true,
      },
      { label: "project", href: "/projects/solana-agent-safety/" },
    ],
  },
  {
    id: "solana-sim-engine",
    name: "solana-sim-engine",
    logo: "/tools/solana-sim-engine.webp",
    take: "an llm writes exploit scenarios for a solana program, they run as real transactions on surfpool, and findings come back with cwe ids.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/light-research/solana-sim-engine",
        external: true,
      },
      { label: "project", href: "/projects/solana-agent-safety/" },
    ],
  },
  {
    id: "civic-gate",
    name: "civic truth engine eval gate",
    logo: "/tools/civic-gate.webp",
    take: "the gate fails on a pii leak, a hidden caveat, or a missing freshness note. on the last local run retrieval was 75 of 75 cases, precision@3 0.87, recall@5 0.90, forbidden@5 0.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sohomx/bengaluru-civic-truth-engine/blob/main/docs/evaluation.md",
        external: true,
      },
    ],
  },
];

export const testRules: TestRule[] = [
  {
    n: 1,
    rule: "a failure only counts if it happens twice.",
    detail:
      "when simtest finds a failure signature in ci, it reruns the audit twice before the pr goes red. flaky reds teach people to ignore red.",
    tags: ["simtest audit --runs 2", "github actions", "simtest"],
  },
  {
    n: 2,
    rule: "prove the gate can fail.",
    detail:
      "there's a `ci-test/stable-failure` branch that forces bad output on purpose. if that pr ever goes green, the gate is decoration.",
    tags: ["github actions", "simtest"],
  },
  {
    n: 3,
    rule: "ci shouldn't need an api key.",
    detail:
      "the smoke evals run on a deterministic shim and the civic gate has a deterministic provider (55 of 55). live model runs are a separate, explicit command, because a judge call isn't a unit test.",
    tags: ["eve", "vitest", "pocket / probable", "civic truth engine"],
  },
  {
    n: 4,
    rule: "a seeded trace proves the plumbing, not the incident.",
    detail:
      "seeding langfuse shows the read path works. it doesn't show that anyone had the problem. the reference lab has to pass through fixtures and through otel ingestion, or it doesn't count.",
    tags: ["langfuse", "opentelemetry", "openissue"],
  },
  {
    n: 5,
    rule: "the model explains, it doesn't count.",
    detail:
      "detectors decide what happened. the model gets structured output, `store: false`, and no way to change the numbers. in the civic engine the explanation can only use the evidence packet, never facts it found on its own.",
    tags: ["openai + anthropic apis", "openissue", "civic truth engine"],
  },
  {
    n: 6,
    rule: "test the refusal, and make refusing everything expensive.",
    detail:
      "the research brain has a test that it refuses a live trade. gauntlet rewards a correct refusal and docks an invalid one, so a model can't buy a safety score by saying no to everything.",
    tags: ["vitest", "pocket / probable", "gauntlet"],
  },
  {
    n: 7,
    rule: "sandbox the hands, read-only the eyes, cap the bill.",
    detail:
      "evals run the agent against just-bash, a fake shell. the openissue mcp server and the langfuse adapter are read-only. simtest has a dollar cap per run, a cost-spike verdict per node, and the quick fuzz stays under a dollar.",
    tags: [
      "just-bash",
      "mcp",
      "tiktoken",
      "pocket / probable",
      "openissue",
      "simtest",
    ],
  },
  {
    n: 8,
    rule: "a live proof only counts if the ids join up.",
    detail:
      "the telegram end-to-end tests send real chat-shaped prompts and check that the workflow id, tool trace, db row, ops row and delivery status all line up.",
    tags: ["telegram", "pocket"],
  },
];

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
        take: "the trace store openissue reads from. read-only on purpose.",
        usedIn: [P.openissue],
      },
      {
        id: "opentelemetry",
        name: "OpenTelemetry + OpenInference",
        href: "https://opentelemetry.io",
        logo: "/tools/opentelemetry.webp",
        take: "if your spans are otel, openissue reads them without an adapter. openinference is the span shape in the lab fixtures.",
        usedIn: [P.openissue],
      },
      {
        id: "trace-import",
        name: "LangSmith + AutoGen trace import",
        href: "https://www.langchain.com/langsmith",
        logo: "/tools/langsmith.webp",
        take: "simtest imports langsmith runs and autogen spans and turns them into seed files.",
        usedIn: [P.simtest],
      },
    ],
  },
  {
    id: "harness",
    title: "harness and evals",
    tools: [
      {
        id: "eve",
        name: "eve",
        href: "https://github.com/vercel/eve",
        logo: "/tools/eve.webp",
        take: "the local research brain is scaffolded on it. smoke evals run on a deterministic shim. the live ones are a separate strict run with junit output.",
        usedIn: [P.pocket],
      },
      {
        id: "vitest",
        name: "Vitest",
        href: "https://vitest.dev",
        logo: "/tools/vitest.webp",
        take: "where the boring checks live, including the live-trade refusal test.",
        usedIn: [P.openissue, P.pocket, P.solana],
      },
      {
        id: "pytest",
        name: "pytest",
        href: "https://docs.pytest.org",
        logo: "/tools/pytest.webp",
        take: "the python side: simtest, gauntlet, the sim engine.",
        usedIn: [P.simtest, P.solana],
      },
    ],
  },
  {
    id: "sandboxes",
    title: "sandboxes and sims",
    tools: [
      {
        id: "just-bash",
        name: "just-bash",
        href: "https://github.com/vercel-labs/just-bash",
        logo: "/tools/just-bash.webp",
        take: "a fake bash for eval runs, set as the sandbox backend in every eval script, so the agent can't touch anything real while it's being graded.",
        usedIn: [P.pocket],
      },
      {
        id: "surfpool",
        name: "Surfpool",
        href: "https://www.surfpool.run",
        logo: "/tools/surfpool.webp",
        take: "local solana validator. gauntlet and the sim engine have mock modes, but the real runs go through surfpool.",
        usedIn: [P.solana],
      },
    ],
  },
  {
    id: "ci-cost",
    title: "ci gates and cost",
    tools: [
      {
        id: "github-actions",
        name: "GitHub Actions",
        href: "https://github.com/features/actions",
        logo: "/tools/github-actions.webp",
        take: "the gate, plus a branch that's supposed to fail.",
        usedIn: [P.simtest],
      },
      {
        id: "tiktoken",
        name: "tiktoken",
        href: "https://github.com/openai/tiktoken",
        logo: "/tools/tiktoken.webp",
        take: "token counts for seed generation. the run itself has a dollar cap, `--max-cost`, $3 by default.",
        usedIn: [P.simtest],
      },
      {
        id: "telegram",
        name: "Telegram bots (live proof)",
        href: "https://core.telegram.org/bots",
        logo: "/tools/telegram.webp",
        take: "end-to-end tests that go through the real chat surface, not a mocked handler.",
        usedIn: [P.pocket],
      },
    ],
  },
  {
    id: "interfaces",
    title: "interfaces",
    tools: [
      {
        id: "mcp",
        name: "MCP",
        href: "https://modelcontextprotocol.io",
        logo: "/tools/mcp.webp",
        take: "`openissue-mcp` is a read-only stdio server. a coding agent can read findings, not edit them, and it never writes to langfuse, slack or github.",
        usedIn: [P.openissue],
      },
    ],
  },
  {
    id: "models",
    title: "models",
    tools: [
      {
        id: "openai",
        name: "OpenAI API",
        href: "https://platform.openai.com/docs",
        logo: "/tools/openai.webp",
        take: "default provider in openissue, structured outputs with store off. also the gauntlet model runs.",
        usedIn: [P.openissue, P.solana],
      },
      {
        id: "anthropic",
        name: "Anthropic API",
        href: "https://docs.anthropic.com",
        logo: "/tools/anthropic.webp",
        take: "second provider, held to the same contract as the first.",
        usedIn: [P.openissue, P.pocket],
      },
      {
        id: "openrouter",
        name: "OpenRouter",
        href: "https://openrouter.ai",
        logo: "/tools/openrouter.webp",
        take: "how we ran twelve models for beacon without twelve accounts. lossfunk paid for the credits.",
        usedIn: [P.beacon],
      },
      {
        id: "ai-sdk",
        name: "Vercel AI SDK",
        href: "https://ai-sdk.dev",
        logo: "/tools/ai-sdk.webp",
        take: "the anthropic provider in the research brain. wired for the live judge evals; not claiming they ran end to end.",
        usedIn: [P.pocket],
      },
    ],
  },
];

export const worthKnowingLead =
  "not tools i use. things i think more people building agents should know about.";

export const worthKnowing: WorthKnowing[] = [
  {
    id: "inspect",
    name: "Inspect",
    href: "https://inspect.aisi.org.uk/",
    logo: "/tools/inspect.webp",
    org: "UK AI Security Institute + Meridian Labs",
    take: "dataset, solver, scorer, sandbox, and a log viewer that makes you read transcripts. metr moved its own agent evals onto it.",
  },
  {
    id: "metr",
    name: "METR Task Standard",
    href: "https://github.com/METR/task-standard",
    logo: "/tools/metr.webp",
    org: "METR",
    take: "a task is an environment, an instruction string, and a score function, so tasks can move between labs. their old runner, vivaria, is winding down in favour of inspect.",
  },
  {
    id: "tau2",
    name: "τ²-bench",
    href: "https://github.com/sierra-research/tau2-bench",
    logo: "/tools/tau2.webp",
    org: "Sierra",
    take: "grades the database at the end, not the transcript. pass^k asks whether the agent gets it right every time, not once. in τ² the simulated user can use tools too.",
  },
  {
    id: "agentdojo",
    name: "AgentDojo",
    href: "https://agentdojo.spylab.ai/",
    logo: "/tools/agentdojo.webp",
    org: "ETH Zurich SPY Lab",
    take: "prompt injection where it actually lands, inside tool outputs. it reports utility under attack next to attack success, so a defense that breaks the agent doesn't count as a win.",
  },
  {
    id: "petri",
    name: "Petri",
    href: "https://github.com/meridianlabs-ai/inspect_petri",
    logo: "/tools/petri.webp",
    org: "built by Anthropic, now maintained with Meridian Labs and UK AISI",
    take: "an auditor agent writes the scenario, plays the user and the tools, and a judge scores the transcript. the 2.0 notes on models noticing they're being tested are worth reading even if you never run it.",
  },
  {
    id: "terminal-bench",
    name: "Terminal-Bench 2.0 + Harbor",
    href: "https://www.tbench.ai/",
    logo: "/tools/terminal-bench.webp",
    org: "Terminal-Bench team",
    take: "89 tasks in real containers, rechecked by hand after 1.0 shipped tasks that broke on their own. harbor runs any agent you can install in a container.",
  },
  {
    id: "docent",
    name: "Docent",
    href: "https://transluce.org/docent",
    logo: "/tools/docent.webp",
    org: "Transluce",
    take: "search, cluster and rubric-grade thousands of agent transcripts. most eval bugs get found by reading runs, and this makes reading cheaper. it takes inspect logs.",
  },
  {
    id: "hal",
    name: "HAL",
    href: "https://hal.cs.princeton.edu/",
    logo: "/tools/hal.webp",
    org: "Princeton",
    take: "puts dollar cost on the same chart as accuracy and draws the pareto frontier. then they paused the leaderboard to measure reliability, which tells you where agents actually are.",
  },
  {
    id: "otel-genai",
    name: "OpenTelemetry GenAI conventions",
    href: "https://opentelemetry.io/docs/specs/semconv/gen-ai/",
    logo: "/tools/otel-genai.webp",
    org: "OpenTelemetry",
    take: "shared names for llm and agent spans: `invoke_agent`, `execute_tool`, `gen_ai.*`. still marked development, so pin a version. if traces are going to be eval data, this is the schema to bet on.",
  },
  {
    id: "phoenix",
    name: "Arize Phoenix",
    href: "https://github.com/Arize-ai/phoenix",
    logo: "/tools/phoenix.webp",
    org: "Arize",
    take: "open-source, self-hosted tracing and evals built on openinference, the same span shape as the openissue lab fixtures.",
  },
];

export const readingLead =
  "four i shared in january about what not to do when building a benchmark, and a few more on measuring properly.";

export const readingList: ReadingItem[] = [
  {
    id: "how2bench",
    title:
      "How Should We Build A Benchmark? Revisiting 274 Code-Related Benchmarks For LLMs",
    href: "https://arxiv.org/abs/2501.10711",
    source: "Cao et al. (How2Bench)",
    year: "2025",
    note: "audited 274 code benchmarks. nearly 70% had no data quality checks.",
  },
  {
    id: "how-to-build",
    title: "How to Build a Benchmark",
    href: "https://research.spec.org/icpe_proceedings/2015/proceedings/p333.pdf",
    source: "v. Kistowski et al., ICPE",
    year: "2015",
    note: "from the spec people, ten years before llms. relevance, reproducibility, fairness, verifiability, usability.",
  },
  {
    id: "benchmarks-101",
    title: "Benchmarks 101",
    href: "https://www.aspendigital.org/report/benchmarks-101/",
    source: "Aspen Digital",
    year: "2024",
    note: "the plain-language version, good to send to someone who isn't in evals.",
  },
  {
    id: "betterbench",
    title: "BetterBench methodology",
    href: "https://betterbench.stanford.edu/methodology.html",
    source: "Stanford",
    year: "2024",
    note: "46 criteria for grading benchmarks themselves, applied to 24 widely used ones. the quality spread is wide.",
  },
  {
    id: "error-bars",
    title: "Adding Error Bars to Evals",
    href: "https://arxiv.org/abs/2411.00640",
    source: "Evan Miller (Anthropic)",
    year: "2024",
    note: "treat eval questions as a sample, report standard errors, cluster related questions, compare models question by question.",
  },
  {
    id: "agentic-checklist",
    title:
      "Establishing Best Practices for Building Rigorous Agentic Benchmarks",
    href: "https://arxiv.org/abs/2507.02825",
    source: "Zhu et al., NeurIPS",
    year: "2025",
    note: "a checklist for agent benchmarks: task validity, outcome validity, and honest reporting. includes checking what a do-nothing agent scores.",
  },
  {
    id: "validators",
    title: "Who Validates the Validators?",
    href: "https://arxiv.org/abs/2404.12272",
    source: "Shankar et al., UIST",
    year: "2024",
    note: "you can't write the grading criteria before you've seen outputs. they call it criteria drift.",
  },
  {
    id: "agents-that-matter",
    title: "AI Agents That Matter",
    href: "https://arxiv.org/abs/2407.01502",
    source: "Kapoor, Stroebl, Siegel, Nadgir, Narayanan",
    year: "2024",
    note: "accuracy without cost is not a result. on humaneval, simple retry baselines match or beat complex agents for far less money.",
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

export function buildToolsMarkdown(siteUrl: string = site.url): string {
  const built = thingsIBuilt
    .map((item) => {
      const links = item.links
        .map((l) => {
          const href = l.href.startsWith("http")
            ? l.href
            : `${siteUrl}${l.href}`;
          return `[${l.label}](${href})`;
        })
        .join(", ");
      return `- **${item.name}** (${links}): ${item.take}`;
    })
    .join("\n");

  const rules = testRules
    .map(
      (r) =>
        `${r.n}. **${r.rule}** ${r.detail}\n   \`${r.tags.join(" · ")}\``,
    )
    .join("\n\n");

  const stack = toolGroups
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
      return `### ${group.title}\n\n${lines}`;
    })
    .join("\n\n");

  const knowing = worthKnowing
    .map(
      (item) =>
        `- [${item.name}](${item.href}) (${item.org}): ${item.take}`,
    )
    .join("\n");

  const reading = readingList
    .map(
      (item) =>
        `- [${item.title}](${item.href}) · ${item.source}, ${item.year}. ${item.note}`,
    )
    .join("\n");

  const code = codeWith.map((c) => `[${c.name}](${c.href})`).join(", ");

  return `# ${toolsIntro.title}

> ${toolsIntro.lead}

Author: [${site.fullName}](${siteUrl}/)

## things i built

${built}

## how i test agents

${rules}

## the stack

${stack}

## worth knowing (not tools i use)

${worthKnowingLead}

${knowing}

## reading on benchmarks

${readingLead}

${reading}

## what i code with

${code}

[html page](${siteUrl}/tools/) · [home](${siteUrl}/) · [llms.txt](${siteUrl}/llms.txt)
`;
}
