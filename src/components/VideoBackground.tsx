"use client"

export default function VideoBackground({
  src,
  poster,
  className = "",
}: {
  src: string
  poster?: string
  className?: string
}) {
  return (
    <div
      className={`${
        className.includes("fixed") ? "fixed" : "absolute"
      } inset-0 overflow-hidden ${className}`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster || "/bg-poster.jpg"}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
    </div>
  )
}
