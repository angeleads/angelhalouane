"use client";

import type React from "react";
import {
  Code,
  Server,
  Globe,
  Wrench,
  Figma,
  Terminal,
  Github,
} from "lucide-react";
import { FaReact } from "react-icons/fa6";
import {
  RiNextjsLine,
  RiTailwindCssLine,
  RiJavascriptLine,
  RiNodejsLine,
  RiFirebaseLine,
  RiSupabaseLine,
} from "react-icons/ri";
import { LiaNode } from "react-icons/lia";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  TbBrandTypescript,
  TbBrandReactNative,
  TbBrandMysql,
  TbBrandVscode,
} from "react-icons/tb";
import { Sticker } from "@/components/ui/sticker";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="h-6 w-6 rounded-full bg-green-primary"></span>
            Skills
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stickers */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div
              style={
                {
                  "--rotate": "-3deg",
                  "--delay": "0s",
                } as React.CSSProperties
              }
              className="animate-float"
            >
              <Sticker color="green" rotate="left">
                Creative
              </Sticker>
            </div>
            <div
              style={
                {
                  "--rotate": "3deg",
                  "--delay": "0.5s",
                } as React.CSSProperties
              }
              className="animate-float"
            >
              <Sticker color="pink" rotate="right">
                Problem Solver
              </Sticker>
            </div>
            <div
              style={
                {
                  "--rotate": "0deg",
                  "--delay": "1s",
                } as React.CSSProperties
              }
              className="animate-float"
            >
              <Sticker color="yellow">Detail Oriented</Sticker>
            </div>
            <div
              style={
                {
                  "--rotate": "-2deg",
                  "--delay": "1.5s",
                } as React.CSSProperties
              }
              className="animate-float"
            >
              <Sticker color="blue" rotate="left">
                Fast Learner
              </Sticker>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="col-span-2 bg-cream border border-brown-light/20 rounded-xl p-6 shadow-sm dark:shadow-none skill-card">
              <h3 className="text-xl font-semibold mb-4 text-green-primary flex items-center gap-2">
                <Code size={20} />
                Frontend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SkillIcon name="React" color="blue" icon="React" />
                <SkillIcon name="Next.js" color="blue" icon="Nextjs" />
                <SkillIcon name="TypeScript" color="blue" icon="Typescript" />
                <SkillIcon
                  name="Tailwind CSS"
                  color="pink"
                  icon="Tailwindcss"
                />
                <SkillIcon name="JavaScript" color="yellow" icon="JavaScript" />
                <SkillIcon
                  name="React Native"
                  color="green"
                  icon="React Native"
                />
              </div>
            </div>

            {/* Backend */}
            <div className="col-span-2 bg-cream border border-brown-light/20 rounded-xl p-6 shadow-sm dark:shadow-none skill-card">
              <h3 className="text-xl font-semibold mb-4 text-pink-primary flex items-center gap-2">
                <Server size={20} />
                Backend
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SkillIcon name="Node.js" color="green" icon="Node.js" />
                <SkillIcon name="Express" color="blue" icon="Express" />
                <SkillIcon name="Firebase" color="yellow" icon="Firebase" />
                <SkillIcon name="Supabase" color="green" icon="Supabase" />
                <SkillIcon name="MySQL" color="blue" icon="MySQL" />
                <SkillIcon name="PostgreSQL" color="pink" icon="PostgreSQL" />
              </div>
            </div>

            {/* Languages */}
            <div className="col-span-2 bg-cream border border-brown-light/20 rounded-xl p-6 shadow-sm dark:shadow-none skill-card">
              <h3 className="text-xl font-semibold mb-4 text-yellow-primary flex items-center gap-2">
                <Globe size={20} />
                Languages
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>French</span>
                  <span className="text-sm bg-green-light/30 text-green-primary px-2 py-1 rounded-xl">
                    Native
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Arabic</span>
                  <span className="text-sm bg-pink-light text-pink-primary px-2 py-1 rounded-xl">
                    Native
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-sm bg-blue-light text-blue-primary px-2 py-1 rounded-xl">
                    C1 Level
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Spanish</span>
                  <span className="text-sm bg-yellow-light text-yellow-primary px-2 py-1 rounded-xl">
                    B2 Level
                  </span>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="col-span-2 bg-cream border border-brown-light/20 rounded-xl p-6 shadow-sm dark:shadow-none skill-card">
              <h3 className="text-xl font-semibold mb-4 text-blue-primary flex items-center gap-2">
                <Wrench size={20} />
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-2 p-3 rounded-3xl bg-brown-light/10 hover:bg-blue-light/20 dark:hover:bg-brown-light transition-colors">
                  <div className="h-10 w-10 flex items-center justify-center text-blue-primary">
                    <Github size={24} />
                  </div>
                  <span className="text-sm font-medium text-center">
                    Git/GitHub
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-3xl bg-brown-light/10 hover:bg-blue-light/20 dark:hover:bg-brown-light transition-colors">
                  <div className="h-10 w-10 flex items-center justify-center text-blue-primary">
                    <TbBrandVscode size={24} />
                  </div>
                  <span className="text-sm font-medium text-center">
                    VS Code
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-3xl bg-brown-light/10 hover:bg-blue-light/20 dark:hover:bg-brown-light transition-colors">
                  <div className="h-10 w-10 flex items-center justify-center text-blue-primary">
                    <Figma size={24} />
                  </div>
                  <span className="text-sm font-medium text-center">Figma</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-3xl bg-brown-light/10 hover:bg-blue-light/20 dark:hover:bg-brown-light transition-colors">
                  <div className="h-10 w-10 flex items-center justify-center text-blue-primary">
                    <Terminal size={24} />
                  </div>
                  <span className="text-sm font-medium text-center">CLI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillIconProps {
  name: string;
  color: "green" | "blue" | "pink" | "yellow";
  icon: string;
}

function SkillIcon({ name, color, icon }: SkillIconProps) {
  const colorClasses = {
    green: "text-green-primary",
    blue: "text-blue-primary",
    pink: "text-pink-primary",
    yellow: "text-yellow-primary",
  };

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-3xl bg-brown-light/10 hover:bg-green-light dark:hover:bg-brown-light transition-colors">
      <div
        className={`h-12 w-12 flex items-center justify-center ${colorClasses[color]}`}
      >
        <svg
          viewBox="0 0 24 24"
          width="36"
          height="36"
          stroke="currentColor"
          fill="none"
        >
          {icon === "React" && <FaReact size={24} />}
          {icon === "Nextjs" && <RiNextjsLine size={24} />}
          {icon === "Typescript" && <TbBrandTypescript size={24} />}
          {icon === "Tailwindcss" && <RiTailwindCssLine size={24} />}
          {icon === "JavaScript" && <RiJavascriptLine size={24} />}
          {icon === "React Native" && <TbBrandReactNative size={24} />}
          {icon === "Node.js" && <LiaNode size={24} />}
          {icon === "Express" && <RiNodejsLine size={24} />}
          {icon === "Firebase" && <RiFirebaseLine size={24} />}
          {icon === "Supabase" && <RiSupabaseLine size={24} />}
          {icon === "MySQL" && <TbBrandMysql size={24} />}
          {icon === "PostgreSQL" && <BiLogoPostgresql size={24} />}
        </svg>
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
}
