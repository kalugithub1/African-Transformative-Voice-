import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Users, Monitor, TreePine, ArrowRight } from "lucide-react";

import scholarshipImg from "@/assets/scholarship.png";
import mentoringImg from "@/assets/mentoring.jpeg";
import digitalImg from "@/assets/digital-training.jpeg";
import environmentImg from "@/assets/environment.jpeg";

const programs = [
  {
    id: "scholarship",
    icon: GraduationCap,
    title: "Scholarship",
    description:
      "We support students with financial aid, providing scholarships to empower young minds to achieve their academic dreams.",
    image: scholarshipImg,
    link: "/programs#scholarship",
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship",
    description:
      "Youth receive guidance from mentors who provide support in education, career development, and personal growth.",
    image: mentoringImg,
    link: "/programs#mentorship",
  },
  {
    id: "digital",
    icon: Monitor,
    title: "Digital Literacy",
    description:
      "We teach essential tech skills, helping refugee youth use computers and access online tools for learning.",
    image: digitalImg,
    link: "/programs#digital",
  },
  {
    id: "environment",
    icon: TreePine,
    title: "Environmental Preservation",
    description:
      "Youth take climate action through tree-planting events and sustainable alternatives like eco-friendly bricks.",
    image: environmentImg,
    link: "/programs#environment",
  },
];

export const ProgramsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeader
          label="Our Programs"
          title="Creating Lasting Impact"
          description="Through our comprehensive programs, we provide young people with the tools, guidance, and opportunities they need to thrive."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={program.link}
                className="group block bg-card rounded-xl overflow-hidden shadow-lg card-hover h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
