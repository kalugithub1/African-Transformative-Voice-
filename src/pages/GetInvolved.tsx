import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  HandHelping,
  Users,
  GraduationCap,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

import heroImage from "@/assets/mentoring.jpeg";

const involvementOptions = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your financial contribution directly supports our programs - from scholarships to digital literacy training. Every donation makes a difference.",
    cta: "Donate Now",
  },
  {
    icon: HandHelping,
    title: "Volunteer",
    description:
      "Share your time and skills with our community. Volunteer opportunities include mentoring, teaching, event support, and more.",
    cta: "Become a Volunteer",
  },
  {
    icon: Users,
    title: "Partner With Us",
    description:
      "Organizations and businesses can partner with ATV to create greater impact through collaborative projects and sponsorships.",
    cta: "Explore Partnership",
  },
  {
    icon: GraduationCap,
    title: "Sponsor a Student",
    description:
      "Sponsor a refugee student's education and transform their life. Your sponsorship covers tuition, books, and essential supplies.",
    cta: "Sponsor Now",
  },
];

const GetInvolved = () => {
  return (
    <PageLayout>
      <PageHero
        title="Get Involved"
        subtitle="Join our movement to empower African youth through education, mentorship, and sustainable development."
        backgroundImage={heroImage}
      />

      {/* Why Join Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            label="Join the Movement"
            title="Be Part of the Change"
            description="We cannot do this alone. Your involvement creates ripples of positive change that transform communities and generations."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              At the heart of our mission is a commitment to empowering youth
              and building stronger, more sustainable communities. Through our
              impactful programs — including scholarships, mentorship, digital
              literacy training, and environmental preservation — we provide
              young people with the tools, guidance, and opportunities they need
              to thrive. By joining us, you are not just supporting a cause, you
              are becoming part of a movement that uplifts lives, nurtures
              talent, and drives positive change across generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            label="How to Help"
            title="Ways to Get Involved"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {option.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {option.description}
                </p>
                <Button variant="outline" className="group">
                  {option.cta}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Ready to Help?"
                title="Let's Connect"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you want to volunteer, donate, or explore partnership
                opportunities, we'd love to hear from you. Reach out to us and
                let's discuss how you can make a difference.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Call Us
                    </h4>
                    <p className="text-muted-foreground">+254 113 039 799</p>
                    <p className="text-muted-foreground">+254 798 938 570</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:africantransformativevoice@gmail.com"
                      className="text-primary hover:underline"
                    >
                      africantransformativevoice@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                Quick Inquiry
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary-foreground/80 text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-primary-foreground/80 text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    How would you like to help?
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option value="">Select an option</option>
                    <option value="donate">Donate</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="partner">Partner with us</option>
                    <option value="sponsor">Sponsor a student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-primary-foreground/80 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    placeholder="Tell us more about how you'd like to help..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GetInvolved;
