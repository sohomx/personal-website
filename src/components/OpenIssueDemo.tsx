import { openissueDemo } from "@/data/openissue-demo";

export function OpenIssueDemo() {
  const d = openissueDemo;
  return (
    <section className="mt-12" aria-labelledby="demo-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="demo-heading" className="display text-2xl">
          live demo
        </h2>
        <span className="mono rounded-none border border-accent px-2 py-1 text-xs text-accent">
          {d.label}
        </span>
      </div>
      <p className="mt-2 max-w-2xl text-sm text-muted">{d.note}</p>
      <p className="mono mt-1 text-xs text-muted">
        fixture: {d.fixture} · window {d.window.from} → {d.window.to}
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="terminal p-4">
          <p className="mb-3 text-muted">trace (left)</p>
          <ol className="m-0 list-none space-y-3 p-0">
            {d.trace.map((ev) => (
              <li key={`${ev.t}-${ev.name}`}>
                <div className="text-muted">
                  {ev.t} · {ev.kind}
                </div>
                <div>
                  <span className="text-accent">{ev.status}</span> {ev.name}
                </div>
                <div className="text-muted">{ev.detail}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="terminal p-4">
          <p className="mb-3 text-muted">deterministic finding (right)</p>
          <p className="text-accent">{d.finding.severity}</p>
          <p className="mt-1 text-lg">{d.finding.title}</p>
          <p className="mt-1 text-muted">fingerprint: {d.finding.fingerprint}</p>
          <p className="mt-3">{d.finding.summary}</p>
          <p className="mt-4 text-muted">evidence</p>
          <ul className="mt-1 list-none space-y-1 p-0">
            {d.finding.evidence.map((e) => (
              <li key={e}>– {e}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted">{d.finding.limitation}</p>
        </div>
      </div>
    </section>
  );
}
