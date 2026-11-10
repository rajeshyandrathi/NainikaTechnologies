import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

const title = "Case Studies";
const fullTitle = `${title} | ${site.name}`;
const description = "Real work on Salesforce, RevOps and AI: what the problem was, what we built and what changed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { title: fullTitle, description, url: "/case-studies", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

export default function CaseStudiesPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Case Studies"
        title="What We've"
        highlight="Built and Delivered"
        description={description}
      />

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <article key={study.slug} className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
              <div className="relative aspect-[40/21] overflow-hidden">
                <Image
                  src={study.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-medium text-slate-500 mb-2">{study.client}</p>
                <h2 className="text-xl font-bold mb-3 text-cyan-600">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group-hover:text-cyan-700 group-hover:underline transition-colors after:absolute after:inset-0 after:rounded-xl"
                  >
                    {study.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-4 flex-1">{study.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4" aria-label="Tools used">
                  {study.tools.map((tool) => (
                    <li key={tool} className="text-xs font-medium text-cyan-700 bg-cyan-50 rounded-full px-3 py-1">
                      {tool}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center py-2 text-cyan-600 font-medium group-hover:text-cyan-700" aria-hidden="true">
                  Read the case study <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="max-w-5xl mx-auto mt-12 text-center">
          <Link
            href={site.cta.href}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-all inline-flex items-center justify-center gap-2"
          >
            {site.cta.label} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
