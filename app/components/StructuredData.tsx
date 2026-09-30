import { getSiteUrl } from "@/lib/site";

export default function StructuredData() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${url}/#school`,
        name: "Ink Tattoo School",
        url,
        description: "Professional Tattoo Fundamentals education in Manchester, New Hampshire.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Manchester",
          addressRegion: "NH",
          addressCountry: "US"
        }
      },
      {
        "@type": "Course",
        "@id": `${url}/program#course`,
        name: "Professional Tattoo Fundamentals",
        description:
          "A 12-week, 144-hour fundamentals program covering safety, drawing, tattoo design, equipment, linework, shading, black and gray, color, practice projects, portfolio development, and professional fundamentals.",
        provider: { "@id": `${url}/#school` },
        timeRequired: "P12W"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
