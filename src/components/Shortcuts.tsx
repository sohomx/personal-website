"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/content";

type Mode = "idle" | "help" | "search";

function toggleDark() {
  const root = document.documentElement;
  const next = !root.classList.contains("dark");
  root.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
}

function toggleHand() {
  const root = document.documentElement;
  const next = !root.classList.contains("hand");
  root.classList.toggle("hand", next);
  localStorage.setItem("hand", next ? "1" : "0");
}

export function Shortcuts() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("idle");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const items = [
      { label: "home", href: "/" },
      { label: "colophon", href: "/colophon" },
      { label: "llms.txt", href: "/llms.txt" },
      ...projects.map((p) => ({
        label: p.title,
        href: `/projects/${p.slug}`,
      })),
    ];
    if (!q) return items;
    return items.filter((i) => i.label.includes(q));
  }, [query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (e.key === "Escape") {
        setMode("idle");
        setMenuOpen(false);
        return;
      }

      if (typing && mode === "search") return;
      if (typing) return;

      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setMode((m) => (m === "help" ? "idle" : "help"));
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        setMode("search");
        setQuery("");
        return;
      }
      if (e.key === ".") {
        e.preventDefault();
        toggleDark();
        return;
      }
      if (e.key === ",") {
        e.preventDefault();
        toggleHand();
        return;
      }
      if (e.key >= "1" && e.key <= "5") {
        const project = projects[Number(e.key) - 1];
        if (project) {
          e.preventDefault();
          router.push(`/projects/${project.slug}`);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, router]);

  return (
    <>
      <button
        type="button"
        className="btn mono text-sm md:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-shortcuts"
        onClick={() => setMenuOpen((o) => !o)}
      >
        menu
      </button>

      {menuOpen ? (
        <div
          id="mobile-shortcuts"
          className="fixed inset-0 z-40 bg-[color-mix(in_srgb,var(--ink)_35%,transparent)] p-4 md:hidden"
          role="dialog"
          aria-label="site menu"
        >
          <div className="box mx-auto mt-[12vh] w-full max-w-sm p-4 shadow-[6px_6px_0_var(--shadow)]">
            <p className="kicker mb-3">jump</p>
            <ul className="space-y-2">
              <li>
                <a className="btn w-full" href="#projects" onClick={() => setMenuOpen(false)}>
                  projects
                </a>
              </li>
              {projects.map((p, i) => (
                <li key={p.slug}>
                  <a
                    className="btn w-full justify-start"
                    href={`/projects/${p.slug}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {i + 1}. {p.title}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" className="btn w-full" onClick={toggleDark}>
                  toggle dark (.)
                </button>
              </li>
              <li>
                <button type="button" className="btn w-full" onClick={toggleHand}>
                  toggle hand font (,)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn w-full"
                  onClick={() => {
                    setMenuOpen(false);
                    setMode("search");
                  }}
                >
                  search (/)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  close
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="hidden items-center gap-2 md:flex">
        <button type="button" className="btn" onClick={() => setMode("search")} aria-label="search">
          /
        </button>
        <button type="button" className="btn" onClick={toggleDark} aria-label="toggle dark mode">
          .
        </button>
        <button type="button" className="btn" onClick={toggleHand} aria-label="toggle hand font">
          ,
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setMode((m) => (m === "help" ? "idle" : "help"))}
          aria-label="keyboard shortcuts help"
        >
          ?
        </button>
      </div>

      {mode === "help" ? (
        <div className="help-overlay" role="dialog" aria-label="keyboard shortcuts">
          <div className="help-panel">
            <p className="display text-2xl mb-3">shortcuts</p>
            <ul className="mono text-sm space-y-2">
              <li>
                <kbd>/</kbd> search
              </li>
              <li>
                <kbd>.</kbd> dark mode
              </li>
              <li>
                <kbd>,</kbd> hand-drawn font
              </li>
              <li>
                <kbd>1</kbd>–<kbd>5</kbd> jump to projects
              </li>
              <li>
                <kbd>?</kbd> this overlay
              </li>
              <li>
                <kbd>esc</kbd> close
              </li>
            </ul>
            <button
              type="button"
              className="btn mt-4"
              onClick={() => setMode("idle")}
            >
              close
            </button>
          </div>
        </div>
      ) : null}

      {mode === "search" ? (
        <div className="search-panel" role="dialog" aria-label="search">
          <div className="search-box">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search pages…"
              aria-label="search pages"
            />
            <ul className="max-h-72 overflow-auto p-2">
              {results.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    className="block min-h-11 px-3 py-2 hover:bg-[var(--field)]"
                    onClick={() => setMode("idle")}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
              {results.length === 0 ? (
                <li className="px-3 py-2 text-muted">no matches</li>
              ) : null}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
