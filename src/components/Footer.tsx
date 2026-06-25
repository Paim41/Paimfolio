import { Code2, Globe, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-sky-500/10 bg-sky-50/300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Paim41"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="GitHub"
          >
            <Code2 size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/Paim41"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Globe size={18} />
          </Link>
          <Link
            href="mailto:sakacomel@gmail.com"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
        </div>

        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} paim.dev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
