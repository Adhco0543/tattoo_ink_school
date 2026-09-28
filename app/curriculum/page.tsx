import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12-Week Curriculum | Ink Tattoo School",
  description:
    "Explore the full 12-week, 36-class-day Professional Tattoo Fundamentals curriculum at Ink Tattoo School.",
};

const weeks = [
  {
    week: "01",
    title: "Introduction, Safety & Sanitation",
    hours: "12 Hours",
    days: [
      ["Day 1", "Orientation & Tattoo Industry Basics", ["Program orientation", "School rules and expectations", "Professional responsibilities", "Tattoo styles and terminology", "Initial drawing evaluation"]],
      ["Day 2", "Bloodborne Pathogens & Personal Safety", ["Bloodborne pathogen awareness", "Cross-contamination", "Hand washing and gloves", "PPE", "Sharps safety", "Exposure prevention basics"]],
      ["Day 3", "Workstation Safety", ["Clean vs contaminated areas", "Barrier protection", "Workstation setup", "Cleaning and disinfection concepts", "Waste disposal", "Workstation breakdown"]],
    ],
  },
  {
    week: "02",
    title: "Drawing Fundamentals",
    hours: "12 Hours",
    milestone: "Safety and drawing fundamentals",
    days: [
      ["Day 4", "Lines & Shapes", ["Straight and curved lines", "Circles and ovals", "Basic shapes", "Line weight", "Connecting lines"]],
      ["Day 5", "Tattoo Drawing", ["Turning drawings into tattoo designs", "Readable outlines", "Focal points", "Simplifying complex artwork", "Designing for tattooability"]],
      ["Day 6", "Shading, Light & Contrast", ["Light source", "Highlights and shadows", "Contrast", "Gradients", "Creating depth"]],
    ],
  },
  {
    week: "03",
    title: "Tattoo Design",
    hours: "12 Hours",
    days: [
      ["Day 7", "Composition & Body Flow", ["Placement", "Direction and flow", "Balance", "Size", "Negative space", "Readability"]],
      ["Day 8", "Lettering & Flash", ["Basic lettering", "Script fundamentals", "Block lettering", "Spacing", "Flash sheet construction"]],
      ["Day 9", "Complete Tattoo Design", ["Original design development", "Line cleanup", "Shading plan", "Sizing", "Placement review"]],
    ],
  },
  {
    week: "04",
    title: "Machines, Needles & Supplies",
    hours: "12 Hours",
    milestone: "Equipment knowledge checkpoint",
    days: [
      ["Day 10", "Tattoo Machines", ["Pen, rotary, and coil overview", "Machine components", "Stroke concepts", "Machine speed", "Batteries and power supplies", "Machine care"]],
      ["Day 11", "Needles & Cartridges", ["Round liners", "Round shaders", "Magnums", "Curved magnums", "Sizes and groupings", "Technique selection"]],
      ["Day 12", "Ink & Supplies", ["Black and color inks", "Gray wash concepts", "Ink caps", "Stencil products", "Barriers", "Machine bags", "Practice skins", "Supply selection"]],
    ],
  },
  {
    week: "05",
    title: "Stencils & Machine Control",
    hours: "12 Hours",
    days: [
      ["Day 13", "Creating Stencils", ["Artwork preparation", "Stencil-ready linework", "Stencil paper", "Sizing"]],
      ["Day 14", "Applying Stencils", ["Placement", "Positioning", "Stencil solution", "Transfer", "Correction and reapplication"]],
      ["Day 15", "First Machine Exercises", ["Holding the machine", "Hand position", "Machine angle", "Hand speed", "Depth concepts", "Following a stencil"]],
    ],
  },
  {
    week: "06",
    title: "Basic Linework",
    hours: "12 Hours",
    milestone: "Basic machine control and linework",
    days: [
      ["Day 16", "Basic Lines", ["Straight lines", "Short lines", "Long lines", "Curves"]],
      ["Day 17", "Advanced Line Control", ["Circles", "Tight curves", "Corners", "Connections", "Consistent line weight"]],
      ["Day 18", "Complete Linework Project", ["Full outline on practice skin", "Accuracy", "Consistency", "Connections", "Cleanliness"]],
    ],
  },
  {
    week: "07",
    title: "Developing Linework",
    hours: "12 Hours",
    days: [
      ["Day 19", "Different Line Weights", ["Fine, medium, and bold lines", "Combining line weights", "Needle selection"]],
      ["Day 20", "Lettering Practice", ["Spacing", "Curves", "Small detail", "Consistent line quality"]],
      ["Day 21", "Linework Evaluation", ["More complex practice-skin project", "Instructor scoring", "Correction plan before shading"]],
    ],
  },
  {
    week: "08",
    title: "Shading",
    hours: "12 Hours",
    milestone: "Shading and sanitation review",
    days: [
      ["Day 22", "Introduction to Shading", ["Light and depth", "Dark and light areas", "Gradients", "Needle selection"]],
      ["Day 23", "Shading Techniques", ["Whip shading", "Smooth shading", "Pepper shading", "Soft transitions"]],
      ["Day 24", "Black-and-Gray Project", ["Complete shaded practice-skin design", "Instructor evaluation"]],
    ],
  },
  {
    week: "09",
    title: "Black & Gray",
    hours: "12 Hours",
    days: [
      ["Day 25", "Gray Wash", ["Light, medium, and dark values", "Value control", "Smooth transitions"]],
      ["Day 26", "Black Packing", ["Solid black", "Even saturation", "Recognizing patchiness", "Avoiding unnecessary passes"]],
      ["Day 27", "Complete Black-and-Gray Design", ["Larger practice-skin project", "Technique evaluation"]],
    ],
  },
  {
    week: "10",
    title: "Color",
    hours: "12 Hours",
    milestone: "Color and complete-project readiness",
    days: [
      ["Day 28", "Color Theory", ["Primary and secondary colors", "Warm and cool colors", "Complementary colors", "Palette selection"]],
      ["Day 29", "Color Packing", ["Solid color", "Even application", "Blending", "Transitions"]],
      ["Day 30", "Complete Color Project", ["Full-color practice-skin project", "Instructor review"]],
    ],
  },
  {
    week: "11",
    title: "Complete Tattoo Projects",
    hours: "12 Hours",
    days: [
      ["Day 31", "Design to Stencil", ["Original design", "Artwork cleanup", "Sizing", "Stencil", "Needle/cartridge plan", "Color/shading plan"]],
      ["Day 32", "Complete Project", ["Practice-skin tattoo from setup through finish", "Instructor observation and correction"]],
      ["Day 33", "Independent Project", ["Second complete practice-skin piece with less instructor assistance"]],
    ],
  },
  {
    week: "12",
    title: "Professional Development & Final Testing",
    hours: "12 Hours",
    milestone: "Final written, practical, portfolio, and professionalism review",
    days: [
      ["Day 34", "Professional Side of Tattooing", ["Consultations", "Scheduling", "Deposits", "Cancellations", "Pricing concepts", "Customer service", "Shop etiquette", "Photography", "Social media", "Portfolio development"]],
      ["Day 35", "Written & Practical Testing", ["Safety and sanitation", "Equipment", "Needles", "Ink", "Stencils", "Linework", "Shading", "Color", "Workstation setup/breakdown"]],
      ["Day 36", "Final Practical Project", ["Design", "Stencil", "Setup", "Equipment selection", "Linework", "Shading/color", "Cleanup", "Finished photograph", "Portfolio review"]],
    ],
  },
];

