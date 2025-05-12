import type React from "react"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface StickerProps extends HTMLAttributes<HTMLDivElement> {
  color?: "green" | "pink" | "yellow" | "blue"
  rotate?: "left" | "right" | "none"
  className?: string
  children: React.ReactNode
}

export function Sticker({ color = "green", rotate = "none", className, children, ...props }: StickerProps) {
  const colorClasses = {
    green: "bg-green-primary/20 text-green-primary border-green-primary/30",
    pink: "bg-pink-light/20 text-pink-primary border-pink-primary/30",
    yellow: "bg-yellow-light/20 text-yellow-primary border-yellow-primary/30",
    blue: "bg-blue-light/20 text-blue-primary border-blue-primary/30",
  }

  const rotateClasses = {
    left: "-rotate-3",
    right: "rotate-3",
    none: "",
  }

  return (
    <div
      className={cn(
        "inline-flex px-4 py-1 rounded-full font-medium text-sm shadow-sm border transition-all hover:scale-105 cursor-default",
        colorClasses[color],
        rotateClasses[rotate],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
