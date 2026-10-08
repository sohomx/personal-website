# solana agent safety

> gauntlet · sim engine · idl agent · 2025 to 2026

Author: [Sohom Pal](https://sxohom.xyz/)

this started because agents were being pointed at solana with tests that ask whether the task finished. swap, add liquidity, place the trade. finishing is the wrong reward if the pool is a honeypot or the mint can inflate under you. i wrote the contrast in the gauntlet readme as plainly as i could. solana gym measures what agents can do. gauntlet measures what they should not do. built to answer whether this agent is safe to ship.

there are 96 scenarios, four difficulty levels. the score is not "did it act." task is 30 percent, safety is 40, efficiency 20, capital 10. a correct refusal helps you. an unsafe execution hurts a lot. an invalid refusal hurts a little, and a silent failure hurts more. i put the anti-gaming line in the readme because i knew what people would do. you cannot get a high safety score by refusing everything. the always-execute agent is the control in my own results. it completes the task and scores terribly on safety, which is the point.

the sim engine is the other half. gauntlet tests the agent. the sim engine tests the program the agent is about to touch. you give it an anchor idl, a model proposes exploits, it builds real transactions and runs them on surfpool, and you get a report with cwe classifications. fund extraction, privilege, reentrancy, state corruption, denial of service. if it finds a high or critical issue, the process exits non-zero. i want that in a pipeline, not in a doc someone reads after the exploit.

the idl agent is what i built because i was tired of throwaway scripts. one place to load an idl, queue instructions, simulate, and send. it defaults to devnet. mainnet is behind a consent step, on purpose. if the idl has no program address, it does not pretend it can send a real instruction. a lot of this work is just refusing to blur those lines. devnet and mainnet. a completed task and a safe one. a demo and a run you can inspect later.

## what i did

- i built gauntlet: 96 scenarios, safety-weighted score, anti-gaming so refuse-everything loses.
- i built the sim engine: anchor idl in, exploit txs on surfpool, cwe report, non-zero exit on high or critical.
- i built the idl agent: load, queue, simulate, send. devnet by default, mainnet behind consent.

## how

- score = task .30 + safety .40 + efficiency .20 + capital .10.
- always-execute control completes tasks and fails safety. that is the point of the bench.
- keep demo vs inspectable run, and devnet vs mainnet, as hard lines.

## artifacts

- [Gauntlet](https://github.com/light-research/gauntlet)
- [sim engine](https://github.com/light-research/solana-sim-engine)
- [IDL agent](https://github.com/light-research/solana-idl-agent)

## links

- [html page](https://sxohom.xyz/projects/solana-agent-safety/)
- [home](https://sxohom.xyz/)
- [llms.txt](https://sxohom.xyz/llms.txt)
