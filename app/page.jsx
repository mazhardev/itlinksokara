import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCarousel from "@/components/ProductCarousel";
import PageSchema from "@/components/PageSchema";
import { business, serviceAreas, services, testimonials } from "@/lib/siteData";
import { assetPath } from "@/lib/paths";

export default function HomePage() {
  const featuredServices = services.slice(0, 4);

  return (
    <>
      <PageSchema
        title="CCTV Camera Installation in Okara"
        description={business.description}
        path="/"
      />
      <HeroCarousel />

      <section className="section-sm trust-section" aria-label="I.T LINKS trust highlights">
        <div className="container trust-grid">
          <article className="trust-card reveal">
            <strong>CCTV Installation Experts</strong>
            <p>Skilled setup for homes, shops, offices, schools, and businesses.</p>
          </article>
          <article className="trust-card reveal">
            <strong>Homes &amp; Businesses Covered</strong>
            <p>Practical security planning for local Okara properties.</p>
          </article>
          <article className="trust-card reveal">
            <strong>Professional Maintenance</strong>
            <p>Camera checks, DVR/NVR support, wiring fixes, and upgrades.</p>
          </article>
          <article className="trust-card reveal">
            <strong>Reliable Support</strong>
            <p>Responsive after-sales service from a local provider.</p>
          </article>
        </div>
        <div className="container partner-banner reveal" aria-label="Brand partners">
          <div className="partner-copy">
            <span className="partner-kicker">Proud Partner</span>
            <strong>Dahua &amp; Hikvision</strong>
            <p>Trusted CCTV brands for dependable cameras, recorders, and security systems.</p>
          </div>
          <div className="partner-brands" aria-label="Dahua and Hikvision">
            <span>
              <img src={assetPath("/images/brands/dahua-logo.jpeg")} alt="Dahua logo" />
            </span>
            <span>
              <img src={assetPath("/images/brands/hikvision-logo.jpeg")} alt="Hikvision logo" />
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Featured Services</p>
            <h2>Complete CCTV and networking support from one trusted Okara team.</h2>
            <p>
              I.T LINKS handles camera selection, installation, recording setup,
              remote access, maintenance, networking, and solar security support.
            </p>
          </div>
          <div className="card-grid feature-grid">
            {featuredServices.map((service) => (
              <article className="info-card reveal" key={service.title}>
                <span className="card-icon">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action reveal">
            <Link className="btn btn-secondary" href="/services">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Security Products</p>
            <h2>Reliable cameras, recorders, cables, and network accessories.</h2>
            <p>
              Browse the core products available through I.T LINKS and request
              current pricing for your site.
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="content-panel reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Local security support with professional installation standards.</h2>
            <p>
              I.T LINKS is a leading provider of cutting-edge CCTV camera
              solutions, designed to enhance security and surveillance for homes,
              businesses, and institutions.
            </p>
            <div className="benefit-list">
              <span>Professional installation team</span>
              <span>Reliable CCTV and networking solutions</span>
              <span>Clean wiring and proper setup</span>
              <span>Mobile viewing support</span>
              <span>Maintenance and after-sales service</span>
              <span>Local Okara-based service provider</span>
            </div>
          </div>
          <div className="why-grid reveal">
            <article>
              <strong>Site-first planning</strong>
              <p>Camera placement is matched to entry points, coverage needs, and wiring routes.</p>
            </article>
            <article>
              <strong>Easy monitoring</strong>
              <p>Remote mobile viewing and recording playback are configured for everyday use.</p>
            </article>
            <article>
              <strong>Business-ready installs</strong>
              <p>Solutions for shops, offices, schools, warehouses, and commercial markets.</p>
            </article>
            <article>
              <strong>Responsive help</strong>
              <p>Support for maintenance, troubleshooting, upgrades, and system improvements.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Testimonials</p>
            <h2>Trusted for clean CCTV installations and practical support.</h2>
            <p>
              Customers choose I.T LINKS for neat installation, easier monitoring,
              and responsive local support.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card reveal" key={testimonial.quote}>
                <p>"{testimonial.quote}"</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.area}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-areas">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Service Areas</p>
            <h2>CCTV Camera Installation in Okara and nearby areas.</h2>
            <p>We provide CCTV camera installation and network services in Okara and nearby areas.</p>
          </div>
          <div className="area-tags reveal" aria-label="Service area tags">
            {serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need cameras, networking, or maintenance in Okara?"
        text="Call, WhatsApp, email, or visit the shop on Church Road, opposite MZ Mobile in Block-F Block-E."
        primaryLabel={`Call ${business.phone}`}
      />
    </>
  );
}
