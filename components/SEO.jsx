import StructuredData from "@/components/StructuredData";
import { absoluteAsset, absoluteUrl, buildOpenGraph } from "@/components/OpenGraph";
import { business, site } from "@/lib/siteData";

export function buildPageMetadata(page) {
  const title = page.title;
  const description = page.description;
  const path = page.path || "/";
  const keywords = Array.isArray(page.keywords) ? page.keywords : [page.keywords].filter(Boolean);

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords,
    authors: [{ name: business.name }],
    creator: business.name,
    publisher: business.name,
    alternates: {
      canonical: absoluteUrl(path)
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    },
    openGraph: buildOpenGraph({ title, description, path }),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteAsset(site.ogImage)]
    }
  };
}

export default function SEO({ schemas }) {
  return <StructuredData data={schemas} />;
}
