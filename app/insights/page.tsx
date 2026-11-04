import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";

const title = "Insights";
const fullTitle = `${title} | ${site.name}`;
const description = "Practical guides on agentic AI, cloud, and building better digital products.";

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
      <section className="bg-blue-50 pt-32 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Our <span className="text-cyan-600">Insights</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-black">{description}</p>
      </section>

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
