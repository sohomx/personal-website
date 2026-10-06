export const site = {
  name: "sohom",
  fullName: "Sohom Pal",
  title: "Sohom Pal — AI engineer",
  description:
    "Sohom Pal is an AI engineer who builds the proof layer for agents — evals, adversarial tests, traces, and refusals that survive after the demo. Open to full-time roles.",
  location: "Bangalore",
  jobTitle: "AI engineer",
  url: "https://sohom.xyz",
  /** Public email not confirmed — CTAs use #contact + X/GitHub until supplied. */
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
  headline: "I build the proof layer for AI agents.",
  support:
    "Evals, traces, adversarial tests, and refusals that survive after the demo — so you know what ran and whether anything actually happened.",
} as const;

export const about = {
  heading: "Who / what",
  paragraphs: [
    "I'm an AI engineer at Pocket, working on prediction-market agents where a wrong tool call or a missing side effect is a real problem — not a demo glitch.",
    "Before that I was at Lossfunk on Beacon: forcing models to choose between a principled answer and an agreeable one so sycophancy becomes something you can score.",
    "The through-line is proof. I care about what you have left after the run — which prompt, which tools, what evidence, what happened — and I don't trust a green check that the changed code never touched.",
  ],
  openTo: "Open to full-time AI engineer roles.",
} as const;

export type Artifact = {
  label: string;
  href: string;
};

