import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-shell py-20">
      <h1 className="text-[1.75rem] font-medium tracking-tight">404</h1>
      <p className="mt-3 text-muted">that page is not here.</p>
      <Link href="/" className="quiet-link mt-6 inline-block text-sm">
        back to home
      </Link>
    </div>
  );
}
