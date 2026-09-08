import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageSchema from "@/components/PageSchema";
import ProductCatalog from "@/components/ProductCatalog";
import { productCategories } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";

const title = "Dahua Cameras & Security Products";
const description =
  "Explore Dahua HDCVI and IP cameras, PoE switches, CAT6 cable, video intercoms, and security accessories. Request a product quote from I.T LINKS Okara.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/products",
  keywords: [
    "CCTV camera price Okara",
    "DVR NVR Okara",
    "Dahua cameras Okara",
    "Dahua accessories Okara"
  ]
});

export default function ProductsPage() {
  return (
    <>
      <PageSchema
        title={title}
        description={description}
        path="/products"
        type="CollectionPage"
      />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Dahua Product Collection</p>
            <h1>Dahua cameras, networking, and security accessories.</h1>
            <p>
              Find the right Dahua products for your home, shop, or business.
              Browse cameras and accessories by category, then ask our Okara
              team for current pricing, availability, and installation guidance.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Request Price</Link>
              <a className="btn btn-whatsapp" href="https://wa.me/923075692928" target="_blank" rel="noopener">
                WhatsApp Quote
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Available categories</strong>
            {productCategories.map((category) => <span key={category}>{category}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Product Showcase</p>
            <h2>Explore the Dahua range.</h2>
            <p>
              Compare model numbers and key features across our Dahua collection.
              Request a quote for your selected product directly on WhatsApp.
            </p>
          </div>
          <ProductCatalog />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container split-grid">
          <div className="content-panel reveal">
            <p className="eyebrow">Buying Guidance</p>
            <h2>Not sure which camera system fits your site?</h2>
            <p>
              Camera count, recording days, night vision, wiring distance, and
              mobile viewing requirements all affect the right setup.
            </p>
            <div className="benefit-list">
              <span>Outdoor bullet cameras for gates and boundaries</span>
              <span>Dome cameras for indoor and covered areas</span>
              <span>IP cameras for flexible network-based monitoring</span>
              <span>DVR/NVR systems matched to storage needs</span>
            </div>
          </div>
          <div className="check-panel reveal">
            <h3>What we help you choose</h3>
            <p>
              Camera type, lens angle, recorder capacity, cable type, power setup,
              monitor placement, and remote access configuration.
            </p>
            <Link className="btn btn-secondary" href="/packages">Compare Packages</Link>
          </div>
        </div>
      </section>

      <CTASection
        kicker="Product Quote"
        title="Ask for current Dahua product prices."
        text="Share a model number or tell us about your site for a tailored quote."
      />
    </>
  );
}
