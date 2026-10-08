import Link from "next/link";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-shell mt-16 border-t border-border py-8">
      <p className="text-sm text-muted">
        <Link href="/" className="quiet-link text-ink">
          {site.name}
        </Link>
        {" · "}
        <Link href="/colophon/" className="quiet-link">
          colophon
        </Link>
        {" · "}
        <a href="/llms.txt" className="quiet-link">
          llms.txt
        </a>
        {" · no tracking"}
      </p>
    </footer>
  );
}