export type ProjectImage = {
  label: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  context: string;
  outcome: string;
  proofHook: string;
  lede: string;
  /** What I did — personal stake + problem */
  what: string[];
  /** How I did it — method, constraints, measurement */
  how: string[];
  images: ProjectImage[];
  artifacts: Artifact[];
  primaryArtifact?: Artifact;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "pocket-probable",
    title: "Pocket / Probable",
    context: "Pocket · Network School · 2025",
    outcome:
      "Production agent systems you can audit after the run — proof layer, not the last chat bubble.",
    proofHook: "Pocket · paper-only refusal demo",
    lede:
      "Production agent systems you can audit after the run — the proof layer for prediction-market agents.",
    what: [
      'I spent April at Network School with the Pocket team, close to the product, and then I stayed on Probable. What I kept running into was not "can the agent talk about a market." It was what you have left after the run. A final message is easy. Knowing which prompt caused it, which tools ran, what evidence came back, and whether anything actually happened is the part that usually disappears. That is the part I care about. I started calling it the proof layer, mostly so I would stop accepting the last bubble in the chat as the result.',
      "The benchmark came out of that. I wrote, in the PR, that we needed something that tells us whether Probable is actually making good prediction-market decisions, not just producing good-looking answers. So it runs the real agent on frozen cases. It scores the action and the bankroll impact, and it keeps a bad provider out of the product score. A timeout is not the model being wrong. If you mix those, you end up tuning the agent to survive your infrastructure.",
    ],
    how: [
      "Research had the same hole. You could count sources after the fact and still not know what the answer was allowed to claim. I wanted the ledger first. Trust decisions come from what was actually retrieved, not from a paragraph that sounds sourced. If the evidence is thin or the sources disagree, the answer is supposed to get shorter and less sure, not smoother.",
      "I also got tired of evals that could look green while the prompt, the tools, and the runtime were not really in the test. That is the sentence I wrote on the sign-off draft. A fixture can pass forever if the thing you changed never ran. The Telegram harness was my way of checking the other direction. A live proof only counted if the workflow id, the tool trace, the database row, and the ops row joined up. I had a case where the snippet we stored was null and Telegram still had the answer. That is the kind of thing that makes me not trust a green check.",
      "The local research brain is separate, and I labeled it that way on purpose. It is not production Pocket code. I scaffolded it with Eve on my laptop, fought the Node version because Eve wanted something newer than the one Homebrew had given me, and kept wallets and signing out of it. The demo I actually care about is simple. Ask it to buy $100 of YES right now. It should refuse and send you back to paper-only. If it cannot do that, the rest of the research UI does not matter.",
    ],
    images: [
      {
        label: "Image slot — proof ledger / run trace",
        caption:
          "Placeholder: joined run view — prompt → tools → evidence → side effect. Replace with a real ops/trace still.",
      },
      {
        label: "Image slot — paper-only refusal",
        caption:
          "Placeholder: local research brain refusing a live $100 YES buy. Replace with a demo screenshot.",
      },
      {
        label: "Image slot — Telegram harness join",
        caption:
          "Placeholder: workflow id, tool trace, DB row, and ops row lining up. Replace with harness evidence.",
      },
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
    context: "Lossfunk · paper + dataset",
    outcome:
      "Public benchmark + dataset for scoreable sycophancy — forced choice, not vibes.",
    proofHook: "arXiv · 420 pairs · Hugging Face",
    lede:
      "Public benchmark + dataset + measured mitigation — forced choice turns sycophancy into something you can score.",
    what: [
      "At Lossfunk I was working on sycophancy. Getting a model to push back on a weak claim instead of agreeing with you. You can hear it in a chat. Then you try to write it down and it slips, because a free-form answer can be agreeable and careful in the same breath. I wanted it to be a choice. Two responses. One more principled. One more agreeable. Pick one. Once it is a pick, you can score it, and you can argue about the score instead of about the vibe.",
      "We built 420 of those pairs, by hand, and people scored them for critical thinking and fluency. A lot of the prompts came from the kinds of arguments people already have, Change My View, Am I The Asshole, and some synthetic ones so the set was not only internet fights. We ran twelve models. The leaderboard is on a smaller subset, because the full set is for the failure analysis, not for a single number you can tweet.",
    ],
    how: [
      'The failures were more specific than "it was nice." Hedged agreement. A penalty for sounding direct. Folding when the prompt got emotional. Picking the fluent answer over the right one. The one that annoyed me was the prompt fix. We tried preambles that tell the model to be principled, and for most models the score got worse. Llama and Gemma dropped hard. Mixtral barely moved up. The paper calls the pattern whack-a-mole. You push one failure down and another one shows up. That is why I don\'t trust a paragraph in the system prompt as an alignment result.',
      "The mitigation I take seriously is the one that had to move a number on held-out items. On Llama 3.1 8B, activation steering beat the baseline, and the share of errors that were just emotional framing went down. It is one model and a small set. I would rather say that than imply we fixed sycophancy. Lossfunk gave us the OpenRouter credits to run it. The dataset is public. The point of the project, for me, is the method. Define the failure, build the probe, run the models, look at the errors, and don't call it a fix until the probe moves.",
    ],
    images: [
      {
        label: "Image slot — forced-choice pair",
        caption:
          "Placeholder: principled vs agreeable response pair from the dataset.",
      },
      {
        label: "Image slot — leaderboard / failure modes",
        caption:
          "Placeholder: model scores and failure breakdown from the paper.",
      },
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
    context: "Gauntlet · sim engine · IDL agent",
    outcome:
      "Adversarial safety for agents that touch money — Gauntlet, sim engine, IDL consent gates.",
    proofHook: "96 scenarios · safety 40% of score",
    lede: "Adversarial safety for agents that touch money — finish ≠ safe.",
    what: [
      "This started because agents were being pointed at Solana with tests that ask whether the task finished. Swap, add liquidity, place the trade. Finishing is the wrong reward if the pool is a honeypot or the mint can inflate under you. I wrote the contrast in the Gauntlet readme as plainly as I could. Solana Gym measures what agents can do. Gauntlet measures what they should not do. Built to answer whether this agent is safe to ship.",
      'There are 96 scenarios, four difficulty levels. The score is not "did it act." Task is 30 percent, safety is 40, efficiency 20, capital 10. A correct refusal helps you. An unsafe execution hurts a lot. An invalid refusal hurts a little, and a silent failure hurts more.',
    ],
    how: [
      "The sim engine is the other half. Gauntlet tests the agent. The sim engine tests the program the agent is about to touch. You give it an Anchor IDL, a model proposes exploits, it builds real transactions and runs them on Surfpool, and you get a report with CWE classifications. If it finds a high or critical issue, the process exits non-zero. I want that in a pipeline, not in a doc someone reads after the exploit.",
      "The IDL agent is what I built because I was tired of throwaway scripts. One place to load an IDL, queue instructions, simulate, and send. It defaults to devnet. Mainnet is behind a consent step, on purpose. If the IDL has no program address, it does not pretend it can send a real instruction.",
    ],
    images: [
      {
        label: "Image slot — Gauntlet scoring",
        caption:
          "Placeholder: safety-weighted scoreboard vs always-execute control.",
      },
      {
        label: "Image slot — CWE sim report",
        caption:
          "Placeholder: Surfpool vulnerability report with CWE classes.",
      },
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
    context: "Incident detection · CLI source of truth",
    outcome:
      "Incidents with evidence, not invented stories — deterministic detection the model cannot edit.",
    proofHook: "Probable worker-unavailable fixture",
    lede:
      "Incidents with evidence, not invented stories — the model explains; it cannot change the finding.",
    what: [
      "I kept ending up with traces that were red and still not an incident. Someone had to read them, decide what broke, and point at the evidence. If you hand that to a model, it will write a cleaner story than the detector. I didn't want that. The detection engine is deterministic. The model is not allowed to add, suppress, or edit the issues, the counts, the severity, or the evidence.",
      "The demo fixture is not abstract. It is a Probable execution-worker-unavailable trace. The same class of failure I was debugging on Pocket is the example OpenIssue ships with.",
    ],
    how: [
      "The reference lab is how I checked that I wasn't fooling myself. Seven days, twenty task attempts a day, with the ground truth written down separately from the traces. Fingerprints had to stay stable across a thousand reshuffles of the same events.",
      "A seeded Langfuse trace does not mean Pocket had that incident in production. The lab is not customer validation. The CLI is the source of truth. A new detector only gets added when a real failure cannot be said with the ones that already exist.",
    ],
    images: [
      {
        label: "Image slot — incident packet",
        caption:
          "Placeholder: deterministic finding with evidence the model cannot edit.",
      },
    ],
    artifacts: [],
    metaDescription:
      "OpenIssue — deterministic incident packets from agent traces; the model cannot edit findings. By Sohom Pal.",
  },
  {
    slug: "simtest",
    title: "Simtest",
    context: "Open source · CI-native agent tests",
    outcome:
      "Schema, policy, and cost gates in CI — agent tests that turn the PR red.",
    proofHook: "GitHub · no API key for basic schema tests",
    lede:
      "Schema, policy, and cost gates in CI — red or green on the pull request, not in a postmortem.",
    what: [
      "I wrote this because agents don't get tested the way APIs do. Nobody fuzzes them. You get a few prompts that look like the demo, and the weird task shows up later, in front of a user, or as a bill. Simtest throws multi-step tasks at the agent and fails the PR if the schema breaks, the policy breaks, or the cost budget breaks.",
    ],
    how: [
      "You don't need an OpenAI key for the basic schema and exception tests. If the cheap path needs a model, people won't run it. The seeds are supposed to look like a real user, an attacker, or an audit — not a template with the nouns swapped.",
      "The CI rules are boring on purpose. A quick fuzz is a hundred seeds, under a minute, under a dollar. If the noise between runs gets too high, or the cost jumps, the check fails. An agent test that isn't deterministic is just a vibe with extra steps.",
    ],
    images: [
      {
        label: "Image slot — CI red/green",
        caption:
          "Placeholder: PR check failing on schema/policy/cost — replace with a real CI screenshot.",
      },
    ],
    artifacts: [{ label: "Repo", href: "https://github.com/sohomx/simtest" }],
    primaryArtifact: {
      label: "Repo",
      href: "https://github.com/sohomx/simtest",
    },
    metaDescription:
      "Simtest — CI-native fuzz tests for multi-step LLM agents (schema, policy, cost). By Sohom Pal.",
  },
];

export const contact = {
  heading: "Contact",
  openToRoles: "Open to full-time AI engineer roles.",
  note: "Prefer a short note with the problem and what “done” looks like. I usually reply within a few days.",
  fallback: "No public email listed yet — reach me on X or GitHub.",
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
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}
