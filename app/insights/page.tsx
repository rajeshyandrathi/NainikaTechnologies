import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";

const title = "Insights";
const fullTitle = `${title} | ${site.name}`;
const description = "Clear, no-hype guides on agentic AI, Salesforce, RevOps, and cloud, written for leaders who want ideas they can act on this week.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights" },
  openGraph: { title: fullTitle, description, url: "/insights", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

export default function InsightsPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Insights"
        title="Practical Playbooks for"
        highlight="AI Agents and RevOps"
        description={description}
      />

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article key={insight.slug} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-3 text-cyan-600">{insight.title}</h2>
              <p className="text-slate-600 mb-4 flex-1">{insight.description}</p>
              <Link href={`/insights/${insight.slug}`} className="inline-flex items-center py-2 text-cyan-600 font-medium hover:text-cyan-700">
                Read more <ArrowRight size={16} className="ml-2" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
