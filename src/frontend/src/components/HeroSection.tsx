import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x600.jpg')",
        }}
      />
      {/* Dark navy overlay for text readability */}
      <div className="absolute inset-0 bg-navy-950/80" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/70" />

      {/* Diagonal accent strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-background"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 0 100%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Licensed Driving School · Thiruvananthapuram
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight"
        >
          Nikha Motor
          <span className="block text-orange-400">Driving School</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Your Road to Safe Driving Starts Here. Professional training for all
          vehicle types with experienced instructors.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToContact}
            data-ocid="hero.primary_button"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            Enroll Now
          </Button>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:7736348754"
              data-ocid="hero.primary_button"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full transition-all text-sm backdrop-blur-sm"
            >
              <Phone className="h-4 w-4 text-orange-400" />
              7736348754
            </a>
            <a
              href="tel:7736960954"
              data-ocid="hero.secondary_button"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full transition-all text-sm backdrop-blur-sm"
            >
              <Phone className="h-4 w-4 text-orange-400" />
              7736960954
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
