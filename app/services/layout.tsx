import type { Metadata } from "next";

const title = "Services";
const fullTitle = `${title} | Nainika Technologies`;
const description = "Explore our comprehensive range of technology solutions designed to help your business thrive in the digital age.";

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
