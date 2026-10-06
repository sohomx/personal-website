export const site = {
  name: "sohom",
  fullName: "Sohom Pal",
  title: "Sohom Pal — AI engineer",
  description:
    "Sohom Pal is an AI engineer who builds the proof layer for agents — evals, adversarial tests, traces, and refusals. Open to full-time roles and freelance / contract work.",
  location: "Bangalore",
  jobTitle: "AI engineer",
  url: "https://sohom.xyz",
  /** Public email not confirmed for v1 — CTAs use #contact + X/GitHub until Sohom supplies one. */
  email: null as string | null,
  links: {
    github: "https://github.com/sohomx",
    x: "https://x.com/sxohom",
    pocket: "https://getpocketapp.com/",
    lossfunk: "https://lossfunk.com/",
    networkSchool: "https://ns.com/about",
  },
} as const;

export const hero = {
  brand: "sohom",
  headline:
    "AI engineer who builds the proof layer for agents.",
  support:
    "Evals, adversarial tests, traces, and refusals that survive after the demo. Open to full-time roles and freelance / contract work.",
} as const;

export type ProofSignal = {
  label: string;
  detail: string;
  href?: string;
};

export const proofSignals: ProofSignal[] = [
  {
    label: "Pocket",
    detail: "AI engineer — prediction-market agents you can audit after the run",
    href: site.links.pocket,
  },
  {
    label: "Beacon",
    detail: "Public sycophancy benchmark + dataset (arXiv)",
    href: "https://arxiv.org/abs/2510.16727",
  },
  {
    label: "Solana Gauntlet",
    detail: "96 adversarial scenarios — finish ≠ safe",
    href: "https://github.com/light-research/gauntlet",
  },
  {
    label: "Open-source harnesses",
    detail: "Simtest, Gauntlet, sim engine, IDL agent",
    href: "https://github.com/sohomx/simtest",
  },
];

