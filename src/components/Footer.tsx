import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          {site.fullName} · {site.location}
        </p>
        <p>Built for proof — hiring managers and agents welcome.</p>
      </div>
    </footer>
  );
}
