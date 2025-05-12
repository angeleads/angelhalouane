export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-green-primary"></span>
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="timeline-container space-y-12">
            {/* Education 1 */}
            <EducationItem
              degree="Degree and Master in Software Development and IT Expert"
              institution="EPITECH Technology"
              location="Barcelona, Spain"
              period="2020 - 2025"
            />

            {/* Education 2 */}
            <EducationItem
              degree="Erasmus Exchange Year"
              institution="KOÇ University"
              location="Istanbul, Turkey"
              period="2023 - 2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

function EducationItem({
  degree,
  institution,
  location,
  period,
}: EducationItemProps) {
  return (
    <div className="relative">
      <div className="timeline-dot" style={{ top: "24px" }}></div>
      <div className="bg-cream border border-brown-light/20 rounded-xl p-6 shadow-sm dark:shadow-none">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{degree}</h3>
            <p className="text-green-primary">{institution}</p>
            <p className="text-brown-medium">{location}</p>
          </div>
          <div className="px-3 py-1 bg-green-light/30 text-green-primary text-sm font-medium rounded-full">
            {period}
          </div>
        </div>
      </div>
    </div>
  );
}
