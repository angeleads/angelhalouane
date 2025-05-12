import Link from "next/link"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          <span className="inline-flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and{" "}
            <code className="mx-1 px-1 py-0.5 bg-muted rounded text-xs">code</code>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
