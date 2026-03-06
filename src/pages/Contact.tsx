import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, X } from "lucide-react";

import heroImage from "@/assets/certificate.jpeg";

const Contact = () => {
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setShowModal(true);
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or want to support us? We'd love to hear from you."
        backgroundImage={heroImage}
      />

      {/* Contact Info Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            label="Get in Touch"
            title="We're Here to Help"
            description="Reach out to us through any of the following channels. We typically respond within 24-48 hours."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-lg text-center card-hover"
            >
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Call Us
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>+254 113 039 799</p>
                <p>+254 798 938 570</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg text-center card-hover"
            >
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Email Us
              </h3>
              <a
                href="mailto:africantransformativevoice@gmail.com"
                className="text-primary hover:underline break-all"
              >
                africantransformativevoice@gmail.com
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg text-center card-hover"
            >
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Visit Us
              </h3>
              <p className="text-muted-foreground">Shabab, Nakuru, Kenya</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Send a Message"
              title="Get in Touch With Us"
              description="Fill out the form below and we'll get back to you as soon as possible."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-lg relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Hidden Inputs */}

                {/* ATV Access_key:3a234b5a-4fb6-4764-98f6-13241f0eb5a4  */}
                <input
                  type="hidden"
                  name="access_key"
                  value="b3d7a4c8-ba24-4cb3-a178-c3acdf199632"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="ATV Website"
                ></input>

                <input type="hidden" name="reply_to" value="email" />
                <input
                  type="hidden"
                  name="_from_name"
                  value="African Transformative Voice website Contact form"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-medium text-sm mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium text-sm mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={loading}
                >
                  <Send className="mr-2 w-5 h-5" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {status === "error" && (
                  <p className="text-red-600 mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              {/* Success Modal */}
              {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl p-10 max-w-md w-full text-center shadow-xl relative">
                    {/* Close icon */}
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                      onClick={() => setShowModal(false)}
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Green Check Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">
                      Form submitted successfully!
                    </h2>

                    {/* Message */}
                    <p className="text-gray-600 mb-6">
                      Thank you! The form has been submitted successfully. We
                      will reply to you soon!
                    </p>

                    {/* Close Button */}
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Stay connected and see the impact of our work.
            </p>
            <div className="flex justify-center gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/african-transformative-voice/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-primary-foreground group-hover:text-secondary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/africantransformative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-primary-foreground group-hover:text-secondary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/africantransformativevoice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-primary-foreground group-hover:text-secondary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
