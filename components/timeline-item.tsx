import type { ReactNode } from "react"

interface TimelineItemProps {
  date: string
  title: string
  company?: string
  location?: string
  children: ReactNode
  isLast?: boolean
}

export default function TimelineItem({ date, title, company, location, children, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[17px] top-[30px] h-[calc(100%-30px)] w-[2px] bg-border dark:bg-border/50"></div>
      )}

      {/* Date circle */}
      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
        <span className="text-xs font-bold">{date.split(" ")[0]}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col pb-10">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          {(company || location) && (
            <div className="text-sm text-muted-foreground">
              {company && <span>{company}</span>}
              {company && location && <span> • </span>}
              {location && <span>{location}</span>}
            </div>
          )}
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>
        <div className="mt-3 text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}
