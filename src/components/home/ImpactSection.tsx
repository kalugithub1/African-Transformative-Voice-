import { motion } from "framer-motion";
import { GraduationCap, Users, Monitor, TreePine } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "5+",
    label: "Students Sponsored",
    description: "Scholarships awarded to refugee youth",
  },
  {
    icon: Users,
    number: "200+",
    label: "Youths Mentored",
    description: "Receiving guidance and support",
  },
  {
    icon: Monitor,
    number: "200+",
    label: "Digital Literacy",
    description: "Youth taught essential tech skills",
  },
  {
    icon: TreePine,
    number: "50+",
    label: "Trees Planted",
    description: "Environmental action initiatives",
  },
];

export const ImpactSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Making a Difference
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Every number represents a life transformed, a community strengthened,
            and a future brightened.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <p className="stat-number text-primary-foreground mb-2">
                {stat.number}
              </p>
              <p className="text-primary-foreground font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
