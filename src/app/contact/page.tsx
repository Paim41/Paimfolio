"use client"

import { motion } from "framer-motion"
import { Code2, Globe, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-sky-500 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse-slow" />
            Currently available for freelance
          </div>
          <h1 className="font-heading text-4xl font-bold text-zinc-800 mb-2">
            Get in touch
          </h1>
          <p className="text-zinc-500 text-sm max-w-md">
            Have a project, question, or just want to say hi? Fill out the form
            below and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="glass rounded-xl p-5">
              <h3 className="font-heading text-sm font-bold text-zinc-800 mb-3">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://github.com/Paim41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <Code2 size={16} />
                  github.com/Paim41
                </Link>
                <Link
                  href="https://linkedin.com/in/Paim41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <Globe size={16} />
                  linkedin.com/in/Paim41
                </Link>
                <Link
                  href="mailto:sakacomel@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <Mail size={16} />
                  sakacomel@gmail.com
                </Link>
              </div>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="font-heading text-sm font-bold text-zinc-800 mb-2">
                Response time
              </h3>
              <p className="text-xs text-zinc-500">
                I typically respond within 24 hours on business days. For urgent
                inquiries, please reach out via email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
