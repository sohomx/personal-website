import Link from "next/link";
import { IstClock } from "@/components/IstClock";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-shell mt-16 border-t border-border py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono text-sm text-muted">
          <Link href="/" className="text-ink no-underline hover:text-accent">
            {site.name}
          </Link>
          {" · "}
          <Link href="/colophon/" className="hover:text-accent">
            colophon
          </Link>
          {" · "}
          <a href="/llms.txt" className="hover:text-accent">
            llms.txt
          </a>
          {" · no tracking"}
        </p>
        <IstClock />
      </div>
    </footer>
  );
}
