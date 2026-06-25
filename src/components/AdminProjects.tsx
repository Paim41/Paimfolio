"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase"
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react"
import { useProjects } from "@/lib/use-projects"
import type { Project } from "@/types"

const defaults = {
  title: "",
  description: "",
  category: "web_app" as "web_app" | "landing_page" | "design",
  tech_stack: "",
  github_url: "",
  live_url: "",
  thumbnail_color: "from-sky-400/30 to-blue-400/30",
  thumbnail_url: "",
}

export default function AdminProjects() {
  const { projects, loading, setProjects } = useProjects()
  const [editing, setEditing] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(defaults)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const supabase = createClient()

  const reset = () => {
    setForm({ ...defaults })
    setEditing(null)
    setShowForm(false)
  }

  const openEdit = (p: Project) => {
    setEditing(p)
    setShowForm(true)
    setForm({
      title: p.title,
      description: p.description,
      category: p.category,
      tech_stack: p.tech_stack.join(", "),
      github_url: p.github_url || "",
      live_url: p.live_url || "",
      thumbnail_color: p.thumbnail_color,
      thumbnail_url: p.thumbnail_url || "",
    })
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")

    const payload = {
      ...form,
      tech_stack: form.tech_stack.split(",").map((s) => s.trim()).filter(Boolean),
    }

    if (editing) {
      const { data, error: err } = await supabase
        .from("projects")
        .update(payload)
        .eq("id", editing.id)
        .select()
        .single()
      if (err) { setError(err.message); setSaving(false); return }
      if (data) {
        setProjects(projects.map((p) => (p.id === editing.id ? (data as Project) : p)))
      }
    } else {
      const { data, error: err } = await supabase.from("projects").insert(payload).select().single()
      if (err) { setError(err.message); setSaving(false); return }
      if (data) {
        setProjects([data as Project, ...projects])
      }
    }

    setSaving(false)
    reset()
  }

  const remove = async (id: string) => {
    await supabase.from("projects").delete().eq("id", id)
    setProjects(projects.filter((p) => p.id !== id))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={24} className="animate-spin text-zinc-500" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-lg font-bold text-zinc-800">Projects</h3>
        {!showForm && (
          <button
            onClick={() => { reset(); setShowForm(true) }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <Plus size={14} />
            Add project
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={save} className="glass rounded-xl p-5 mb-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-500">Title</label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-500">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as "web_app" | "landing_page" | "design" })}
                className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500"
              >
                <option value="web_app" className="bg-white">Web App</option>
                <option value="landing_page" className="bg-white">Landing Page</option>
                <option value="design" className="bg-white">Design</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500">Description</label>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-500">Tech stack (comma-separated)</label>
              <input
                value={form.tech_stack}
                onChange={(e) => setForm({ ...form, tech_stack: e.target.value })}
                className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500"
                placeholder="Next.js, Supabase, TS"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-500">GitHub URL</label>
              <input
                value={form.github_url}
                onChange={(e) => setForm({ ...form, github_url: e.target.value })}
                className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-500">Live URL</label>
              <input
                value={form.live_url}
                onChange={(e) => setForm({ ...form, live_url: e.target.value })}
                className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-500">Thumbnail URL</label>
              <input
                value={form.thumbnail_url}
                onChange={(e) => setForm({ ...form, thumbnail_url: e.target.value })}
                className="bg-sky-50/30 border border-sky-500/15 rounded px-3 py-1.5 text-sm text-zinc-800 focus:outline-none focus:border-sky-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-1.5 rounded-lg bg-sky-gradient text-white text-xs font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {saving ? "Saving..." : editing ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={reset}
              className="px-4 py-1.5 rounded-lg glass text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* List */}
      <div className="space-y-2">
        {projects.map((p) => (
          <div
            key={p.id}
            className="glass rounded-lg p-4 flex items-center justify-between gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: p.thumbnail_color.includes("from-") ? "#6366f1" : p.thumbnail_color }}
                />
                <p className="text-sm font-medium text-zinc-800 truncate">{p.title}</p>
                <span className="text-[10px] text-zinc-400 uppercase">{p.category.replace("_", " ")}</span>
              </div>
              <p className="text-xs text-zinc-400 truncate mt-0.5">
                {p.tech_stack.join(", ")}
              </p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => openEdit(p)}
                className="p-1.5 rounded text-zinc-400 hover:text-zinc-800 hover:bg-sky-50/30 transition-colors"
              >
                <Pencil size={14} />
              </button>
              <button
                onClick={() => remove(p.id)}
                className="p-1.5 rounded text-zinc-400 hover:text-red-400 hover:bg-sky-50/30 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-zinc-400 text-center py-8">
            No projects yet. Click &quot;Add project&quot; to create one.
          </p>
        )}
      </div>
    </div>
  )
}
