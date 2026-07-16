import Link from "next/link";
import CTASection from "@/components/CTASection";
import GalleryLightbox from "@/components/GalleryLightbox";
import PageSchema from "@/components/PageSchema";
import { galleryItems } from "@/lib/siteData";
import { createPageMetadata } from "@/lib/seo";

const title = "CCTV Installation Projects & Gallery";
const description =
  "See real CCTV installation projects, camera placements, control rooms, monitoring setups, schools, shops, and commercial security work in Okara.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/gallery",
  keywords: [
    "CCTV installation projects Okara",
    "security camera installation gallery",
    "Safe City Okara CCTV"
  ]
});

export default function GalleryPage() {
  return (
    <>
      <PageSchema
        title={title}
        description={description}
        path="/gallery"
        type="ImageGallery"
      />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Recent Work</p>
            <h1>Gallery for CCTV installations, monitoring setups, and security products.</h1>
            <p>
              Browse recent I.T LINKS project photos featuring CCTV installation,
              camera placement, monitoring setup, and professional security work.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Book Installation</Link>
              <a className="btn btn-whatsapp" href="https://wa.me/923075692928" target="_blank" rel="noopener">
                Send Site Photos
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Project highlights</strong>
            <span>Allied School</span>
            <span>Lubaba Marque</span>
            <span>Safe City Okara</span>
            <span>Shahbaaz Sharif School</span>
            <span>Grid Station Yousafwala</span>
            <span>The Educators School</span>
            <span>Police Stations</span>
            <span>Rice Mills</span>
            <span>Cold Stores</span>
            <span>DPS Schools</span>
            <span>Dar e Arqam School</span>
            <span>Nawaz Sharif School</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Installation Gallery</p>
            <h2>Recent project photos from real CCTV and security work.</h2>
            <p>
              A professional look at completed school, retail, venue, industrial,
              and city security installations.
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
