import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/digital-literacy.jpeg";
import trainingImage from "@/assets/digital-training.jpeg";
import orgStructure from "@/assets/org-structure.png";
import teamLuat from "@/assets/team-luat.jpeg";
import teamSantino from "@/assets/team-Santino.jpeg";
import teamMaker from "@/assets/team-maker.jpeg";
import teamAkuok from "@/assets/akuok-image.jpeg";
import teamAluong from "@/assets/team-Aluong.jpeg";
import boardAndhira from "@/assets/board-andhira.jpeg";
import boardDivine from "@/assets/board-divine.jpeg";
import boardNicholas from "@/assets/board-nicholas.jpeg";

const objectives = [
  "To increase access to quality education to the children from disadvantaged backgrounds.",
  "To empower youths to take part in self and community development.",
  "To promote culture and sports.",
  "To enhance digital literacy.",
  "To advocate for educational equity.",
  "To foster career readiness.",
  "Environmental preservation.",
  "Women empowerment.",
];

const founders = [
  {
    name: "Santino Geng",
    role: "Chief Executive Officer",
    type: "Founder",
    image: teamSantino,
  },
  {
    name: "Nyok Luat Dudi",
    role: "Manager",
    type: "Co-Founder",
    image: teamLuat,
  },
  {
    name: "Maker Panom Chuol",
    role: "General Secretary",
    type: "Co-Founder",
    image: teamMaker,
  },
  {
    name: "Aluong Deng Dau",
    role: "Director",
    type: "Co-Founder",
    image: teamAluong,
  },
  {
    name: "R. Akuok",
    role: "Program Coordinator",
    type: "Co-Founder",
    image: teamAkuok,
  },
];

const boardMembers = [
  {
    name: "Ms Andhira Kara",
    role: "Refugee researcher and advocate",
    image: boardAndhira,
  },
  {
    name: "Nyok Luat Dudi",
    role: "Co-Founder ATV | Manager | Leader",
    image: teamLuat,
  },
  {
    name: "Divine Mugisha",
    role: "Founder/CEO Supportive Pillar organization",
    image: boardDivine,
  },
  {
    name: "Nicholas Sitso Kwashi Amessouwoe",
    role: "Writer | Poet | Author | Leader | Early Career Researcher",
    image: boardNicholas,
  },
];

const About = () => {
  return (
    <PageLayout>
      <PageHero
        title="About African Transformative Voice"
        subtitle="Empowering African youth through education, advocacy, and sustainable development since 2020."
        backgroundImage={heroImage}
      />

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="Our Story"
                title="A Journey of Transformation"
                centered={false}
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  African Transformative Voice (ATV) is a refugee-led non-profit
                  organization dedicated to empowering and amplifying the voices
                  of African youth. Founded in 2020, ATV has been at the
                  forefront of advocating for education for underprivileged
                  refugee youth, social justice, equality, and sustainable
                  development across the African continent.
                </p>
                <p className="leading-relaxed">
                  Our journey began with a group of passionate individuals who
                  recognized the need for a platform that could address the
                  unique challenges faced by African refugee youth. ATV was
                  established with the vision of creating a space where African
                  voices could be heard, valued, and mobilized for positive
                  change.
                </p>
                <p className="leading-relaxed">
                  Over the years, ATV has grown into a vibrant and dynamic
                  Community Based organization, working tirelessly to promote
                  education, social and economic transformation in Africa. We
                  have collaborated with various local schools, including Afraha
                  High school, local community associations and churches, to
                  implement impactful projects and initiatives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={trainingImage}
                  alt="Training session"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 text-muted-foreground"
            >
              <p className="leading-relaxed text-lg">
                We work closely with governments and civil society organizations
                to address pressing issues such as gender inequality, human
                rights violations, and environmental sustainability. Through our
                advocacy efforts, we strive to influence policy decisions and
                create an enabling environment for positive change.
              </p>
              <p className="leading-relaxed text-lg">
                Our impact extends beyond borders, as we actively engage in
                regional collaborations. ATV participates in conferences,
                forums, and networks to share best practices, exchange ideas,
                and build partnerships with like-minded organizations. Through
                these collaborations, we aim to strengthen our collective
                efforts towards transformative change in refugee youth lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To build a resilient and empowered African youth community that
                drives sustainable social impact across the continent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To be a development community-based organization that fosters
                unity, love, prosperity and continuity, in making the society a
                better place for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            label="Our Objectives"
            title="What We Aim to Achieve"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader label="Organization" title="Our Structure" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <img
                src={orgStructure}
                alt="Organization Structure"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            label="Our Team"
            title="Meet the Founders"
            description="African Transformative Voice was founded by eight individuals driven by the challenges faced by refugee students in accessing education."
          />

          {/* Founders Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-muted-foreground leading-relaxed">
              Witnessing the struggles and barriers that refugee students
              encountered on a daily basis, they felt compelled to come together
              and establish the African Transformative Voice organization. We
              are motivated by the desire to make a positive impact in the lives
              of underprivileged refugee students who have been denied the
              opportunity to receive a quality education.
            </p>
          </motion.div>

          {/* Founders Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg text-center"
              >
                <div className="h-48 bg-muted overflow-hidden">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-4xl font-heading font-bold text-primary/40">
                        {founder.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {founder.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-1">
                    {founder.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {founder.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Board of Directors */}
          <SectionHeader label="Leadership" title="Board of Directors" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg text-center"
              >
                <div className="h-56 bg-muted overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-primary font-medium mt-2">
                    Board Director
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
              Join Us on This Transformative Journey
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              Together, we can make a difference and create a brighter, more
              equitable future for African refugee youth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
