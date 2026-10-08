import type { MetadataRoute } from "next";
import { projects, site } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08");
  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/colophon/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
