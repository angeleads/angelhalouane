import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: { text: string; color: "green" | "pink" | "blue" | "yellow" }[];
  url: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "ShareToGo",
      subtitle: "Freelance",
      description:
        "A React Native carpooling app with Firebase backend, featuring ride reservations, group chat, reviews, and user profiles.",
      image: "/sharetogo.png",
      tags: [
        { text: "NextJS", color: "green" },
        { text: "UX/UI", color: "pink" },
        { text: "Tailwind", color: "blue" },
      ],
      url: "http://www.sharetogo.es",
    },
    {
      title: "SPINE",
      subtitle: "Masters project",
      description:
        "A modern company website built with ReactJS, featuring a strong brand identity and cohesive visual design created in Figma.",
      image: "/spine.png",
      tags: [
        { text: "ReactJS", color: "blue" },
        { text: "Express", color: "pink" },
        { text: "Firebase", color: "yellow" },
      ],
      url: "http://spineclouds.me",
    },
    {
      title: "ZePortfolioBuilder",
      subtitle: "Side Project",
      description:
        "This project is a web development tool built with Next.js, Firebase, and Tailwind CSS. It allows users to create, edit, delete, and manage projects with customizable features such as icons, colors, labels, and descriptions.",
      image: "/ZPB.png",
      tags: [
        { text: "NextJS", color: "green" },
        { text: "GrapeJS", color: "pink" },
        { text: "Supabase", color: "yellow" },
      ],
      url: "http://spineclouds.me",
    },
    {
      title: "Viven Remax",
      subtitle: "Side Project",
      description:
        "This project is a web development tool built with Next.js, Firebase, and Tailwind CSS. It allows users to create, edit, delete, and manage projects with customizable features such as icons, colors, labels, and descriptions.",
      image: "/viven.png",
      tags: [
        { text: "NextJS", color: "green" },
        { text: "Tailwind", color: "pink" },
        { text: "Axios", color: "yellow" },
      ],
      url: "https://viven-website.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-brown-light/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-green-primary"></span>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, subtitle, description, image, tags, url } = project;

  return (
    <div className="bg-cream border border-brown-light/20 rounded-xl overflow-hidden shadow-sm dark:shadow-none group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-brown-medium mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 bg-${tag.color}-light text-${tag.color}-primary text-xs rounded-full`}
            >
              {tag.text}
            </span>
          ))}
        </div>
        <a
          href={url}
          className="inline-flex items-center gap-1 text-green-primary hover:underline"
        >
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
