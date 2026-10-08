import { receipts } from "@/data/content";

export function Receipts() {
  return (
    <section className="site-shell py-8" aria-labelledby="receipts-heading">
      <h2 id="receipts-heading" className="kicker mb-3">
        git log --oneline --highlights
      </h2>
      <div className="terminal p-4">
        <ol className="m-0 list-none space-y-2 p-0">
          {receipts.map((r) => (
            <li key={r.id}>
              <a href={r.href} className="block min-h-11 py-1">
                <span aria-hidden="true">*</span> {r.line}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
