import type { Metadata } from "next";
import Image from "next/image";
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
            <article key={insight.slug} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
              {insight.image && (
                <div className="relative aspect-[40/21] overflow-hidden">
                  <Image
                    src={insight.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-3 text-cyan-600">
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="group-hover:text-cyan-700 group-hover:underline transition-colors after:absolute after:inset-0 after:rounded-xl"
                  >
                    {insight.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-4 flex-1">{insight.description}</p>
                <span className="inline-flex items-center py-2 text-cyan-600 font-medium group-hover:text-cyan-700" aria-hidden="true">
                  Read more <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
