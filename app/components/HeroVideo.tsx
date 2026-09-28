"use client";

import { useState } from "react";

export default function HeroVideo() {
  const [failed, setFailed] = useState(false);

  return (
    <video
      className={`hero-video${failed ? " is-missing" : ""}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      <source src="/media/hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
