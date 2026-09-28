import type { Metadata } from "next";
import ApplicationForm from "./ApplicationForm";

export const metadata: Metadata = {
  title: "Admissions & Application | Ink Tattoo School",
  description:
    "Learn how admissions works and begin an application for the 12-week Professional Tattoo Fundamentals program at Ink Tattoo School.",
};

const steps = [
  ["01", "Apply", "Tell us who you are, how to reach you, and what brings you to the program."],
  ["02", "Share your goals", "Explain what you want to learn and where you are starting from."],
  ["03", "Optional artwork", "Applicants may share 5–10 examples of artwork if available."],
  ["04", "Admissions conversation", "A short interview reviews goals, expectations, readiness, and program fit."],
];

const expectations = [
  "Written application",
  "Short admissions interview",
  "Discussion of goals and expectations",
  "Optional 5–10 artwork examples if available",
  "Acknowledgment that the program is educational and is not itself a tattoo license or apprenticeship",
];

export default function AdmissionsPage() {
  return (
    <main className="inner-page admissions-page">
      <header className="site-header inner-header">
        <a className="brand" href="/" aria-label="Ink Tattoo School home">
          <span className="brand-mark">INK</span>
          <span className="brand-copy">Tattoo School</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/program">Program</a>
          <a href="/curriculum">Curriculum</a>
          <a href="/about">About Allen</a>
          <a href="/admissions">Admissions</a>
        </nav>
        <a className="button button-small" href="#application">Apply Now</a>
      </header>

      <section className="admissions-hero">
        <div className="admissions-art" aria-hidden="true">
          <div className="admissions-sweep sweep-one" />
          <div className="admissions-sweep sweep-two" />
          <div className="admissions-grid" />
        </div>
        <div className="shell admissions-hero-grid">
          <div>
            <p className="eyebrow">Admissions</p>
            <h1>Start with the reason you want to learn.</h1>
          </div>
          <div className="admissions-hero-copy">
            <p>
              Ink Tattoo School uses a simple admissions process built around readiness,
              expectations, goals, and fit for structured small-class instruction.
            </p>
            <a className="button" href="#application">Begin application</a>
          </div>
        </div>
      </section>

      <section className="admissions-steps shell">
        <div className="admissions-heading">
          <p className="eyebrow">How it works</p>
          <h2>Four clear steps.</h2>
        </div>
        <div className="admissions-step-grid">
          {steps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-expectations">
        <div className="shell admissions-expectations-grid">
          <div>
            <p className="eyebrow">Before you apply</p>
            <h2>Know what the school is looking for.</h2>
            <p>
              Admission is based on suitability and readiness for the program. The school&apos;s
              materials emphasize expectations, responsibility, and a clear understanding of what
              the program does and does not provide.
            </p>
          </div>
          <ul>
            {expectations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="application-section" id="application">
        <div className="shell application-layout">
          <div className="application-intro">
            <p className="eyebrow">Application</p>
            <h2>Tell us where you&apos;re starting from.</h2>
            <p>
              Complete the form in four short sections. Artwork is optional and can be added
              if you already have examples you want the school to review.
            </p>
            <div className="application-facts">
              <div><strong>12</strong><span>Weeks</span></div>
              <div><strong>144</strong><span>Hours</span></div>
              <div><strong>$8,750</strong><span>Tuition</span></div>
            </div>
          </div>
          <ApplicationForm />
        </div>
      </section>

      <section className="admissions-disclosure">
        <div className="shell admissions-disclosure-grid">
          <div className="disclosure-number">01</div>
          <div>
            <p className="eyebrow">Important acknowledgment</p>
            <h2>This is a fundamentals education program.</h2>
            <p>
              Completion does not itself constitute a tattoo apprenticeship, state tattoo license,
              guarantee employment, or independently authorize a graduate to tattoo the public.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <a className="brand" href="/">
            <span className="brand-mark">INK</span>
            <span className="brand-copy">Tattoo School</span>
          </a>
          <p>Professional Tattoo Fundamentals</p>
        </div>
        <div>
          <p>Manchester, New Hampshire</p>
          <p className="fine-print">12 weeks · 144 instructional hours · $8,750 tuition</p>
        </div>
      </footer>
    </main>
  );
}
