"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { NavLink } from "@/types"

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}

const links: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur border-b border-sky-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-gradient tracking-tight"
        >
          paim.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = isActive(l.href, pathname)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors relative ${
                  active
                    ? "text-sky-500 font-semibold"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-sky-gradient" />
                )}
              </Link>
            )
          })}
          <Link
            href="/admin"
            className={`text-sm transition-colors ${
              isActive("/admin", pathname)
                ? "text-sky-500 font-semibold"
                : "text-zinc-400 hover:text-zinc-700"
            }`}
          >
            Admin
          </Link>
        </nav>

        <button
          className="md:hidden text-zinc-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass border-t border-sky-500/10"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {links.map((l) => {
                const active = isActive(l.href, pathname)
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm transition-colors py-1 ${
                      active
                        ? "text-sky-500 font-semibold"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {l.label}
                  </Link>
                )
              })}
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors py-1 ${
                  isActive("/admin", pathname)
                    ? "text-sky-500 font-semibold"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
