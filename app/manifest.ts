import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ink Tattoo School",
    short_name: "INK School",
    description: "Professional Tattoo Fundamentals education in Manchester, New Hampshire.",
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#070707",
    categories: ["education"]
  };
}
