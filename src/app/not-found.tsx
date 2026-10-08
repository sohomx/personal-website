import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-shell py-20">
      <h1 className="display text-4xl">404</h1>
      <p className="mt-3 text-muted">that page is not here.</p>
      <Link href="/" className="btn mt-6 inline-flex">
        home
      </Link>
    </div>
  );
}
