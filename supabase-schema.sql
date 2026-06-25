-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql/new)

-- 1. INQUIRIES table (booking form submissions)
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  description text NOT NULL,
  start_date date NOT NULL,
  budget text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 2. MESSAGES table (contact form submissions)
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 3. PROJECTS table (portfolio pieces — for admin CRUD later)
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('web_app', 'landing_page', 'design')),
  tech_stack text[] NOT NULL DEFAULT '{}',
  github_url text,
  live_url text,
  thumbnail_color text NOT NULL DEFAULT 'from-blue-600/30 to-indigo-600/30',
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 4. Enable Row Level Security (recommended)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 5. RLS policies: allow inserts from anon key (for public forms), restrict reads to authenticated users

-- Allow anyone to insert into inquiries (public booking form)
CREATE POLICY "Allow anon inserts on inquiries"
  ON inquiries FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can select inquiries
CREATE POLICY "Allow authenticated select on inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update inquiries (status changes)
CREATE POLICY "Allow authenticated update on inquiries"
  ON inquiries FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow anyone to insert into messages (public contact form)
CREATE POLICY "Allow anon inserts on messages"
  ON messages FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can select messages
CREATE POLICY "Allow authenticated select on messages"
  ON messages FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update messages (mark as read)
CREATE POLICY "Allow authenticated update on messages"
  ON messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow anon to read projects (public portfolio)
CREATE POLICY "Allow anon select on projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

-- Only authenticated users can insert/update/delete projects
CREATE POLICY "Allow authenticated insert on projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update on projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
