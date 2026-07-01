import Link from "next/link";
import CTASection from "@/components/CTASection";
import { packages } from "@/lib/siteData";

export const metadata = {
  title: "Packages",
  description:
    "Custom CCTV camera packages for homes, shops, offices, and larger properties in Okara. Basic, business, and premium surveillance quotes."
};

export default function PackagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Custom Quote</p>
            <h1>CCTV packages for homes, shops, offices, and larger properties.</h1>
            <p>
              Every site is different, so packages are quoted after checking
              camera quantity, wiring distance, product quality, and coverage needs.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">Get Custom Quote</Link>
              <a className="btn btn-whatsapp" href="https://wa.me/923075692928" target="_blank" rel="noopener">
                WhatsApp Details
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Quote depends on</strong>
            <span>Camera Quantity</span>
            <span>Wiring Distance</span>
            <span>DVR / NVR Type</span>
            <span>Storage Need</span>
            <span>Mobile Access</span>
            <span>Maintenance</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">CCTV Packages</p>
            <h2>Choose a starting package and request a site-specific quote.</h2>
            <p>
              Packages are flexible and can be adjusted according to your property,
              budget, and security requirements.
            </p>
          </div>
          <div className="pricing-grid">
            {packages.map((item) => (
              <article className={`package-card reveal ${item.featured ? "featured" : ""}`} key={item.title}>
                {item.badge ? <span className="popular">{item.badge}</span> : null}
                <h3>{item.title}</h3>
                <p className="quote-label">Custom Quote</p>
                <ul>
                  {item.items.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className={`btn ${item.featured ? "btn-primary" : "btn-secondary"}`} href="/contact">
                  Contact Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">What Can Be Added</p>
            <h2>Upgrade any package with practical security extras.</h2>
            <p>
              I.T LINKS can scale your package with better cameras, more storage,
              networking accessories, or solar security support.
            </p>
          </div>
          <div className="card-grid feature-grid">
            <article className="info-card reveal">
              <span className="card-icon">HD</span>
              <h3>Higher Resolution Cameras</h3>
              <p>Upgrade to HD or IP cameras for clearer monitoring and playback.</p>
            </article>
            <article className="info-card reveal">
              <span className="card-icon">REC</span>
              <h3>More Recording Storage</h3>
              <p>Plan storage based on camera count, recording quality, and required playback days.</p>
            </article>
            <article className="info-card reveal">
              <span className="card-icon">APP</span>
              <h3>Remote Mobile Access</h3>
              <p>View cameras remotely on supported mobile apps after proper setup.</p>
            </article>
            <article className="info-card reveal">
              <span className="card-icon">SUN</span>
              <h3>Solar Security Support</h3>
              <p>Add dependable power support where camera uptime is important.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        kicker="Custom Package"
        title="Tell us how many cameras you need."
        text="We will help estimate the right camera count, recorder setup, wiring, and installation plan."
        primaryLabel="Request Package Quote"
        primaryHref="/contact"
      />
    </>
  );
}