export default function CurriculumPage() {
  return (
    <main className="inner-page curriculum-page">
      <header className="site-header inner-header">
        <a className="brand" href="/" aria-label="Ink Tattoo School home">
          <span className="brand-mark">INK</span>
          <span className="brand-copy">Tattoo School</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/program">Program</a>
          <a href="/about">About Allen</a>
          <a href="/curriculum">Curriculum</a>
          <a href="/#tuition">Tuition</a>
        </nav>
        <a className="button button-small" href="/#apply">Apply Now</a>
      </header>

      <section className="curriculum-hero">
        <div className="curriculum-hero-art" aria-hidden="true">
          <div className="curriculum-orbit orbit-one" />
          <div className="curriculum-orbit orbit-two" />
          <div className="curriculum-stripes" />
        </div>
        <div className="shell curriculum-hero-grid">
          <div>
            <p className="eyebrow">12 Weeks · 36 Class Days · 144 Hours</p>
            <h1>Every week has a purpose.</h1>
          </div>
          <p className="curriculum-lead">
            Three days per week. Four hours per day. Each stage builds on what came before it,
            from safety and drawing through complete practice projects and final testing.
          </p>
        </div>
      </section>

      <section className="curriculum-meter" aria-label="Program structure">
        <div><strong>12</strong><span>Weeks</span></div>
        <div><strong>36</strong><span>Class Days</span></div>
        <div><strong>144</strong><span>Instructional Hours</span></div>
        <div><strong>6</strong><span>Suggested Milestone Reviews</span></div>
      </section>

      <section className="curriculum-roadmap shell">
        <div className="roadmap-heading">
          <div>
            <p className="eyebrow">Full curriculum</p>
            <h2>Open a week. See every class day.</h2>
          </div>
          <p>
            The roadmap below follows the master school package. Open any week to see its three
            four-hour class sessions and the topics covered in each session.
          </p>
        </div>

        <div className="week-accordion">
          {weeks.map((week, index) => (
            <details className="week-panel" key={week.week} open={index === 0}>
              <summary>
                <div className="week-summary-number">W{week.week}</div>
                <div className="week-summary-copy">
                  <span>Week {Number(week.week)}</span>
                  <strong>{week.title}</strong>
                </div>
                <div className="week-summary-hours">{week.hours}</div>
                <div className="week-summary-toggle" aria-hidden="true">+</div>
              </summary>

              <div className="week-panel-body">
                {week.milestone && (
                  <div className="milestone-chip">
                    <span>Suggested milestone review</span>
                    <strong>{week.milestone}</strong>
                  </div>
                )}

                <div className="day-grid">
                  {week.days.map(([day, title, topics]) => (
                    <article className="day-card" key={day}>
                      <div className="day-card-heading">
                        <span>{day}</span>
                        <small>4 Hours</small>
                      </div>
                      <h3>{title}</h3>
                      <ul>
                        {(topics as string[]).map((topic) => <li key={topic}>{topic}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="milestone-section">
        <div className="shell milestone-layout">
          <div>
            <p className="eyebrow">Progress checkpoints</p>
            <h2>Six suggested milestone reviews.</h2>
          </div>
          <div className="milestone-list">
            {weeks.filter((week) => week.milestone).map((week) => (
              <div className="milestone-row" key={week.week}>
                <span>Week {Number(week.week)}</span>
                <strong>{week.milestone}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="curriculum-finish">
        <div className="shell finish-grid">
          <div className="finish-number">36</div>
          <div>
            <p className="eyebrow">Final class day</p>
            <h2>Design. Setup. Execute. Review.</h2>
            <p>
              The final practical project brings together design, stencil work, setup, equipment
              selection, linework, shading or color, cleanup, finished photography and portfolio review.
            </p>
            <a className="button" href="/#apply">Request program information</a>
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
            Educational fundamentals program. Completion does not itself constitute a tattoo apprenticeship or state tattoo license.
          </p>
        </div>
      </footer>
    </main>
  );
}
