-- OPTION 1: Delete all projects and re-insert (run this entire script at once)

-- Step 1: Delete all existing projects
DELETE FROM projects;

-- Step 2: Re-insert fresh (no duplicates)
INSERT INTO projects (title, description, category, tech_stack, github_url, live_url, thumbnail_color, thumbnail_url, featured) VALUES

('Carrent SaaS',
 'A full-stack car rental platform with user authentication, real-time booking management, Stripe payment integration, and an admin dashboard with analytics.',
 'web_app', ARRAY['Next.js', 'Supabase', 'TypeScript', 'Stripe'],
 'https://github.com/Paim41', 'https://carrent.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('ProTube',
 'A video streaming and media sharing platform with user channels, playlists, comments, and a recommendation engine.',
 'web_app', ARRAY['Next.js', 'Supabase', 'TypeScript'],
 'https://github.com/Paim41', 'https://protube-kappa.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Frogcus',
 'A focus and productivity web app featuring the Pomodoro technique, task management, ambient soundscapes, and progress tracking.',
 'web_app', ARRAY['React', 'TypeScript', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://frogcus.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Burgertar',
 'A burger restaurant ordering platform with a customisable menu builder, cart system, and real-time order tracking.',
 'web_app', ARRAY['Next.js', 'Supabase', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://burgertar.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('UTHMPKU System',
 'A university course management system with timetable scheduling, lecturer assignments, student enrolments, and grade tracking.',
 'web_app', ARRAY['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
 'https://github.com/Paim41', 'https://uthmpku-system.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Mobile Booth',
 'A mobile photography booth booking platform with package customisation, availability calendars, and payment processing.',
 'web_app', ARRAY['Next.js', 'Supabase', 'TypeScript'],
 'https://github.com/Paim41', 'https://mobile-booth.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('AtmosWeather',
 'A weather forecasting app with real-time data, 7-day predictions, interactive radar maps, and severe weather alerts.',
 'web_app', ARRAY['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
 'https://github.com/Paim41', 'https://atmosweather-pro.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('CNI Express',
 'A courier and parcel tracking system with real-time shipment status, delivery route optimisation, and customer notifications.',
 'web_app', ARRAY['Next.js', 'Supabase', 'TypeScript', 'Prisma'],
 'https://github.com/Paim41', 'https://cni-express.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Health Checker Pro',
 'A health assessment platform with symptom checkers, BMI calculators, appointment scheduling, and telemedicine integration.',
 'web_app', ARRAY['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://healthcheckerpro.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Cracktor',
 'A file conversion and compression tool supporting multiple formats with batch processing and cloud storage integration.',
 'web_app', ARRAY['Next.js', 'React', 'Node.js'],
 'https://github.com/Paim41', 'https://cracktor.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Deep Blue Aquarium',
 'An aquarium management platform with tank monitoring, fish species database, water parameter tracking, and community forums.',
 'web_app', ARRAY['Next.js', 'Supabase', 'TypeScript', 'Chart.js'],
 'https://github.com/Paim41', 'https://deepblueaquarium.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

-- Landing Pages
('Bocah Trade',
 'A kids trading card marketplace landing page with animated product showcases, testimonials carousel, and countdown timers for live drops.',
 'landing_page', ARRAY['HTML', 'CSS', 'JavaScript', 'GSAP'],
 'https://github.com/Paim41', 'https://bocah-trade.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('DongHunt',
 'An interactive event discovery and ticket booking landing page for local entertainment and nightlife events.',
 'landing_page', ARRAY['Next.js', 'Tailwind CSS', 'Framer Motion'],
 'https://github.com/Paim41', 'https://donghunt.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Iman Lift',
 'A spiritual wellness platform landing page featuring prayer time tracking, Quran verse of the day, and community events.',
 'landing_page', ARRAY['Next.js', 'Tailwind CSS', 'TypeScript'],
 'https://github.com/Paim41', 'https://www.imanlift.my.id',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Palestine Beta',
 'An informational landing page raising awareness with news feeds, donation links, and educational resources.',
 'landing_page', ARRAY['Next.js', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://palestine-beta.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Japanese Food Game',
 'A gamified landing page for a Japanese cuisine restaurant with interactive menu exploration and reservation flow.',
 'landing_page', ARRAY['Next.js', 'Framer Motion', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://japanese-food-game-project.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Japanese Learning Hub',
 'An educational landing page for Japanese language courses with lesson previews, progress tracking, and enrollment.',
 'landing_page', ARRAY['Next.js', 'Supabase', 'TypeScript'],
 'https://github.com/Paim41', 'https://japanese-learning-hub.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Web Design GT',
 'A creative agency portfolio landing page showcasing web design services, case studies, and a client inquiry form.',
 'landing_page', ARRAY['HTML', 'CSS', 'JavaScript'],
 'https://github.com/Paim41', 'https://webdesign.gt.tc',
 'from-sky-400/30 to-blue-400/30', NULL, true),

-- Interactive / Fun Projects
('Air Hockey Alpha',
 'A real-time multiplayer air hockey game built with canvas rendering and WebSocket-based matchmaking.',
 'web_app', ARRAY['React', 'Canvas API', 'WebSockets', 'TypeScript'],
 'https://github.com/Paim41', 'https://airhockey-alpha.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('ASCIIPlayer',
 'A terminal-based media player that renders video frames as ASCII art in real time. Open-source and community-contributable.',
 'web_app', ARRAY['Node.js', 'Python', 'FFmpeg'],
 'https://github.com/Paim41/ASCIIPlayer', 'https://github.com/Paim41/ASCIIPlayer',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Track Gram',
 'An Instagram analytics tool that tracks follower growth, engagement rates, and optimal posting times.',
 'web_app', ARRAY['Next.js', 'Supabase', 'Chart.js', 'TypeScript'],
 'https://github.com/Paim41', 'https://track-gram.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Prank QR',
 'A playful QR code generator that creates custom QR codes with prank redirects, custom colours, and scan tracking.',
 'web_app', ARRAY['Next.js', 'TypeScript', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://prankqr.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

-- Event Sites
('Birthday41',
 'A personalised birthday celebration microsite with animated confetti, photo galleries, guest messages, and a countdown.',
 'landing_page', ARRAY['Next.js', 'Framer Motion', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://birthday41.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Anniversary41',
 'An anniversary tribute microsite featuring a timeline slideshow, love letters gallery, and interactive map of memories.',
 'landing_page', ARRAY['Next.js', 'Framer Motion', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://anniversary41.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Valentine One Three',
 'A romantic Valentine''s Day experience site with love calculator, digital bouquet, and a personalised video message player.',
 'landing_page', ARRAY['Next.js', 'Framer Motion', 'TypeScript'],
 'https://github.com/Paim41', 'https://valentine-one-three.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true),

('Infinity Love One',
 'An eternal love story microsite with a visual timeline, music player, and a shared journal for couples.',
 'landing_page', ARRAY['Next.js', 'Supabase', 'Tailwind CSS'],
 'https://github.com/Paim41', 'https://infinity-love-one.vercel.app',
 'from-sky-400/30 to-blue-400/30', NULL, true);
