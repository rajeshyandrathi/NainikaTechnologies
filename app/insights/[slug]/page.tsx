import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) return {};

  const fullTitle = `${insight.title} | ${site.name}`;
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: insight.date,
      title: fullTitle,
      description: insight.description,
      url: `/insights/${slug}`,
      images: "/og-image.png",
    },
    twitter: { title: fullTitle, description: insight.description, images: "/og-image.png" },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) notFound();

  return (
    <article className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/insights" className="text-cyan-600 font-medium hover:text-cyan-700">
          All insights
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-4">{insight.title}</h1>
        <p className="text-lg text-slate-600 mb-10">{insight.description}</p>
        {insight.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-slate-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <Link
          href={site.cta.href}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
        >
          {site.cta.label} <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
