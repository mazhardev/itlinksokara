import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedLinks from "@/components/RelatedLinks";
import SEO, { buildPageMetadata } from "@/components/SEO";
import { buildFAQSchema } from "@/components/FAQSchema";
import {
  business,
  faqs,
  services,
  site,
  targetLocations
} from "@/lib/siteData";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};

  return buildPageMetadata({
    path: service.href,
    title: `${service.title} Okara | I.T LINKS CCTV & Network Solutions`,
    description: `${service.longText} Contact I.T LINKS for ${service.keywords} in Okara, Depalpur, Renala Khurd, Haveli Lakha, Sahiwal, Pattoki, and nearby areas.`,
    keywords: [service.keywords, "CCTV Services Okara", "CCTV Near Me"]
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const serviceFaqs = faqs.filter((faq) => {
    const text = `${faq.question} ${faq.answer}`.toLowerCase();
    return (
      text.includes("cctv") ||
      text.includes("camera") ||
      text.includes("dvr") ||
      text.includes("nvr") ||
      text.includes("network") ||
      text.includes("solar")
    );
  }).slice(0, 6);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${service.href}#service`,
    name: `${service.title} in Okara`,
    serviceType: service.title,
    description: service.longText,
    keywords: service.keywords,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: targetLocations.map((name) => ({ "@type": "City", name })),
    offers: {
      "@type": "Offer",
      price: "Custom Quote",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: `${site.url}${service.href}`
    }
  };
  const relatedItems = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 5)
    .map((item) => ({
      label: item.title,
      href: item.href,
      text: item.text
    }));

  return (
    <>
      <SEO schemas={[serviceSchema, buildFAQSchema(serviceFaqs, `${service.slug}-faq`)]} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: service.href }
        ]}
      />

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">Local CCTV Service</p>
            <h1>{service.title} in Okara, Punjab</h1>
            <p>{service.longText}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={business.phoneHref}>
                Call {business.phone}
              </a>
              <a className="btn btn-whatsapp" href={business.whatsapp} target="_blank" rel="noopener">
                WhatsApp Quote
              </a>
            </div>
          </div>
          <div className="page-hero-card reveal">
            <strong>Target keywords</strong>
            <span>{service.keywords}</span>
            <span>CCTV Services Okara</span>
            <span>CCTV Near Me</span>
            <span>Network Solutions Okara</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="content-panel reveal">
            <p className="eyebrow">Service Details</p>
            <h2>Professional {service.title.toLowerCase()} for homes and businesses.</h2>
            <p>
              I.T LINKS provides {service.title.toLowerCase()} for customers in
              Okara, Depalpur, Renala Khurd, Haveli Lakha, Sahiwal, Pattoki, and
              nearby cities. Our team focuses on correct planning, neat
              installation, reliable configuration, and practical support after
              the work is complete.
            </p>
            <p>
              Whether you need a new CCTV camera setup, repair for an existing
              camera system, DVR/NVR recording support, IP camera configuration,
              network cabling, router configuration, or solar camera support, we
              help you choose the right solution for your property and budget.
            </p>
            <div className="benefit-list">
              <span>Local Okara service and support</span>
              <span>Clean wiring and practical camera placement</span>
              <span>DVR/NVR and mobile viewing configuration</span>
              <span>Support for homes, shops, offices, schools, and warehouses</span>
            </div>
          </div>
          <div className="check-panel reveal">
            <h3>Need a custom quote?</h3>
            <p>
              Call, WhatsApp, or visit the shop opposite MZ Mobilz near Alfalah
              Bank on Church Road, Okara.
            </p>
            <Link className="btn btn-secondary" href="/contact">
              Contact I.T LINKS
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks title="Related CCTV and Network Services" items={relatedItems} />
      <FAQSection faqs={serviceFaqs} title={`${service.title} FAQs`} />
      <CTASection
        kicker="Service Quote"
        title={`Book ${service.title} in Okara.`}
        text="Tell us about your property, camera count, current issue, or networking requirement."
        primaryLabel="Contact Now"
        primaryHref="/contact"
      />
    </>
  );
}
