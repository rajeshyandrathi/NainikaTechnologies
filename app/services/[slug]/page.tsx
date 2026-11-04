import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import ServiceVisual from "@/components/service-visual";
import { serviceGroups, services } from "@/lib/services";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  const fullTitle = `${service.title} | ${site.name}`;
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: fullTitle, description: service.summary, url: `/services/${slug}`, images: "/og-image.png" },
    twitter: { title: fullTitle, description: service.summary, images: "/og-image.png" },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const group = serviceGroups.find((item) => item.id === service.group);

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow={group?.title ?? "Our Services"}
        title={service.title}
        description={service.description}
      >
        <Link href="/services" className="inline-block mt-6 py-2 text-cyan-300 font-medium hover:text-cyan-200">
          All services
        </Link>
      </PageHero>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">What We Deliver</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <ServiceVisual service={service} className="aspect-video rounded-xl shadow-xl" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-cyan-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Let&apos;s Talk About Your Project</h2>
          <p className="text-lg mb-8 text-gray-200">
            Tell us what you want to achieve and we&apos;ll show you how we can help.
          </p>
          <Link
            href={site.cta.href}
            className="bg-white hover:bg-gray-100 text-cyan-800 font-medium py-3 px-8 rounded-md transition-all inline-flex items-center justify-center gap-2"
          >
            {site.cta.label} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
