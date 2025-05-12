"use client";

import { useState, useEffect } from "react";
import { Star } from "@/components/ui/star";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          current = section.getAttribute("id") || "";
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-brown-dark transition-colors duration-300">
      {/* Stars */}
      <Star size="sm" color="green" top="15%" left="5%" delay={300} />
      <Star size="md" color="yellow" top="25%" right="10%" delay={800} />
      <Star size="sm" color="pink" top="40%" left="8%" delay={1200} />
      <Star size="lg" color="blue" top="60%" right="5%" delay={1500} />
      <Star size="md" color="green" top="75%" left="12%" delay={1800} />
      <Star size="sm" color="yellow" top="85%" right="15%" delay={2000} />

      {/* Header */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
