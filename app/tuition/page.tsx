import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";
import EquipmentChecklist from "./EquipmentChecklist";

export const metadata: Metadata = {
  title: "Tuition & Equipment | Ink Tattoo School",
  description:
    "Review tuition, student equipment responsibilities, and the equipment checklist for Ink Tattoo School's 12-week Professional Tattoo Fundamentals program.",
};

const beforeClass = [
  "Notebook or binder",
  "Pencils and erasers",
  "Black drawing pens or markers",
  "Basic drawing paper or sketchbook",
  "Any additional basic art supplies listed by the instructor",
];

const laterEquipment = [
  "Tattoo machine",
  "Compatible battery or power supply",
  "Needles or cartridges",
  "Professional tattoo inks",
  "Practice skins",
  "Stencil paper and stencil products",
  "Ink caps",
  "Barrier materials",
  "Machine bags or sleeves",
  "Other personal consumables used in class",
];

export default function TuitionPage() {
  return (
    <main id="main-content" className="inner-page tuition-page">
      <SiteHeader />

      <section className="tuition-hero">
        <div className="tuition-hero-art" aria-hidden="true">
          <div className="gold-orbit gold-orbit-one" />
          <div className="gold-orbit gold-orbit-two" />
          <div className="tuition-lines" />
        </div>
        <div className="shell tuition-hero-grid">
          <div>
            <p className="eyebrow">Tuition & equipment</p>
            <h1>$8,750</h1>
            <p className="tuition-hero-kicker">12 weeks · 144 instructional hours</p>
          </div>
          <div className="tuition-hero-copy">
            <h2>Know the cost. Know what you bring.</h2>
            <p>
              Tuition covers the educational program. Personal tattoo equipment and consumable
              supplies are purchased separately by each student.
            </p>
          </div>
        </div>
      </section>

      <section className="tuition-facts" aria-label="Program facts">
        <div><strong>12</strong><span>Weeks</span></div>
        <div><strong>36</strong><span>Class Days</span></div>
        <div><strong>144</strong><span>Instructional Hours</span></div>
        <div><strong>~4</strong><span>Planned Students / Class</span></div>
      </section>

      <section className="shell tuition-breakdown">
        <div>
          <p className="eyebrow">What tuition covers</p>
          <h2>The instruction is the product.</h2>
        </div>
        <div>
          <p>
            The school package separates tuition from personal equipment so the program can focus
            on instruction rather than equipment sales.
          </p>
          <p>
            Students receive school guidance before purchasing tattoo machines, power systems,
            needles, cartridges, inks, practice materials, and other personal consumables.
          </p>
        </div>
      </section>

      <section className="equipment-stage">
        <div className="shell equipment-stage-grid">
          <div>
            <p className="eyebrow">Equipment timeline</p>
            <h2>Start simple. Add equipment with guidance.</h2>
          </div>

          <div className="equipment-columns">
            <article>
              <span className="equipment-phase">Before class begins</span>
              <ul>
                {beforeClass.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article>
              <span className="equipment-phase">Purchased later in the program</span>
              <ul>
                {laterEquipment.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="shell checklist-section">
        <div className="checklist-intro">
          <p className="eyebrow">Interactive checklist</p>
          <h2>Track what you already have.</h2>
          <p>
            This checklist is for planning only. Final equipment choices should follow school
            guidance so items are appropriate and safe for training.
          </p>
        </div>
        <EquipmentChecklist items={[...beforeClass, ...laterEquipment]} />
      </section>

      <section className="equipment-rules">
        <div className="shell equipment-rules-grid">
          <article>
            <span>01</span>
            <h3>School approval</h3>
            <p>
              The school may refuse equipment or supplies that appear unsafe, damaged,
              contaminated, expired, counterfeit, incompatible, or inappropriate for training.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Student ownership</h3>
            <p>
              Student-purchased equipment remains the student&apos;s property. Students are
              responsible for maintaining, storing, transporting, and replacing their own equipment.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>No required school purchase</h3>
            <p>
              Students are not required to buy personal tattoo equipment from the school unless
              a future written policy specifically identifies an optional school purchase.
            </p>
          </article>
        </div>
      </section>

      <section className="refund-note">
        <div className="shell refund-note-grid">
          <div className="refund-note-number">POLICY</div>
          <div>
            <p className="eyebrow">Refund & cancellation</p>
            <h2>Read the final written policy before enrollment.</h2>
            <p>
              The current master package states that the school will provide its written cancellation
              and refund policy before the enrollment agreement becomes binding. The package does not
              set the final refund percentages, deadlines, or cancellation terms, so this website does
              not invent them.
            </p>
            <a className="text-link text-link-light" href="/policies">
              View student policies <span>↘</span>
            </a>
          </div>
        </div>
      </section>

      <section className="cta tuition-cta">
        <div className="shell cta-inner">
          <p className="eyebrow">Ready to talk?</p>
          <h2>Start with the program. Then decide.</h2>
          <p>Review the curriculum, ask questions, and apply when you are ready.</p>
          <div className="hero-actions">
            <a className="button button-light" href="/admissions#application">Begin application</a>
            <a className="text-link text-link-light" href="/curriculum">View curriculum <span>↘</span></a>
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
          <p className="fine-print">
            <a href="/policies">Student Policies</a> · <a href="/admissions">Admissions</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
