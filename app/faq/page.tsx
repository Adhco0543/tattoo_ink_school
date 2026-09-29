import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Ink Tattoo School",
  description:
    "Answers to common questions about Ink Tattoo School's 12-week Professional Tattoo Fundamentals program in Manchester, New Hampshire.",
};

const faqs = [
  {
    q: "How long is the program?",
    a: "The program runs for 12 weeks and includes 144 instructional hours. The planned schedule is three class days per week, four hours per day.",
  },
  {
    q: "How much is tuition?",
    a: "Program tuition is $8,750. Personal tattoo equipment and consumable supplies are purchased separately by the student.",
  },
  {
    q: "How large are the classes?",
    a: "The planned starting model is approximately four students per class so instruction can stay focused and progress can be observed more closely.",
  },
  {
    q: "Does completing the program give me a tattoo license?",
    a: "No. The program is educational. Completion does not itself grant a state tattoo license or independently authorize a graduate to tattoo the public.",
  },
  {
    q: "Is this an apprenticeship?",
    a: "No. Completion of the Professional Tattoo Fundamentals program does not itself constitute a tattoo apprenticeship.",
  },
  {
    q: "Does the school guarantee a job after graduation?",
    a: "No. The program does not guarantee employment, income, licensing, apprenticeship placement, or business success.",
  },
  {
    q: "What do students practice on?",
    a: "The standard program uses approved non-human training materials for practical exercises. Live-client tattooing is not part of the standard Professional Tattoo Fundamentals program.",
  },
  {
    q: "Do I need to own tattoo equipment before the first class?",
    a: "No. Students begin with basic art supplies. Tattoo machines, cartridges, inks, practice skins, and other personal tattoo supplies are purchased later with school guidance.",
  },
  {
    q: "Do I need previous drawing experience?",
    a: "There is no published minimum prior drawing-experience requirement. Admissions includes a discussion of your background, goals, expectations, and readiness for the program.",
  },
  {
    q: "Can I show the school my artwork before enrolling?",
    a: "Yes. The admissions materials allow applicants to share artwork examples if available. The application experience is built to support optional artwork submission.",
  },
  {
    q: "What do I have to do to complete the program?",
    a: "Completion is based on required instructional hours, attendance, assignments, safety and sanitation competency, written and practical evaluations, a final practice-skin project, portfolio review, and professional conduct requirements.",
  },
  {
    q: "What is the refund policy?",
    a: "The school will provide its written cancellation and refund policy before enrollment becomes binding. Final refund percentages and deadlines are governed by that written policy.",
  },
  {
    q: "Are payment plans available?",
    a: "No final payment-plan terms are published on the website. Any payment options should be confirmed directly with the school before enrollment.",
  },
  {
    q: "Can I visit the school before applying?",
    a: "The website includes a request-a-visit flow so prospective students can ask to see the school and discuss the program before making an enrollment decision.",
  },
];

export default function FAQPage() {
  return (
    <main id="main-content" className="inner-page faq-page">
      <SiteHeader />

      <section className="faq-hero">
        <div className="faq-hero-art" aria-hidden="true">
          <div className="faq-circle circle-one" />
          <div className="faq-circle circle-two" />
          <div className="faq-grid-lines" />
        </div>
        <div className="shell faq-hero-grid">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h1>Know what you&apos;re walking into.</h1>
          </div>
          <p>
            Clear answers about time, cost, equipment, admissions, completion, licensing,
            and what the program does not promise.
          </p>
        </div>
      </section>

      <section className="faq-list-section shell">
        <div className="faq-list-heading">
          <p className="eyebrow">Questions & answers</p>
          <h2>The details that matter before you apply.</h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.q}</strong>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="faq-still-question">
        <div className="shell faq-still-grid">
          <div className="faq-question-mark">?</div>
          <div>
            <p className="eyebrow">Still have a question?</p>
            <h2>Ask before you decide.</h2>
            <p>
              Use the contact page to ask about the program or request a visit to the school.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="/contact">Contact the school</a>
              <a className="text-link text-link-light" href="/admissions">Admissions <span>↘</span></a>
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
            <a href="/policies">Student Policies</a> · <a href="/contact">Contact</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
