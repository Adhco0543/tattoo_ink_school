import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ink Tattoo School | Allen Hendershot & Megg Murray",
  description:
    "Meet Ink Tattoo School founder Allen Hendershot and lead instructor Megg Murray, a tattoo artist with more than 25 years of experience.",
};

const principles = [
  ["Foundation first", "Students begin with safety, sanitation, art and equipment knowledge before advanced technique."],
  ["Small-class instruction", "The school model is built around a small group so progress can be observed more closely."],
  ["Practice with purpose", "Each stage connects to the next so students can see why they are practicing a particular skill."],
  ["Professional expectations", "Clean habits, preparation, consistency and respect for the craft are part of the learning environment."],
];

export default function AboutPage() {
  return (
    <main id="main-content" className="inner-page about-page">
      <SiteHeader />

      <section className="inner-hero founder-hero">
        <div className="founder-visual" aria-hidden="true">
          <div className="founder-monogram">AH</div>
          <div className="portrait-frame">
            <span>Founder portrait area</span>
          </div>
        </div>
        <div className="shell founder-copy">
          <p className="eyebrow">Owner & Founder</p>
          <h1>Allen Hendershot</h1>
          <p>
            Ink Tattoo School is built around a straightforward idea: give students a structured place
            to learn the fundamentals, understand the tools, respect the safety side of the craft and
            develop skill through focused practice.
          </p>
        </div>
      </section>

      <section className="founder-statement">
        <div className="shell">
          <span className="quote-mark">“</span>
          <p>
            The school model puts the fundamentals in order, keeps the class small and gives students
            room to work through each stage instead of skipping ahead.
          </p>
        </div>
      </section>

      <section className="shell founder-story">
        <div>
          <p className="eyebrow">The school approach</p>
          <h2>Clear standards. Deliberate practice. No shortcuts.</h2>
        </div>
        <div>
          <p>
            The program begins with safety and sanitation, then moves through drawing, design,
            machines, needles, stencils, linework, shading, black-and-gray, color and complete projects.
          </p>
          <p>
            Allen is the owner and founder of Ink Tattoo School. Instructor experience and credentials
            are presented separately so students can clearly see who operates the school and who leads
            the tattoo instruction.
          </p>
        </div>
      </section>

      <section className="founder-teaser">
        <div className="shell founder-teaser-grid">
          <div className="founder-teaser-mark" aria-hidden="true">MM</div>
          <div>
            <p className="eyebrow">Lead Instructor</p>
            <h2>Megg Murray.</h2>
            <p>
              Megg has been tattooing for more than 25 years and brings decades of real-world shop
              experience into the classroom. Her instruction centers on disciplined fundamentals,
              professional habits and hands-on learning.
            </p>
            <p className="fine-print">
              Megg&apos;s individual certificates and professional training will be listed by name once
              the exact credentials are provided for publication.
            </p>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell">
          <p className="eyebrow">What shapes the learning environment</p>
          <div className="principles-grid">
            {principles.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-bridge shell">
        <div className="about-bridge-number">04</div>
        <div>
          <p className="eyebrow">Small-class model</p>
          <h2>Approximately four students per class.</h2>
          <p>
            The planned starting model uses a small group so instruction can stay focused
            and students have more opportunity to ask questions and receive direct observation.
          </p>
          <a className="button" href="/program">Explore the program</a>
        </div>
      </section>

      <section className="cta founder-cta">
        <div className="shell cta-inner">
          <p className="eyebrow">Come see the school</p>
          <h2>Start with a conversation.</h2>
          <p>
            Learn how the program works, ask questions about the schedule and decide whether
            Ink Tattoo School fits what you are looking for.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="/admissions#application">Request information</a>
            <a className="text-link text-link-light" href="/program">View program <span>↘</span></a>
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
            Completion of the program does not itself constitute a tattoo apprenticeship or state tattoo license.
          </p>
          <p className="fine-print">Website built by Teejay · AI development support by Bella</p>
        </div>
      </footer>
    </main>
  );
}
