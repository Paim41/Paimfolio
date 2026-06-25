"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase"
import { Loader2 } from "lucide-react"
import type { Inquiry, Message } from "@/types"

export default function AdminTable() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<"inquiries" | "messages">("inquiries")
  const supabase = createClient()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)

    const [inqRes, msgRes] = await Promise.all([
      supabase.from("inquiries").select("*").order("created_at", { ascending: false }),
      supabase.from("messages").select("*").order("created_at", { ascending: false }),
    ])

    if (inqRes.data) setInquiries(inqRes.data as Inquiry[])
    if (msgRes.data) setMessages(msgRes.data as Message[])
    setLoading(false)
  }

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("inquiries").update({ status }).eq("id", id)
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: status as Inquiry["status"] } : i))
    )
  }

  const toggleRead = async (id: string, read: boolean) => {
    await supabase.from("messages").update({ read: !read }).eq("id", id)
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: !read } : m))
    )
  }

  const stats = {
    totalInquiries: inquiries.length,
    unreadMessages: messages.filter((m) => !m.read).length,
    activeProjects: inquiries.filter((i) => i.status === "in_progress").length,
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
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="glass rounded-xl p-4">
          <p className="text-2xl font-bold text-zinc-800 font-num">{stats.totalInquiries}</p>
          <p className="text-xs text-zinc-500 mt-1">Total inquiries</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-2xl font-bold text-zinc-800 font-num">{stats.unreadMessages}</p>
          <p className="text-xs text-zinc-500 mt-1">Unread messages</p>
        </div>
        <div className="glass rounded-xl p-4">
          <p className="text-2xl font-bold text-zinc-800 font-num">{stats.activeProjects}</p>
          <p className="text-xs text-zinc-500 mt-1">Active projects</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("inquiries")}
          className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
            tab === "inquiries"
              ? "bg-sky-gradient text-white"
              : "glass text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Inquiries
        </button>
        <button
          onClick={() => setTab("messages")}
          className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
            tab === "messages"
              ? "bg-sky-gradient text-white"
              : "glass text-zinc-500 hover:text-zinc-900"
          }`}
        >
          Messages
        </button>
      </div>

      {tab === "inquiries" && (
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sky-500/10 text-left text-xs text-zinc-400 uppercase tracking-wider">
                  <th className="p-3 font-medium">Name</th>
                  <th className="p-3 font-medium">Service</th>
                  <th className="p-3 font-medium hidden md:table-cell">Budget</th>
                  <th className="p-3 font-medium hidden md:table-cell">Date</th>
                  <th className="p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq) => (
                  <tr
                    key={inq.id}
                    className="border-b border-sky-500/10 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-3 text-zinc-800">
                      <div>{inq.name}</div>
                      <div className="text-xs text-zinc-400">{inq.email}</div>
                    </td>
                    <td className="p-3 text-zinc-700">{inq.service}</td>
                    <td className="p-3 text-zinc-500 hidden md:table-cell">
                      {inq.budget}
                    </td>
                    <td className="p-3 text-zinc-500 hidden md:table-cell">
                      {inq.start_date}
                    </td>
                    <td className="p-3">
                      <select
                        value={inq.status}
                        onChange={(e) => updateStatus(inq.id, e.target.value)}
                        className="bg-sky-50/30 border border-sky-500/15 rounded px-2 py-1 text-xs text-zinc-800 focus:outline-none focus:border-sky-500"
                      >
                        <option value="pending" className="bg-white">
                          Pending
                        </option>
                        <option value="in_progress" className="bg-white">
                          In progress
                        </option>
                        <option value="completed" className="bg-white">
                          Completed
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-zinc-400 text-sm">
                      No inquiries yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "messages" && (
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sky-500/10 text-left text-xs text-zinc-400 uppercase tracking-wider">
                  <th className="p-3 font-medium">Name</th>
                  <th className="p-3 font-medium">Message</th>
                  <th className="p-3 font-medium">Date</th>
                  <th className="p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr
                    key={msg.id}
                    className={`border-b border-sky-500/10 last:border-0 hover:bg-white/[0.02] transition-colors ${
                      !msg.read ? "bg-sky-50" : ""
                    }`}
                  >
                    <td className="p-3 text-zinc-800">
                      <div>{msg.name}</div>
                      <div className="text-xs text-zinc-400">{msg.email}</div>
                    </td>
                    <td className="p-3 text-zinc-700 max-w-xs truncate">
                      {msg.message}
                    </td>
                    <td className="p-3 text-zinc-500 whitespace-nowrap">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => toggleRead(msg.id, msg.read)}
                        className={`text-xs px-2 py-1 rounded-full transition-colors ${
                          msg.read
                            ? "text-zinc-400 bg-sky-50/30"
                            : "text-sky-500 bg-sky-50/50"
                        }`}
                      >
                        {msg.read ? "Read" : "Unread"}
                      </button>
                    </td>
                  </tr>
                ))}
                {messages.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-zinc-400 text-sm">
                      No messages yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
