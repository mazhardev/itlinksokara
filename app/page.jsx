import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCarousel from "@/components/ProductCarousel";
import RelatedLinks from "@/components/RelatedLinks";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { buildFAQSchema } from "@/components/FAQSchema";
import {
  business,
  faqs,
  pageSeo,
  primaryKeywords,
  serviceAreas,
  services,
  site,
  targetLocations,
  testimonials
} from "@/lib/siteData";

export function generateMetadata() {
  return buildPageMetadata(pageSeo.home);
}

export default function HomePage() {
  const featuredServices = services.slice(0, 4);
  const serviceSchema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${service.href}#service`,
    name: `${service.title} in Okara`,
    serviceType: service.title,
    description: service.longText,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: targetLocations.map((name) => ({ "@type": "City", name }))
  }));
  const relatedItems = services.slice(0, 6).map((service) => ({
    label: service.title,
    href: service.href,
    text: service.keywords
  }));

  return (
    <>
      <SEO schemas={[buildFAQSchema(faqs, "home-faq"), ...serviceSchema]} />
      <Breadcrumb items={[{ label: "Home", href: "/" }]} />
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
                <Link className="card-link" href={service.href}>
                  Learn about {service.title}
                </Link>
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

      <section className="section seo-copy-section">
        <div className="container seo-copy reveal">
          <p className="eyebrow">Local SEO Focus</p>
          <h2>CCTV Installation Okara, CCTV Camera Shop Okara, and Network Solutions from I.T LINKS.</h2>
          <p>
            I.T LINKS CCTV Camera &amp; Network Solutions provides professional
            CCTV installation in Okara for homes, shops, offices, schools,
            warehouses, clinics, showrooms, factories, and commercial markets.
            Customers searching for CCTV Installation Okara, CCTV Camera Shop
            Okara, Security Camera Installation Okara, CCTV Camera Dealer Okara,
            CCTV Services Okara, or CCTV Near Me can contact our local team for
            practical advice, camera selection, clean installation, and reliable
            after-sales support.
          </p>
          <p>
            A strong security system starts with correct planning. We review the
            entrance points, blind spots, counter areas, storage rooms, parking
            space, rooftops, boundary walls, indoor corridors, and outdoor camera
            locations before recommending a system. This helps customers avoid
            weak coverage, unnecessary cameras, poor night visibility, loose
            wiring, recorder issues, and mobile-view problems. Whether you need a
            small home security system, a shop CCTV camera setup, an office
            networking solution, a school monitoring system, or a warehouse
            surveillance plan, I.T LINKS focuses on dependable daily use.
          </p>
          <p>
            Our CCTV services include CCTV Camera Installation, CCTV Camera
            Maintenance, IP Camera Installation, DVR/NVR Setup, Security Camera
            Repair, WiFi &amp; Network Installation, Network Cabling, Router
            Configuration, Office Networking, Home Security Systems, Solar Camera
            Solutions, and CCTV AMC Services. We work with bullet cameras, dome
            cameras, IP cameras, DVR systems, NVR systems, monitors, network
            switches, cables, connectors, and accessories. We also help configure
            supported mobile apps so customers can check live cameras and
            playback when they are away from the property.
          </p>
          <p>
            For local businesses in Okara, a properly installed surveillance
            system is more than a camera purchase. It supports staff safety,
            customer confidence, stock monitoring, entry control, cash counter
            visibility, and better record keeping. For homes, CCTV can help watch
            gates, driveways, courtyards, rooftops, and main rooms. For offices,
            clean network cabling and router configuration can improve both
            security camera stability and everyday connectivity. I.T LINKS brings
            CCTV and network solutions together so the camera system is supported
            by the right cabling, power planning, recorder settings, and network
            configuration.
          </p>
          <p>
            Many CCTV problems happen because the camera system is installed
            without considering real viewing angles, night conditions, storage
            requirements, or the network behind the recorder. A camera may be
            high quality, but if it is pointed at the wrong angle, mounted too
            high, installed with weak cable, or connected to an unstable router,
            the final result can still disappoint the customer. I.T LINKS plans
            each installation around the actual property. We look at where people
            enter, where vehicles stop, where stock is kept, where staff members
            work, and where evidence may be needed later. This practical approach
            helps customers get useful footage instead of simply adding cameras
            for decoration.
          </p>
          <p>
            For shops and commercial markets, we commonly discuss counter
            coverage, entry doors, storage racks, customer areas, cash handling
            points, outdoor shutters, and nearby street visibility. For offices,
            we consider reception areas, corridors, shared workspaces, router
            placement, switch location, cable routes, and recorder access. For
            homes, we help customers think through gates, driveways, terraces,
            side passages, stairs, rooftop points, and indoor coverage where
            needed. For schools, clinics, warehouses, and larger buildings, the
            plan may include multiple cameras, monitor screens, DVR/NVR storage,
            IP camera networking, and maintenance support.
          </p>
          <p>
            Customers also call I.T LINKS for CCTV camera maintenance and repair
            when an existing system stops working properly. Common issues include
            blank camera feeds, no recording, weak night vision, incorrect time
            settings, mobile app login problems, low storage, damaged connectors,
            loose power supplies, and cable faults. Maintenance can often improve
            an existing installation without replacing everything. When a system
            needs an upgrade, we explain the practical options so the customer can
            decide whether to add cameras, replace the recorder, improve storage,
            upgrade to IP cameras, or improve the network.
          </p>
          <p>
            Network solutions are important because modern security systems depend
            on stable connectivity. I.T LINKS provides network cabling, WiFi and
            router setup, office networking, switch installation, and router
            configuration for customers who need reliable internet and CCTV access.
            A clean network can make IP cameras more dependable, improve mobile
            viewing, reduce connection drops, and make future expansion easier.
            We keep the setup simple for the customer while making sure the core
            wiring and configuration are strong enough for daily use.
          </p>
          <p>
            We serve Okara and nearby locations including {targetLocations.join(", ")}.
            If you are comparing CCTV camera dealers in Okara or looking for CCTV
            maintenance in Okara, our team can inspect your current setup, suggest
            upgrades, repair common camera faults, configure DVR/NVR recording,
            improve WiFi coverage, or plan a new installation. Pricing is quoted
            according to camera quantity, camera type, wiring distance, recording
            days, storage requirements, mobile viewing needs, site size, and the
            quality of equipment selected.
          </p>
          <p>
            I.T LINKS is located opposite MZ Mobilz, near Alfalah Bank, Church
            Road, Okara, Punjab, Pakistan 56300. Call {business.phone}, WhatsApp
            {business.whatsappNumber}, or email {business.email} to discuss CCTV
            installation, security camera repair, IP camera installation, DVR
            installation, NVR setup, network cabling, router configuration, office
            networking, or solar camera solutions. Our goal is simple: give local
            customers a clean, trustworthy, and usable security system that works
            when they need it.
          </p>
          <div className="keyword-list" aria-label="Primary local SEO keywords">
            {primaryKeywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
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

      <RelatedLinks items={relatedItems} />
      <FAQSection faqs={faqs} title="CCTV Installation and Network Solutions FAQs" />

      <CTASection
        title="Need cameras, networking, or maintenance in Okara?"
        text="Call, WhatsApp, email, or visit the shop opposite MZ Mobilz near Alfalah Bank on Church Road."
        primaryLabel={`Call ${business.phone}`}
      />
    </>
  );
}
