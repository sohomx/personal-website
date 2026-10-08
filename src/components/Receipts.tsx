import { receipts } from "@/data/content";

export function Receipts() {
  return (
    <section className="site-shell py-8" aria-labelledby="receipts-heading">
      <h2 id="receipts-heading" className="sr-only">
        receipts
      </h2>
      <ul className="m-0 list-none space-y-2 p-0">
        {receipts.map((r) => (
          <li key={r.id}>
            <a
              href={r.href}
              className="mono quiet-link block py-1 text-[0.8125rem] leading-relaxed text-muted"
              rel="noopener noreferrer"
            >
              {r.line}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
