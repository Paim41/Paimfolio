"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      })
      if (!res.ok) throw new Error("Failed to send")
      setDone(true)
      setForm({ name: "", email: "", message: "" })
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={submit}
      className="glass rounded-xl p-6 space-y-4"
    >
      <h2 className="font-heading text-lg font-bold text-zinc-800 mb-1">
        Send a message
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-500">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
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
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-zinc-500">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="bg-sky-50/30 border border-sky-500/15 rounded-lg px-3 py-2 text-sm text-zinc-800 placeholder-zinc-300 focus:outline-none focus:border-sky-500 transition-colors resize-none"
          placeholder="What's on your mind?"
        />
      </div>

      <button
        type="submit"
        disabled={sending || done}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-sky-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {done ? (
          <>
            <CheckCircle size={14} />
            Sent!
          </>
        ) : sending ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </motion.form>
  )
}
