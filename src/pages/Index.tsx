import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CTASection } from "@/components/home/CTASection";
import cohereLogo from "@/assets/cohere-logo.jpeg";
import shofcoLogo from "@/assets/shofco-logo.jpeg";

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
      
      {/* Partners */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 md:py-16">
  {/* Decorative background */}
  <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

  <div className="absolute left-8 top-1/2 hidden md:block">
    <div className="grid grid-cols-4 gap-2.5 opacity-35">
      {Array.from({ length: 16 }).map((_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-blue-400"
        />
      ))}
    </div>
  </div>

  <div className="absolute right-8 top-20 hidden md:block">
    <div className="grid grid-cols-4 gap-2.5 opacity-35">
      {Array.from({ length: 16 }).map((_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-blue-400"
        />
      ))}
    </div>
  </div>

  <div className="container-wide relative z-10">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Partners
        </span>
        <span className="h-px w-10 bg-primary" />
      </div>

      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Partners
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        We are grateful to our partners for supporting our mission and
        strengthening our impact in the community.
      </p>
    </div>

    {/* Partner cards */}
    <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {/* Cohere */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-6">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:h-1.5" />

        <div className="flex h-40 items-center justify-center rounded-xl bg-slate-50 p-4 transition-colors duration-300 group-hover:bg-white md:h-44">
          <img
            src={cohereLogo}
            alt="Cohere Logo"
            className="max-h-32 w-auto max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Partner
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
            Cohere
          </h3>
        </div>
      </div>

      {/* SHOFCO */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-6">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-sky-500 transition-all duration-300 group-hover:h-1.5" />

        <div className="flex h-40 items-center justify-center rounded-xl bg-slate-50 p-4 transition-colors duration-300 group-hover:bg-white md:h-44">
          <img
            src={shofcoLogo}
            alt="SHOFCO Logo"
            className="max-h-32 w-auto max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Partner
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
            SHOFCO
          </h3>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom decorative wave */}
  <div className="absolute -bottom-12 left-0 right-0 h-24 bg-blue-100/50 [border-radius:50%_50%_0_0/100%_100%_0_0]" />
  <div className="absolute -bottom-16 left-0 right-0 h-24 bg-blue-200/30 [border-radius:50%_50%_0_0/100%_100%_0_0]" />
</section>

    </PageLayout>
  );
};

export default Index;
