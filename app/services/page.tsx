"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { ArrowRight } from "lucide-react";
import HowWeWork from "@/components/how-we-work";
import ServiceVisual from "@/components/service-visual";
import StarterOffers from "@/components/starter-offers";
import { serviceGroups, servicesInGroup } from "@/lib/services";
import { site } from "@/lib/site";

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Our Services"
        title="Everything Your Revenue Engine Needs,"
        highlight="in One Partner"
        description="From AI agents to RevOps, CRM, and cloud, we design, build, and run the systems B2B SaaS companies grow on. One connected team, from first strategy session to long-term support."
      >
        <div className="flex flex-wrap gap-3 mt-8 mb-8">
          {serviceGroups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-slate-100 transition-colors"
            >
              {group.title}
            </Link>
          ))}
        </div>
        <Link
          href={site.cta.href}
          className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
        >
          {site.cta.label} <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* Services List */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {serviceGroups.map((group) => (
            <motion.div
              key={group.id}
              id={group.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg">
                  <group.icon size={32} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{group.title}</h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">{group.summary}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesInGroup(group.id).map((service) => (
                  <div key={service.slug} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
                    <ServiceVisual service={service} className="h-44" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-3 text-cyan-600">{service.title}</h3>
                      <p className="text-slate-600 mb-4 flex-1">{service.summary}</p>
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center py-2 text-cyan-600 font-medium hover:text-cyan-700">
                        Learn more <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <HowWeWork />

      <StarterOffers />

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
