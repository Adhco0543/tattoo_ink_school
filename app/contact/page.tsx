import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";
import ContactExperience from "./ContactExperience";

export const metadata: Metadata = {
  title: "Contact & Visit | Ink Tattoo School",
  description:
    "Contact Ink Tattoo School, ask a question, or request a visit to learn more about the 12-week Professional Tattoo Fundamentals program.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="inner-page contact-page">
      <SiteHeader />

      <section className="contact-hero">
        <div className="contact-hero-art" aria-hidden="true">
          <div className="contact-route route-one" />
          <div className="contact-route route-two" />
          <div className="contact-grid-lines" />
        </div>
        <div className="shell contact-hero-grid">
          <div>
            <p className="eyebrow">Contact & visit</p>
            <h1>Come see what the program actually looks like.</h1>
          </div>
          <p>
            Ask a question, talk through the program, or request a visit before deciding whether
            Ink Tattoo School is the right fit.
          </p>
        </div>
      </section>

      <section className="contact-location">
        <div className="shell contact-location-grid">
          <div className="location-map" aria-label="Manchester, New Hampshire location area">
            <div className="map-street street-one" />
            <div className="map-street street-two" />
            <div className="map-street street-three" />
            <div className="map-pin"><span>INK</span></div>
            <small>Manchester, New Hampshire</small>
          </div>

          <div className="location-copy">
            <p className="eyebrow">Location</p>
            <h2>Manchester, New Hampshire</h2>
            <p>
              Ink Tattoo School is based in Manchester, New Hampshire. Prospective students can
              request a visit below, and confirmed visit details can be provided directly by the school.
            </p>
            <div className="location-facts">
              <div><span>Program</span><strong>12 weeks</strong></div>
              <div><span>Instruction</span><strong>144 hours</strong></div>
              <div><span>Tuition</span><strong>$8,750</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="shell contact-form-layout">
          <div className="contact-form-intro">
            <p className="eyebrow">Start the conversation</p>
            <h2>Question or visit. Your choice.</h2>
            <p>
              A school visit request is separate from an application. You can come with questions,
              see the environment, and decide whether you want to take the next step.
            </p>
            <a className="text-link text-link-light" href="/faq">Read the FAQ first <span>↘</span></a>
          </div>
          <ContactExperience />
        </div>
      </section>

      <section className="visit-expectation">
        <div className="shell visit-expectation-grid">
          <div>
            <p className="eyebrow">A useful visit</p>
            <h2>What to ask when you come in.</h2>
          </div>
          <ol>
            <li><span>01</span><strong>How the 12-week schedule works</strong></li>
            <li><span>02</span><strong>What students practice during class</strong></li>
            <li><span>03</span><strong>What equipment is purchased later</strong></li>
            <li><span>04</span><strong>How progress and completion are evaluated</strong></li>
            <li><span>05</span><strong>What the program does and does not qualify you to do</strong></li>
          </ol>
        </div>
      </section>

      <section className="contact-next-step">
        <div className="shell contact-next-step-grid">
          <div className="next-step-number">NEXT</div>
          <div>
            <p className="eyebrow">When you&apos;re ready</p>
            <h2>Application comes after understanding the program.</h2>
            <div className="hero-actions">
              <a className="button button-light" href="/admissions#application">Begin application</a>
              <a className="text-link text-link-light" href="/curriculum">View curriculum <span>↘</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">INK</span>
            <span className="brand-copy">Tattoo School</span>
          </Link>
          <p>Professional Tattoo Fundamentals</p>
        </div>
        <div>
          <p>Manchester, New Hampshire</p>
          <p className="fine-print">
            <a href="/faq">FAQ</a> · <a href="/policies">Student Policies</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
