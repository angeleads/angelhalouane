import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="h-6 w-6 rounded-full bg-green-primary"></span>
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-light/30 flex items-center justify-center text-green-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-brown-medium">Phone</p>
                  <p>+34 667 881 370</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-light/30 flex items-center justify-center text-green-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-brown-medium">Email</p>
                  <p>halouane.angel@epitech.eu</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-light/30 flex items-center justify-center text-green-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-brown-medium">Location</p>
                  <p>Barcelona, Spain</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <div className="bg-cream border border-brown-light/20 rounded-xl p-8 shadow-sm dark:shadow-none text-center">
              <p className="text-brown-medium mb-6">
                Feel free to reach out if you would like to discuss potential
                opportunities.
              </p>
              <a
                href="mailto:halouane.angel@epitech.eu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-light text-cream rounded-3xl font-medium hover:bg-green-primary transition-colors"
              >
                <Mail size={18} />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
