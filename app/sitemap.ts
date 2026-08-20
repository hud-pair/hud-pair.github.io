import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { docs } from "@/lib/docs";

export const dynamic = "force-static";

const siteUrl = "https://hud-pair.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/case-studies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contributions`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/docs`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/legal/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/legal/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const docRoutes: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: `${siteUrl}/docs/${doc.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...docRoutes];
}
