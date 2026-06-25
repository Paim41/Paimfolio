"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase"
import { LogIn, Loader2 } from "lucide-react"
import AdminTable from "@/components/AdminTable"
import AdminProjects from "@/components/AdminProjects"
import type { User } from "@supabase/supabase-js"

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState("")
  const [tab, setTab] = useState<"inbox" | "projects">("inbox")
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener?.subscription.unsubscribe()
  }, [])

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setAuthError("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setAuthError(error.message)
    }
    setAuthLoading(false)
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div className="pt-28 flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-zinc-500" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-2xl font-bold text-zinc-800 mb-1 text-center">
              Admin login
            </h1>
            <p className="text-sm text-zinc-500 text-center mb-8">
              Sign in to manage inquiries and messages.
            </p>

            <form onSubmit={login} className="glass rounded-xl p-6 space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="sakacomel@gmail.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500">Password</label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              {authError && (
                <p className="text-xs text-red-400">{authError}</p>
              )}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {authLoading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn size={14} />
                    Sign in
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-zinc-800">
              Dashboard
            </h1>
            <p className="text-sm text-zinc-500">
              Welcome back, {user.email}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 bg-sky-50/30 rounded-lg p-0.5">
              <button
                onClick={() => setTab("inbox")}
                className={`px-3 py-1.5 rounded text-xs transition-colors ${
                  tab === "inbox" ? "bg-sky-gradient text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Inbox
              </button>
              <button
                onClick={() => setTab("projects")}
                className={`px-3 py-1.5 rounded text-xs transition-colors ${
                  tab === "projects" ? "bg-sky-gradient text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Projects
              </button>
            </div>
            <button
              onClick={logout}
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-1.5 glass rounded-lg"
            >
              Sign out
            </button>
          </div>
        </div>

        {tab === "inbox" ? <AdminTable /> : <AdminProjects />}
      </div>
    </div>
  )
}
