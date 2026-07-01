import CTASection from "@/components/CTASection";
import { services, serviceAreas } from "@/lib/siteData";

export const metadata = {
  title: "Services",
  description:
    "CCTV installation, maintenance, DVR/NVR setup, IP cameras, network cabling, WiFi router setup, monitoring, and solar security service in Okara."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">What We Do</p>
            <h1>Professional CCTV, networking, and security services in Okara.</h1>
            <p>
              Complete support from camera selection to installation, mobile
              viewing, maintenance, network cabling, and solar security service.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:03075692928">Call Now</a>
              <a className="btn btn-whatsapp" href="https://wa.me/923075692928" target="_blank" rel="noopener">
                WhatsApp Quote
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Service coverage</strong>
            <span>Homes</span>
            <span>Offices</span>
            <span>Shops</span>
            <span>Schools</span>
            <span>Warehouses</span>
            <span>Commercial Markets</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Our Services</p>
            <h2>Security and connectivity services built for dependable daily monitoring.</h2>
            <p>
              Choose professional installation, maintenance, or upgrade support
              for homes, offices, shops, schools, and businesses.
            </p>
          </div>
          <div className="card-grid services-grid">
            {services.map((service) => (
              <article className="info-card reveal" key={service.title}>
                <span className="card-icon">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Installation Process</p>
            <h2>A cleaner way to plan and install CCTV.</h2>
            <p>Every project is handled with practical planning, neat installation, and proper handover support.</p>
          </div>
          <div className="process-grid">
            <article className="process-card reveal">
              <span>1</span>
              <h3>Site Review</h3>
              <p>We discuss your property, entry points, lighting, camera count, and recording needs.</p>
            </article>
            <article className="process-card reveal">
              <span>2</span>
              <h3>Product Selection</h3>
              <p>We recommend cameras, DVR/NVR systems, cables, and accessories based on your budget.</p>
            </article>
            <article className="process-card reveal">
              <span>3</span>
              <h3>Clean Installation</h3>
              <p>Camera placement, wiring, storage setup, and mobile viewing are configured carefully.</p>
            </article>
            <article className="process-card reveal">
              <span>4</span>
              <h3>Support</h3>
              <p>Maintenance, troubleshooting, upgrades, and after-sales support remain available.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section service-areas">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Service Areas</p>
            <h2>CCTV services in Okara and nearby areas.</h2>
            <p>Local installation and support around Church Road, city markets, homes, offices, and institutions.</p>
          </div>
          <div className="area-tags reveal" aria-label="Service area tags">
            {serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        kicker="Ready To Install?"
        title="Book a CCTV or network service visit."
        text="Share your site details and I.T LINKS will guide you toward the right setup."
        primaryLabel="Request Quote"
        primaryHref="/contact"
      />
    </>
  );
}
