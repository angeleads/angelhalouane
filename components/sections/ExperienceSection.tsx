export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-brown-light/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-green-primary"></span>
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="timeline-container space-y-12">
            {/* Experience 1 */}
            <TimelineItem
              title="Pedagogical Assistant & Hub Manager"
              company="EPITECH"
              date="February 2024 - Present"
              items={[
                "Mentored students throughout their academic and technical projects mainly in C and Python.",
                "Gave Low-code and coding club classes to students eager to learn.",
                "Oversaw ongoing projects and encouraged innovation and initiative.",
                "Organized workshops, tech talks, and hackathons to enhance learning experiences.",
                "Managed the Hub and school inventory to ensure smooth operations.",
              ]}
            />

            {/* Experience 2 */}
            <TimelineItem
              title="Freelance Web & Mobile Developer"
              company="ShareToGo"
              date="March 2023 - Present"
              items={[
                "Designed and developed a React Native app with Firebase backend.",
                "Implemented key features: ride reservations, group chat per ride, reviews, user profiles, and ride management.",
                "Focused on smooth UX and real-time interactions for a seamless carpooling experience.",
                "Handled data structuring, authentication, and robust error handling.",
                "Collaborated closely with a small team to deliver a functional MVP tailored to student needs.",
              ]}
            />

            {/* Experience 3 */}
            <TimelineItem
              title="Web Developer"
              company="SARL GAZ HCFC"
              date="April 2023 - August 2023"
              description="Designed and branded a new company from the ground up to stand out in a competitive market. Developed a modern website using ReactJS and crafted the UI/UX in Figma to ensure a strong and cohesive visual identity."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  items?: string[];
  description?: string;
}

function TimelineItem({
  title,
  company,
  date,
  items,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative">
      <div className="timeline-dot" style={{ top: "24px" }}></div>
      <div className="bg-cream border border-brown-light/20 rounded-xl p-6 shadow-sm dark:shadow-none">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-green-primary">{company}</p>
          </div>
          <div className="px-3 py-1 bg-green-light/30 text-green-primary text-sm font-medium rounded-full">
            {date}
          </div>
        </div>
        {items && (
          <ul className="space-y-2 text-brown-medium">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="h-2 w-2 rounded-full bg-green-primary mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {description && <p className="text-brown-medium">{description}</p>}
      </div>
    </div>
  );
}
