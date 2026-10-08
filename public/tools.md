# tools i use for evals and agent testing

> things that showed up in my own repos or in how i talk about the work. project names link to pages on this site.

Author: [Sohom Pal](https://sxohom.xyz/)

## tracing

- [Langfuse](https://langfuse.com): the trace store [openissue](https://sxohom.xyz/projects/openissue/) reads from. read-only on purpose. a seeded trace proves the api path works, not that anyone had the incident.
- [OpenTelemetry + OpenInference](https://opentelemetry.io): if your spans are otel, [openissue](https://sxohom.xyz/projects/openissue/) reads them without an adapter. the reference lab has to pass on fixtures and on otel, or it doesn't count. openinference is the span shape i used in the lab fixtures.
- [LangSmith](https://www.langchain.com/langsmith): [simtest](https://sxohom.xyz/projects/simtest/) can turn a langsmith trace into a seed file, so a bad run becomes a test case instead of a screenshot.

## evals

- [eve evals](https://github.com/vercel/eve): scaffolded the local research brain for [pocket / probable](https://sxohom.xyz/projects/pocket-probable/) with it and fought the node version first. the smoke evals run on a deterministic shim so ci doesn't need a key. the live ones need a real model and a judge.

## testing

- [Vitest](https://vitest.dev): where the boring checks live for [openissue](https://sxohom.xyz/projects/openissue/), [pocket / probable](https://sxohom.xyz/projects/pocket-probable/), and the idl agent under [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/). the brain has a test that it refuses a live trade, which matters more than anything in the ui.
- [pytest](https://docs.pytest.org): default for the python side: [simtest](https://sxohom.xyz/projects/simtest/), gauntlet, and the sim engine under [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [GitHub Actions](https://github.com/features/actions): [simtest](https://sxohom.xyz/projects/simtest/) runs on every pr as an eval gate. i added a branch that's supposed to fail, so i know the red actually shows up.

## sims

- [Surfpool](https://www.surfpool.run): local solana validator i run exploit transactions against for [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/). gauntlet has a mock mode, but the real runs go through surfpool.

## models / infra

- [OpenAI API](https://platform.openai.com/docs): in [openissue](https://sxohom.xyz/projects/openissue/) the model only explains what the detector found. structured output, store off, and it can't touch the counts. also showed up in gauntlet and sim-engine model runs under [solana agent safety](https://sxohom.xyz/projects/solana-agent-safety/).
- [Anthropic API](https://docs.anthropic.com): second provider in [openissue](https://sxohom.xyz/projects/openissue/), same contract as the first. also the anthropic path in the local research brain for [pocket / probable](https://sxohom.xyz/projects/pocket-probable/).
- [Vercel AI SDK](https://ai-sdk.dev): wired into the local research brain for [pocket / probable](https://sxohom.xyz/projects/pocket-probable/) via the anthropic provider. i'm not claiming live gateway judge evals here.
- [OpenRouter](https://openrouter.ai): how we ran twelve models for [beacon](https://sxohom.xyz/projects/beacon/) without twelve accounts. lossfunk gave us the credits.

## older stuff

- [W&B Weave](https://weave-docs.wandb.ai): my first time wrapping a function so every call got logged. small 2024 notebook, but that's where traces started for me.
- [Giskard](https://www.giskard.ai): ran a hallucination scan on a rag model in late 2023. tutorial-level, be honest about that.
- [Guardrails AI](https://www.guardrailsai.com): early output validation experiment in 2023. a custom validator and a rail spec, nothing i ship on now.

## what i code with

cursor, claude code, codex, conductor, coderabbit

[html page](https://sxohom.xyz/tools/) · [home](https://sxohom.xyz/) · [llms.txt](https://sxohom.xyz/llms.txt)
