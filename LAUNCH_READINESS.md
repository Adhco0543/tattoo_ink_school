# Ink Tattoo School — Launch Readiness

## Code status

The 10-build website is feature-complete in the repository, including responsive pages, curriculum, admissions, gallery/media framework, tuition/policies, FAQ/contact, backend routes, admin review tools, SEO, analytics, performance monitoring, accessibility work, and launch hardening.

## Backend status

### Supabase: connected
The dedicated project is live and healthy.

- Project: `tattoo_ink_school`
- Project ref: `odavqgcwzdfmzzvujqaw`
- Region: `us-east-1`
- Schema migration applied successfully
- Tables: `applications`, `contact_requests`, `admin_users`
- Private artwork bucket: `application-artwork`
- RLS enabled
- Generated database TypeScript types committed

Still required:
- Create approved administrator account(s) in Supabase Auth.
- Add administrator UUID(s) to `public.admin_users`.
- Put the Supabase URL, publishable key, and server-only secret key into Vercel environment variables.

### Email delivery: pending
Required:
- Connect Resend.
- Verify the sending domain.
- Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `ADMIN_NOTIFICATION_EMAIL`.

### Vercel project and domain: pending
The connected Vercel team currently has no project for this repository, and the available Vercel connector cannot create/import a project from GitHub.

Required:
- Import `Adhco0543/tattoo_ink_school` into Vercel.
- Set production environment variables.
- Set `NEXT_PUBLIC_SITE_URL` to the final public site URL.
- Attach the final domain.
- Enable Web Analytics and Speed Insights in the Vercel project.

## Final business details

Confirm before publication:
- Exact public address, if the school wants it displayed.
- Public phone number and email.
- Visiting hours / appointment rules.
- Final written cancellation and refund terms.
- Any approved payment-plan terms.

## Final media

The site does not fabricate student work or testimonials.

Recommended before the strongest public launch:
- Allen portrait.
- Classroom/facility photos.
- Permissioned student or practice work.
- `public/media/hero-loop.mp4`.
- `public/media/inside-ink-school.mp4`.

The site has branded fallbacks and remains visually coherent if these files are not yet present.

## QA gates

- GitHub CI runs lint and production build on main and pull requests.
- Admin pages are excluded from indexing.
- API/admin routes are excluded from robots indexing.
- Security response headers are configured.
- Mobile navigation is keyboard accessible.
- Reduced-motion preferences are respected.
- Web Analytics and Speed Insights components are installed.
- Structured data, sitemap, robots, manifest, and generated Open Graph art are present.
