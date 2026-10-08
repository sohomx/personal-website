import type { MetroLine } from "@/data/internet";

export function StationIndex({ lines }: { lines: MetroLine[] }) {
  return (
    <section className="station-index" aria-labelledby="station-index-heading">
      <div className="site-shell">
        <h2 id="station-index-heading" className="station-index-title">
          station index
        </h2>
        <p className="station-index-lead">
          same map, as a list. for reading and for anything that cannot hover.
        </p>
      </div>

      {lines.map((line) => (
        <div key={line.id} className="station-index-line">
          <div className="site-shell">
            <h3 className="station-index-line-name">
              <span
                className="metro-chip"
                style={{ background: line.color }}
                aria-hidden="true"
              />
              {line.name}
            </h3>
          </div>
          <ul className="station-index-list list-none p-0">
            {line.people.map((person) => (
              <li key={person.id} className="station-index-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={person.avatar}
                  alt=""
                  width={36}
                  height={36}
                  className="station-index-avatar"
                  loading="lazy"
                  decoding="async"
                />
                <div className="station-index-meta">
                  <a
                    href={person.href}
                    className="station-index-person"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {person.name}
                  </a>
                  <p className="station-index-links">
                    <a
                      href={person.href}
                      className="station-index-domain"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {person.domain}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                    <span aria-hidden="true"> · </span>
                    <a
                      href={`https://x.com/${person.x}`}
                      className="station-index-x"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @{person.x}
                    </a>
                  </p>
                  <p className="station-index-note">{person.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
