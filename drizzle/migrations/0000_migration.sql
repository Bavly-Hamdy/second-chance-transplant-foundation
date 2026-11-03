create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  contact text not null check (char_length(contact) between 5 and 255),
  contact_type text not null check (contact_type in ('email','phone')),
  created_at timestamptz not null default now()
);
grant insert on public.leads to anon, authenticated;
grant all on public.leads to service_role;
alter table public.leads enable row level security;
create policy "Anyone can submit a lead" on public.leads for insert to anon, authenticated with check (true);