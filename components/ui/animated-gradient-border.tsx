"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  borderWidth?: number
  duration?: number
  animate?: boolean
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  borderWidth = 2,
  duration = 8,
  animate = true,
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative rounded-lg p-[2px] overflow-hidden", containerClassName)}>
      <div
        className={cn("absolute inset-0 rounded-lg", animate && "animate-gradient-xy")}
        style={{
          background: "linear-gradient(60deg, #22c55e, #3b82f6, #22c55e, #3b82f6)",
          backgroundSize: "300% 300%",
          animationDuration: `${duration}s`,
        }}
      />
      <div className={cn("relative rounded-[calc(0.5rem-1px)] bg-background h-full", className)}>{children}</div>
    </div>
  )
}
