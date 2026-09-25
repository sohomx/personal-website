"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease, delay },
        };

  return (
    <section className="hero-plane relative min-h-[100svh] overflow-hidden">
      <div className="hero-visual absolute inset-0" aria-hidden />
      <div className="hero-grain absolute inset-0" aria-hidden />
      <div className="hero-veil absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-20 sm:px-8 sm:pb-12">
        <motion.p
          className="mb-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]"
          {...item(0.05)}
        >
          {site.location}
        </motion.p>

        <motion.h1
          className="max-w-[10ch] font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,6.25rem)] leading-[0.9] tracking-[-0.03em] text-[var(--ink)]"
          {...item(0.12)}
        >
          {hero.brand}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-lg font-[family-name:var(--font-display)] text-[1.45rem] leading-snug text-[var(--ink)] sm:text-[1.7rem]"
          {...item(0.22)}
        >
          {hero.headline}
        </motion.p>

        <motion.p
          className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-base"
          {...item(0.32)}
        >
          ai engineer at pocket. evals, tracing, and proof for agents where
          wrong tool calls actually matter.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3"
          {...item(0.42)}
        >
          <a href="#contact" className="btn-primary">
            say hi
          </a>
          <a href="#work" className="btn-ghost">
            selected work
          </a>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet hover:text-[var(--ink)]"
            >
              github
            </a>
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet hover:text-[var(--ink)]"
            >
              x
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
