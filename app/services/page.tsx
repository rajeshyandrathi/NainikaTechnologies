"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";
import ServiceVisual from "@/components/service-visual";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto text-center text-black"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-cyan-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-black">
            Explore our comprehensive range of technology solutions designed to help your business thrive in the digital age.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-24"
          >
            {services.map((service, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={service.slug}
                  id={service.slug}
                  ref={ref}
                  variants={fadeIn}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                    <ServiceVisual service={service} className="aspect-video rounded-xl shadow-xl" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                        <service.icon size={32} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Key Features:
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-slate-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700">
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
              Contact us today to discuss how our services can help you achieve your business goals.
            </p>
            <Link
              href={site.cta.href}
              className="bg-white hover:bg-gray-100 text-cyan-800 font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2"
            >
              {site.cta.label} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
