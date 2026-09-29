import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const routes = ["", "/program", "/curriculum", "/gallery", "/tuition", "/admissions", "/about", "/faq", "/contact", "/policies"];

  return routes.map((route, index) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/admissions" ? 0.9 : 0.8
  }));
}
