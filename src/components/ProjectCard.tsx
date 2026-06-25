"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  color: string
  thumbnailUrl?: string
  index: number
}

const categoryLabels: Record<string, string> = {
  web_app: "Web App",
  landing_page: "Landing Page",
  design: "Design",
}

const categoryColors: Record<string, string> = {
  web_app: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
  landing_page: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
  design: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
}

export default function ProjectCard({
  title,
  description,
  category,
  tags,
  githubUrl,
  liveUrl,
  color,
  thumbnailUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass glass-hover rounded-xl overflow-hidden group"
    >
      <div
        className={`h-48 flex items-center justify-center bg-gradient-to-br ${color} relative overflow-hidden`}
      >
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid opacity-20" />
            <span className="font-heading text-5xl font-bold text-zinc-800/20 select-none">
              {title.charAt(0)}
            </span>
          </>
        )}
      </div>

      <div className="p-5">
        <span
          className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-gradient-to-r ${
            categoryColors[category] || categoryColors.web_app
          } text-zinc-800/80 mb-3`}
        >
          {categoryLabels[category] || category}
        </span>

        <h3 className="font-heading text-lg font-bold text-zinc-800 mb-1">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-full bg-sky-50/30 text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-sky-500 hover:text-sky-600 transition-colors"
            >
              <ExternalLink size={14} />
              View project
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 transition-colors ml-auto"
            >
              <Code2 size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
