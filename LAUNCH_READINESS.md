# Ink Tattoo School — Launch Readiness

## Code status

The 10-build website is feature-complete in the repository, including responsive pages, curriculum, admissions, gallery/media framework, tuition/policies, FAQ/contact, backend routes, admin review tools, SEO, analytics, performance monitoring, accessibility work, and launch hardening.

## External connections still required before a fully functional public launch

### 1. Dedicated Supabase project
Build 8 is intentionally not connected to an unrelated existing database.

Required:
- Create a dedicated Ink Tattoo School Supabase project.
- Apply `supabase/schema.sql`.
- Create approved administrator account(s).
- Add the administrator UUID(s) to `public.admin_users`.
- Add the Supabase environment variables documented in `BACKEND_SETUP.md`.

Until this is done, application, contact, tour-request, artwork-storage, and admin features are code-complete but not live.

### 2. Email delivery
Required:
- Connect Resend.
- Verify the sending domain.
- Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `ADMIN_NOTIFICATION_EMAIL`.

### 3. Vercel project and domain
Required:
- Connect this GitHub repository to a Vercel project.
- Set production environment variables.
- Set `NEXT_PUBLIC_SITE_URL` to the final public site URL.
- Attach the final domain.
- Enable Web Analytics and Speed Insights in the Vercel project.

### 4. Final business details
Confirm before publication:
- Exact public address, if the school wants it displayed.
- Public phone number and email.
- Visiting hours / appointment rules.
- Final written cancellation and refund terms.
- Any approved payment-plan terms.

### 5. Final media
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
