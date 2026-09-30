import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";
import EquipmentChecklist from "./EquipmentChecklist";

export const metadata: Metadata = {
  title: "Tuition & Equipment | Ink Tattoo School",
  description:
    "Review tuition, student equipment responsibilities, and the equipment checklist for Ink Tattoo School's 12-week Professional Tattoo Fundamentals program.",
};

const beforeClass = [
  "Notebook or binder purchased through Ink Tattoo School",
  "Pencils and erasers purchased through Ink Tattoo School",
  "Black drawing pens or markers purchased through Ink Tattoo School",
  "Basic drawing paper or sketchbook purchased through Ink Tattoo School",
  "Any additional required art supplies listed by the instructor and purchased through Ink Tattoo School",
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
            <h1>To Be Announced</h1>
            <p className="tuition-hero-kicker">12 weeks · 144 instructional hours</p>
          </div>
          <div className="tuition-hero-copy">
            <h2>Know the program. Know the supply policy.</h2>
            <p>
              The final tuition amount has not been set yet and will be published before enrollment becomes binding. All required equipment and supplies used in the program must be purchased through Ink Tattoo School.
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
            Tuition and required supply costs will be presented clearly before enrollment becomes binding. Required equipment and supplies are purchased through Ink Tattoo School.
          </p>
          <p>
            Students receive the required equipment and supply list from the school. Outside supplies or equipment are not permitted unless the school gives written authorization for a specific exception.
          </p>
        </div>
      </section>

      <section className="equipment-stage">
        <div className="shell equipment-stage-grid">
          <div>
            <p className="eyebrow">Equipment timeline</p>
            <h2>Start simple. Purchase required items through the school.</h2>
          </div>

          <div className="equipment-columns">
            <article>
              <span className="equipment-phase">Required before class begins · purchased through the school</span>
              <ul>
                {beforeClass.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article>
              <span className="equipment-phase">Purchased through Ink Tattoo School</span>
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
          <h2>Review the required school supply list.</h2>
          <p>
            This checklist shows the types of items students may need during training. Required items must be purchased through Ink Tattoo School so equipment and supplies meet the school’s training and safety standards.
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
              Only school-supplied or school-authorized equipment and supplies may be used in class. This supports consistency, compatibility, sanitation, and safety.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Student ownership</h3>
            <p>
              Items purchased by a student through Ink Tattoo School remain the student&apos;s property unless a written purchase or rental agreement states otherwise. Students are responsible for care and storage of their personal equipment.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>School-only purchases</h3>
            <p>
              All required equipment, supplies, inks, cartridges, practice materials, and consumables must be purchased through Ink Tattoo School. Outside supplies are not permitted unless the school provides written authorization for a specific exception.
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
              The school will provide its written cancellation and refund policy before the enrollment
              agreement becomes binding. Final refund percentages, deadlines, and cancellation terms
              are governed by that written policy.
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
          <Link className="brand" href="/">
            <span className="brand-mark">INK</span>
            <span className="brand-copy">Tattoo School</span>
          </Link>
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
