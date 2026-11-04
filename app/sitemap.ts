import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/insights",
    ...insights.map((insight) => `/insights/${insight.slug}`),
    "/contact",
    "/privacy",
  ];

  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
