import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { assetPath } from "@/lib/paths";
import { business } from "@/lib/siteData";
import { OG_IMAGE, SITE_NAME, SITE_URL, siteGraphSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CCTV Camera Installation in Okara | I.T LINKS",
    template: "%s | I.T LINKS Okara"
  },
  description: business.description,
  keywords: [
    "CCTV camera installation Okara",
    "security cameras Okara",
    "CCTV maintenance Okara",
    "DVR NVR setup Okara",
    "network cabling Okara",
    "solar security cameras Okara"
  ],
  applicationName: SITE_NAME,
  authors: [{ name: business.name, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  category: "Security Systems",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "CCTV Camera Installation in Okara | I.T LINKS",
    description: business.description,
    url: "/",
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
    title: "CCTV Camera Installation in Okara | I.T LINKS",
    description: business.description,
    images: [OG_IMAGE]
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Okara"
  },
  icons: {
    icon: assetPath(business.logo),
    apple: assetPath(business.logo)
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
        <JsonLd data={siteGraphSchema} />
      </body>
    </html>
  );
}
