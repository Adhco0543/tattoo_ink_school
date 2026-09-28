import HeroVideo from "./components/HeroVideo";

const stats = [
  ["12", "Weeks"],
  ["144", "Instructional Hours"],
  ["3", "Days / Week"],
  ["$8,750", "Program Tuition"],
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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ink Tattoo School home">
          <span className="brand-mark">INK</span>
          <span className="brand-copy">Tattoo School</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/program">Program</a>
          <a href="/curriculum">Curriculum</a>
          <a href="/gallery">Gallery</a>
          <a href="/tuition">Tuition</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="button button-small" href="/admissions#application">Apply Now</a>
      </header>

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
            A structured Professional Tattoo Fundamentals program built around art, safety,
            equipment knowledge, repetition and disciplined practice.
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

      <section className="founder-teaser">
        <div className="shell founder-teaser-grid">
          <div className="founder-teaser-mark" aria-hidden="true">AH</div>
          <div>
            <p className="eyebrow">Owner & Founder</p>
            <h2>Meet Allen Hendershot.</h2>
            <p>
              The school model is built around structured fundamentals, small-class instruction
              and deliberate practice from safety and drawing through complete projects.
            </p>
            <a className="text-link text-link-light" href="/about">About Allen <span>↘</span></a>
          </div>
        </div>
      </section>

      <section className="home-media-teaser">
        <div className="shell home-media-teaser-grid">
          <div>
            <p className="eyebrow">Gallery & media</p>
            <h2>Show the work. Show the process.</h2>
            <p>
              The media system is ready for real drawings, practice-skin projects, classroom photography,
              and two school videos without pretending stock imagery is student work.
            </p>
            <a className="text-link text-link-light" href="/gallery">Open gallery <span>↘</span></a>
          </div>
          <div className="home-media-cards" aria-hidden="true">
            <div className="home-media-card"><span>Drawing</span></div>
            <div className="home-media-card"><span>Practice</span></div>
            <div className="home-media-card"><span>Color</span></div>
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
          <h2>$8,750</h2>
        </div>
        <div className="tuition-copy">
          <p>12 weeks. 144 instructional hours. Small-class instruction.</p>
          <p className="fine-print">
            Personal tattoo equipment and consumable supplies are purchased separately by the student.
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
          <h2>Your first step isn&apos;t buying a machine.</h2>
          <p>Start with an application, learn about the program and talk with the school about your goals.</p>
          <div className="hero-actions">
            <a className="button button-light" href="/admissions#application">Start an inquiry</a>
            <a className="text-link text-link-light" href="/admissions">Admissions details <span>↘</span></a>
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
        </div>
      </footer>
    </main>
  );
}
