import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitInquiry } from "../hooks/useQueries";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    } catch {
      // error handled via mutation state
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-4">
            Ready to Start Your
            <span className="text-orange-500"> Driving Journey?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill in the form and our team will reach out to you shortly. Or call
            us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-border rounded-3xl p-8 shadow-navy"
          >
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center text-center py-10 gap-4"
              >
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="heading-display text-2xl text-navy-900">
                  Enquiry Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you! Our team will contact you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  data-ocid="contact.secondary_button"
                  className="mt-2 border-navy-200 text-navy-700"
                >
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-6">
                  Send an Enquiry
                </h3>

                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-navy-800 font-semibold text-sm"
                  >
                    Full Name <span className="text-orange-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    data-ocid="contact.input"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="border-border focus:border-primary focus:ring-1 focus:ring-primary h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-navy-800 font-semibold text-sm"
                  >
                    Phone Number <span className="text-orange-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    data-ocid="contact.input"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    required
                    className="border-border focus:border-primary focus:ring-1 focus:ring-primary h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-navy-800 font-semibold text-sm"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    placeholder="Tell us which course you're interested in..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={4}
                    className="border-border focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                {mutation.isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="text-destructive text-sm bg-destructive/10 rounded-lg p-3"
                  >
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={mutation.isPending}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-6 rounded-xl text-base"
                  size="lg"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-navy-900 rounded-3xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Phone Numbers
                    </p>
                    <a
                      href="tel:7736348754"
                      data-ocid="contact.link"
                      className="block text-white font-semibold hover:text-orange-400 transition-colors text-lg"
                    >
                      7736348754
                    </a>
                    <a
                      href="tel:7736960954"
                      data-ocid="contact.link"
                      className="block text-white font-semibold hover:text-orange-400 transition-colors text-lg"
                    >
                      7736960954
                    </a>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Address
                    </p>
                    <p className="text-white font-medium leading-relaxed">
                      Garnet Plaza, Junction,
                      <br />
                      Near Indian Bank, Mangalapuram,
                      <br />
                      Thiruvananthapuram, Kerala 695317
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed area */}
            <div className="rounded-3xl overflow-hidden border-2 border-border h-56 bg-navy-100 flex items-center justify-center">
              <iframe
                title="Nikha Motor Driving School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7!2d76.93!3d8.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOCUyMzMwJzM2LjAiTiA3NsKwNTUnNDguMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
