import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CaseStudiesListing } from "@/components/case-studies-listing";

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

export default function Page() {
  return <CaseStudiesListing page={1} />;
}
