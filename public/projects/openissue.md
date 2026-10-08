# openissue

> deterministic trace to incident · 2026

Author: [Sohom Pal](https://sxohom.xyz/)

i kept ending up with traces that were red and still not an incident. someone had to read them, decide what broke, and point at the evidence. if you hand that to a model, it will write a cleaner story than the detector. i didn't want that. the detection engine is deterministic. the model is not allowed to add, suppress, or edit the issues, the counts, the severity, or the evidence. if the reports don't contain enough to say what happened, the limitation stays in the packet. it does not invent an answer.

the demo fixture is not abstract. it is a probable execution-worker-unavailable trace. that is the connection, for me. the same class of failure i was debugging on pocket, where the worker is down and the agent still has to say something, is the example openissue ships with. the detectors are specific. worker unavailable. a cluster of tool failures. a delegated execution that never comes back with a result. i didn't want a generic "anomaly" label.

the reference lab is how i checked that i wasn't fooling myself. seven days, twenty task attempts a day, with the ground truth written down separately from the traces, never stuffed into the metadata. some days should be quiet. one day is an upstream 503 on the same tool across users. another is a missing poller. a later day repeats an earlier fingerprint, because a regression that comes back under a new name is the whole problem. fingerprints had to stay stable across a thousand reshuffles of the same events.

i also wrote down what this does not prove. a seeded langfuse trace does not mean pocket, or anyone else, had that incident in production. the lab is not customer validation. i don't think you need ten customer teams to know whether the detector is lying. you need a ground truth you didn't let the model see, and a rule that the model cannot edit the finding. the cli is the source of truth. a new detector only gets added when a real failure cannot be said with the ones that already exist.

## what i did

- i shipped a cli that turns traces into an incident packet with cited evidence.
- i kept detection deterministic. the model explains findings. it never edits them.
- i bundled a probable execution-worker-unavailable fixture (labelled demo, not a production incident).

## how

- specific detectors: worker unavailable, tool-failure cluster, delegated execution with no result.
- reference lab: 7 days x 20 attempts, ground truth outside metadata, stable fingerprints.
- published on npm as @sxohom/openissue (apache-2.0).

## artifacts

- [npm @sxohom/openissue](https://www.npmjs.com/package/@sxohom/openissue)

## links

- [html page](https://sxohom.xyz/projects/openissue/)
- [home](https://sxohom.xyz/)
- [llms.txt](https://sxohom.xyz/llms.txt)
