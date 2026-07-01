import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { assetPath } from "@/lib/paths";
import { business, localBusinessSchema } from "@/lib/siteData";

export const metadata = {
  title: {
    default: "I.T LINKS CCTV Camera & Network Solutions Okara",
    template: "%s | I.T LINKS CCTV Camera & Network Solutions Okara"
  },
  description: business.description,
  keywords: business.keywords,
  authors: [{ name: business.name }],
  icons: {
    icon: assetPath(business.logo)
  }
};

export default function RootLayout({ children }) {
  const schema = {
    ...localBusinessSchema,
    image: assetPath(business.logo)
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      </body>
    </html>
  );
}
