"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LogoWatermark from "@/components/logo-watermark";
import { site } from "@/lib/site";

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
      <div className="lg:hidden">
        <LogoWatermark />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-medium text-cyan-200">
            Agentic AI and RevOps for B2B SaaS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Put AI Agents to Work on Your{" "}
            <span className="text-cyan-300">Revenue</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
            We connect your CRM, marketing, billing, and finance tools, then build the agents that run the work between them. If it can be delegated to an agent, we can build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href={site.cta.href}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2"
            >
              {site.cta.label} <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="text-sm text-slate-300 mb-3">Platforms we work with</p>
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool} className="px-3 py-1 rounded-md bg-white/10 text-sm text-slate-100">
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <Image
            src="/logo-mark-dark.svg"
            alt=""
            width={420}
            height={463}
            unoptimized
            className="h-auto w-[420px] drop-shadow-[0_0_40px_rgba(45,187,238,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
