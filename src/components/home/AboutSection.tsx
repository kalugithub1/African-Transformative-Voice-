import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/digital-literacy.jpeg";

export const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Youth carrying computers"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl"
            >
              <p className="text-4xl font-heading font-bold">2020</p>
              <p className="text-sm font-medium">Founded</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="About Us"
              title="Transforming Lives Through Education"
              centered={false}
            />
            
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                African Transformative Voice (ATV) is a refugee-led non-profit
                organization dedicated to empowering and amplifying the voices
                of African youth. Founded in 2020, ATV has been at the forefront
                of advocating for education for underprivileged refugee youth,
                social justice, equality, and sustainable development across the
                African continent.
              </p>
              <p className="leading-relaxed">
                Our journey began with a group of passionate individuals who
                recognized the need for a platform that could address the unique
                challenges faced by African refugee youth. We believe that
                education is a powerful tool for empowerment and social change.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
