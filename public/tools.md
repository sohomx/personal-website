# how i test agents

> things i built, the rules i ended up with, the tools that are actually in my repos, and a short list of things i think more people should know. the last two sections are reading, not usage.

Author: [Sohom Pal](https://sxohom.xyz/)

## things i built

- **openissue** ([npm](https://www.npmjs.com/package/@sxohom/openissue), [project](https://sxohom.xyz/projects/openissue/)): turns langfuse or otel traces into incident packets where every claim points at a span. the detectors are deterministic. the model only explains what they found.
- **simtest** ([GitHub](https://github.com/sohomx/simtest), [project](https://sxohom.xyz/projects/simtest/)): fuzzes an agent graph in ci and fails the pr on a schema, policy, exception or cost break. a bad langsmith or autogen trace becomes a seed file instead of a screenshot.
- **gauntlet** ([GitHub](https://github.com/light-research/gauntlet), [project](https://sxohom.xyz/projects/solana-agent-safety/)): safety benchmark for solana agents, built with shrinath. a naive agent scores 100% on levels 0 to 2, then swaps into a token with freeze authority on level 3. refusing everything doesn't pass either.
- **solana-sim-engine** ([GitHub](https://github.com/light-research/solana-sim-engine), [project](https://sxohom.xyz/projects/solana-agent-safety/)): an llm writes exploit scenarios for a solana program, they run as real transactions on surfpool, and findings come back with cwe ids.
- **civic truth engine eval gate** ([GitHub](https://github.com/sohomx/bengaluru-civic-truth-engine/blob/main/docs/evaluation.md)): the gate fails on a pii leak, a hidden caveat, or a missing freshness note. on the last local run retrieval was 75 of 75 cases, precision@3 0.87, recall@5 0.90, forbidden@5 0.

## how i test agents

1. **a failure only counts if it happens twice.** when simtest finds a failure signature in ci, it reruns the audit twice before the pr goes red. flaky reds teach people to ignore red.
   `simtest audit --runs 2 · github actions · simtest`

2. **prove the gate can fail.** there's a `ci-test/stable-failure` branch that forces bad output on purpose. if that pr ever goes green, the gate is decoration.
   `github actions · simtest`

3. **ci shouldn't need an api key.** the smoke evals run on a deterministic shim and the civic gate has a deterministic provider (55 of 55). live model runs are a separate, explicit command, because a judge call isn't a unit test.
   `eve · vitest · pocket / probable · civic truth engine`

4. **a seeded trace proves the plumbing, not the incident.** seeding langfuse shows the read path works. it doesn't show that anyone had the problem. the reference lab has to pass through fixtures and through otel ingestion, or it doesn't count.
   `langfuse · opentelemetry · openissue`

5. **the model explains, it doesn't count.** detectors decide what happened. the model gets structured output, `store: false`, and no way to change the numbers. in the civic engine the explanation can only use the evidence packet, never facts it found on its own.
   `openai + anthropic apis · openissue · civic truth engine`

6. **test the refusal, and make refusing everything expensive.** the research brain has a test that it refuses a live trade. gauntlet rewards a correct refusal and docks an invalid one, so a model can't buy a safety score by saying no to everything.
   `vitest · pocket / probable · gauntlet`

7. **sandbox the hands, read-only the eyes, cap the bill.** evals run the agent against just-bash, a fake shell. the openissue mcp server and the langfuse adapter are read-only. simtest has a dollar cap per run, a cost-spike verdict per node, and the quick fuzz stays under a dollar.
   `just-bash · mcp · tiktoken · pocket / probable · openissue · simtest`

8. **a live proof only counts if the ids join up.** the telegram end-to-end tests send real chat-shaped prompts and check that the workflow id, tool trace, db row, ops row and delivery status all line up.
   `telegram · pocket`

## the stack

### tracing

- [Langfuse](https://langfuse.com): the trace store openissue reads from. read-only on purpose. used in: [openissue](https://sxohom.xyz/projects/openissue/).
- [OpenTelemetry + OpenInference](https://opentelemetry.io): if your spans are otel, openissue reads them without an adapter. openinference is the span shape in the lab fixtures. used in: [openissue](https://sxohom.xyz/projects/openissue/).
- [LangSmith + AutoGen trace import](https://www.langchain.com/langsmith): simtest imports langsmith runs and autogen spans and turns them into seed files. used in: [simtest](https://sxohom.xyz/projects/simtest/).

### harness and evals

- [eve](https://github.com/vercel/eve): the local research brain is scaffolded on it. smoke evals run on a deterministic shim. the live ones are a separate strict run with junit output. used in: [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).
- [Vitest](https://vitest.dev): where the boring checks live, including the live-trade refusal test. used in: [openissue](https://sxohom.xyz/projects/openissue/), [pocket / probable](https://sxohom.xyz/projects/pocket-probable/), [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [pytest](https://docs.pytest.org): the python side: simtest, gauntlet, the sim engine. used in: [simtest](https://sxohom.xyz/projects/simtest/), [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).

### sandboxes and sims

- [just-bash](https://github.com/vercel-labs/just-bash): a fake bash for eval runs, set as the sandbox backend in every eval script, so the agent can't touch anything real while it's being graded. used in: [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).
- [Surfpool](https://www.surfpool.run): local solana validator. gauntlet and the sim engine have mock modes, but the real runs go through surfpool. used in: [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).

### ci gates and cost

- [GitHub Actions](https://github.com/features/actions): the gate, plus a branch that's supposed to fail. used in: [simtest](https://sxohom.xyz/projects/simtest/).
- [tiktoken](https://github.com/openai/tiktoken): token counts for seed generation. the run itself has a dollar cap, `--max-cost`, $3 by default. used in: [simtest](https://sxohom.xyz/projects/simtest/).
- [Telegram bots (live proof)](https://core.telegram.org/bots): end-to-end tests that go through the real chat surface, not a mocked handler. used in: [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).

### interfaces

- [MCP](https://modelcontextprotocol.io): `openissue-mcp` is a read-only stdio server. a coding agent can read findings, not edit them, and it never writes to langfuse, slack or github. used in: [openissue](https://sxohom.xyz/projects/openissue/).

### models

- [OpenAI API](https://platform.openai.com/docs): default provider in openissue, structured outputs with store off. also the gauntlet model runs. used in: [openissue](https://sxohom.xyz/projects/openissue/), [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [Anthropic API](https://docs.anthropic.com): second provider, held to the same contract as the first. used in: [openissue](https://sxohom.xyz/projects/openissue/), [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).
- [OpenRouter](https://openrouter.ai): how we ran twelve models for beacon without twelve accounts. lossfunk paid for the credits. used in: [beacon](https://sxohom.xyz/projects/beacon/).
- [Vercel AI SDK](https://ai-sdk.dev): the anthropic provider in the research brain. wired for the live judge evals; not claiming they ran end to end. used in: [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).

## worth knowing (not tools i use)

not tools i use. things i think more people building agents should know about.

- [Inspect](https://inspect.aisi.org.uk/) (UK AI Security Institute + Meridian Labs): dataset, solver, scorer, sandbox, and a log viewer that makes you read transcripts. metr moved its own agent evals onto it.
- [METR Task Standard](https://github.com/METR/task-standard) (METR): a task is an environment, an instruction string, and a score function, so tasks can move between labs. their old runner, vivaria, is winding down in favour of inspect.
- [τ²-bench](https://github.com/sierra-research/tau2-bench) (Sierra): grades the database at the end, not the transcript. pass^k asks whether the agent gets it right every time, not once. in τ² the simulated user can use tools too.
- [AgentDojo](https://agentdojo.spylab.ai/) (ETH Zurich SPY Lab): prompt injection where it actually lands, inside tool outputs. it reports utility under attack next to attack success, so a defense that breaks the agent doesn't count as a win.
- [Petri](https://github.com/meridianlabs-ai/inspect_petri) (built by Anthropic, now maintained with Meridian Labs and UK AISI): an auditor agent writes the scenario, plays the user and the tools, and a judge scores the transcript. the 2.0 notes on models noticing they're being tested are worth reading even if you never run it.
- [Terminal-Bench 2.0 + Harbor](https://www.tbench.ai/) (Terminal-Bench team): 89 tasks in real containers, rechecked by hand after 1.0 shipped tasks that broke on their own. harbor runs any agent you can install in a container.
- [Docent](https://transluce.org/docent) (Transluce): search, cluster and rubric-grade thousands of agent transcripts. most eval bugs get found by reading runs, and this makes reading cheaper. it takes inspect logs.
- [HAL](https://hal.cs.princeton.edu/) (Princeton): puts dollar cost on the same chart as accuracy and draws the pareto frontier. then they paused the leaderboard to measure reliability, which tells you where agents actually are.
- [OpenTelemetry GenAI conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) (OpenTelemetry): shared names for llm and agent spans: `invoke_agent`, `execute_tool`, `gen_ai.*`. still marked development, so pin a version. if traces are going to be eval data, this is the schema to bet on.
- [Arize Phoenix](https://github.com/Arize-ai/phoenix) (Arize): open-source, self-hosted tracing and evals built on openinference, the same span shape as the openissue lab fixtures.

## reading on benchmarks

four i shared in january about what not to do when building a benchmark, and a few more on measuring properly.

- [How Should We Build A Benchmark? Revisiting 274 Code-Related Benchmarks For LLMs](https://arxiv.org/abs/2501.10711) · Cao et al. (How2Bench), 2025. audited 274 code benchmarks. nearly 70% had no data quality checks.
- [How to Build a Benchmark](https://research.spec.org/icpe_proceedings/2015/proceedings/p333.pdf) · v. Kistowski et al., ICPE, 2015. from the spec people, ten years before llms. relevance, reproducibility, fairness, verifiability, usability.
- [Benchmarks 101](https://www.aspendigital.org/report/benchmarks-101/) · Aspen Digital, 2024. the plain-language version, good to send to someone who isn't in evals.
- [BetterBench methodology](https://betterbench.stanford.edu/methodology.html) · Stanford, 2024. 46 criteria for grading benchmarks themselves, applied to 24 widely used ones. the quality spread is wide.
- [Adding Error Bars to Evals](https://arxiv.org/abs/2411.00640) · Evan Miller (Anthropic), 2024. treat eval questions as a sample, report standard errors, cluster related questions, compare models question by question.
- [Establishing Best Practices for Building Rigorous Agentic Benchmarks](https://arxiv.org/abs/2507.02825) · Zhu et al., NeurIPS, 2025. a checklist for agent benchmarks: task validity, outcome validity, and honest reporting. includes checking what a do-nothing agent scores.
- [Who Validates the Validators?](https://arxiv.org/abs/2404.12272) · Shankar et al., UIST, 2024. you can't write the grading criteria before you've seen outputs. they call it criteria drift.
- [AI Agents That Matter](https://arxiv.org/abs/2407.01502) · Kapoor, Stroebl, Siegel, Nadgir, Narayanan, 2024. accuracy without cost is not a result. on humaneval, simple retry baselines match or beat complex agents for far less money.

## what i code with

[Cursor](https://cursor.com), [Claude Code](https://claude.com/claude-code), [Codex](https://openai.com/codex), [Conductor](https://conductor.build), [CodeRabbit](https://www.coderabbit.ai)

[html page](https://sxohom.xyz/tools/) · [home](https://sxohom.xyz/) · [llms.txt](https://sxohom.xyz/llms.txt)
