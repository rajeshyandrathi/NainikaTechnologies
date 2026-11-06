"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedNWatermark from "@/components/animated-n-watermark";

const tools = [
  "Salesforce",
  "HubSpot",
  "Marketo",
  "Outreach",
  "Salesloft",
  "Gong",
  "CPQ",
  "Chargebee",
  "Sage Intacct",
  "Zapier",
  "AWS",
  "Azure",
];

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
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-5xl">
            Put AI Agents to Work on Your{" "}
            <span className="text-cyan-300">Revenue</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-4xl">
            We connect your CRM, marketing, billing, and finance tools, then build the agents that run the work between them. If it can be delegated to an agent, we can build it.
          </p>
          <Link
            href="/services"
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold py-3 px-6 mb-10 rounded-md transition-all inline-flex items-center justify-center gap-2"
          >
            Explore Our Services <ArrowRight size={18} />
          </Link>
          <p className="text-sm text-slate-300 mb-3">Platforms we work with</p>
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool} className="px-3 py-1 rounded-md bg-white/10 text-sm text-slate-100">
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
