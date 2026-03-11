import { Award, Car, MapPin, Users } from "lucide-react";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Users, value: "500+", label: "Trained Students" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Car, value: "15+", label: "Modern Vehicles" },
  { icon: MapPin, value: "1", label: "RTO Approved Centre" },
];

const features = [
  "Government-licensed instructors with 10+ years experience",
  "Flexible morning and evening batches",
  "Complete RTO licence assistance and documentation support",
  "Dedicated practice tracks and road training sessions",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout: text + classroom image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              About Us
            </div>
            <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-5 leading-tight">
              Thiruvananthapuram&#39;s Trusted
              <span className="text-orange-500"> Driving School</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Nikha Motor Driving School is a premier driving institution
              located in Mangalapuram, Thiruvananthapuram. We have been
              delivering professional, safe, and structured driving education to
              students across Kerala.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of experienced, government-certified driving instructors
              provides personalized training for cars (LMV), two-wheelers, and
              heavy motor vehicles (HMV). We operate a modern fleet of
              well-maintained vehicles to ensure every student learns in a safe,
              comfortable environment.
            </p>
            <ul className="space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" aria-hidden="true" />
                  </span>
                  <span className="text-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Classroom Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-navy">
              <img
                src="/assets/generated/classroom-photo.dim_1200x700.jpg"
                alt="Nikha Motor Driving School classroom training session"
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Decorative orange accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-orange-500/20 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-navy-900/20 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Stats row below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy-900 text-white rounded-2xl p-6 flex flex-col items-center text-center shadow-navy"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="h-6 w-6 text-orange-400" />
              </div>
              <div className="text-3xl font-bold font-display text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
