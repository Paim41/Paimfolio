import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import VideoBackground from "@/components/VideoBackground"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "paim.dev — Full-stack designer & developer",
    template: "%s | paim.dev",
  },
  description:
    "Building beautiful, fast web experiences — available for freelance projects. Next.js, React, Supabase, TypeScript.",
  openGraph: {
    title: "paim.dev — Full-stack designer & developer",
    description:
      "Building beautiful, fast web experiences — available for freelance projects.",
    url: "https://paim.dev",
    siteName: "paim.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "paim.dev — Full-stack designer & developer",
    description:
      "Building beautiful, fast web experiences — available for freelance projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} font-body antialiased bg-white text-zinc-700`}
      >
        <VideoBackground src="/bg-hero.mp4" poster="/bg-poster.jpg" className="fixed" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
