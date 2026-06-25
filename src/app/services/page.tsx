"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ServiceCard from "@/components/ServiceCard"
import BookingForm from "@/components/BookingForm"
import { CheckCircle } from "lucide-react"
import type { Service } from "@/types"

const services: Service[] = [
  {
    title: "Landing Page",
    description:
      "A single-page or multi-section landing page built with Next.js and Tailwind CSS. Fully responsive, SEO-optimised, and deployed on Vercel. Includes a contact form and basic CMS integration.",
    price: "RM 800",
    delivery: "5 day delivery",
    tag: "landing_page",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
  {
    title: "Full-stack Web App",
    description:
      "End-to-end web application with authentication, database design, REST API routes, and a polished user interface. Built with Next.js, Supabase, and TypeScript. Includes 1 month of support.",
    price: "RM 3,500",
    delivery: "2–3 week delivery",
    tag: "web_app",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
  {
    title: "UI/UX Design",
    description:
      "A Figma prototype with a complete design system including typography, colour tokens, icons, and reusable components. Delivered with light and dark mode variants.",
    price: "RM 600",
    delivery: "Figma prototype + design system",
    tag: "design",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
]

const features = [
  "Free consultation call before starting",
  "Source code delivered on GitHub",
  "Responsive & mobile-first design",
  "SEO & performance optimisation",
  "1 month post-launch support",
  "Dedicated Slack channel during project",
]

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const openBooking = (service: string) => {
    setSelectedService(service)
    setBookingOpen(true)
  }

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-heading text-4xl font-bold text-zinc-800 mb-2">
            Services &amp; pricing
          </h1>
          <p className="text-zinc-500 text-sm max-w-md">
            Everything you need to launch a modern web presence. Fixed-price
            packages with no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              service={s}
              index={i}
              onBook={() => openBooking(s.title)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <h2 className="font-heading text-xl font-bold text-zinc-800 mb-4">
            What&apos;s included in every project
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-zinc-500">
                <CheckCircle size={14} className="text-sky-500 shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        <BookingForm
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
          preselectedService={selectedService}
        />
      </div>
    </div>
  )
}
