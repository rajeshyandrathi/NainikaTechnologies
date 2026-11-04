"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle } from "lucide-react";
import LogoWatermark from "@/components/logo-watermark";
import { site } from "@/lib/site";

const tools = ["Salesforce", "HubSpot", "Marketo", "Outreach", "CPQ", "Chargebee", "Sage Intacct"];

const agentSteps = [
  "New lead qualified and routed",
  "CRM record updated",
  "Quote created in CPQ",
  "Invoice sent to billing",
  "Revenue report updated",
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#08283C] to-cyan-900 text-white pt-28 md:pt-36 pb-16 md:pb-24 px-4">
      <LogoWatermark />
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl"
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-400 text-slate-950">
              <Bot size={24} />
            </div>
            <div>
              <p className="font-semibold">Example revenue agent</p>
              <p className="text-sm text-slate-300">Lead to invoice workflow</p>
            </div>
          </div>
          <ul className="space-y-3">
            {agentSteps.map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.35 }}
                className="flex items-center gap-3 rounded-lg bg-slate-950/40 px-4 py-3"
              >
                <CheckCircle size={20} className="text-cyan-300 flex-shrink-0" />
                <span className="text-slate-100">{step}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
