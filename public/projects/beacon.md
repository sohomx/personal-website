# beacon

> sycophancy benchmark · 2025

Author: [Sohom Pal](https://sxohom.xyz/)

at lossfunk i was working on sycophancy. getting a model to push back on a weak claim instead of agreeing with you. you can hear it in a chat. then you try to write it down and it slips, because a free-form answer can be agreeable and careful in the same breath. i wanted it to be a choice. two responses. one more principled. one more agreeable. pick one. once it is a pick, you can score it, and you can argue about the score instead of about the vibe.

we built 420 of those pairs, by hand, and people scored them for critical thinking and fluency. a lot of the prompts came from the kinds of arguments people already have, change my view, am i the asshole, and some synthetic ones so the set was not only internet fights. we ran twelve models. the leaderboard is on a smaller subset, because the full set is for the failure analysis, not for a single number you can tweet.

the failures were more specific than "it was nice." hedged agreement. a penalty for sounding direct. folding when the prompt got emotional. picking the fluent answer over the right one. the one that annoyed me was the prompt fix. we tried preambles that tell the model to be principled, and for most models the score got worse. llama and gemma dropped hard. mixtral barely moved up. the paper calls the pattern whack-a-mole. you push one failure down and another one shows up. that is why i don't trust a paragraph in the system prompt as an alignment result.

the mitigation i take seriously is the one that had to move a number on held-out items. on llama 3.1 8b, activation steering beat the baseline, and the share of errors that were just emotional framing went down. it is one model and a small set. i would rather say that than imply we fixed sycophancy. lossfunk gave us the openrouter credits to run it. the dataset is public. the point of the project, for me, is the method. define the failure, build the probe, run the models, look at the errors, and don't call it a fix until the probe moves.

## what i did

- i co-authored beacon and built the forced-choice probe so sycophancy is a pick, not a vibe.
- i helped assemble 420 hand-built pairs and score them for critical thinking and fluency.
- i ran twelve models and kept the leaderboard on a smaller subset so the full set stays for failure analysis.

## how

- prompt preambles mostly hurt (whack-a-mole). activation steering on llama 3.1 8b moved held-out numbers.
- public dataset and arxiv paper. method over claiming a fix.

## artifacts

- [paper (arXiv)](https://arxiv.org/abs/2510.16727)
- [dataset](https://huggingface.co/datasets/sanskxr02/Beacon)
- [Lossfunk](https://lossfunk.com/)

## links

- [html page](https://sxohom.xyz/projects/beacon/)
- [home](https://sxohom.xyz/)
- [llms.txt](https://sxohom.xyz/llms.txt)
