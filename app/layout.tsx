import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

const defaultTitle = "Nainika Technologies | AI Agents & RevOps for B2B SaaS";
const defaultDescription = "We build AI agents and RevOps systems for B2B SaaS companies, connecting your CRM, marketing, billing, and finance tools. If work can be delegated to an agent, we can build it.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: "/og-image.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/Logo-Transparent.png`,
  image: `${site.url}/og-image.png`,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  description: defaultDescription,
  sameAs: [site.linkedin],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton /> {/* Add the WhatsApp button here */}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
