import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bike, Car, Clock, Truck } from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: Car,
    title: "Car Driving (LMV)",
    description:
      "Comprehensive training for Light Motor Vehicles including hatchbacks, sedans, and SUVs. Covers traffic rules, highway driving, parking, and defensive techniques.",
    duration: "30 Days",
    sessions: "20 Practical Sessions",
    color: "bg-blue-50 text-blue-700",
    accent: "border-blue-200",
  },
  {
    icon: Bike,
    title: "Two-Wheeler / Bike",
    description:
      "Learn safe two-wheeler riding from basics to advanced road skills. Suitable for scooters and motorcycles. Helmet safety and traffic awareness included.",
    duration: "15 Days",
    sessions: "12 Practical Sessions",
    color: "bg-orange-50 text-orange-700",
    accent: "border-orange-200",
  },
  {
    icon: Truck,
    title: "Heavy Motor Vehicle (HMV)",
    description:
      "Professional training for heavy vehicles including trucks, buses, and transport vehicles. Ideal for commercial licence aspirants. On-road training included.",
    duration: "45 Days",
    sessions: "30 Practical Sessions",
    color: "bg-green-50 text-green-700",
    accent: "border-green-200",
  },
];

export function CoursesSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="courses"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      data-ocid="courses.section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Courses
          </div>
          <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-4">
            Training Programs We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structured courses designed for all licence categories, from
            beginners to commercial drivers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6" data-ocid="courses.list">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              data-ocid={`courses.item.${i + 1}`}
            >
              <Card
                className={`h-full border-2 ${course.accent} hover:shadow-navy-lg transition-shadow duration-300 group`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-5`}
                  >
                    <course.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="font-semibold text-foreground">
                        {course.duration}
                      </span>
                      <span className="text-muted-foreground">
                        · {course.sessions}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={scrollToContact}
                    variant="ghost"
                    data-ocid="courses.secondary_button"
                    className="mt-4 w-full justify-between text-navy-700 hover:text-orange-500 hover:bg-orange-50 group-hover:translate-x-1 transition-all"
                  >
                    Enroll in this course
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
