import { Clock, FileCheck, GraduationCap, Shield } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Experienced Instructors",
    description:
      "Our certified instructors bring 10+ years of teaching experience, ensuring personalized, patient, and effective training for every student.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description:
      "Morning and evening batches available 7 days a week. We work around your schedule so learning to drive fits into your lifestyle.",
  },
  {
    icon: Shield,
    title: "Modern Vehicles",
    description:
      "Train in our well-maintained fleet of modern cars and bikes equipped with dual controls for maximum safety during your learning journey.",
  },
  {
    icon: FileCheck,
    title: "RTO Assistance",
    description:
      "Complete end-to-end support for your driving licence — from learner's licence application to final RTO test preparation and documentation.",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900"
      data-ocid="whyus.section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">
            The Nikha Advantage
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We go beyond teaching driving — we build confident, responsible
            drivers.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="whyus.list"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`whyus.item.${i + 1}`}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                <reason.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
