import Link from "next/link";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-shell mt-16 border-t border-border py-8">
      <p className="text-sm text-muted">
        <Link href="/" className="quiet-link text-ink">
          {site.displayName}
        </Link>
        {" · "}
        <Link href="/tools/" className="quiet-link">
          tools
        </Link>
        {" · "}
        <Link href="/internet/" className="quiet-link">
          internet
        </Link>
        {" · "}
        <Link href="/colophon/" className="quiet-link">
          colophon
        </Link>
        {" · "}
        <Link href="/buy/" className="quiet-link">
          buy
        </Link>
        {" · "}
        <a href="/llms.txt" className="quiet-link">
          llms.txt
        </a>
        {" · "}
        <a href="/llms-full.txt" className="quiet-link">
          llms-full.txt
        </a>
        {" · no tracking"}
      </p>
    </footer>
  );
}
