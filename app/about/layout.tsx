import type { Metadata } from "next";

const title = "About";
const fullTitle = `${title} | Nainika Technologies`;
const description = "Learn about Nainika Technologies: our story, approach, values, team and clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: fullTitle, description, url: "/about", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
