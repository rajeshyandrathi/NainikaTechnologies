"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { site } from "@/lib/site";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactValues, contactSchema } from "@/lib/contact-schema";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("The enquiry was not sent.");

      setIsSuccess(true);
      track("contact_form_submit");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About"
        highlight="Your Revenue Systems"
        description="Tell us what you're working on, and we'll show you where AI agents and RevOps can help."
      />

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-slate-800">
                Get in <span className="text-cyan-600">Touch</span>
              </h2>
              <p className="text-slate-600 mb-8">
                We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      Our Location
                    </h3>
                    <p className="text-slate-600">
                  13 Glen Abbey Rd, Cape Farms<br />
                  Sunningdale, Cape Town, South Africa, 7441
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      Email Us
                    </h3>
                    <a href={`mailto:${site.email}`} className="inline-block py-2 break-all text-slate-600 hover:text-cyan-600">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      Call Us
                    </h3>
                    <a href="tel:+27688906854" className="inline-block py-2 break-all text-slate-600 hover:text-cyan-600">
                      {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input
                  type="text"
                  {...register("website")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name ? "border-red-500" : "border-slate-300"
                    } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder=""
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder=""
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder=""
                      {...register("phone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder=""
                      {...register("company")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message ? "border-red-500" : "border-slate-300"
                    } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    placeholder=""
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <p className="text-sm text-slate-500">

                  By submitting this form, you agree that we may use your details to respond to your enquiry, as described in our{" "}

                  <Link href="/privacy" className="text-cyan-600 hover:text-cyan-700 underline">Privacy Policy</Link>.

                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {isError && (
                  <div className="p-4 bg-red-100 text-red-800 rounded-md" role="alert">
                    Sorry, we couldn't send your message. Please email us at{" "}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                  </div>
                )}

                {isSuccess && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
  <section className="py-20 px-4 bg-slate-100">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-800">
        Our <span className="text-cyan-600">Location</span>
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Visit us at our office. Use the map below to find directions.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl shadow-lg"
    >
    <iframe
      title="Our Location"
      src="https://www.google.com/maps?q=13+Glen+Abbey+Rd,+Cape+Farms,+Cape+Town,+7441&output=embed"
      width="100%"
      height="450"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-[450px] rounded-xl border-0"
    ></iframe>

    </motion.div>
  </div>
</section>
    </div>
  );
}









