import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <Link className="back-link" href="/">
        <span aria-hidden="true">←</span> Chapelle Connect
      </Link>
      <h1>Page not found.</h1>
      <p>
        The page you’re looking for may have moved. Return home to continue
        exploring Chapelle Connect.
      </p>
      <div className="error-actions">
        <Link className="btn primary" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
