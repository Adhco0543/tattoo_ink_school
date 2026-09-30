import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/app/components/StructuredData";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: "Ink Tattoo School | Professional Tattoo Fundamentals",
  description: siteDescription,
  category: "education",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Ink Tattoo School | Professional Tattoo Fundamentals",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ink Tattoo School Professional Tattoo Fundamentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Tattoo School | Professional Tattoo Fundamentals",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
