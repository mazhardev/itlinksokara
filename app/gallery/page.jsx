import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import GalleryLightbox from "@/components/GalleryLightbox";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { galleryItems, pageSeo, site } from "@/lib/siteData";

export function generateMetadata() {
  return buildPageMetadata(pageSeo.gallery);
}

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${site.url}/gallery#gallery`,
    name: "CCTV installation gallery Okara",
    description: pageSeo.gallery.description
  };

  return (
    <>
      <SEO schemas={gallerySchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Recent Work</p>
            <h1>Gallery for CCTV installations, monitoring setups, and security products.</h1>
            <p>
              A clean preview gallery for installation photos, product demos,
              monitoring setups, and wiring work. Add real project photos to the
              public images folder as they become available.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Book Installation</Link>
              <a className="btn btn-whatsapp" href="https://wa.me/923075692928" target="_blank" rel="noopener">
                Send Site Photos
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Gallery categories</strong>
            <span>Monitor Setup</span>
            <span>Multi-Camera</span>
            <span>Shop Security</span>
            <span>Outdoor Camera</span>
            <span>Office Install</span>
            <span>DVR / NVR</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Installation Gallery</p>
            <h2>Preview CCTV work with fast-loading placeholders.</h2>
            <p>
              The current site includes the I.T LINKS logo as the real image asset.
              These cards are safe placeholders until real installation photos are added.
            </p>
          </div>
          <GalleryLightbox items={galleryItems} />
        </div>
      </section>

      <CTASection
        kicker="Need Similar Work?"
        title="Send your site photos for camera placement guidance."
        text="I.T LINKS can suggest coverage points before installation."
        primaryLabel="Contact Now"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Photos"
      />
    </>
  );
}
