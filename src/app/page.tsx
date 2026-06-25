"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
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
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l5.626 7.546h.872V7.2h-1.615v6.351z"/></svg>,
  },
  {
    name: "React",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/></svg>,
  },
  {
    name: "Tailwind CSS",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.382 14.975 5 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.582 8.975 12.2 6.001 12z"/></svg>,
  },
  {
    name: "Supabase",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M11.9 22.216c-.532.666-.996.889-1.358.889-.502 0-.815-.369-.815-1.023 0-.345.144-.804.144-.804l1.423-5.353h-4.91c-.996 0-1.536-.514-1.536-1.265 0-.571.578-2.615.746-3.133.042-.13.189-.345.537-.345h5.313l-2.507 9.449c4.321-5.4 5.423-6.812 6.924-9.023.403-.594.806-.836 1.222-.836.544 0 .931.436.931 1.106 0 .368-.1.798-.1.798l-1.14 4.057c-.086.306-.134.573-.134.803 0 .503.272.797.726.797.404 0 .88-.22 1.314-.66l.001.002zM7.812 4.024c.565-.747 1.054-1.02 1.447-1.02.504 0 .843.378.843 1.065 0 .303-.105.671-.105.671L8.9 9.297h4.782c.887 0 1.44.504 1.44 1.207 0 .43-.389 1.668-.569 2.123-.05.127-.194.404-.588.404h-5.15z"/></svg>,
  },
  {
    name: "TypeScript",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm1.5 3h18.75v18H2.625V3zM5.25 12v1.5h3.75v6.75h2.25v-6.75H15V12H5.25zm8.25-1.5h6.75v-1.5h-6.75v1.5z"/></svg>,
  },
  {
    name: "Figma",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 8.462h-4.588c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM9.618 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H9.618zm3.117 8.462H8.147c-2.476 0-4.49-2.014-4.49-4.49 0-2.476 2.014-4.49 4.49-4.49h4.588v8.98zM2.127 21.074c0 1.613 1.314 2.926 2.927 2.926s2.926-1.314 2.926-2.926V18.09H5.054c-1.613 0-2.927 1.314-2.927 2.927v.057z"/></svg>,
  },
  {
    name: "Node.js",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M11.998 0a2.42 2.42 0 00-1.22.338L3.255 4.439a2.42 2.42 0 00-1.22 2.093v6.935a2.42 2.42 0 001.22 2.093l7.522 4.101a2.42 2.42 0 002.445 0l7.522-4.101a2.42 2.42 0 001.22-2.093V6.532a2.42 2.42 0 00-1.22-2.093L13.217.338A2.42 2.42 0 0011.998 0zm5.57 3.294l.549.318-7.096 4.09a.8.8 0 00-.397.692v3.773l-1.234.682V8.395a1.6 1.6 0 01.798-1.383l7.38-4.251z"/></svg>,
  },
  {
    name: "PostgreSQL",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>,
  },
  {
    name: "Prisma",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M21.807 18.285L13.553.757a1.32 1.32 0 00-1.129-.755 1.31 1.31 0 00-1.206.626L2.266 16.953a1.345 1.345 0 00.062 1.434l3.848 5.114a1.36 1.36 0 001.117.56l12.726-.001a1.36 1.36 0 001.079-.535 1.34 1.34 0 00.242-1.289l-3.666-10.95zm-2.535.786H12.2l3.408-9.627 4.072 9.627z"/></svg>,
  },
  {
    name: "Framer Motion",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4 0h16v8h-8L4 0zm0 8h8l8 8H4V8zm0 8h8v8l-8-8z"/></svg>,
  },
  {
    name: "Resend",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    name: "Vercel",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>,
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[120px] animate-cursor-glow pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-sky-500 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse-slow" />
              Available for projects
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-zinc-800 leading-tight mb-4">
              Full-stack designer &amp; developer
            </h1>
            <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-8">
              Building beautiful, fast web experiences — available for freelance projects.
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

      <section className="py-10 border-y border-sky-500/10 overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech.name}-${i}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-500"
            >
              <span className="text-sky-500">{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </section>

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
                Next.js, Supabase, and TypeScript, and I&apos;m always open to freelance work.
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
