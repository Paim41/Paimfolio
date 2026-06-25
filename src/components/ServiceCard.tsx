"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Service } from "@/types"

interface ServiceCardProps {
  service: Service
  index: number
  onBook: () => void
}

const serviceIcons: Record<string, React.ReactNode> = {
  "Landing Page": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M2 10h20" />
    </svg>
  ),
  "Full-stack Web App": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  "UI/UX Design": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </svg>
  ),
}

export default function ServiceCard({ service, index, onBook }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass glass-hover rounded-xl p-6 flex flex-col group"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white"
        style={{ background: service.gradient }}
      >
        {serviceIcons[service.title] || service.title.charAt(0)}
      </div>

      <h3 className="font-heading text-lg font-bold text-zinc-800 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-zinc-500 mb-4 flex-1 leading-relaxed">
        {service.description}
      </p>

      <div className="flex items-baseline gap-1.5 mb-1">
        <span className="text-2xl font-bold text-gradient font-num">{service.price}</span>
        <span className="text-xs text-zinc-400">one-time</span>
      </div>
      <p className="text-xs text-zinc-400 mb-5">{service.delivery}</p>

      <button
        onClick={onBook}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg glass text-sm font-medium text-zinc-700 hover:bg-white/80 transition-all group border border-sky-500/15"
      >
        Book this
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </motion.div>
  )
}
