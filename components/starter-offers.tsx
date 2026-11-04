import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { site } from "@/lib/site";

const offers = [
  {
    title: "RevOps Audit",
    description: "Find out where leads, data, and revenue are slipping through your systems.",
    items: [
      "Review of your CRM and revenue tools",
      "Funnel, data quality, and process gaps",
      "A prioritized action plan",
    ],
  },
  {
    title: "AI Agent Pilot",
    description: "Prove the value of agentic AI on one real workflow before you scale it.",
    items: [
      "Selection of a high-value workflow",
      "A working agent connected to your tools",
      "Clear results and a plan for next steps",
    ],
  },
];

export default function StarterOffers() {
  return (
    <section className="py-20 px-4 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-800">
            Two Easy Ways to <span className="text-cyan-600">Get Started</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Start small, see real results, and then decide what to do next.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.title} className="bg-white rounded-xl p-8 shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-cyan-600">{offer.title}</h3>
              <p className="text-slate-600 mb-4">{offer.description}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {offer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={site.cta.href} className="inline-flex items-center py-2 text-cyan-600 font-medium hover:text-cyan-700">
                {site.cta.shortLabel} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
