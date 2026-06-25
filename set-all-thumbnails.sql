-- Set the same thumbnail image for ALL projects
UPDATE projects
SET thumbnail_url = 'https://i.ibb.co/Mk38NJc9/github-wallpaper-scaled.jpg'
WHERE thumbnail_url IS NULL OR thumbnail_url = '';
