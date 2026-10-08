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
    <article className="site-shell max-w-2xl py-10">
      <p className="kicker">
        <Link href="/" className="hover:text-accent">
          ← home
        </Link>
      </p>
      <h1 className="display mt-4 text-4xl">colophon</h1>
      <p className="mt-4 text-muted">
        a short note on how this site is put together. i am on the side of the
        reader.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="display text-2xl">type</h2>
        <ul className="list-none space-y-2 p-0">
          <li>
            <span className="wordmark text-3xl">sohom</span>
            <span className="mono ml-3 text-sm text-muted">
              big shoulders — wordmark + headings
            </span>
          </li>
          <li>
            <span className="text-lg">body copy in figtree</span>
            <span className="mono ml-3 text-sm text-muted">readable sans</span>
          </li>
          <li>
            <span className="mono">receipts + code in ibm plex mono</span>
          </li>
          <li>
            <span style={{ fontFamily: "var(--font-hand)" }} className="text-lg">
              hand mode via patrick hand
            </span>
            <span className="mono ml-3 text-sm text-muted">press ,</span>
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="display text-2xl">colour</h2>
        <ul className="list-none space-y-2 p-0 mono text-sm">
          <li>field · #f6f5f1</li>
          <li>ink · #141414</li>
          <li>accent · #ff4a1c (electric vermilion, sparse)</li>
          <li>dark mode · exact inverse of field/ink</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="display text-2xl">stack</h2>
        <p>
          next.js (static export), react, tailwind css v4. hosted on github
          pages. fonts self-hosted via{" "}
          <span className="mono">next/font</span>. no analytics, no cookies, no
          tracking pixels.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="display text-2xl">built with</h2>
        <p>
          cursor agents, from a brief sohom wrote. spirit borrowed from judah
          (joodaloop.com): few colours, real type, thin square borders,
          personality through interactions.
        </p>
      </section>
    </article>
  );
}
