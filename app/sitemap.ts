import type { MetadataRoute } from "next";

const BASE = "https://hublycompany.com";

const ROUTES = [
  "",
  "/services",
  "/services/marketing",
  "/services/ai-solution",
  "/products",
  "/pricing",
  "/pricing/marketing",
  "/pricing/ai-solution",
  "/pricing/saas",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
