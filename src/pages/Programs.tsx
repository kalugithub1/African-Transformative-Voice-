import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
// SectionHeader kept for Programs Overview section
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Monitor,
  TreePine,
  Scissors,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import heroImage from "@/assets/environment.jpg";
import scholarshipImg from "@/assets/scholarship.png";
import mentoringImg from "@/assets/mentorship-poster.jpg";
import digitalImg from "@/assets/digital-training.jpeg";
import environment2Img from "@/assets/environment2.jpeg";
import tailoringImg from "@/assets/img/tailoring_img2.webp";

const Programs = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>
          Our Programs | Scholarships, Mentorship & Digital Literacy — ATV
        </title>
        <meta
          name="description"
          content="Explore ATV's programs: refugee scholarships, youth mentorship, digital literacy training, tailoring vocational skills, and environmental preservation in Nakuru, Kenya."
        />
        <link
          rel="canonical"
          href="https://www.africantransformativevoice.org/programs"
        />
        <meta
          property="og:title"
          content="Our Programs | African Transformative Voice"
        />
        <meta
          property="og:description"
          content="Scholarships, mentorship, digital literacy, tailoring, and environmental preservation for refugee youth in Nakuru, Kenya."
        />
        <meta
          property="og:url"
          content="https://www.africantransformativevoice.org/programs"
        />
        <meta
          name="twitter:title"
          content="Our Programs | African Transformative Voice"
        />
        <meta
          name="twitter:description"
          content="Scholarships, mentorship, digital literacy, tailoring, and environmental preservation for refugee youth in Nakuru, Kenya."
        />
      </Helmet>
      <PageHero
        title="Our Programs"
        subtitle="Empowering youth through comprehensive programs in education, mentorship, digital skills, and environmental action."
        backgroundImage={heroImage}
      />

      {/* Programs Overview */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            label="What We Do"
            title="Transforming Lives Through Action"
            description="Our comprehensive programs address the unique challenges faced by refugee youth, providing them with the tools and opportunities they need to thrive."
          />
        </div>
      </section>

      {/* Scholarship Section */}
      <section
        id="scholarship"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Scholarship
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                African Transformative Voice is a dedicated non-profit
                organization committed to transforming lives through education.
                By sponsoring students from underprivileged backgrounds, the
                organization provides financial support, mentorship, and
                resources to empower young minds to achieve their academic
                dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a vision to break the cycle of poverty, African
                Transformative Voice believes in creating opportunities for a
                brighter and more equitable future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={scholarshipImg}
                  alt="Scholarship program"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section
        id="mentorship"
        className="section-padding bg-muted scroll-mt-24"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mentoringImg}
                  alt="Mentorship program"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Mentorship
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Through one-on-one and group mentorship sessions, we connect
                refugee youth with trusted mentors who provide guidance in
                education, career development, and personal growth, empowering
                them to make informed life choices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Literacy Section */}
      <section
        id="digital"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <Monitor className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Digital Literacy
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In today's digital world, basic tech skills are essential. Our
                digital literacy program teaches refugee youth how to use
                computers, navigate the internet safely, and access online tools
                to enhance their learning and employment opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The project covered 65 refugee students and host community
                members for the first cohort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={digitalImg}
                  alt="Digital literacy training"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailoring Section */}
      <section id="tailoring" className="section-padding bg-muted scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={tailoringImg}
                  alt="Tailoring vocational training program"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <Scissors className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Tailoring
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our tailoring program equips refugee youth and women with
                professional sewing and garment-making skills, opening a direct
                pathway to sustainable self-employment. Participants learn
                pattern cutting, machine operation, fabric selection, and
                finishing techniques, skills they can apply immediately to
                generate income and build financial independence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond technical training, the program nurtures entrepreneurial
                thinking. Graduates receive guidance on pricing, client
                relations, and growing a small tailoring business, empowering
                them to move from dependency to self-reliance within their
                communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tailoring is more than a trade, it is a form of creative
                expression and economic agency. Through needle and thread, our
                participants are stitching together their own futures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Preservation Section */}
      <section
        id="environment"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                  <TreePine className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Environmental Preservation
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are committed to protecting our planet for future
                generations. Our environmental initiatives involve local
                clean-up drives, tree-planting events, and sustainability
                education that inspires youth to lead in climate action.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of our key initiatives includes making bricks as an
                alternative source to charcoal, reducing deforestation and
                providing sustainable income opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={environment2Img}
                  alt="Environmental preservation"
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Support Our Programs
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Your contribution helps us continue transforming lives through
              education, mentorship, digital skills, and environmental action.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link to="/get-involved">
                Get Involved Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Programs;
