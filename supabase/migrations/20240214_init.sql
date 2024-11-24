-- Create bots table
create table public.bots (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  model text not null default 'openai/gpt-3.5-turbo',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create messages table
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  bot_id uuid references public.bots(id) on delete cascade not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.bots enable row level security;
alter table public.messages enable row level security;

-- Create policies
create policy "Public bots are viewable by everyone"
  on public.bots for select
  using (true);

create policy "Public messages are viewable by everyone"
  on public.messages for select
  using (true);

create policy "Users can insert messages"
  on public.messages for insert
  with check (true);

-- Create updated_at trigger for bots
create function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger handle_bots_updated_at
  before update on public.bots
  for each row
  execute function public.handle_updated_at();