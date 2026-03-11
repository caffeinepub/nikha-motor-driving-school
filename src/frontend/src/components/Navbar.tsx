import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-navy" : "bg-navy-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            data-ocid="nav.link"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src="/assets/generated/nikha-logo-transparent.dim_400x150.png"
              alt="Nikha Motor Driving School"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxHeight: "50px" }}
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-orange-400 transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full text-sm"
              data-ocid="nav.primary_button"
            >
              <a href="tel:7736348754" className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                Call Now
              </a>
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-900 border-t border-white/10"
          >
            <nav
              className="px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-white/80 hover:text-orange-400 font-semibold rounded-md hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:7736348754"
                data-ocid="nav.primary_button"
                className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-5 py-3 rounded-full text-sm"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
