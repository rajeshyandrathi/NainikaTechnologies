import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Nainika Technologies";
const defaultTitle = "Nainika Technologies | Strategic Technology Partner";
const defaultDescription = "Empowering businesses through cutting-edge Cloud Services and innovative IT solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nainikatechnologies.co.za"),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloatingButton /> {/* Add the WhatsApp button here */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
