-- East Broadway Business Association Schema

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- Businesses directory
create table public.businesses (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text not null default '',
  category text not null,
  address text not null,
  phone text,
  email text,
  website text,
  image_url text,
  latitude double precision not null,
  longitude double precision not null,
  hours text,
  is_member boolean not null default true,
  created_at timestamptz not null default now()
);

-- Events calendar
create table public.events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null default '',
  date date not null,
  end_date date,
  time text not null,
  location text not null,
  category text not null,
  image_url text,
  is_approved boolean not null default false,
  submitted_by text,
  submitted_email text,
  created_at timestamptz not null default now()
);

-- Association leadership
create table public.leaders (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  title text not null,
  bio text not null default '',
  image_url text,
  email text,
  phone text,
  "order" integer not null default 0,
  created_at timestamptz not null default now()
);

-- Membership and volunteer inquiries
create table public.membership_inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  business_name text,
  message text not null default '',
  type text not null check (type in ('business', 'volunteer', 'general')),
  created_at timestamptz not null default now()
);

-- Row Level Security
alter table public.businesses enable row level security;
alter table public.events enable row level security;
alter table public.leaders enable row level security;
alter table public.membership_inquiries enable row level security;

-- Public read access for businesses, approved events, and leaders
create policy "Public read businesses" on public.businesses for select using (true);
create policy "Public read approved events" on public.events for select using (is_approved = true);
create policy "Public read leaders" on public.leaders for select using (true);

-- Allow anyone to submit events and membership inquiries
create policy "Public insert events" on public.events for insert with check (true);
create policy "Public insert inquiries" on public.membership_inquiries for insert with check (true);

-- Indexes
create index idx_businesses_category on public.businesses(category);
create index idx_events_date on public.events(date);
create index idx_events_approved on public.events(is_approved);
create index idx_leaders_order on public.leaders("order");
