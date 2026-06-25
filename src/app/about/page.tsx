"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Link from "next/link"

const techStack = [
  { name: "Next.js", desc: "React framework" },
  { name: "React", desc: "UI library" },
  { name: "TypeScript", desc: "Typed JS" },
  { name: "Tailwind CSS", desc: "Utility CSS" },
  { name: "Supabase", desc: "Backend as a service" },
  { name: "Node.js", desc: "Runtime" },
  { name: "PostgreSQL", desc: "Database" },
  { name: "Prisma", desc: "ORM" },
  { name: "Figma", desc: "Design tool" },
  { name: "Framer Motion", desc: "Animation library" },
  { name: "Git", desc: "Version control" },
  { name: "Vercel", desc: "Deployment" },
]

const timeline = [
  {
    year: "2023",
    title: "Started development journey",
    description:
      "Built my first full-stack web application using HTML, CSS, and JavaScript. Discovered a passion for crafting digital experiences from the ground up.",
  },
  {
    year: "2023",
    title: "1st Place — University Hackathon",
    description:
      "Led a team of 4 to win first place at the university-level hackathon with a real-time campus navigation and event discovery platform.",
  },
  {
    year: "2024",
    title: "Freelance milestone — 10+ projects delivered",
    description:
      "Completed over 10 freelance projects including landing pages, full-stack web apps, and UI/UX design contracts. Built a recurring client base through referrals.",
  },
  {
    year: "2024",
    title: "Carrent SaaS — full-stack flagship",
    description:
      "Architected and deployed a car rental SaaS platform with authentication, booking management, Stripe payments, and an admin dashboard.",
  },
  {
    year: "2024",
    title: "Top 5 — National Tech Tournament",
    description:
      "Placed in the top 5 at a national-level web development tournament, competing against 40+ teams across Malaysia in a 48-hour build sprint.",
  },
  {
    year: "2025",
    title: "20+ projects shipped",
    description:
      "Reached 20+ deployed web projects ranging from interactive games and marketing pages to complex full-stack applications and API services.",
  },
  {
    year: "2025",
    title: "Open-source contributor",
    description:
      "Published ASCIIPlayer — a terminal-based media player — as an open-source project on GitHub. Gained traction from the developer community.",
  },
  {
    year: "2025",
    title: "paim.dev launched",
    description:
      "Designed and built this portfolio from scratch — a glassmorphism-themed showcase featuring live video backgrounds, dynamic project management, and freelance booking.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BIO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-start gap-8 mb-16"
        >
          <div className="relative shrink-0 animate-float">
            <div className="relative w-28 h-28 rounded-full glow-ring-sm overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Paim"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="font-heading text-4xl font-bold text-zinc-800 mb-1">
              Paim
            </h1>
            <p className="text-sm text-sky-500 mb-4">
              Full-stack designer &amp; developer
            </p>
            <p className="text-sm text-zinc-500 max-w-lg mb-4">
              I build modern web applications from concept to deployment. My
              focus is on clean code, thoughtful design, and performance —
              whether I&apos;m crafting a landing page or a full SaaS platform.
              I&apos;m based in Malaysia and available for freelance projects
              worldwide.
            </p>
            <Link
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-zinc-800 hover:bg-sky-50/50 transition-all"
            >
              <Download size={14} />
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl font-bold text-zinc-800 mb-6">
            Timeline
          </h2>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 pb-6 relative last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-500 shrink-0 mt-1" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-sky-50/30" />
                  )}
                </div>
                <div>
                  <span className="text-xs text-sky-500 font-semibold">
                    {t.year}
                  </span>
                  <h3 className="font-heading text-base font-bold text-zinc-800">
                    {t.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-bold text-zinc-800 mb-6">
            Tech stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="glass rounded-lg p-4 text-center glass-hover"
              >
                <p className="font-heading text-sm font-bold text-zinc-800">
                  {t.name}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
