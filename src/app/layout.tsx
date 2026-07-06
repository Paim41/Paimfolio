import type { Metadata, Viewport } from "next"
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
    default: "Paim",
    template: "%s | Paim",
  },
  description:
    "Building beautiful, fast web experiences — available for freelance projects. Next.js, React, Supabase, TypeScript.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Paim",
  },
  openGraph: {
    title: "Paim — Full-stack designer & developer",
    description:
      "Building beautiful, fast web experiences — available for freelance projects.",
    url: "https://Paim",
    siteName: "Paim",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paim — Full-stack designer & developer",
    description:
      "Building beautiful, fast web experiences — available for freelance projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#adcdea",
  width: "device-width",
  initialScale: 1,
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
