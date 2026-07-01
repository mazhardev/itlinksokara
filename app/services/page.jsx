import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedLinks from "@/components/RelatedLinks";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { buildFAQSchema } from "@/components/FAQSchema";
import { faqs, pageSeo, services, serviceAreas, site, targetLocations } from "@/lib/siteData";

export function generateMetadata() {
  return buildPageMetadata(pageSeo.services);
}

export default function ServicesPage() {
  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${service.href}#service`,
    name: `${service.title} in Okara`,
    serviceType: service.title,
    description: service.longText,
    keywords: service.keywords,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: targetLocations.map((name) => ({ "@type": "City", name }))
  }));
  const relatedItems = services.map((service) => ({
    label: service.title,
    href: service.href,
    text: service.longText
  }));

  return (
    <>
      <SEO schemas={[...serviceSchemas, buildFAQSchema(faqs, "services-faq")]} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
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
                <Link className="card-link" href={service.href}>
                  View {service.title}
                </Link>
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

      <RelatedLinks title="Detailed CCTV and Network Service Pages" items={relatedItems} />
      <FAQSection faqs={faqs} title="CCTV Services Okara FAQs" />

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
