import SiteHeader from "@/app/components/SiteHeader";
import HeroVideo from "./components/HeroVideo";

const stats = [
  ["12", "Weeks"],
  ["144", "Instructional Hours"],
  ["3", "Days / Week"],
  ["TBD", "Program Tuition"],
];

const pillars = [
  {
    index: "01",
    title: "Art & Design",
    copy: "Drawing, composition, lettering, flash design and color theory form the visual foundation.",
  },
  {
    index: "02",
    title: "Equipment",
    copy: "Learn the fundamentals of tattoo machines, power systems, needles, cartridges and inks.",
  },
  {
    index: "03",
    title: "Technique",
    copy: "Build control through stencil work, linework, shading, black-and-gray and color packing.",
  },
  {
    index: "04",
    title: "Safety",
    copy: "Train around bloodborne-pathogen awareness, barriers, sanitation and cross-contamination prevention.",
  },
];

const weeks = [
  "Safety & Sanitation",
  "Drawing Fundamentals",
  "Tattoo Design",
  "Machines, Needles & Supplies",
  "Stencils & Machine Control",
  "Basic Linework",
  "Developing Linework",
  "Shading",
  "Black & Gray",
  "Color",
  "Complete Tattoo Projects",
  "Professional Development & Final Testing",
];

const reasons = [
  ["35 Years", "Learn from Megg Murray’s decades of real tattoo-shop experience."],
  ["Small Classes", "More room for questions, observation, repetition and direct feedback."],
  ["Real Shop", "Training is built around professional habits, equipment knowledge and shop expectations."],
  ["Art + Safety", "Technique matters, but so do drawing, sanitation, setup and disciplined process."],
];

const outcomes = [
  "A stronger tattoo-focused art portfolio",
  "Working knowledge of machines, needles, cartridges and setup",
  "Foundational control in linework, shading and color",
  "Sanitation and cross-contamination prevention habits",
  "Experience completing structured practice projects",
  "A clearer understanding of professional shop expectations",
];

const journey = [
  ["01", "Apply", "Tell the school about your goals and what draws you to tattooing."],
  ["02", "Learn", "Start with sanitation, drawing, design, equipment and core fundamentals."],
  ["03", "Practice", "Build control through repeated stencil, line, shading and color exercises."],
  ["04", "Build", "Turn guided practice into stronger projects and portfolio-ready work."],
  ["05", "Finish", "Complete final projects, testing and professional-development work."],
  ["06", "Next", "Leave with a clearer picture of the next step in your tattoo career."],
];

