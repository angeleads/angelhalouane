import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="h-6 w-6 rounded-full bg-green-primary"></span>
          Get In Touch
        </h2>

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

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/angel-amelia-halouane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-green-light/30 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/angeleads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-green-light/30 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brown-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-3xl border border-brown-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-green-primary/50 dark:bg-cream/95"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brown-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-3xl border border-brown-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-green-primary/50 dark:bg-cream/95"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brown-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-3xl border border-brown-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-green-primary/50 dark:bg-cream/95"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-green-primary text-cream rounded-3xl font-medium hover:bg-green-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
