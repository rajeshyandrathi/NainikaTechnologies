import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoWatermark from "@/components/logo-watermark";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";
import SubscribeInsights from "@/components/subscribe-insights";

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
  const image = insight.image ?? "/og-image.png";
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
      images: image,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: insight.description, images: image },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);
  if (!insight) notFound();

  return (
    <article className="relative overflow-hidden pt-32 pb-20 px-4 bg-white">
      <LogoWatermark className="top-24" />
      <div className="max-w-3xl mx-auto">
        <Link href="/insights" className="inline-block py-2 text-cyan-600 font-medium hover:text-cyan-700">
          All insights
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-6 mb-4">{insight.title}</h1>
        <p className="text-lg text-slate-600 mb-8">{insight.description}</p>
        {insight.image && (
          <Image
            src={insight.image}
            alt=""
            width={1200}
            height={630}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-auto rounded-xl shadow-lg mb-10"
          />
        )}
        {insight.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-slate-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.figure && (
              <figure className="mt-6 mb-2">
                <a href={section.figure.src} target="_blank" rel="noopener noreferrer" aria-label="Open the full-size diagram">
                  <Image
                    src={section.figure.src}
                    alt={section.figure.alt}
                    width={section.figure.width}
                    height={section.figure.height}
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </a>
                {section.figure.caption && (
                  <figcaption className="mt-3 text-sm text-slate-500 text-center">{section.figure.caption}</figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
        <Link
          href={site.cta.href}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
        >
          {site.cta.label} <ArrowRight size={18} />
        </Link>
        <SubscribeInsights className="mt-12" />
      </div>
    </article>
  );
}
