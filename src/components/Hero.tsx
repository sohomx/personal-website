import Link from "next/link";
import { about, hero, introLinks, nowLine } from "@/data/content";

export function Hero() {
  return (
    <section className="site-shell pt-12 pb-2 sm:pt-16" aria-labelledby="brand">
      <h1
        id="brand"
        className="text-[1.75rem] font-medium tracking-tight text-ink sm:text-[1.875rem]"
      >
        {hero.brand}
      </h1>
      <p className="mt-6 text-[1.125rem] leading-relaxed text-ink sm:text-[1.1875rem]">
        {hero.owning}
      </p>
      <p className="mt-2 text-muted">{hero.sub}</p>
      <p className="mt-8 text-[1.0625rem] leading-relaxed">{about.paragraphs[0]}</p>
      <p className="mt-6 text-sm text-muted">{nowLine}</p>
      <ul className="mt-6 list-none space-y-1.5 p-0 text-sm text-muted">
        {introLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="quiet-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
