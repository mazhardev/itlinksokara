import { assetPath } from "@/lib/paths";
import { business, site } from "@/lib/siteData";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${site.url}${path === "/" ? "" : path}`;
}

export function absoluteAsset(path) {
  if (path.startsWith("http")) return path;
  return `${site.url}${assetPath(path)}`;
}

export function buildOpenGraph({ title, description, path = "/", image = site.ogImage }) {
  return {
    title,
    description,
    url: absoluteUrl(path),
    siteName: business.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: absoluteAsset(image),
        width: 1200,
        height: 630,
        alt: `${business.name} CCTV installation and network solutions in Okara`
      }
    ]
  };
}

export default function OpenGraph() {
  return null;
}
