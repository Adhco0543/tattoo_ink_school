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
          <div className="video-fallback" aria-label={`${title} school film`}>
            <div className="video-motion-lines" />
            <span className="video-play-mark">▶</span>
            <small>School film coming soon</small>
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
        title="See the craft up close"
        description="A short visual reel focused on drawing, clean workstation setup, stencil preparation, machine details, practice work, and finished art."
        mode="loop"
      />
      <VideoCard
        src="/media/inside-ink-school.mp4"
        label="Film 02"
        title="Inside Ink Tattoo School"
        description="A longer look at the program, training environment, classroom rhythm, and Allen&apos;s approach to fundamentals."
        mode="feature"
      />
    </div>
  );
}
