import SiteHeader from "@/app/components/SiteHeader";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <SiteHeader />
      <div className="shell not-found-inner">
        <p className="eyebrow">404</p>
        <h1>That page isn&apos;t here.</h1>
        <p>The site is intact. This link just wandered off the stencil.</p>
        <div className="hero-actions">
          <a className="button" href="/">Back home</a>
          <a className="text-link text-link-light" href="/contact">Contact the school <span>↘</span></a>
        </div>
      </div>
    </main>
  );
}
