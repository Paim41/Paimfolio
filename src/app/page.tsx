"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiTypescript,
  SiFigma,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiFramer,
  SiResend,
  SiVercel,
} from "react-icons/si"

import Image from "next/image"
import Link from "next/link"
import ProjectCard from "@/components/ProjectCard"
import ServiceCard from "@/components/ServiceCard"
import BookingForm from "@/components/BookingForm"
import { useProjects } from "@/lib/use-projects"
import { useState } from "react"
import type { Service } from "@/types"

const services: Service[] = [
  {
    title: "Landing Page",
    description:
      "A single-page or multi-section landing page designed to convert visitors into leads or customers. Fast, responsive, and optimised for performance.",
    price: "RM 800",
    delivery: "5 day delivery",
    tag: "landing_page",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
  {
    title: "Full-stack Web App",
    description:
      "End-to-end web application with authentication, database, API routes, and a polished UI. Built with Next.js, Supabase, and TypeScript.",
    price: "RM 3,500",
    delivery: "2–3 week delivery",
    tag: "web_app",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
  {
    title: "UI/UX Design",
    description:
      "Figma prototype with a complete design system — components, typography, colour tokens, and a light/dark mode foundation.",
    price: "RM 600",
    delivery: "Figma prototype + design system",
    tag: "design",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
]

const techStack = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-[#3ECF8E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-[#F24E1E]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#5FA04E]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#4169E1]" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-[#2D3748]" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-[#0055FF]" />,
  },
  {
    name: "Resend",
    icon: <SiResend className="text-black" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-black" />,
  },
]

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const { projects } = useProjects()

  const openBooking = (service: string) => {
    setSelectedService(service)
    setBookingOpen(true)
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[120px] animate-cursor-glow pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mx-auto mb-6"
          >
            <div className="relative w-20 h-20 mx-auto animate-float">
              <div className="absolute inset-0 rounded-full glow-ring" />

              <div className="relative w-full h-full rounded-full bg-sky-gradient overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Paim"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-sky-500 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse-slow" />
              Available for projects
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
              Full-stack designer &amp; developer
            </h1>

            <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-8">
              Building beautiful, fast web experiences — available for freelance
              projects.
            </p>

            <div className="flex items-center justify-center gap-3">
              <Link
                href="#work"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View my work
                <ArrowDown size={14} />
              </Link>

              <Link
                href="#services"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-zinc-800 text-sm font-medium hover:bg-sky-50/50 transition-all"
              >
                Hire me
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOVING TECH STACK */}
      <section className="py-10 bg-white border-y border-zinc-200 overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech.name}-${i}`}
              className="inline-flex items-center gap-2.5 text-sm font-medium text-zinc-600"
            >
              <span className="text-xl flex items-center justify-center">
                {tech.icon}
              </span>

              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-heading text-3xl font-bold text-zinc-800 mb-2">
              Selected work
            </h2>

            <p className="text-zinc-500 text-sm">
              A few projects I&apos;ve built recently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard
                key={p.id}
                index={i}
                title={p.title}
                description={p.description}
                category={p.category}
                tags={p.tech_stack}
                githubUrl={p.github_url || undefined}
                liveUrl={p.live_url || undefined}
                color={p.thumbnail_color}
                thumbnailUrl={p.thumbnail_url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-heading text-3xl font-bold text-zinc-800 mb-2">
              Services &amp; pricing
            </h2>

            <p className="text-zinc-500 text-sm">
              Fixed-price freelance packages. No hidden fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                service={s}
                index={i}
                onBook={() => openBooking(s.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative shrink-0"
            >
              <div className="relative w-28 h-28 rounded-full glow-ring-sm overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Paim"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-heading text-xl font-bold text-zinc-800 mb-1">
                Hi, I&apos;m Paim
              </h3>

              <p className="text-sm text-zinc-500 mb-3 max-w-lg">
                I&apos;m a full-stack developer and designer who loves building
                products that are both beautiful and useful. I specialise in
                Next.js, Supabase, and TypeScript, and I&apos;m always open to
                freelance work.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs text-sky-500 hover:text-sky-600 transition-colors"
              >
                More about me
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 text-center bg-sky-50/30">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-zinc-800 mb-3">
            Have a project in mind?
          </h2>

          <p className="text-sm text-zinc-500 mb-6">
            Let&apos;s build something great together. Send me a message and
            I&apos;ll get back to you within 24 hours.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <BookingForm
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedService}
      />
    </>
  )
}