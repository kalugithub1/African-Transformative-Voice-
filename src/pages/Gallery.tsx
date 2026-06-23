import { useState, useEffect, useCallback } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import heroImage from "@/assets/environment.jpeg";
import scholarshipImg from "@/assets/scholarship.png";
import mentoringImg from "@/assets/mentorship-poster.jpg";
import digitalImg from "@/assets/digital-training.jpeg";
import digitalLiteracyImg from "@/assets/digital-literacy.jpeg";
import environmentImg from "@/assets/environment.jpeg";
import environment2Img from "@/assets/environment2.jpeg";
import certificateImg from "@/assets/certificate.jpeg";
import heroStudentsImg from "@/assets/hero-students.jpeg";
import mentoringImg2 from "@/assets/mentoring.jpeg";
import tailoring1Img from "@/assets/img/tailoring_img1.webp";
import tailoring2Img from "@/assets/img/tailoring_img2.webp";
import mechanic1Img from "@/assets/img/mechanic_img1.webp";
import mechanic2Img from "@/assets/img/mechanic_img2.webp";
import mechanic3Img from "@/assets/img/mechanic_img3.webp";
import mechanic4Img from "@/assets/img/mechanic_img4.webp";

const galleryImages = [
  {
    src: scholarshipImg,
    caption: "Scholarship Program",
    category: "Education",
  },
  { src: mentoringImg, caption: "Mentorship Sessions", category: "Mentorship" },
  { src: mentoringImg2, caption: "Youth Mentoring", category: "Mentorship" },
  {
    src: digitalImg,
    caption: "Digital Literacy Training",
    category: "Digital Literacy",
  },
  {
    src: digitalLiteracyImg,
    caption: "Computer Training",
    category: "Digital Literacy",
  },
  {
    src: certificateImg,
    caption: "Certificate Ceremony",
    category: "Education",
  },
  { src: heroStudentsImg, caption: "Student Group", category: "Education" },
  { src: tailoring1Img, caption: "Tailoring Workshop", category: "Tailoring" },
  { src: tailoring2Img, caption: "Garment Making", category: "Tailoring" },
  { src: mechanic1Img, caption: "Mechanic Training", category: "Vocational" },
  { src: mechanic2Img, caption: "Auto Repair Skills", category: "Vocational" },
  { src: mechanic3Img, caption: "Hands-On Mechanics", category: "Vocational" },
  { src: mechanic4Img, caption: "Engine Workshop", category: "Vocational" },
  {
    src: environmentImg,
    caption: "Environmental Initiative",
    category: "Environment",
  },
  {
    src: environment2Img,
    caption: "Brick Making Project",
    category: "Environment",
  },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null,
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : null,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <PageLayout>
      <Helmet>
        <title>Gallery | African Transformative Voice</title>
        <meta
          name="description"
          content="Photos from ATV's programs: scholarships, mentorship, digital literacy, tailoring, vocational training, and environmental preservation in Nakuru, Kenya."
        />
        <link
          rel="canonical"
          href="https://www.africantransformativevoice.org/gallery"
        />
        <meta
          property="og:title"
          content="Gallery | African Transformative Voice"
        />
        <meta
          property="og:description"
          content="See our work in action — photos from ATV's programs in Nakuru, Kenya."
        />
        <meta
          property="og:url"
          content="https://www.africantransformativevoice.org/gallery"
        />
      </Helmet>

      <PageHero
        title="Our Gallery"
        subtitle="A window into the lives we touch and the communities we serve."
        backgroundImage={heroImage}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            label="Gallery"
            title="Our Projects in Action"
            description="Every photograph tells a story of resilience, growth, and transformation. Browse through moments captured across our programs."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-xl overflow-hidden shadow-md aspect-square cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`View ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-primary-foreground font-medium text-sm leading-tight">
                    {image.caption}
                  </p>
                  <span className="text-primary-foreground/70 text-xs mt-0.5">
                    {image.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].caption}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-medium text-lg">
                  {galleryImages[lightboxIndex].caption}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {galleryImages[lightboxIndex].category} &nbsp;·&nbsp;{" "}
                  {lightboxIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;
