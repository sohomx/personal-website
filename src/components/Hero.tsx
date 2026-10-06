"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease, delay },
        };

  return (
    <section
      className="hero-plane relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-brand"
    >
      <div className="hero-visual absolute inset-0" aria-hidden />
      <div className="hero-grain absolute inset-0" aria-hidden />
      <div className="hero-veil absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16">
        <motion.h1
          id="hero-brand"
          className="max-w-[10ch] font-[family-name:var(--font-display)] text-[clamp(3.5rem,12vw,7rem)] leading-[0.88] tracking-[-0.03em] text-[var(--ink)] text-balance"
          {...item(0.08)}
        >
          {hero.brand}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-[1.35rem] leading-snug text-[var(--ink)] sm:text-[1.6rem] text-balance"
          {...item(0.2)}
        >
          {hero.headline}
        </motion.p>

        <motion.p
          className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-[var(--muted)] sm:text-base"
          {...item(0.3)}
        >
          {hero.support}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          {...item(0.4)}
        >
          <a href="#contact" className="btn-primary">
            Say hi
          </a>
          <a href="#work" className="btn-ghost">
            Selected work
          </a>
          <a href="#freelance" className="btn-ghost">
            Discuss a contract
          </a>
        </motion.div>
      </div>
    </section>
  );
}
