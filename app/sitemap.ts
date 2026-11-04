import type { MetadataRoute } from "next";

const baseUrl = "https://www.nainikatechnologies.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
