# Build 8 Backend Activation

The application, contact, tour-request, email-notification, artwork-storage, and admin-dashboard code is now in the repository.

It intentionally is **not connected to one of the user's unrelated existing Supabase projects**. Create a dedicated Supabase project for Ink Tattoo School before making the backend live.

## Supabase

1. Create a dedicated Supabase project.
2. Apply `supabase/schema.sql`.
3. Create the first administrator in Supabase Auth using email/password.
4. Copy that Auth user's UUID into `public.admin_users`:

```sql
insert into public.admin_users (user_id, display_name)
values ('AUTH_USER_UUID_HERE', 'Allen Hendershot');
```

5. Add these server/environment values to Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
```

The secret key is server-only and must never use a `NEXT_PUBLIC_` prefix.

## Email

Use Resend for transactional email and add:

```
RESEND_API_KEY=
RESEND_FROM_EMAIL=
ADMIN_NOTIFICATION_EMAIL=
```

Verify the sending domain in Resend before production mail. The site stores submissions even if email is temporarily unavailable.

## What the backend does

- `POST /api/applications` validates and stores applications.
- Artwork is stored in the private `application-artwork` bucket.
- Each artwork file is limited to 8 MB and approved types.
- `POST /api/contact` stores general questions and visit requests.
- New applications and contact requests can notify the school by email.
- Applicants can receive an application confirmation email.
- `/admin` requires Supabase Auth plus membership in `admin_users`.
- Admins can review applications, open private artwork through temporary signed links, and change application status.

## Dependencies

Supabase and Resend packages are pinned in `package.json`. After installing dependencies, commit the generated `package-lock.json` before production deployment.
