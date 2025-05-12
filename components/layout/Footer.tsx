export default function Footer() {
  return (
    <footer className="py-8 border-t border-brown-light/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-brown-medium">
          © {new Date().getFullYear()} Angel Halouane. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
