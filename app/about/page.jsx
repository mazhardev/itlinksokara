import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { assetPath } from "@/lib/paths";
import { business, pageSeo, site } from "@/lib/siteData";

export function generateMetadata() {
  return buildPageMetadata(pageSeo.about);
}

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site.url}/about#about`,
    name: pageSeo.about.title,
    description: pageSeo.about.description,
    about: { "@id": `${site.url}/#localbusiness` }
  };

  return (
    <>
      <SEO schemas={aboutSchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">About The Business</p>
            <h1>Local Okara security support with a professional standard.</h1>
            <p>
              I.T LINKS is a leading provider of cutting-edge CCTV camera solutions,
              designed to enhance security and surveillance for homes, businesses,
              and institutions.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Visit Or Contact</Link>
              <a className="btn btn-whatsapp" href={business.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="logo-feature reveal">
            <img
              src={assetPath(business.logo)}
              alt="I.T LINKS CCTV Camera and Network Solutions logo in Okara"
              width="158"
              height="158"
              loading="lazy"
              decoding="async"
            />
            <strong>{business.name}</strong>
            <span>CCTV Camera Store | Network Solutions | Solar Energy Service</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="content-panel reveal">
            <p className="eyebrow">Rana Hassan (IT LINKS)</p>
            <h2>Security services shaped around real homes, shops, and businesses.</h2>
            <p>
              Our expert team delivers top-notch installation, maintenance, and
              support services to ensure seamless and effective security monitoring.
            </p>
            <p>
              I.T LINKS helps customers choose practical camera coverage, dependable
              recording systems, clean wiring routes, stable networking, and mobile
              viewing support.
            </p>
          </div>
          <div className="why-grid reveal">
            <article>
              <strong>Professional installation team</strong>
              <p>Neat setup with attention to placement, cabling, and daily usability.</p>
            </article>
            <article>
              <strong>Reliable CCTV solutions</strong>
              <p>Camera systems matched to homes, offices, shops, and institutions.</p>
            </article>
            <article>
              <strong>Network support</strong>
              <p>Router setup, network cabling, switches, and IP camera connectivity.</p>
            </article>
            <article>
              <strong>Local provider</strong>
              <p>Okara-based support for maintenance, upgrades, and troubleshooting.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Why Customers Choose I.T LINKS</p>
            <h2>Trustworthy service for installation, maintenance, and monitoring.</h2>
            <p>We focus on practical solutions, reliable products, and clear customer support.</p>
          </div>
          <div className="card-grid feature-grid">
            <article className="info-card reveal">
              <span className="card-icon">01</span>
              <h3>Clean Wiring</h3>
              <p>Structured cable routing for a professional look and stable performance.</p>
            </article>
            <article className="info-card reveal">
              <span className="card-icon">02</span>
              <h3>Mobile Viewing</h3>
              <p>Support for remote viewing and playback on compatible mobile apps.</p>
            </article>
            <article className="info-card reveal">
              <span className="card-icon">03</span>
              <h3>After-Sales Help</h3>
              <p>Maintenance, repairs, lens cleaning, and DVR/NVR troubleshooting.</p>
            </article>
            <article className="info-card reveal">
              <span className="card-icon">04</span>
              <h3>Local Knowledge</h3>
              <p>Service planning for Okara homes, shops, markets, offices, and schools.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        kicker="Visit I.T LINKS"
        title="Find us opposite MZ Mobilz near Alfalah Bank."
        text="Church Road, Okara, Pakistan 56300. Open 9:00 AM - 8:00 PM."
        primaryLabel="Contact Details"
        primaryHref="/contact"
      />
    </>
  );
}
