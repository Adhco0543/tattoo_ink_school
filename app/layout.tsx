import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ink Tattoo School | Professional Tattoo Fundamentals",
  description:
    "A 12-week, 144-hour Professional Tattoo Fundamentals program in Manchester, New Hampshire.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
