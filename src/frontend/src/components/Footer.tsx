import { Heart, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white" data-ocid="footer.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/logo-transparent.dim_300x100.png"
              alt="Nikha Motor Driving School"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/55 text-sm leading-relaxed">
              Your trusted driving school in Thiruvananthapuram. Professional
              training, modern vehicles, and complete RTO support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Courses", href: "#courses" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-white/55 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:7736348754"
                    data-ocid="footer.link"
                    className="text-white/70 hover:text-orange-400 transition-colors block"
                  >
                    7736348754
                  </a>
                  <a
                    href="tel:7736960954"
                    data-ocid="footer.link"
                    className="text-white/70 hover:text-orange-400 transition-colors block"
                  >
                    7736960954
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-white/55 text-sm leading-relaxed">
                  Garnet Plaza, Junction,
                  <br />
                  Near Indian Bank, Mangalapuram,
                  <br />
                  Thiruvananthapuram, Kerala 695317
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {year} Nikha Motor Driving School. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with{" "}
            <Heart className="inline h-3 w-3 text-orange-400 mx-0.5" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-orange-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
