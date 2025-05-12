"use client";

import type React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { Sticker } from "@/components/ui/sticker";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(121,175,91,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(121,175,91,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <div className="order-2 md:order-1">
          <div className="flex flex-wrap gap-3 mb-6">
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
                Inspiring
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
              <Sticker color="yellow">Challenging</Sticker>
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
                Transformative
              </Sticker>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Angel Halouane
          </h1>
          <p className="text-lg text-brown-medium mb-8 max-w-md">
            Software Engineering student passionate about crafting meaningful
            digital products, ready to make an impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-green-primary text-cream rounded-3xl font-medium hover:bg-green-800 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/ANGEL HALOUANE JUNIOR FULL-STACK DEVELOPER 2025.pdf"
              className="px-6 py-3 border border-brown-light/30 rounded-3xl font-medium text-brown-dark hover:bg-brown-light/10 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-primary to-brown-light opacity-20 blur-xl"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-cream shadow-lg">
              <Image
                src="/Angel-ghibli.png"
                alt="Angel Halouane"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
