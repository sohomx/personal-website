import Link from "next/link";
import { Shortcuts } from "@/components/Shortcuts";

export function Header() {
  return (
    <header className="site-shell sticky top-0 z-20 border-b border-border bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[2px]">
      <div className="flex items-center justify-between gap-3 py-3">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" aria-label="primary">
          <Link href="/" className="wordmark text-xl no-underline">
            sohom
          </Link>
          <a href="#projects" className="mono text-muted hover:text-accent">
            projects
          </a>
          <Link href="/colophon/" className="mono text-muted hover:text-accent">
            colophon
          </Link>
          <a
            href="/llms.txt"
            className="mono text-muted hover:text-accent"
          >
            llms.txt
          </a>
        </nav>
        <Shortcuts />
      </div>
    </header>
  );
}
