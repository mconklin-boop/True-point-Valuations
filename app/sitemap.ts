import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
  "/order-appraisal",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
  "/cancellation-policy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-06-11"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
