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
          {site.name}
        </Link>
        <Link href="/#projects" className="quiet-link">
          projects
        </Link>
        <Link href="/colophon/" className="quiet-link">
          colophon
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
