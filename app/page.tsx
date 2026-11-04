"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle } from "lucide-react";
import HomeHero from "@/components/home-hero";
import HowWeWork from "@/components/how-we-work";
import ServiceVisual from "@/components/service-visual";
import StarterOffers from "@/components/starter-offers";
import { serviceGroups, servicesInGroup } from "@/lib/services";
import { site } from "@/lib/site";

export default function Home() {
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
      <HomeHero />
      
      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Your Partner for <span className="text-cyan-600">AI and RevOps</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Nainika Technologies helps B2B SaaS companies turn scattered tools and manual processes into connected revenue systems. We learn how your business runs, then build the agents, integrations, and processes that move it forward.
              </p>
              <ul className="space-y-3 inline-block text-left">
                {[
                  "AI Agents That Complete Real Work",
                  "Clean Data Across Your Revenue Tools",
                  "Hands-On Salesforce and HubSpot Expertise",
                  "Focused Pilots Before Bigger Rollouts",
                  "End-to-End Support After Launch"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/about" className="flex items-center justify-center mt-6 py-2 text-cyan-600 font-medium hover:text-cyan-700">
                Learn more about us <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Our Core <span className="text-cyan-600">Services</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              From AI agents to RevOps and the cloud platforms behind them, we build systems that work together.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {serviceGroups.map((group) => (
              <motion.div
                key={group.id}
                variants={fadeIn}
                className="service-card bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <ServiceVisual service={group} className="h-56" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
                      <group.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-600">{group.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{group.summary}</p>
                  <ul className="mb-4 flex-1">
                    {servicesInGroup(group.id).map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`} className="block py-2 text-slate-700 hover:text-cyan-600 transition-colors">
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services#${group.id}`} className="inline-flex items-center py-2 text-cyan-600 font-medium hover:text-cyan-700">
                    Explore {group.title} <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HowWeWork />

      <StarterOffers />

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-cyan-300">Experience</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "100+", label: "Clients Served" },
              { value: "250+", label: "Projects Completed" },
              { value: "13+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-lg"
              >
                <CounterAnimation
                  target={parseInt(stat.value) || 100}
                  suffix={stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                  className="text-3xl md:text-4xl font-bold mb-2"
                />
                <p className="text-cyan-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-blue-50">
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-600">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-slate-600 mb-6">
            Let's discuss how Nainika Technologies can help you achieve your business goals with AI agents and connected revenue systems.
          </p>
          <Link href={site.cta.href} className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2">
            {site.cta.label} <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

// Counter Animation Component with proper TypeScript types
interface CounterAnimationProps {
  target: number;
  suffix?: string;
  className?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ target, suffix = "", className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number | undefined;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    if (inView) {
      setCount(0);
      animationFrame = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, target]);

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
};
