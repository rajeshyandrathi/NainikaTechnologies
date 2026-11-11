import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { CaseStudiesListing, caseStudyPageCount } from "@/components/case-studies-listing";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, caseStudyPageCount - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  const title = `Case Studies, page ${n}`;
  const description = "Real work on Salesforce, RevOps and AI: what the problem was, what we built and what changed.";
  const url = `/case-studies/page/${n}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${site.name}`, description, url, images: "/og-image.png" },
    twitter: { title: `${title} | ${site.name}`, description, images: "/og-image.png" },
  };
}

export default async function Page({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > caseStudyPageCount) notFound();
  return <CaseStudiesListing page={page} />;
}
