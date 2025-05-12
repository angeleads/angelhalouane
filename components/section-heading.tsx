interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
    </div>
  )
}
