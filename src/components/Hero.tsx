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
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease, delay },
        };

  return (
    <section className="hero-plane relative min-h-[100svh] overflow-hidden">
      <div className="hero-visual absolute inset-0" aria-hidden />
      <div className="hero-grain absolute inset-0" aria-hidden />
      <div className="hero-veil absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16">
        <motion.p
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]"
          {...item(0.05)}
        >
          {site.jobTitle} · {site.location}
        </motion.p>

        <motion.h1
          className="font-display max-w-[9ch] text-[clamp(4.5rem,16vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.03em] text-[var(--ink)]"
          {...item(0.12)}
        >
          {hero.brand}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl font-display text-[1.55rem] font-semibold leading-[1.15] tracking-tight text-[var(--ink)] sm:text-[1.85rem]"
          {...item(0.22)}
        >
          {hero.headline}
        </motion.p>

        <motion.p
          className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-[var(--muted)] sm:text-base"
          {...item(0.32)}
        >
          {hero.support}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
          {...item(0.42)}
        >
          <a href="#work" className="btn-primary">
            Selected work
          </a>
          <a href="#contact" className="btn-ghost">
            Email / contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
