import Link from "next/link";
const navigation = [
  ["Program", "/program"],
  ["Curriculum", "/curriculum"],
  ["Gallery", "/gallery"],
  ["Tuition", "/tuition"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ink Tattoo School home">
        <span className="brand-mark">INK</span>
        <span className="brand-copy">Tattoo School</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>

      <a className="button button-small desktop-apply" href="/admissions#application">
        Apply Now
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open site menu">
          <span>Menu</span>
          <b aria-hidden="true">+</b>
        </summary>
        <div className="mobile-menu-panel">
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>
          <a className="button button-small" href="/admissions#application">Apply Now</a>
        </div>
      </details>
    </header>
  );
}
