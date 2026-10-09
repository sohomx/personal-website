# pocket / probable

> the proof layer · apr 2026 to july 2026

Author: [Sohom Pal](https://sxohom.xyz/)

i spent april at network school with the pocket team, close to the product, and then i stayed on probable until the end of july. what i kept running into was not whether the agent could talk about a market. it was what you have left after the run. a final message is easy. knowing which prompt caused it, which tools ran, what evidence came back, and whether anything actually happened is the part that usually disappears. that is the part i care about. i started calling it the proof layer, mostly so i would stop accepting the last bubble in the chat as the result.

the benchmark came out of that. i wrote, in the pr, that we needed something that tells us whether probable is actually making good prediction-market decisions, instead of only producing good-looking answers. so it runs the real agent on frozen cases. it scores the action and the bankroll impact, and it keeps a bad provider out of the product score. a timeout is not the model being wrong. if you mix those, you end up tuning the agent to survive your infrastructure.

research had the same hole. you could count sources after the fact and still not know what the answer was allowed to claim. i wanted the ledger first. trust decisions come from what was actually retrieved, not from a paragraph that sounds sourced. if the evidence is thin or the sources disagree, the answer is supposed to get shorter and less sure, not smoother.

i also got tired of evals that could look green while the prompt, the tools, and the runtime were not really in the test. that is the sentence i wrote on the sign-off draft. a fixture can pass forever if the thing you changed never ran. the telegram harness was my way of checking the other direction. a live proof only counted if the workflow id, the tool trace, the database row, and the ops row joined up. i had a case where the snippet we stored was null and telegram still had the answer. that is the kind of thing that makes me not trust a green check.

the local research brain is separate, and i labeled it that way on purpose. it is not production pocket code. i scaffolded it with eve on my laptop, fought the node version because eve wanted something newer than the one homebrew had given me, and kept wallets and signing out of it. the demo i actually care about is simple. ask it to buy $100 of yes right now. it should refuse and send you back to paper-only. if it cannot do that, the rest of the research ui does not matter.

## what i did

- i named and built the proof layer for probable so a run leaves prompt, tools, evidence, and side effects, not only a final message.
- i wrote the frozen-case benchmark that scores action and bankroll impact without letting infra timeouts poison the product score.
- i joined telegram live-proofs across workflow id, tool trace, database row, and ops row.

## how

- ledger-first research: trust from what was retrieved. thin or disagreeing sources shorten the answer.
- local research brain stays paper-only. wallets and signing stay out. it refuses a live $100 yes buy.
- pocket repos stay private. no production metrics claimed here.

## artifacts

- [Pocket](https://getpocketapp.com/)
- [Network School](https://ns.com/about)

## links

- [html page](https://sxohom.xyz/projects/pocket-probable/)
- [home](https://sxohom.xyz/)
- [llms.txt](https://sxohom.xyz/llms.txt)
