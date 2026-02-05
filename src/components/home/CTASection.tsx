import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  HandHelping,
  Users,
  GraduationCap,
} from "lucide-react";
import ctaImage from "@/assets/mentoring.jpeg";

const involvementOptions = [
  { icon: Heart, label: "Donate" },
  { icon: HandHelping, label: "Volunteer" },
  { icon: Users, label: "Partner with us" },
  { icon: GraduationCap, label: "Sponsor a student" },
];

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] lg:h-auto"
        >
          <img
            src={ctaImage}
            alt="Mentoring session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30 lg:to-transparent" />
        </motion.div>

        {/* Content Side */}
        <div className="bg-muted section-padding">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Join the Movement
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why You Should Join Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We cannot do this alone. At the heart of our mission is a
              commitment to empowering youth and building stronger, more
              sustainable communities. By joining us, you are not just
              supporting a cause, you are becoming part of a movement that
              uplifts lives, nurtures talent, and drives positive change across
              generations.
            </p>

            {/* Options */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {involvementOptions.map((option, index) => (
                <motion.div
                  key={option.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {option.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link to="/get-involved">
                Support the Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
