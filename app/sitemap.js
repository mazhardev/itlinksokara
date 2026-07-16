import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" },
  { path: "/packages", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" }
];

export default function sitemap() {
  return routes.map(({ path, ...route }) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-07-16T00:00:00+05:00"),
    ...route
  }));
}
