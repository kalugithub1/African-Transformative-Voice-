import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonialImage from "@/assets/testimonial-ruben.jpeg";

export const TestimonialSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Stories of Transformation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={testimonialImage}
                  alt="Ruben Majok Anyuon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Quote */}
              <div className="md:col-span-2 p-8 md:p-10 relative">
                <Quote className="w-12 h-12 text-secondary/30 absolute top-8 right-8" />
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "I am honored to share my heartfelt testimonial about the
                  incredible impact that African Transformative Voice has had on
                  my life. When I first arrived in Nakuru, I faced numerous
                  challenges, including financial constraints that threatened to
                  hinder my dreams of joining high school. However, ATV stepped in
                  and became my guiding light.
                </blockquote>
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  Thanks to ATV's generous scholarship program, I was able to
                  complete both my Form 1 and Form 2 studies. ATV has not only
                  transformed my life but has also instilled in me a sense of
                  responsibility to give back to my community."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">RM</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      Ruben Majok Anyuon
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Scholarship Recipient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
