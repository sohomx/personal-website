# simtest

> fuzz agents in ci · 2026

Author: [Sohom Pal](https://sxohom.xyz/)

i wrote this because agents don't get tested the way apis do. nobody fuzzes them. you get a few prompts that look like the demo, and the weird task shows up later, in front of a user, or as a bill. simtest throws multi-step tasks at the agent and fails the pr if the schema breaks, the policy breaks, or the cost budget breaks. red or green. i would rather see it on the pull request than in a postmortem.

you don't need an openai key for the basic schema and exception tests. that mattered to me. if the cheap path needs a model, people won't run it. the seeds are supposed to look like a real user, an attacker, or an audit, not like a template with the nouns swapped. the seed builder i ran kept a few dozen high-signal prompts out of a few hundred generated ones. i don't want a thousand near-duplicates making the suite look serious.

the ci rules are boring on purpose. a quick fuzz is a hundred seeds, under a minute, under a dollar. the default cap is a few dollars so a loop can't wander off. if the noise between runs gets too high, or the cost jumps, the check fails. an agent test that isn't deterministic is just a vibe with extra steps. it can take traces from the frameworks people already use, langgraph, crewai, autogen, langsmith. the point is not another harness you have to adopt. the point is that the pr goes red when the agent gets worse in a way you can name.

## what i did

- i built ci fuzzing for multi-step agents: schema, policy, or cost budget breaks fail the pr.
- i kept a no-key path for basic schema and exception tests so the suite actually runs.
- i wrote a seed builder that keeps a few dozen high-signal prompts, not a thousand near-duplicates.

## how

- quick fuzz: about 100 seeds, under a minute, under a dollar. default cost cap so loops can't wander.
- fails on noise spikes and cost jumps. if it isn't deterministic, it isn't a test.
- plugs into traces from langgraph, crewai, autogen, langsmith.

## artifacts

- [GitHub](https://github.com/sohomx/simtest)

## links

- [html page](https://sxohom.xyz/projects/simtest/)
- [home](https://sxohom.xyz/)
- [llms.txt](https://sxohom.xyz/llms.txt)
