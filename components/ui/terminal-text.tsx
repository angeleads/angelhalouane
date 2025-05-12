"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TerminalTextProps {
  text: string
  className?: string
  typingSpeed?: number
  showCursor?: boolean
}

export function TerminalText({ text, className, typingSpeed = 50, showCursor = true }: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, typingSpeed])

  return (
    <div className={cn("font-mono", className)}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="inline-block w-2 h-5 bg-primary ml-1 animate-blink"></span>
      )}
    </div>
  )
}
