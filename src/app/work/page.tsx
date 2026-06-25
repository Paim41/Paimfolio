"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import ProjectCard from "@/components/ProjectCard"
import { useProjects } from "@/lib/use-projects"

const categories = [
  { key: "all", label: "All" },
  { key: "web_app", label: "Web App" },
  { key: "landing_page", label: "Landing Page" },
  { key: "design", label: "Design" },
]

export default function WorkPage() {
  const [active, setActive] = useState("all")
  const { projects, loading } = useProjects()

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-4xl font-bold text-zinc-800 mb-2">
            My work
          </h1>
          <p className="text-zinc-500 text-sm mb-8 max-w-md">
            A curated selection of projects I&apos;ve designed and developed.
            Each project is built with attention to detail and performance.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
                active === c.key
                  ? "bg-sky-gradient text-zinc-800"
                  : "glass text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={24} className="animate-spin text-zinc-500" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                category={p.category}
                tags={p.tech_stack}
                githubUrl={p.github_url || undefined}
                liveUrl={p.live_url || undefined}
                color={p.thumbnail_color}
                thumbnailUrl={p.thumbnail_url}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
