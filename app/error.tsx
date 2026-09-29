"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="error-page">
      <div className="shell error-page-inner">
        <p className="eyebrow">Something went wrong</p>
        <h1>The page hit a snag.</h1>
        <p>
          Nothing you entered has been intentionally discarded. Try the page again, or return home.
        </p>
        <div className="hero-actions">
          <button className="button" type="button" onClick={reset}>Try again</button>
          <Link className="text-link text-link-light" href="/">Back home <span>↘</span></Link>
        </div>
      </div>
    </main>
  );
}
