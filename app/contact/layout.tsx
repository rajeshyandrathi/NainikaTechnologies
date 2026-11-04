import type { Metadata } from "next";

const title = "Contact";
const fullTitle = `${title} | Nainika Technologies`;
const description = "Get in touch with our team to discuss how Nainika Technologies can help your business succeed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: fullTitle, description, url: "/contact", images: "/og-image.png" },
  twitter: { title: fullTitle, description, images: "/og-image.png" },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
