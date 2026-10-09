import type { ProjectProof } from "@/data/content";

export function ProjectProofs({ proofs }: { proofs: ProjectProof[] }) {
  if (proofs.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="proof-heading">
      <h2 id="proof-heading" className="text-sm font-medium">
        proof
      </h2>
      <ul className="mt-4 grid list-none gap-6 p-0">
        {proofs.map((proof) => (
          <li key={`${proof.kind}-${proof.caption}`}>
            {proof.kind === "image" ? (
              <figure className="proof-figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proof.src}
                  alt={proof.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="mt-3 space-y-1">
                  <p className="text-sm text-muted">{proof.caption}</p>
                  <p className="mono text-xs text-faint">{proof.credit}</p>
                </figcaption>
              </figure>
            ) : null}

            {proof.kind === "code" ? (
              <figure>
                <figcaption className="mb-2 text-sm text-muted">
                  {proof.caption}
                </figcaption>
                <pre className="code-block overflow-x-auto p-4 whitespace-pre-wrap">
                  {proof.code}
                </pre>
                <p className="mono mt-2 text-xs text-faint">{proof.credit}</p>
              </figure>
            ) : null}

            {proof.kind === "table" ? (
              <figure>
                <figcaption className="mb-2 text-sm text-muted">
                  {proof.caption}
                </figcaption>
                <div className="overflow-x-auto">
                  <table className="proof-table">
                    <thead>
                      <tr>
                        {proof.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {proof.rows.map((row) => (
                        <tr key={row.join("|")}>
                          {row.map((cell, i) => (
                            <td key={`${proof.headers[i]}-${cell}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mono mt-2 text-xs text-faint">{proof.credit}</p>
              </figure>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
