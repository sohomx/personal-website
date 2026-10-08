import { openissueDemo } from "@/data/openissue-demo";

export function OpenIssueDemo() {
  const d = openissueDemo;
  return (
    <section className="mt-12" aria-labelledby="demo-heading">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 id="demo-heading" className="text-sm font-medium">
          live demo
        </h2>
        <span className="text-xs text-faint">{d.label}</span>
      </div>
      <p className="mt-2 text-sm text-muted">{d.note}</p>
      <p className="mono mt-1 text-xs text-faint">
        fixture: {d.fixture} · window {d.window.from} → {d.window.to}
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="code-block p-4">
          <p className="mb-3 text-faint">trace</p>
          <ol className="m-0 list-none space-y-3 p-0">
            {d.trace.map((ev) => (
              <li key={`${ev.t}-${ev.name}`}>
                <div className="text-faint">
                  {ev.t} · {ev.kind}
                </div>
                <div>
                  <strong>{ev.status}</strong> {ev.name}
                </div>
                <div className="text-muted">{ev.detail}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="code-block p-4">
          <p className="mb-3 text-faint">deterministic finding</p>
          <p className="font-medium">{d.finding.severity}</p>
          <p className="mt-1">{d.finding.title}</p>
          <p className="mt-1 text-faint">fingerprint: {d.finding.fingerprint}</p>
          <p className="mt-3 text-muted">{d.finding.summary}</p>
          <p className="mt-4 text-faint">evidence</p>
          <ul className="mt-1 list-none space-y-1 p-0 text-muted">
            {d.finding.evidence.map((e) => (
              <li key={e}>– {e}</li>
            ))}
          </ul>
          <p className="mt-4 text-faint">{d.finding.limitation}</p>
        </div>
      </div>
    </section>
  );
}
