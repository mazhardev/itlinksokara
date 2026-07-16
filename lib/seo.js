import { business, localBusinessSchema } from "@/lib/siteData";

export const SITE_URL = "https://itlinksokara.com";
export const SITE_NAME = "I.T LINKS CCTV Camera & Network Solutions Okara";
export const OG_IMAGE = "/og.png";

export function canonicalPath(path = "/") {
  if (path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\/[^/]+\.[a-z0-9]+$/i.test(normalizedPath);
  const target = isFile ? normalizedPath : canonicalPath(normalizedPath);
  return new URL(target, `${SITE_URL}/`).toString();
}

export function createPageMetadata({ title, description, path, keywords = [] }) {
  const canonical = absoluteUrl(path);
  const socialTitle = `${title} | I.T LINKS Okara`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "I.T LINKS CCTV camera installation and network solutions in Okara"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE]
    }
  };
}

export const siteGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...localBusinessSchema,
      "@id": `${SITE_URL}/#business`,
      url: `${SITE_URL}/`,
      logo: absoluteUrl(business.logo),
      image: absoluteUrl(OG_IMAGE)
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: business.shortName,
      description: business.description,
      inLanguage: "en-PK",
      publisher: { "@id": `${SITE_URL}/#business` }
    }
  ]
};

export function createPageSchema({ title, description, path, type = "WebPage" }) {
  const canonical = absoluteUrl(path);
  const isHome = canonicalPath(path) === "/";
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`
    }
  ];

  if (!isHome) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: title,
      item: canonical
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: "en-PK",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: breadcrumbItems
      }
    ]
  };
}
