-- Run this in Supabase SQL Editor to fix all issues

-- 1. Add thumbnail_url column for project photos
ALTER TABLE projects ADD COLUMN IF NOT EXISTS thumbnail_url text;

-- 2. Add RLS policy so authenticated users (you, when logged in) can SELECT projects
CREATE POLICY "Allow authenticated select on projects"
  ON projects FOR SELECT
  TO authenticated
  USING (true);

-- 3. Verify existing policies (optional - just to check)
SELECT * FROM pg_policies WHERE tablename = 'projects';
