# tools i use for evals and agent testing

> things that showed up in my own repos or in how i talk about the work. logos link out; chips link to project pages on this site.

12 tools, 5 projects.

Author: [Sohom Pal](https://sxohom.xyz/)

## tracing

- [Langfuse](https://langfuse.com): the trace store openissue reads from. read-only on purpose. a seeded trace proves the api path works, not that anyone had the incident. used in: [openissue](https://sxohom.xyz/projects/openissue/).
- [OpenTelemetry + OpenInference](https://opentelemetry.io): if your spans are otel, openissue reads them without an adapter. the reference lab has to pass on fixtures and on otel, or it doesn't count. openinference is the span shape i used in the lab fixtures. used in: [openissue](https://sxohom.xyz/projects/openissue/).
- [LangSmith](https://www.langchain.com/langsmith): simtest can turn a langsmith trace into a seed file, so a bad run becomes a test case instead of a screenshot. used in: [simtest](https://sxohom.xyz/projects/simtest/).

## evals

- [eve evals](https://github.com/vercel/eve): scaffolded the local research brain with it and fought the node version first. the smoke evals run on a deterministic shim so ci doesn't need a key. the live ones need a real model and a judge. used in: [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).

## testing

- [Vitest](https://vitest.dev): where the boring checks live. the brain has a test that it refuses a live trade, which matters more than anything in the ui. used in: [openissue](https://sxohom.xyz/projects/openissue/), [pocket / probable](https://sxohom.xyz/projects/pocket-probable/), [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [pytest](https://docs.pytest.org): default for the python side: simtest, gauntlet, and the sim engine. used in: [simtest](https://sxohom.xyz/projects/simtest/), [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [GitHub Actions](https://github.com/features/actions): simtest runs on every pr as an eval gate. i added a branch that's supposed to fail, so i know the red actually shows up. used in: [simtest](https://sxohom.xyz/projects/simtest/).

## sims

- [Surfpool](https://www.surfpool.run): local solana validator i run exploit transactions against. gauntlet has a mock mode, but the real runs go through surfpool. used in: [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).

## models / infra

- [OpenAI API](https://platform.openai.com/docs): in openissue the model only explains what the detector found. structured output, store off, and it can't touch the counts. also showed up in gauntlet and sim-engine model runs. used in: [openissue](https://sxohom.xyz/projects/openissue/), [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [Anthropic API](https://docs.anthropic.com): second provider in openissue, same contract as the first. also the anthropic path in the local research brain. used in: [openissue](https://sxohom.xyz/projects/openissue/), [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).
- [Vercel AI SDK](https://ai-sdk.dev): wired into the local research brain via the anthropic provider. i'm not claiming live gateway judge evals here. used in: [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).
- [OpenRouter](https://openrouter.ai): how we ran twelve models for beacon without twelve accounts. lossfunk gave us the credits. used in: [beacon](https://sxohom.xyz/projects/beacon/).

## older stuff

- [W&B Weave](https://weave-docs.wandb.ai): my first time wrapping a function so every call got logged. small 2024 notebook, but that's where traces started for me.
- [Giskard](https://www.giskard.ai): ran a hallucination scan on a rag model in late 2023. tutorial-level, be honest about that.
- [Guardrails AI](https://www.guardrailsai.com): early output validation experiment in 2023. a custom validator and a rail spec, nothing i ship on now.

## what i code with

[Cursor](https://cursor.com), [Claude Code](https://claude.com/claude-code), [Codex](https://openai.com/codex), [Conductor](https://conductor.build), [CodeRabbit](https://www.coderabbit.ai)

[html page](https://sxohom.xyz/tools/) · [home](https://sxohom.xyz/) · [llms.txt](https://sxohom.xyz/llms.txt)
