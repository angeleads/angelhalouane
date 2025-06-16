"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-brown-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="h-6 w-6 rounded-full bg-green-primary"></span>
            About Me
          </h2>
          <div className="prose prose-lg text-brown-dark max-w-none">
            <p>
              Hi, I am currently finalizing my master's degree in Software
              Engineering and ready to jump into my next challenge as a Junior
              Full Stack Developer. Whether it's building sleek user experiences
              or diving into the logic behind the scenes, I thrive on crafting
              meaningful digital products.
            </p>
            <p>Feel free to reach out to me for any sort of collaboration!</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-2">
              <Mail className="text-green-primary" size={18} />
              <span>halouane.angel@epitech.eu</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-green-primary" size={18} />
              <span>Barcelona, Spain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
