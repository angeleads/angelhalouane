"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SkillBarProps {
  name: string
  level: number
  color?: "green" | "blue" | "pink" | "yellow"
  className?: string
  delay?: number
}

export function SkillBar({ name, level, color = "green", className, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level)
    }, delay)

    return () => clearTimeout(timer)
  }, [level, delay])

  const colorClasses = {
    green: "bg-green-primary",
    blue: "bg-blue-primary",
    pink: "bg-pink-primary",
    yellow: "bg-yellow-primary",
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-brown-medium">{level}%</span>
      </div>
      <div className="h-2 w-full bg-brown-light/20 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-1000 ease-out", colorClasses[color])}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}