export default function Home() {
  return (
    <main id="main-content">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <HeroVideo />
          <div className="ink-orb ink-orb-one" />
          <div className="ink-orb ink-orb-two" />
          <div className="hero-grid" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content shell">
          <p className="eyebrow">Manchester, New Hampshire</p>
          <h1>
            Learn the fundamentals.
            <span>Build the skill.</span>
            Develop your art.
          </h1>
          <p className="hero-copy">
            A structured Professional Tattoo Fundamentals program led by Megg Murray, a tattoo artist
            with 35 years of experience, and built around art, safety, equipment knowledge,
            repetition and disciplined practice.
          </p>
          <div className="hero-actions">
            <a className="button" href="/admissions#application">Apply Now</a>
            <a className="text-link" href="/program">Explore the program <span>↘</span></a>
          </div>
        </div>
        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>

      <section className="stats" aria-label="Program quick facts">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="statement shell" id="program">
        <p className="eyebrow">The foundation comes first</p>
        <h2>Tattooing starts long before the machine touches skin.</h2>
        <p className="statement-copy">
          The program combines drawing, sanitation, equipment knowledge, stencil work,
          machine control, linework, shading, color and portfolio development in a focused,
          small-class environment.
        </p>
        <a className="text-link statement-link" href="/program">See the full program <span>↘</span></a>
      </section>

      <section className="pillars shell" aria-label="Core areas of study">
        {pillars.map((pillar) => (
          <article className="pillar" key={pillar.title}>
            <span className="pillar-index">{pillar.index}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </section>

      <section className="why-ink">
        <div className="shell">
          <div className="why-ink-heading">
            <div>
              <p className="eyebrow">Why Ink Tattoo School</p>
              <h2>Built for people who want more than a quick introduction.</h2>
            </div>
            <p>
              The program is structured to connect art, safety, equipment and technique instead of
              treating them like separate subjects. Every stage is meant to support the next.
            </p>
          </div>
          <div className="why-ink-grid">
            {reasons.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="student-journey">
        <div className="shell student-journey-grid">
          <div className="student-journey-intro">
            <p className="eyebrow">Your path through the program</p>
            <h2>From first conversation to final project.</h2>
            <p>
              The goal is not to rush students into tattooing. It is to build a sequence of skills,
              habits and decisions that make the next step more informed.
            </p>
          </div>
          <ol className="journey-list">
            {journey.map(([number, title, copy]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="shell outcomes-grid">
          <div>
            <p className="eyebrow">What you leave with</p>
            <h2>Not a shortcut. A stronger foundation.</h2>
          </div>
          <div className="outcome-list">
            {outcomes.map((outcome, index) => (
              <div key={outcome}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-teaser">
        <div className="shell founder-teaser-grid">
          <div className="founder-teaser-mark" aria-hidden="true">AH</div>
          <div>
            <p className="eyebrow">Owner & Founder</p>
            <h2>Meet Allen Hendershot.</h2>
            <p>
              Allen Hendershot is the owner and founder of Ink Tattoo School. He built the school
              around structured fundamentals, small-class instruction, clear standards and a
              professional learning environment where students can develop skill step by step.
            </p>
            <a className="text-link text-link-light" href="/about">About Allen <span>↘</span></a>
          </div>
        </div>
      </section>

      <section className="founder-teaser">
        <div className="shell founder-teaser-grid">
          <div className="founder-teaser-mark" aria-hidden="true">MM</div>
          <div>
            <p className="eyebrow">Lead Instructor</p>
            <h2>Meet Megg Murray.</h2>
            <p>
              Megg has 35 years of tattooing experience and brings real shop knowledge,
              professional standards and hands-on perspective into the classroom. Her verified
              certifications and training can be listed here as soon as the exact credential names are provided.
            </p>
            <a className="text-link text-link-light" href="/about">Meet the school <span>↘</span></a>
          </div>
        </div>
      </section>

      <section className="home-media-teaser">
        <div className="shell home-media-teaser-grid">
          <div>
            <p className="eyebrow">Inside the shop</p>
            <h2>Show the work. Show the process.</h2>
            <p>
              This section is ready for real shop photography: Megg tattooing, the studio interior,
              clean station details, supervised practice, drawing and finished portfolio work.
            </p>
            <a className="text-link text-link-light" href="/gallery">Open gallery <span>↘</span></a>
          </div>
          <div className="home-media-cards" aria-hidden="true">
            <div className="home-media-card"><span>Tattooing</span></div>
            <div className="home-media-card"><span>The Shop</span></div>
            <div className="home-media-card"><span>Practice</span></div>
          </div>
        </div>
      </section>

      <section className="curriculum" id="curriculum">
        <div className="shell curriculum-grid">
          <div className="curriculum-intro">
            <p className="eyebrow">12-week roadmap</p>
            <h2>One skill builds into the next.</h2>
            <p>
              The course moves from sanitation and drawing fundamentals into equipment,
              controlled technique, complete practice projects and professional development.
            </p>
            <a className="text-link" href="/curriculum">Explore all 36 class days <span>↘</span></a>
          </div>
          <ol className="week-list">
            {weeks.map((week, index) => (
              <li key={week}>
                <span>Week {String(index + 1).padStart(2, "0")}</span>
                <strong>{week}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tuition shell" id="tuition">
        <div>
          <p className="eyebrow">Program tuition</p>
          <h2>To Be Announced</h2>
        </div>
        <div className="tuition-copy">
          <p>12 weeks. 144 instructional hours. Small-class instruction.</p>
          <p className="fine-print">
            All required equipment and supplies used in the program must be purchased through Ink Tattoo School. Outside supplies are not permitted.
          </p>
        </div>
      </section>

      <section className="home-visit">
        <div className="shell home-visit-grid">
          <div>
            <p className="eyebrow">Visit the school</p>
            <h2>See the environment before you make the decision.</h2>
          </div>
          <div>
            <p>
              Ask questions, talk through the schedule, and request a visit before applying.
              The contact experience is built to keep that first conversation simple.
            </p>
            <div className="hero-actions">
              <a className="button" href="/contact">Request a visit</a>
              <a className="text-link" href="/faq">Read the FAQ <span>↘</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="apply">
        <div className="shell cta-inner">
          <p className="eyebrow">Admissions</p>
          <h2>Think tattooing might be your career?</h2>
          <p>See the school, ask the hard questions and learn exactly what the program includes before you commit.</p>
          <div className="hero-actions">
            <a className="button button-light" href="/contact">Schedule a visit</a>
            <a className="text-link text-link-light" href="/admissions#application">Apply now <span>↘</span></a>
          </div>
        </div>
      </section>

      <footer className="footer shell" id="contact">
        <div>
          <span className="brand-mark">INK</span>
          <p>Professional Tattoo Fundamentals</p>
        </div>
        <div>
          <p>Manchester, New Hampshire</p>
          <p className="fine-print">
            Educational fundamentals program. Completion does not itself constitute a tattoo apprenticeship,
            state tattoo license, guarantee of employment, or independent authorization to tattoo the public.
          </p>
          <p className="fine-print">
            Website built by Teejay · AI development support by Bella
          </p>
        </div>
      </footer>
    </main>
  );
}
