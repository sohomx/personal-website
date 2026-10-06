"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/content";

const nav = [
  { href: "/#about", label: "about" },
  { href: "/#work", label: "work" },
  { href: "/#contact", label: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--ink)]"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] sm:gap-6"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-quiet transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
