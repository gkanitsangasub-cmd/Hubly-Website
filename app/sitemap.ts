import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./lib/content";
import { BASE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    "/services/digital-growth",
    "/services/website",
    "/solutions",
    "/solutions/tourism-crm",
    "/pricing",
    "/blog",
    "/contact",
  ];
  return [
    ...routes.map((path) => ({
      url: BASE_URL + (path === "/" ? "" : path),
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: BASE_URL + "/blog/" + post.slug,
      lastModified: new Date(post.modifiedDate ?? post.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
