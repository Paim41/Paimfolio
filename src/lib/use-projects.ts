"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase"
import type { Project } from "@/types"

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false })

        if (!cancelled) {
          if (error) {
            console.error("Supabase projects fetch error:", error.message)
            setProjects([])
          } else {
            setProjects(data ?? [])
          }
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Supabase projects fetch error:", err)
          setProjects([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  return { projects, loading, setProjects }
}
