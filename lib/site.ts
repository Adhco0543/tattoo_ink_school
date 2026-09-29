export const siteName = "Ink Tattoo School";
export const siteDescription =
  "A 12-week, 144-hour Professional Tattoo Fundamentals program in Manchester, New Hampshire.";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      // Fall through to the Vercel-provided hostname.
    }
  }

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  if (vercelHost) {
    return vercelHost.startsWith("http") ? vercelHost : `https://${vercelHost}`;
  }

  return "http://localhost:3000";
}
