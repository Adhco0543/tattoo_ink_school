"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  caption: string;
  visual: string;
  size: "wide" | "tall" | "standard";
};

const items: GalleryItem[] = [
  { id: 1, category: "Drawing", title: "Foundation sketches", caption: "Drawing, shape, contrast, and design development.", visual: "sketch", size: "tall" },
  { id: 2, category: "Flash", title: "Flash development", caption: "Readable outlines, focal points, spacing, and tattooable design.", visual: "flash", size: "standard" },
  { id: 3, category: "Linework", title: "Line control", caption: "Straight lines, curves, circles, connections, and weight.", visual: "linework", size: "wide" },
  { id: 4, category: "Black & Gray", title: "Value & shading", caption: "Gradients, black packing, gray wash, and contrast.", visual: "blackgray", size: "standard" },
  { id: 5, category: "Color", title: "Color studies", caption: "Palette planning, packing, blending, and transitions.", visual: "color", size: "tall" },
  { id: 6, category: "Practice", title: "Practice-skin projects", caption: "Complete training projects built from setup through finish.", visual: "practice", size: "standard" },
  { id: 7, category: "Classroom", title: "Workstation setup", caption: "Barriers, clean zones, organization, and safe breakdown.", visual: "station", size: "wide" },
  { id: 8, category: "Portfolio", title: "Portfolio progression", caption: "A clear record of drawings, practice work, and finished projects.", visual: "portfolio", size: "standard" },
];

const filters = ["All", "Drawing", "Flash", "Linework", "Black & Gray", "Color", "Practice", "Classroom", "Portfolio"];

export default function MediaGallery() {
  const [filter, setFilter] = useState("All");
  const [activeId, setActiveId] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter]
  );

  const active = items.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return;

    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [active]);

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter gallery">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            className={filter === name ? "active" : ""}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="media-grid">
        {visible.map((item) => (
          <button
            className={`media-tile ${item.size}`}
            type="button"
            key={item.id}
            onClick={() => setActiveId(item.id)}
            aria-label={`Open ${item.title}`}
          >
            <div className={`media-art art-${item.visual}`} aria-hidden="true">
              <span className="art-ring ring-a" />
              <span className="art-ring ring-b" />
              <span className="art-line line-a" />
              <span className="art-line line-b" />
              <span className="art-mark">INK</span>
            </div>
            <span className="media-tile-overlay">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <em>View +</em>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="media-lightbox" role="dialog" aria-modal="true" aria-label={active.title}>
          <button className="lightbox-close" type="button" onClick={() => setActiveId(null)} aria-label="Close gallery item">×</button>
          <div className="lightbox-inner">
            <div className={`lightbox-art art-${active.visual}`}>
              <span className="art-ring ring-a" />
              <span className="art-ring ring-b" />
              <span className="art-line line-a" />
              <span className="art-line line-b" />
              <span className="art-mark">INK</span>
            </div>
            <div className="lightbox-copy">
              <span>{active.category}</span>
              <h3>{active.title}</h3>
              <p>{active.caption}</p>
              <small>
                Visual placeholder. Replace with school-owned or permissioned photography before final launch.
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
