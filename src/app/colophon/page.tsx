import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "colophon",
  description:
    "fonts, colours, stack, and how this site was built. no tracking.",
  alternates: { canonical: "/colophon/" },
};

export default function ColophonPage() {
  return (
    <article className="site-shell py-10">
      <p className="text-sm text-muted">
        <Link href="/" className="quiet-link">
          ← home
        </Link>
      </p>
      <h1 className="mt-6 text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
        colophon
      </h1>
      <p className="mt-4 text-muted">
        a short note on how this site is put together. i am on the side of the
        reader.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-sm font-medium">type</h2>
        <ul className="list-none space-y-2 p-0 text-[1.0625rem]">
          <li>
            system ui sans
            <span className="ml-2 text-sm text-muted">
              body, headings, nav
            </span>
          </li>
          <li>
            <span className="mono text-sm">ibm plex mono</span>
            <span className="ml-2 text-sm text-muted">
              receipts + code only
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-sm font-medium">colour</h2>
        <ul className="mono list-none space-y-2 p-0 text-sm text-muted">
          <li>paper · #f7f7f8</li>
          <li>ink · #1a1a1a</li>
          <li>muted · #666 / #999</li>
          <li>hairline · #e5e5e5</li>
          <li>dark · quiet prefers-color-scheme inverse</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-sm font-medium">stack</h2>
        <p>
          next.js (static export), react, tailwind css v4. hosted on github
          pages. mono via <span className="mono text-sm">next/font</span>. no
          analytics, no cookies, no tracking pixels.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-sm font-medium">built with</h2>
        <p>
          cursor agents, from a brief sohom wrote. layout spirit from quiet
          personal sites (srijan.is / ankitkr0.com): narrow column, system
          type, plain lists, almost no chrome.
        </p>
      </section>
    </article>
  );
}
