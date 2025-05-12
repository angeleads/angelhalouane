"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface StarProps {
  size?: "sm" | "md" | "lg"
  color?: "green" | "yellow" | "pink" | "blue"
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay?: number
  className?: string
}

export function Star({ size = "sm", color = "green", top, left, right, bottom, delay = 0, className }: StarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const colorClasses = {
    green: "text-green-primary",
    yellow: "text-yellow-primary",
    pink: "text-pink-primary",
    blue: "text-blue-primary",
  }

  const positionStyle = {
    top,
    left,
    right,
    bottom,
  }

  return (
    <div
      className={cn(
        "absolute z-10 transition-all duration-1000",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0",
        className,
      )}
      style={positionStyle}
    >
      <svg
        className={cn("animate-pulse", sizeClasses[size], colorClasses[color])}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    </div>
  )
}
