"use client";
import { Github, Linkedin } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({
  activeSection,
  scrollToSection,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 dark:bg-cream/95 backdrop-blur-sm border-b border-brown-light/20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-green-primary flex items-center justify-center text-cream font-bold">
            AH
          </div>
          <span className="font-medium">Angel Halouane</span>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {["about", "skills", "experience", "education", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-sm capitalize transition-colors ${
                      activeSection === section
                        ? "text-green-primary font-medium"
                        : "text-brown-medium hover:text-green-primary"
                    }`}
                  >
                    {section}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/angeleads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown-medium hover:text-green-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/angel-amelia-halouane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown-medium hover:text-green-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
