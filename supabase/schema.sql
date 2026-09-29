-- Ink Tattoo School Build 8 backend schema.
-- Apply this to the dedicated Supabase project for this site.

create extension if not exists pgcrypto;

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  status text not null default 'submitted'
    check (status in ('submitted','reviewing','interview','enrolled','declined','withdrawn')),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  city text,
  state text,
  contact_preference text,
  art_experience text not null,
  tattoo_experience text not null,
  goals text not null,
  why_now text not null,
  schedule_commitment text not null,
  acknowledgment boolean not null check (acknowledgment = true),
  artwork_paths jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists applications_created_at_idx
  on public.applications (created_at desc);

create index if not exists applications_status_idx
  on public.applications (status);

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  request_type text not null check (request_type in ('question','visit')),
  status text not null default 'new'
    check (status in ('new','read','responded','closed')),
  name text not null,
  email text not null,
  phone text,
  reply_preference text,
  preferred_day text,
  preferred_time text,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);

create index if not exists contact_requests_status_idx
  on public.contact_requests (status);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

alter table public.applications enable row level security;
alter table public.contact_requests enable row level security;
alter table public.admin_users enable row level security;

revoke all on table public.applications from anon, authenticated;
revoke all on table public.contact_requests from anon, authenticated;
revoke all on table public.admin_users from anon, authenticated;

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'application-artwork',
  'application-artwork',
  false,
  8388608,
  array['image/jpeg','image/png','image/webp','application/pdf']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
