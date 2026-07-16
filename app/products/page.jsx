import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageSchema from "@/components/PageSchema";
import { products } from "@/lib/siteData";
import { assetPath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/seo";

const title = "CCTV Cameras, DVR & NVR Products";
const description =
  "Shop CCTV cameras, DVR and NVR systems, monitors, network switches, cables, WiFi cameras, and solar security products with installation in Okara.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/products",
  keywords: [
    "CCTV camera price Okara",
    "DVR NVR Okara",
    "Dahua cameras Okara",
    "Hikvision cameras Okara"
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
            <span>DVR/NVR</span>
            <span>Analog Cameras</span>
            <span>IP Cameras</span>
            <span>WiFi Cameras</span>
            <span>4G Camera</span>
            <span>4G with Solar Camera</span>
            <span>PTZ Cameras</span>
            <span>Networking Accessories</span>
            <span>Fiber Cabling</span>
            <span>WiFi Routers</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Product Showcase</p>
            <h2>Security products we provide and install.</h2>
            <p>
              Browse real product photos from the CCTV camera, alarm, and solar
              security solutions available through I.T LINKS.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card reveal" key={product.title}>
                <div className={`product-visual ${product.art} ${product.image ? "has-product-image" : ""}`}>
                  {product.image ? (
                    <img src={assetPath(product.image)} alt={product.imageAlt} />
                  ) : null}
                </div>
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

      <CTASection
        kicker="Product Quote"
        title="Ask for current CCTV camera and DVR/NVR prices."
        text="I.T LINKS can recommend products based on your property and budget."
      />
    </>
  );
}
