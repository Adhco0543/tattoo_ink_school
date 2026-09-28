"use client";

import { useState } from "react";

type VideoCardProps = {
  src: string;
  label: string;
  title: string;
  description: string;
  mode: "loop" | "feature";
};

function VideoCard({ src, label, title, description, mode }: VideoCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="video-card">
      <div className="video-stage">
        {!failed && (
          <video
            className="gallery-video"
            controls={mode === "feature"}
            autoPlay={mode === "loop"}
            muted={mode === "loop"}
            loop={mode === "loop"}
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}

        {failed && (
          <div className="video-fallback" aria-label={`${title} video placeholder`}>
            <div className="video-motion-lines" />
            <span className="video-play-mark">▶</span>
            <small>Media slot ready</small>
          </div>
        )}
      </div>
      <div className="video-card-copy">
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function VideoShowcase() {
  return (
    <div className="video-showcase">
      <VideoCard
        src="/media/hero-loop.mp4"
        label="Film 01"
        title="The first impression"
        description="A short silent loop designed for the homepage: drawing, workstation setup, stencil work, gloves, machines, practice skin, and finished artwork."
        mode="loop"
      />
      <VideoCard
        src="/media/inside-ink-school.mp4"
        label="Film 02"
        title="Inside Ink Tattoo School"
        description="A 60–90 second feature video slot for Allen to introduce the program while classroom and training footage carries the story."
        mode="feature"
      />
    </div>
  );
}
