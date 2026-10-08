/** Static render of the public OpenIssue demo fixture.
 * Source: @sxohom/openissue examples/probable-execution-worker-unavailable.json
 * Labelled demo fixture: not a production Pocket incident.
 */

export const openissueDemo = {
  label: "demo fixture",
  fixture: "probable-execution-worker-unavailable.json",
  note: "seeded fixture shipped with @sxohom/openissue. not a production pocket incident.",
  window: {
    from: "2026-06-22T08:00:00.000Z",
    to: "2026-06-22T09:00:00.000Z",
  },
  trace: [
    {
      t: "08:12:00",
      kind: "workflow",
      name: "actPredictionTask",
      status: "ok",
      detail: "delegatedExecutionAccepted · taskQueue=probable-execution",
    },
    {
      t: "08:12:20",
      kind: "workflow",
      name: "executionWorkflowSignal",
      status: "error",
      detail:
        "Temporal task queue probable-execution has no pollers · noPollers=true",
    },
    {
      t: "08:13:00",
      kind: "message",
      name: "finalExecutionResult",
      status: "missing",
      detail: "userVisibleOutcome=pending · finalExecutionResult=missing",
    },
  ],
  finding: {
    title: "execution worker unavailable",
    severity: "high",
    fingerprint: "probable-execution-no-pollers",
    summary:
      "delegated execution accepted on task queue probable-execution, but the queue had no pollers. final execution result stayed missing while the user-visible outcome remained pending.",
    evidence: [
      "event-2 · executionWorkflowSignal · error · noPollers=true",
      "event-3 · finalExecutionResult · status=missing",
      "metadata.taskQueue / probable-execution unavailable",
    ],
    limitation:
      "detector reports only what the fixture events contain. no production claim.",
  },
} as const;
