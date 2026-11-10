import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoWatermark from "@/components/logo-watermark";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};

  const fullTitle = `${study.title} | ${site.name}`;
  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: { type: "article", title: fullTitle, description: study.description, url: `/case-studies/${slug}`, images: study.image },
    twitter: { card: "summary_large_image", title: fullTitle, description: study.description, images: study.image },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <article className="relative overflow-hidden pt-32 pb-20 px-4 bg-white">
      <LogoWatermark className="top-24" />
      <div className="max-w-3xl mx-auto">
        <Link href="/case-studies" className="inline-block py-2 text-cyan-600 font-medium hover:text-cyan-700">
          All case studies
        </Link>
        <p className="text-sm font-medium text-slate-500 mt-6">{study.client}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">{study.title}</h1>
        <p className="text-lg text-slate-600 mb-6">{study.description}</p>
        <ul className="flex flex-wrap gap-2 mb-8" aria-label="Tools used">
          {study.tools.map((tool) => (
            <li key={tool} className="text-xs font-medium text-cyan-700 bg-cyan-50 rounded-full px-3 py-1">
              {tool}
            </li>
          ))}
        </ul>
        <Image
          src={study.image}
          alt=""
          width={1200}
          height={630}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="w-full h-auto rounded-xl shadow-lg mb-10"
        />
        {study.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-slate-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href={site.cta.href}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
          >
            {site.cta.label} <ArrowRight size={18} />
          </Link>
          {study.link && (
            <a
              href={study.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-600 text-cyan-700 hover:bg-cyan-50 font-medium py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
            >
              {study.link.label} <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
