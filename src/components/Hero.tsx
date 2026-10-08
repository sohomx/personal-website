import { TypedLine } from "@/components/TypedLine";
import { about, hero, nowLine } from "@/data/content";

export function Hero() {
  return (
    <section className="site-shell pt-10 pb-8 sm:pt-14" aria-labelledby="brand">
      <p className="kicker mb-3">bangalore · ist</p>
      <h1 id="brand" className="wordmark text-[clamp(4.5rem,18vw,9.5rem)]">
        {hero.brand}
      </h1>
      <p className="display mt-4 max-w-2xl text-[clamp(1.6rem,4vw,2.6rem)]">
        <TypedLine text={hero.owning} />
      </p>
      <p className="mt-3 max-w-xl text-lg text-muted">{hero.sub}</p>
      <p className="mt-6 max-w-2xl">{about.paragraphs[0]}</p>
      <p className="mono mt-5 inline-flex border border-border bg-[var(--field)] px-3 py-2 text-sm">
        <span className="cursor-blink">{nowLine}</span>
      </p>
    </section>
  );
}
