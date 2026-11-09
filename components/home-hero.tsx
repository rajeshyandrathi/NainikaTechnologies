"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedNWatermark from "@/components/animated-n-watermark";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#08283C] to-cyan-900 text-white pt-28 md:pt-36 pb-16 md:pb-24 px-4">
      <AnimatedNWatermark />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-medium text-cyan-200">
            Agentic AI and RevOps for B2B SaaS
          </p>
          <h1 className="text-4xl md:text-[2.75rem] font-bold leading-tight mb-6 max-w-3xl xl:max-w-none xl:whitespace-nowrap">
            Let AI Agents Run Your{" "}
            <span className="text-cyan-300">Revenue Ops</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-4 max-w-4xl">
            We connect your CRM, marketing, billing, and finance tools, then build the agents that run the work between them. Less manual admin from lead to cash, and cleaner data your team can trust.
          </p>
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl">
            Start with a free RevOps Audit to find where time and revenue are slipping. Then we prove the value on one real workflow with an AI agent, before you decide to scale.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link
              href={site.cta.href}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
            >
              Book a Free RevOps Audit <ArrowRight size={18} />
            </Link>
            <Link
              href="#get-started"
              className="inline-flex items-center gap-2 font-medium text-cyan-200 hover:text-white transition-colors"
            >
              See how the AI Agent Pilot works <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
