# Build 8 Backend Activation

The dedicated Supabase project for Ink Tattoo School has now been created and the database schema has been applied.

## Supabase status

- Project: `tattoo_ink_school`
- Project ref: `odavqgcwzdfmzzvujqaw`
- Region: `us-east-1`
- Status: active and healthy
- Database tables created: `applications`, `contact_requests`, `admin_users`
- Private Storage bucket created: `application-artwork`
- RLS is enabled on all public tables.
- Public roles have no direct table grants. Server routes use the server-only secret key.
- Generated TypeScript database types are committed at `lib/database.types.ts`.

The current Supabase security advisor reports only an informational note that the three RLS-enabled tables have no policies. That is intentional here because browser clients are not allowed to read or write these tables directly.

## Remaining Supabase activation

1. In Supabase Auth, create the first approved administrator using email/password.
2. Copy that Auth user's UUID into `public.admin_users`:

```sql
insert into public.admin_users (user_id, display_name)
values ('AUTH_USER_UUID_HERE', 'Allen Hendershot');
```

3. Add these values to the production Vercel project:

```
NEXT_PUBLIC_SUPABASE_URL=https://odavqgcwzdfmzzvujqaw.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<publishable key from Supabase>
SUPABASE_SECRET_KEY=<server-only secret key from Supabase>
```

The secret key is server-only and must never use a `NEXT_PUBLIC_` prefix or be committed to GitHub.

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

## Production connection still required

The currently connected Vercel account does not yet contain a Vercel project for this repository. Import `Adhco0543/tattoo_ink_school` into Vercel, then add the environment variables above before enabling live form submissions.
