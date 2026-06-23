import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>
          African Transformative Voice | Empowering Refugee Youth in Kenya
        </title>
        <meta
          name="description"
          content="African Transformative Voice (ATV) is a refugee-led non-profit in Nakuru, Kenya empowering youth through scholarships, mentorship, digital literacy training, and environmental preservation since 2020."
        />
        <link
          rel="canonical"
          href="https://www.africantransformativevoice.org/"
        />
        <meta
          property="og:title"
          content="African Transformative Voice | Empowering Refugee Youth in Kenya"
        />
        <meta
          property="og:description"
          content="A refugee-led non-profit in Nakuru, Kenya empowering African youth through scholarships, mentorship, digital literacy, and environmental action since 2020."
        />
        <meta
          property="og:url"
          content="https://www.africantransformativevoice.org/"
        />
        <meta
          name="twitter:title"
          content="African Transformative Voice | Empowering Refugee Youth in Kenya"
        />
        <meta
          name="twitter:description"
          content="A refugee-led non-profit in Nakuru, Kenya empowering African youth through scholarships, mentorship, digital literacy, and environmental action since 2020."
        />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <GallerySection />
      <TestimonialSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
