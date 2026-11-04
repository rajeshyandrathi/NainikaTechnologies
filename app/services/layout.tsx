import type { Metadata } from "next";

const title = "Services";
const fullTitle = `${title} | Nainika Technologies`;
const description = "AI agents, RevOps systems, and the cloud and digital products behind them, built for B2B SaaS companies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: fullTitle, description, url: "/services", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
