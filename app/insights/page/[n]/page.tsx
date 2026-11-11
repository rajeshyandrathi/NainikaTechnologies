import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { InsightsListing, insightPageCount } from "@/components/insights-listing";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, insightPageCount - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  const title = `Insights, page ${n}`;
  const description = "Clear, no-hype guides on agentic AI, Salesforce, RevOps, and cloud, written for leaders who want ideas they can act on this week.";
  const url = `/insights/page/${n}`;
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
  if (!Number.isInteger(page) || page < 2 || page > insightPageCount) notFound();
  return <InsightsListing page={page} />;
}
