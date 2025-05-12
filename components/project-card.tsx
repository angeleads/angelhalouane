import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, imageSrc, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md hover-scale">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
