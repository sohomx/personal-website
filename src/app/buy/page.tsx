import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { buyBackups, buyIntro, buyItems } from "@/data/buy";

export const metadata: Metadata = {
  title: "things you could buy",
  description:
    "Things Sohom Pal actually uses in Bangalore: desk gear, sleep upgrades, software, and a MacBook Pro. No affiliate links. Prices in USD.",
  alternates: { canonical: "/buy/" },
  openGraph: {
    title: "things you could buy · Sohom Pal",
    description:
      "Stuff Sohom actually uses in Bangalore. No affiliate links. Prices in USD.",
    url: "/buy/",
  },
  twitter: {
    title: "things you could buy · Sohom Pal",
    description:
      "Stuff Sohom actually uses in Bangalore. No affiliate links. Prices in USD.",
  },
};

export default function BuyPage() {
  return (
    <article className="py-10">
      <JsonLd />

      <div className="site-shell">
        <p className="text-sm text-muted">
          <Link href="/" className="quiet-link">
            back to home
          </Link>
        </p>
        <h1 className="mt-6 text-[1.75rem] font-medium tracking-tight sm:text-[1.875rem]">
          {buyIntro.title}
        </h1>
        <p className="mt-4 max-w-xl text-muted">{buyIntro.lead}</p>
      </div>

      <ul className="buy-grid mt-12 list-none p-0">
        {buyItems.map((item) => (
          <li key={item.slug} className="buy-item">
            <a
              href={item.href}
              className="buy-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="buy-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  srcSet={`${item.image} 1x, ${item.image2x} 2x`}
                  alt={item.alt}
                  width={250}
                  height={250}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="buy-meta">
                <span className="buy-name">{item.name}</span>
                {item.price ? (
                  <span className="buy-price">{item.price}</span>
                ) : null}
                <span className="buy-reason">{item.reason}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <section className="site-shell mt-16">
        <h2 className="text-sm font-medium">keep a couple backups</h2>
        <p className="mt-3 text-muted">
          it also does not hurt to keep at least a couple backups of:
        </p>
        <ul className="mt-4 list-none space-y-2 p-0 text-[1.0625rem]">
          {buyBackups.map((b) => (
            <li key={b.item}>
              {b.item}{" "}
              <span className="text-sm text-faint">({b.shelf})</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
