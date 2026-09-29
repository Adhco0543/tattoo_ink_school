import SiteHeader from "@/app/components/SiteHeader";
import type { Metadata } from "next";
import MediaGallery from "./MediaGallery";
import VideoShowcase from "./VideoShowcase";
import Testimonials from "./Testimonials";

export const metadata: Metadata = {
  title: "Gallery & Media | Ink Tattoo School",
  description:
    "Explore the visual side of Ink Tattoo School: drawing, flash, linework, shading, color, practice projects, classroom media, and video.",
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="inner-page gallery-page">
      <SiteHeader />

      <section className="gallery-hero">
        <div className="gallery-hero-art" aria-hidden="true">
          <div className="gallery-shape gallery-shape-one" />
          <div className="gallery-shape gallery-shape-two" />
          <div className="gallery-grid-lines" />
        </div>
        <div className="shell gallery-hero-grid">
          <div>
            <p className="eyebrow">Gallery & media</p>
            <h1>See the process, not just the finish.</h1>
          </div>
          <p>
            The gallery is built for real school-owned or permissioned media: drawings, flash,
            workstation setup, practice-skin projects, class progress, and finished portfolio work.
          </p>
        </div>
      </section>

      <section className="gallery-intro shell">
        <div>
          <p className="eyebrow">Visual roadmap</p>
          <h2>From pencil line to finished project.</h2>
        </div>
        <p>
          Until final school photography is supplied, the tiles below use branded visual placeholders
          instead of pretending stock images are student work. The filtering and full-screen viewer are live now.
        </p>
      </section>

      <section className="gallery-shell shell">
        <MediaGallery />
      </section>

      <section className="video-section">
        <div className="shell video-section-heading">
          <div>
            <p className="eyebrow">Film</p>
            <h2>Two video slots. Two different jobs.</h2>
          </div>
          <p>
            The first video is a short silent homepage loop. The second is a longer school story
            featuring Allen and real classroom footage.
          </p>
        </div>
        <div className="shell">
          <VideoShowcase />
        </div>
      </section>

      <section className="media-shot-list">
        <div className="shell shot-list-grid">
          <div>
            <p className="eyebrow">What to film</p>
            <h2>Capture the details people can almost feel.</h2>
          </div>
          <ol>
            <li><span>01</span><strong>Pencil and marker work on paper</strong></li>
            <li><span>02</span><strong>Clean workstation setup and barriers</strong></li>
            <li><span>03</span><strong>Stencil preparation and placement</strong></li>
            <li><span>04</span><strong>Machine, cartridge, and ink close-ups</strong></li>
            <li><span>05</span><strong>Practice-skin linework, shading, and color</strong></li>
            <li><span>06</span><strong>Allen explaining or demonstrating</strong></li>
            <li><span>07</span><strong>Student artwork with permission</strong></li>
            <li><span>08</span><strong>Finished portfolio photographs</strong></li>
          </ol>
        </div>
      </section>

      <Testimonials />

      <section className="gallery-integrity">
        <div className="shell gallery-integrity-grid">
          <div className="integrity-mark">REAL</div>
          <div>
            <p className="eyebrow">Media standard</p>
            <h2>No fake student work.</h2>
            <p>
              Final gallery media should be created by, owned by, or licensed to the school, and
              identifiable students or clients should only appear with appropriate permission.
            </p>
          </div>
        </div>
      </section>

      <section className="cta gallery-cta">
        <div className="shell cta-inner">
          <p className="eyebrow">Want to see the program?</p>
          <h2>Look through the work. Then look through the curriculum.</h2>
          <div className="hero-actions">
            <a className="button button-light" href="/curriculum">Explore curriculum</a>
            <a className="text-link text-link-light" href="/admissions#application">Apply now <span>↘</span></a>
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
            Gallery media should be school-owned, licensed, or used with permission.
          </p>
        </div>
      </footer>
    </main>
  );
}
