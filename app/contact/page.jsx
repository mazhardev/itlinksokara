import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { business, faqs, pageSeo, site } from "@/lib/siteData";
import { buildFAQSchema } from "@/components/FAQSchema";

export function generateMetadata() {
  return buildPageMetadata(pageSeo.contact);
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${site.url}/contact#contact`,
    name: pageSeo.contact.title,
    description: pageSeo.contact.description,
    mainEntity: { "@id": `${site.url}/#localbusiness` }
  };

  return (
    <>
      <SEO schemas={[contactSchema, buildFAQSchema(faqs.slice(0, 4), "contact-faq")]} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Contact I.T LINKS</p>
            <h1>Need cameras, networking, maintenance, or a site quote?</h1>
            <p>
              Call, WhatsApp, email, or visit the shop opposite MZ Mobilz near
              Alfalah Bank on Church Road, Okara.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={business.phoneHref}>Call {business.phone}</a>
              <a className="btn btn-whatsapp" href={business.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Business hours</strong>
            <span>Open daily</span>
            <span>{business.hours}</span>
            <span>Okara, Pakistan 56300</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details reveal">
            <p className="eyebrow">Contact Details</p>
            <h2>Reach the local I.T LINKS team.</h2>
            <div className="contact-list">
              <p><strong>Phone / WhatsApp:</strong> {business.phone}</p>
              <p><strong>Email:</strong> {business.email}</p>
              <p><strong>Address:</strong> {business.address}</p>
              <p><strong>Hours:</strong> {business.hours}</p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href={business.phoneHref}>Call</a>
              <a className="btn btn-whatsapp" href={business.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
              <a className="btn btn-secondary" href={business.emailHref}>Email</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section alt-section">
        <div className="container split-grid">
          <div className="map-placeholder reveal" aria-label="Google Map embed placeholder">
            <iframe
              title="Google Map for I.T LINKS CCTV Camera & Network Solutions Okara"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="content-panel reveal">
            <p className="eyebrow">Visit The Shop</p>
            <h2>Easy to find on Church Road, Okara.</h2>
            <p>
              Use this map area for a Google Maps embed when the business map link
              is available. The address is already included for customers and search
              engines.
            </p>
            <div className="benefit-list">
              <span>Opposite MZ Mobilz</span>
              <span>Near Alfalah Bank</span>
              <span>Church Road, Okara</span>
              <span>Pakistan 56300</span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs.slice(0, 5)} title="Contact and CCTV Quote FAQs" />

      <CTASection
        kicker="Fast Contact"
        title="For urgent CCTV support, call or WhatsApp directly."
        text={`Phone and WhatsApp: ${business.phone}.`}
        primaryLabel="Call Now"
        primaryHref={business.phoneHref}
      />
    </>
  );
}
