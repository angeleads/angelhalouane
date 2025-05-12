"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Calendar, Download, Send, Terminal, Code, Server, Cpu } from "lucide-react"
import { Sticker } from "@/components/ui/sticker"
import { TerminalText } from "@/components/ui/terminal-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"

export default function AboutPageClient() {
  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <div className="flex gap-2 mb-4">
                <Sticker color="green" rotate="left">
                  Creative
                </Sticker>
                <Sticker color="pink" rotate="right">
                  Developer
                </Sticker>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">About Me</h1>
              <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate developer focused on creating beautiful, functional, and user-friendly applications.
              </p>
              <div className="flex flex-col gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Based in New York, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Available for freelance work</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </div>
            </div>
            <div>
              <AnimatedGradientBorder>
                <div className="relative h-[400px] w-full rounded-lg bg-muted overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Profile image"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedGradientBorder>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Bio Section */}
      <section className="py-16">
        <div className="container">
          <div>
            <div className="bg-muted rounded-lg p-6 font-mono text-sm">
              <TerminalText
                text={`$ whoami\n> Full-stack developer with a passion for creating intuitive user experiences\n\n$ cat skills.txt\n> JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL\n\n$ history\n> I started my journey in web development 5 years ago, focusing on building accessible and performant applications.`}
                className="text-sm"
                typingSpeed={20}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Career Timeline</h2>
            <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My professional journey so far</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

            {/* 2022 - Present */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Code className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-auto mr-auto w-full max-w-[calc(50%-2rem)] rounded-lg border border-border/40 bg-background p-6 shadow-sm md:ml-auto md:mr-0">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                  <Sticker color="green" className="text-xs">
                    2022 - Present
                  </Sticker>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Tech Innovations Inc. • New York, NY</p>
                <p className="text-muted-foreground">
                  Leading the frontend development team in building modern, responsive web applications using React,
                  Next.js, and TypeScript. Implemented design systems and component libraries that improved development
                  efficiency by 40%.
                </p>
              </div>
            </div>

            {/* 2020 - 2022 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Terminal className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-auto mr-auto w-full max-w-[calc(50%-2rem)] rounded-lg border border-border/40 bg-background p-6 shadow-sm md:mr-auto md:ml-0">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <Sticker color="pink" className="text-xs">
                    2020 - 2022
                  </Sticker>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Digital Solutions Co. • Boston, MA</p>
                <p className="text-muted-foreground">
                  Developed and maintained multiple client websites and web applications. Collaborated with designers to
                  implement pixel-perfect UI components. Improved website performance by optimizing assets and
                  implementing lazy loading techniques.
                </p>
              </div>
            </div>

            {/* 2018 - 2020 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Server className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-auto mr-auto w-full max-w-[calc(50%-2rem)] rounded-lg border border-border/40 bg-background p-6 shadow-sm md:ml-auto md:mr-0">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Web Developer</h3>
                  <Sticker color="yellow" className="text-xs">
                    2018 - 2020
                  </Sticker>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Creative Agency • San Francisco, CA</p>
                <p className="text-muted-foreground">
                  Built responsive websites for various clients across different industries. Worked with a team of
                  designers and backend developers to deliver full-stack solutions. Implemented SEO best practices that
                  increased client organic traffic by an average of 35%.
                </p>
              </div>
            </div>

            {/* 2016 - 2018 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Cpu className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-auto mr-auto w-full max-w-[calc(50%-2rem)] rounded-lg border border-border/40 bg-background p-6 shadow-sm md:mr-auto md:ml-0">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Junior Developer</h3>
                  <Sticker color="blue" className="text-xs">
                    2016 - 2018
                  </Sticker>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Startup Ventures • Seattle, WA</p>
                <p className="text-muted-foreground">
                  Assisted in the development of the company's main product using HTML, CSS, and JavaScript.
                  Participated in daily stand-ups and sprint planning meetings. Learned and implemented responsive
                  design principles and accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Skills & Expertise</h2>
            <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border/40 bg-background p-6 shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>React & Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Framer Motion</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>HTML/CSS</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border/40 bg-background p-6 shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>MongoDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>PostgreSQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>REST APIs</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border/40 bg-background p-6 shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Figma</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Adobe XD</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Prototyping</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border/40 bg-background p-6 shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Git & GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>VS Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Docker</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Vercel & Netlify</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>CI/CD</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
            <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-4"></div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have a project in mind? Let's talk about it.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <AnimatedGradientBorder>
              <form className="space-y-6 p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </AnimatedGradientBorder>
          </div>
        </div>
      </section>
    </div>
  )
}
