import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";
import { absoluteAsset } from "@/components/OpenGraph";
import {
  business,
  localBusinessSchema,
  pageSeo,
  primaryKeywords,
  site
} from "@/lib/siteData";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: site.themeColor,
  colorScheme: "light"
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageSeo.home.title,
    template: "%s | I.T LINKS CCTV Camera & Network Solutions Okara"
  },
  description: business.description,
  keywords: primaryKeywords,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/mask-icon.svg", color: site.themeColor }]
  },
  appleWebApp: {
    capable: true,
    title: business.shortName,
    statusBarStyle: "black-translucent"
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "msvalidate.01": "bing-site-verification-placeholder"
    }
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": business.shortName,
    "application-name": business.shortName,
    "msapplication-TileColor": site.tileColor,
    "msapplication-config": "/browserconfig.xml"
  }
};

export default function RootLayout({ children }) {
  const schema = {
    ...localBusinessSchema,
    image: absoluteAsset(business.logo),
    logo: absoluteAsset(business.logo)
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: site.url,
    logo: absoluteAsset(business.logo),
    email: business.email,
    telephone: business.phoneInternational,
    address: schema.address,
    contactPoint: schema.contactPoint
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: business.name,
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/services?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "@id": `${site.url}/#contactpoint`,
    telephone: business.phoneInternational,
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu", "Punjabi"]
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
        <StructuredData data={[schema, organizationSchema, websiteSchema, contactPointSchema]} />
      </body>
    </html>
  );
}
