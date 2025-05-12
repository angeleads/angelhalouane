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
        "Sharetogo is a React Native carpooling app with Firebase backend, featuring ride reservations and cancelations, group chat, reviews, and user profiles. It was developed to provide a seamless experience for employees looking to share rides.",
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
        "SPINE is platform for indie game developers to share their video games and get live feedback, reviews and statistics about their games. It is a modern company website built with ReactJS, and firebase featuring a strong brand identity and cohesive visual designed with TailwindCSS.",
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
        "ZePortfolioBuilder is a web-based platform designed to enable users to create personalized portfolio websites using pre-designed templates. The platform will allow users to select a template, customize it with their content, and publish their portfolio online. ",
      image: "/ZPB.png",
      tags: [
        { text: "NextJS", color: "green" },
        { text: "GrapeJS", color: "pink" },
        { text: "Supabase", color: "yellow" },
      ],
      url: "http://ze-portfolio-builder.vercel.app",
    },
    {
      title: "Viven Remax",
      subtitle: "Side Project",
      description:
        "This project is a web page developed for a real estate agency. It showcases properties, offers a user-friendly interface, and is built with Next.js and Tailwind CSS. The site is designed to provide an engaging experience for users looking to buy or sell properties.",
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
