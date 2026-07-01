import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { pageSeo, products, services, site } from "@/lib/siteData";

export function generateMetadata() {
  return buildPageMetadata(pageSeo.products);
}

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}/products#products`,
    name: "CCTV camera products in Okara",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.title,
      description: product.text
    }))
  };
  const relatedItems = services.slice(0, 4).map((service) => ({
    label: service.title,
    href: service.href,
    text: service.keywords
  }));

  return (
    <>
      <SEO schemas={productSchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Store Products</p>
            <h1>CCTV cameras, recorders, monitors, and networking accessories.</h1>
            <p>
              Choose from CCTV cameras, recording systems, monitors, networking
              accessories, and solar security solutions for homes and businesses
              in Okara.
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
            <span>Bullet Cameras</span>
            <span>Dome Cameras</span>
            <span>IP Cameras</span>
            <span>DVR / NVR Systems</span>
            <span>Cables</span>
            <span>Solar Security</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Product Showcase</p>
            <h2>Security products we provide and install.</h2>
            <p>
              Safe visual placeholders are used where product photos are not
              available yet. Current pricing can be requested by phone or WhatsApp.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card reveal" key={product.title}>
                <div className={`product-visual ${product.art}`}></div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <Link href="/contact">Request Price</Link>
              </article>
            ))}
          </div>
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

      <RelatedLinks title="Services Related To CCTV Products" items={relatedItems} />

      <CTASection
        kicker="Product Quote"
        title="Ask for current CCTV camera and DVR/NVR prices."
        text="I.T LINKS can recommend products based on your property and budget."
      />
    </>
  );
}
