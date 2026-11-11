import type { Metadata } from "next";
import { site } from "@/lib/site";
import { InsightsListing } from "@/components/insights-listing";

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

export default function Page() {
  return <InsightsListing page={1} />;
}
