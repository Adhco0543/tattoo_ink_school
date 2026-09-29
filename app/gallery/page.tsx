import Link from "next/link";
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
          The branded visual studies below organize the disciplines taught in the program.
          Real student or classroom work is only shown when the school has appropriate permission.
        </p>
      </section>

      <section className="gallery-shell shell">
        <MediaGallery />
      </section>

      <section className="video-section">
        <div className="shell video-section-heading">
          <div>
            <p className="eyebrow">Film</p>
            <h2>A closer look at the school.</h2>
          </div>
          <p>
            Short films can bring the environment to life with real drawing, setup, equipment,
            practice work, classroom rhythm, and Allen&apos;s approach to fundamentals.
          </p>
        </div>
        <div className="shell">
          <VideoShowcase />
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
          <Link className="brand" href="/">
            <span className="brand-mark">INK</span>
            <span className="brand-copy">Tattoo School</span>
          </Link>
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
