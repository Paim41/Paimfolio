"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2, CheckCircle } from "lucide-react"

interface BookingFormProps {
  open: boolean
  onClose: () => void
  preselectedService?: string
}

export default function BookingForm({
  open,
  onClose,
  preselectedService,
}: BookingFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: preselectedService || "",
    description: "",
    startDate: "",
    budget: "",
  })
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "inquiry", ...form }),
      })
      if (!res.ok) throw new Error("Failed to send")
      setDone(true)
      setTimeout(() => {
        setDone(false)
        onClose()
      }, 2000)
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg rounded-xl p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading text-lg font-bold text-zinc-800">
                Book a project
              </h2>
              <button
                onClick={onClose}
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {done ? (
              <div className="flex flex-col items-center py-8 gap-3">
                <CheckCircle size={40} className="text-sky-500" />
                <p className="text-sm text-zinc-700">
                  Inquiry sent! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-500">Service</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="" disabled className="bg-white">
                      Select a service
                    </option>
                    <option value="Landing Page" className="bg-white">
                      Landing Page — RM 800
                    </option>
                    <option value="Full-stack Web App" className="bg-white">
                      Full-stack Web App — RM 3,500
                    </option>
                    <option value="UI/UX Design" className="bg-white">
                      UI/UX Design — RM 600
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-500">
                    Project description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500">
                      Preferred start date
                    </label>
                    <input
                      required
                      type="date"
                      value={form.startDate}
                      onChange={(e) =>
                        setForm({ ...form, startDate: e.target.value })
                      }
                      className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-500">
                      Budget range
                    </label>
                    <select
                      required
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                      className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="" disabled className="bg-white">
                        Select range
                      </option>
                      <option value="< RM 1,000" className="bg-white">
                        &lt; RM 1,000
                      </option>
                      <option value="RM 1,000 - RM 3,000" className="bg-white">
                        RM 1,000 - RM 3,000
                      </option>
                      <option value="RM 3,000 - RM 5,000" className="bg-white">
                        RM 3,000 - RM 5,000
                      </option>
                      <option value="> RM 5,000" className="bg-white">
                        &gt; RM 5,000
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send inquiry"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
