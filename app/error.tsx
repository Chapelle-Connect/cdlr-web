"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="not-found">
      <Link className="back-link" href="/">
        <span aria-hidden="true">←</span> Chapelle Connect
      </Link>
      <h1>We couldn’t load this page.</h1>
      <p>Try again, or return to the Chapelle Connect home page.</p>
      <div className="error-actions">
        <button className="btn primary" type="button" onClick={reset}>
          Try again
        </button>
        <Link className="btn secondary" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