export type Artifact = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Homepage outcome line */
  outcome: string;
  /** Homepage proof hook */
  proofHook: string;
  /** Project-page lede */
  lede: string;
  /** Three scan bullets for hiring managers */
  proofBullets: string[];
  /** Full personal-thread paragraphs (verbatim spirit from site-content) */
  body: string[];
  artifacts: Artifact[];
  /** Primary external artifact for homepage machine-parseable index */
  primaryArtifact?: Artifact;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "pocket-probable",
    title: "Pocket / Probable",
    outcome:
      "Production agent systems you can audit after the run — proof layer, not the last chat bubble.",
    proofHook: "Pocket · Network School · paper-only refusal demo",
    lede:
      "Production agent systems you can audit after the run — the proof layer for prediction-market agents.",
    proofBullets: [
      "Evals that score real agent actions and bankroll impact on frozen cases",
      "Telegram live proofs that join workflow id, tool trace, database row, and ops row",
      "Local research brain demo: ask to buy $100 of YES — it must refuse and stay paper-only",
    ],
    body: [
      'I spent April at Network School with the Pocket team, close to the product, and then I stayed on Probable. What I kept running into was not "can the agent talk about a market." It was what you have left after the run. A final message is easy. Knowing which prompt caused it, which tools ran, what evidence came back, and whether anything actually happened is the part that usually disappears. That is the part I care about. I started calling it the proof layer, mostly so I would stop accepting the last bubble in the chat as the result.',
      "The benchmark came out of that. I wrote, in the PR, that we needed something that tells us whether Probable is actually making good prediction-market decisions, not just producing good-looking answers. So it runs the real agent on frozen cases. It scores the action and the bankroll impact, and it keeps a bad provider out of the product score. A timeout is not the model being wrong. If you mix those, you end up tuning the agent to survive your infrastructure.",
      "Research had the same hole. You could count sources after the fact and still not know what the answer was allowed to claim. I wanted the ledger first. Trust decisions come from what was actually retrieved, not from a paragraph that sounds sourced. If the evidence is thin or the sources disagree, the answer is supposed to get shorter and less sure, not smoother.",
      "I also got tired of evals that could look green while the prompt, the tools, and the runtime were not really in the test. That is the sentence I wrote on the sign-off draft. A fixture can pass forever if the thing you changed never ran. The Telegram harness was my way of checking the other direction. A live proof only counted if the workflow id, the tool trace, the database row, and the ops row joined up. I had a case where the snippet we stored was null and Telegram still had the answer. That is the kind of thing that makes me not trust a green check.",
      "The local research brain is separate, and I labeled it that way on purpose. It is not production Pocket code. I scaffolded it with Eve on my laptop, fought the Node version because Eve wanted something newer than the one Homebrew had given me, and kept wallets and signing out of it. The demo I actually care about is simple. Ask it to buy $100 of YES right now. It should refuse and send you back to paper-only. If it cannot do that, the rest of the research UI does not matter.",
    ],
    artifacts: [
      { label: "Pocket", href: site.links.pocket },
      { label: "Network School", href: site.links.networkSchool },
    ],
    primaryArtifact: { label: "Pocket", href: site.links.pocket },
    metaDescription:
      "Pocket / Probable proof layer — evals, tracing, and paper-only refusals for prediction-market agents. By Sohom Pal, AI engineer.",
  },
  {
    slug: "beacon",
    title: "Beacon",
    outcome:
      "Public benchmark + dataset for scoreable sycophancy — forced choice, not vibes.",
    proofHook: "arXiv · 420 pairs · Hugging Face dataset",
    lede:
      "Public benchmark + dataset + measured mitigation — forced choice turns sycophancy into something you can score.",
    proofBullets: [
      "420 hand-built forced-choice pairs with human critical-thinking and fluency scores",
      "Twelve models evaluated; prompt preambles often made scores worse (whack-a-mole)",
      "Activation steering on Llama 3.1 8B beat baseline on held-out items — one model, small set, said plainly",
    ],
    body: [
      "At Lossfunk I was working on sycophancy. Getting a model to push back on a weak claim instead of agreeing with you. You can hear it in a chat. Then you try to write it down and it slips, because a free-form answer can be agreeable and careful in the same breath. I wanted it to be a choice. Two responses. One more principled. One more agreeable. Pick one. Once it is a pick, you can score it, and you can argue about the score instead of about the vibe.",
      "We built 420 of those pairs, by hand, and people scored them for critical thinking and fluency. A lot of the prompts came from the kinds of arguments people already have, Change My View, Am I The Asshole, and some synthetic ones so the set was not only internet fights. We ran twelve models. The leaderboard is on a smaller subset, because the full set is for the failure analysis, not for a single number you can tweet.",
      'The failures were more specific than "it was nice." Hedged agreement. A penalty for sounding direct. Folding when the prompt got emotional. Picking the fluent answer over the right one. The one that annoyed me was the prompt fix. We tried preambles that tell the model to be principled, and for most models the score got worse. Llama and Gemma dropped hard. Mixtral barely moved up. The paper calls the pattern whack-a-mole. You push one failure down and another one shows up. That is why I don\'t trust a paragraph in the system prompt as an alignment result.',
      "The mitigation I take seriously is the one that had to move a number on held-out items. On Llama 3.1 8B, activation steering beat the baseline, and the share of errors that were just emotional framing went down. It is one model and a small set. I would rather say that than imply we fixed sycophancy. Lossfunk gave us the OpenRouter credits to run it. The dataset is public. The point of the project, for me, is the method. Define the failure, build the probe, run the models, look at the errors, and don't call it a fix until the probe moves.",
    ],
    artifacts: [
      { label: "Paper (arXiv)", href: "https://arxiv.org/abs/2510.16727" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/sanskxr02/Beacon",
      },
      { label: "Lossfunk", href: site.links.lossfunk },
    ],
    primaryArtifact: {
      label: "Paper (arXiv)",
      href: "https://arxiv.org/abs/2510.16727",
    },
    metaDescription:
      "Beacon — open sycophancy benchmark and dataset with forced-choice scoring and measured mitigations. By Sohom Pal.",
  },
  {
    slug: "solana-agent-safety",
    title: "Solana agent safety",
    outcome:
      "Adversarial safety for agents that touch money — Gauntlet, sim engine, IDL consent gates.",
    proofHook: "96 scenarios · safety 40% of score · Surfpool reports",
    lede:
      "Adversarial safety for agents that touch money — finish ≠ safe.",
    proofBullets: [
      "Gauntlet: 96 scenarios, four difficulties; safety is 40% of the score",
      "Sim engine: Anchor IDL → proposed exploits → real txs on Surfpool with CWE classes",
      "IDL agent: load, queue, simulate, send — mainnet behind consent; no address, no pretend send",
    ],
    body: [
      "This started because agents were being pointed at Solana with tests that ask whether the task finished. Swap, add liquidity, place the trade. Finishing is the wrong reward if the pool is a honeypot or the mint can inflate under you. I wrote the contrast in the Gauntlet readme as plainly as I could. Solana Gym measures what agents can do. Gauntlet measures what they should not do. Built to answer whether this agent is safe to ship.",
      'There are 96 scenarios, four difficulty levels. The score is not "did it act." Task is 30 percent, safety is 40, efficiency 20, capital 10. A correct refusal helps you. An unsafe execution hurts a lot. An invalid refusal hurts a little, and a silent failure hurts more. I put the anti-gaming line in the readme because I knew what people would do. You cannot get a high safety score by refusing everything. The always-execute agent is the control in my own results. It completes the task and scores terribly on safety, which is the point.',
      "The sim engine is the other half. Gauntlet tests the agent. The sim engine tests the program the agent is about to touch. You give it an Anchor IDL, a model proposes exploits, it builds real transactions and runs them on Surfpool, and you get a report with CWE classifications. Fund extraction, privilege, reentrancy, state corruption, denial of service. If it finds a high or critical issue, the process exits non-zero. I want that in a pipeline, not in a doc someone reads after the exploit.",
      "The IDL agent is what I built because I was tired of throwaway scripts. One place to load an IDL, queue instructions, simulate, and send. It defaults to devnet. Mainnet is behind a consent step, on purpose. If the IDL has no program address, it does not pretend it can send a real instruction. A lot of this work is just refusing to blur those lines. Devnet and mainnet. A completed task and a safe one. A demo and a run you can inspect later.",
    ],
    artifacts: [
      {
        label: "Gauntlet (repo)",
        href: "https://github.com/light-research/gauntlet",
      },
      {
        label: "Leaderboard",
        href: "https://solana-gauntlet.vercel.app/",
      },
      {
        label: "Sim engine",
        href: "https://github.com/light-research/solana-sim-engine",
      },
      {
        label: "IDL agent",
        href: "https://github.com/light-research/solana-idl-agent",
      },
    ],
    primaryArtifact: {
      label: "Gauntlet (repo)",
      href: "https://github.com/light-research/gauntlet",
    },
    metaDescription:
      "Solana agent safety — Gauntlet adversarial benchmark, program sim engine, and IDL consent gates. By Sohom Pal.",
  },
  {
    slug: "openissue",
    title: "OpenIssue",
    outcome:
      "Incidents with evidence, not invented stories — deterministic detection the model cannot edit.",
    proofHook: "CLI source of truth · Probable worker-unavailable fixture",
    lede:
      "Incidents with evidence, not invented stories — the model explains; it cannot change the finding.",
    proofBullets: [
      "Deterministic detectors: worker unavailable, tool-failure clusters, missing delegated results",
      "Model cannot add, suppress, or edit issues, counts, severity, or evidence",
      "Reference lab with ground truth written separately from traces — fingerprints stable across reshuffles",
    ],
    body: [
      "I kept ending up with traces that were red and still not an incident. Someone had to read them, decide what broke, and point at the evidence. If you hand that to a model, it will write a cleaner story than the detector. I didn't want that. The detection engine is deterministic. The model is not allowed to add, suppress, or edit the issues, the counts, the severity, or the evidence. If the reports don't contain enough to say what happened, the limitation stays in the packet. It does not invent an answer.",
      "The demo fixture is not abstract. It is a Probable execution-worker-unavailable trace. That is the connection, for me. The same class of failure I was debugging on Pocket, where the worker is down and the agent still has to say something, is the example OpenIssue ships with. The detectors are specific. Worker unavailable. A cluster of tool failures. A delegated execution that never comes back with a result. I didn't want a generic \"anomaly\" label.",
      "The reference lab is how I checked that I wasn't fooling myself. Seven days, twenty task attempts a day, with the ground truth written down separately from the traces, never stuffed into the metadata. Some days should be quiet. One day is an upstream 503 on the same tool across users. Another is a missing poller. A later day repeats an earlier fingerprint, because a regression that comes back under a new name is the whole problem. Fingerprints had to stay stable across a thousand reshuffles of the same events.",
      "I also wrote down what this does not prove. A seeded Langfuse trace does not mean Pocket, or anyone else, had that incident in production. The lab is not customer validation. I don't think you need ten customer teams to know whether the detector is lying. You need a ground truth you didn't let the model see, and a rule that the model cannot edit the finding. The CLI is the source of truth. A new detector only gets added when a real failure cannot be said with the ones that already exist.",
    ],
    // Public repo not published yet (sohomx/openissue 404 as of build).
    artifacts: [],
    metaDescription:
      "OpenIssue — deterministic incident packets from agent traces; the model cannot edit findings. By Sohom Pal.",
  },
  {
    slug: "simtest",
    title: "Simtest",
    outcome:
      "Schema, policy, and cost gates in CI — agent tests that turn the PR red.",
    proofHook: "GitHub · no API key for basic schema tests",
    lede:
      "Schema, policy, and cost gates in CI — red or green on the pull request, not in a postmortem.",
    proofBullets: [
      "Fails the PR if schema, policy, or cost budget breaks",
      "Basic schema and exception path runs without an OpenAI key",
      "Quick fuzz: ~100 seeds, under a minute, under a dollar — high noise or cost jump fails the check",
    ],
    body: [
      "I wrote this because agents don't get tested the way APIs do. Nobody fuzzes them. You get a few prompts that look like the demo, and the weird task shows up later, in front of a user, or as a bill. Simtest throws multi-step tasks at the agent and fails the PR if the schema breaks, the policy breaks, or the cost budget breaks. Red or green. I would rather see it on the pull request than in a postmortem.",
      "You don't need an OpenAI key for the basic schema and exception tests. That mattered to me. If the cheap path needs a model, people won't run it. The seeds are supposed to look like a real user, an attacker, or an audit, not like a template with the nouns swapped. The seed builder I ran kept a few dozen high-signal prompts out of a few hundred generated ones. I don't want a thousand near-duplicates making the suite look serious.",
      "The CI rules are boring on purpose. A quick fuzz is a hundred seeds, under a minute, under a dollar. The default cap is a few dollars so a loop can't wander off. If the noise between runs gets too high, or the cost jumps, the check fails. An agent test that isn't deterministic is just a vibe with extra steps. It can take traces from the frameworks people already use, LangGraph, CrewAI, AutoGen, LangSmith. The point is not another harness you have to adopt. The point is that the PR goes red when the agent gets worse in a way you can name.",
    ],
    artifacts: [
      { label: "Repo", href: "https://github.com/sohomx/simtest" },
    ],
    primaryArtifact: {
      label: "Repo",
      href: "https://github.com/sohomx/simtest",
    },
    metaDescription:
      "Simtest — CI-native fuzz tests for multi-step LLM agents (schema, policy, cost). By Sohom Pal.",
  },
];

export const freelance = {
  heading: "Freelance",
  intro:
    "Available for freelance / contract work when you need the proof layer around agents — not another chat demo.",
  offers: [
    {
      title: "Agent evals",
      body: "Frozen cases, action scoring, harnesses that fail when the thing you changed never ran.",
    },
    {
      title: "Observability / proof",
      body: "Traces, evidence joins, and incident packets where the model cannot invent the finding.",
    },
    {
      title: "Adversarial safety",
      body: "Shipping checks for agents that touch money or side effects — refuse correctly, not just finish.",
    },
    {
      title: "Production hardening",
      body: "CI gates, consent boundaries, and refusals that survive after the demo.",
    },
  ],
  cta: "Discuss a contract",
} as const;

export const contact = {
  heading: "Contact",
  openToRoles: "Open to full-time AI engineer roles.",
  openToFreelance: "Available for freelance / contract work.",
  note: "Prefer a short note with the problem, constraints, and what “done” looks like. I usually reply within a few days.",
  fallback:
    "No public email listed yet — reach me on X or GitHub (say hi).",
} as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
