import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Policies | Ink Tattoo School",
  description:
    "Review attendance, safety, conduct, completion, equipment, complaint, media, and program-status policies for Ink Tattoo School.",
};

const policies = [
  {
    title: "Attendance",
    copy:
      "Attendance is recorded for every class. The school may require makeup instruction for missed hours or critical exercises. Repeated absences, tardiness, early departures, or failure to complete required work may delay or prevent successful completion.",
  },
  {
    title: "Safety & sanitation",
    copy:
      "Safety rules are mandatory. A student who repeatedly disregards sanitation requirements may be removed from practical exercises or dismissed from the program according to school policy.",
  },
  {
    title: "Equipment",
    copy:
      "Students are responsible for approved personal equipment and consumables. Unsafe or questionable equipment may not be used in class.",
  },
  {
    title: "Homework & practice",
    copy:
      "Drawing and design practice outside scheduled classroom hours is strongly expected and supports skill development.",
  },
  {
    title: "Testing & progress",
    copy:
      "Students may receive written quizzes, practical exercises, design reviews, equipment-identification tests, milestone reviews, and progress evaluations throughout the course.",
  },
  {
    title: "Student complaints",
    copy:
      "Students should first raise classroom concerns with the instructor. Unresolved concerns should be submitted in writing to school management. The school will maintain a written complaint process consistent with applicable regulatory requirements.",
  },
  {
    title: "Social media & photography",
    copy:
      "Students must respect privacy, obtain permission before photographing others, and follow school rules regarding classroom, instructor, or student content. A separate media authorization may be used for promotional photography.",
  },
  {
    title: "School property",
    copy:
      "Students are responsible for damage caused by intentional misuse or prohibited conduct. School equipment may not be used without authorization.",
  },
];

const completion = [
  "Required instructional hours completed",
  "Attendance requirements satisfied",
  "Assignments completed",
  "Safety and sanitation competency passed",
  "Written final examination completed",
  "Equipment knowledge evaluation completed",
  "Drawing/design evaluation completed",
  "Practice-skin final project completed",
  "Portfolio reviewed",
  "Professional conduct requirements satisfied",
];

const conduct = [
  "No threats, harassment, theft, or intentional damage",
  "No impairment during class",
  "No deliberate sanitation violation",
  "No unsafe or unauthorized tattoo activity",
  "Respect for instructors, students, equipment, and school property",
];

export default function PoliciesPage() {
  return (
    <main className="inner-page policies-page">
      <header className="site-header inner-header">
        <a className="brand" href="/" aria-label="Ink Tattoo School home">
          <span className="brand-mark">INK</span>
          <span className="brand-copy">Tattoo School</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/program">Program</a>
          <a href="/curriculum">Curriculum</a>
          <a href="/tuition">Tuition</a>
          <a href="/about">About Allen</a>
          <a href="/admissions">Admissions</a>
        </nav>
        <a className="button button-small" href="/admissions#application">Apply Now</a>
      </header>

      <section className="policies-hero">
        <div className="policies-hero-art" aria-hidden="true">
          <div className="policy-bar bar-one" />
          <div className="policy-bar bar-two" />
          <div className="policy-grid" />
        </div>
        <div className="shell policies-hero-grid">
          <div>
            <p className="eyebrow">Student policies</p>
            <h1>Clear rules make better training.</h1>
          </div>
          <p>
            The school package sets expectations around attendance, conduct, sanitation,
            equipment, testing, complaints, privacy, and completion.
          </p>
        </div>
      </section>

      <section className="shell policy-list-section">
        <div className="policy-list-heading">
          <p className="eyebrow">Student handbook</p>
          <h2>The standards students agree to follow.</h2>
        </div>

        <div className="policy-accordion">
          {policies.map((policy, index) => (
            <details key={policy.title} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{policy.title}</strong>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{policy.copy}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="conduct-section">
        <div className="shell conduct-grid">
          <div>
            <p className="eyebrow">Conduct</p>
            <h2>Professional behavior is part of the program.</h2>
          </div>
          <ul>
            {conduct.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="shell completion-section">
        <div className="completion-heading">
          <p className="eyebrow">Completion checklist</p>
          <h2>A certificate is earned, not automatic.</h2>
          <p>
            Tuition payment by itself does not guarantee a Certificate of Completion. The package
            requires the following completion standards.
          </p>
        </div>
        <div className="completion-grid">
          {completion.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="training-limit">
        <div className="shell training-limit-grid">
          <div className="training-limit-number">NON-HUMAN</div>
          <div>
            <p className="eyebrow">Practical training limitation</p>
            <h2>Standard exercises use approved non-human training materials.</h2>
            <p>
              Live-client tattooing is not part of the standard Professional Tattoo Fundamentals
              program described in the school package.
            </p>
          </div>
        </div>
      </section>

      <section className="refund-policy-section">
        <div className="shell refund-policy-grid">
          <div>
            <p className="eyebrow">Refund & cancellation</p>
            <h2>Final terms must be delivered before enrollment is binding.</h2>
          </div>
          <div>
            <p>
              The master package says the student will receive the school&apos;s written cancellation
              and refund policy before the enrollment agreement becomes binding.
            </p>
            <p>
              The supplied package does not specify the final refund percentages, cancellation
              deadlines, or payment-plan terms. Those terms should be added only after the school
              adopts the final written policy.
            </p>
          </div>
        </div>
      </section>

      <section className="no-guarantee-section">
        <div className="shell no-guarantee-grid">
          <span className="no-guarantee-mark">!</span>
          <div>
            <p className="eyebrow">Program status</p>
            <h2>No guarantee of employment, licensing, income, or business success.</h2>
            <p>
              Completion does not itself grant a tattoo license, create an apprenticeship,
              guarantee employment, or independently authorize a graduate to tattoo the public.
            </p>
          </div>
        </div>
      </section>

      <section className="cta policies-cta">
        <div className="shell cta-inner">
          <p className="eyebrow">Questions before applying?</p>
          <h2>Read first. Ask questions. Then apply.</h2>
          <div className="hero-actions">
            <a className="button button-light" href="/tuition">Tuition & equipment</a>
            <a className="text-link text-link-light" href="/admissions">Admissions <span>↘</span></a>
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
            <a href="/tuition">Tuition & Equipment</a> · <a href="/admissions">Admissions</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
