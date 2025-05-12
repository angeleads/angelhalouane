"use client"

import { useState } from "react"
import { Sticker } from "@/components/ui/sticker"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import Image from "next/image"
import Link from "next/link"
import { Code, ArrowRight } from "lucide-react"

export default function ProjectsPageClient() {
  // Projects data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration.",
      imageSrc: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      category: "Web",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      imageSrc: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      category: "Web",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Personal Blog",
      description: "A blog built with Next.js and MDX for content management.",
      imageSrc: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      category: "Web",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data.",
      imageSrc: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Chart.js"],
      category: "Web",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe App",
      description: "A recipe application with search functionality and user authentication.",
      imageSrc: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Supabase", "Expo"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description: "A mobile app to track workouts and fitness progress.",
      imageSrc: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Expo"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Sticker color="green" rotate="left">
                Creative
              </Sticker>
              <Sticker color="blue" rotate="right">
                Projects
              </Sticker>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">My Projects</h1>
            <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-6"></div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of my recent work and personal projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b border-border/40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Web", "Mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <AnimatedGradientBorder containerClassName="w-full" className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.imageSrc || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-md text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                </AnimatedGradientBorder>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
                      >
                        <Code className="h-4 w-4" />
                        Code
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-accent">
        <div className="container text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Interested in working together?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              href="/about#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
