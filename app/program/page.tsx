import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Program | Ink Tattoo School",
  description:
    "Explore the 12-week, 144-hour Professional Tattoo Fundamentals program at Ink Tattoo School in Manchester, New Hampshire.",
};

const focusAreas = [
  ["01", "Safety & Sanitation", "Bloodborne-pathogen awareness, barrier protection, clean work habits and cross-contamination prevention."],
  ["02", "Drawing & Design", "Drawing fundamentals, composition, lettering, flash design and color theory."],
  ["03", "Machines & Supplies", "Tattoo machines, power systems, needles, cartridges, inks and the purpose of core equipment."],
  ["04", "Stencil & Control", "Stencil preparation and placement, hand position, machine angle and controlled movement."],
  ["05", "Linework & Shading", "Basic linework, developing line control, shading and black-and-gray fundamentals."],
  ["06", "Color & Projects", "Color theory in practice, color packing and complete practice projects."],
  ["07", "Portfolio & Professional Development", "Organizing work, reviewing progress and preparing a stronger body of work."],
];

const quickFacts = [
  ["12", "Weeks"],
  ["144", "Instructional Hours"],
  ["3", "Days Each Week"],
  ["4", "Hours Per Day"],
];

export default function ProgramPage() {
  return (
    <main id="main-content" className="inner-page program-page">
      <SiteHeader />

      <section className="inner-hero program-hero">
        <div className="inner-hero-art" aria-hidden="true">
          <div className="program-ring ring-one" />
          <div className="program-ring ring-two" />
          <div className="inner-grid" />
        </div>
        <div className="shell inner-hero-content">
          <p className="eyebrow">Professional Tattoo Fundamentals</p>
          <h1>Build the foundation before you build the style.</h1>
          <p>
            A structured 12-week program designed around disciplined practice, safety,
            equipment knowledge, drawing, machine control and progressive skill development.
          </p>
        </div>
      </section>

      <section className="program-facts" aria-label="Program schedule">
        {quickFacts.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="shell split-story">
        <div>
          <p className="eyebrow">How the program works</p>
          <h2>Structured progression. Small-class attention.</h2>
        </div>
        <div className="story-copy">
          <p>
            Students move through the program in a deliberate sequence. Safety and sanitation
            come first, followed by drawing and design, equipment knowledge, stencil work,
            machine control, linework, shading, black-and-gray, color and complete practice projects.
          </p>
          <p>
            The small-class format is intended to give the instructor more opportunity to observe
            technique, answer questions and follow each student&apos;s progress as skills develop.
          </p>
        </div>
      </section>

      <section className="focus-section">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Core areas</p>
              <h2>What students work through.</h2>
            </div>
            <p>
              The program is built to make the fundamentals visible, repeatable and easier to
              connect from one stage to the next.
            </p>
          </div>

          <div className="focus-list">
            {focusAreas.map(([index, title, copy]) => (
              <article className="focus-card" key={title}>
                <span>{index}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-band">
        <div className="shell practice-grid">
          <div className="practice-number">144</div>
          <div>
            <p className="eyebrow">Instructional hours</p>
            <h2>Enough time to slow down and actually practice.</h2>
            <p>
              The schedule is three days per week, four hours per day, across 12 weeks.
              The goal is not to race through topics. It is to build a repeatable foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="shell disclosure-panel">
        <div>
          <p className="eyebrow">Important distinction</p>
          <h2>Education, not a substitute for licensing.</h2>
        </div>
        <p>
          Ink Tattoo School provides educational instruction in tattoo fundamentals.
          Completion of the program does not itself constitute a tattoo apprenticeship,
          state tattoo license, guarantee of employment, or independent authorization to tattoo the public.
        </p>
      </section>

      <section className="cta program-cta">
        <div className="shell cta-inner">
          <p className="eyebrow">Next step</p>
          <h2>See where the 12 weeks can take you.</h2>
          <div className="hero-actions">
            <a className="button button-light" href="/curriculum">Explore the curriculum</a>
            <a className="text-link text-link-light" href="/about">Meet Allen <span>↘</span></a>
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
            12-week educational program · 144 instructional hours · tuition to be announced
          </p>
        </div>
      </footer>
    </main>
  );
}
