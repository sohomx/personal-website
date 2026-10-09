import Link from "next/link";
import { site } from "@/data/content";

export function Header() {
  return (
    <header className="site-shell pt-10 sm:pt-14">
      <nav
        className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm text-muted"
        aria-label="primary"
      >
        <Link href="/" className="quiet-link text-ink">
          {site.displayName}
        </Link>
        <Link href="/projects/" className="quiet-link">
          projects
        </Link>
        <Link href="/tools/" className="quiet-link">
          tools
        </Link>
        <Link href="/internet/" className="quiet-link">
          internet
        </Link>
        <Link href="/colophon/" className="quiet-link">
          colophon
        </Link>
        <Link href="/buy/" className="quiet-link">
          buy
        </Link>
        <a href="/llms.txt" className="quiet-link">
          llms.txt
        </a>
        <a href={`mailto:${site.email}`} className="quiet-link">
          email
        </a>
      </nav>
    </header>
  );
}
