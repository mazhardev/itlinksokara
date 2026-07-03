import Link from "next/link";
import { business } from "@/lib/siteData";

function CTAButton({ href, children, className, external = false }) {
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
    >
      {children}
    </a>
  );
}

export default function CTASection({
  kicker = "Free Consultation",
  title = "Need cameras, networking, or maintenance in Okara?",
  text = "Call, WhatsApp, email, or visit the shop on Church Road, opposite MZ Mobile in Block-F Block-E.",
  primaryLabel = `Call ${business.phone}`,
  primaryHref = business.phoneHref,
  secondaryLabel = "WhatsApp",
  secondaryHref = business.whatsapp
}) {
  return (
    <section className="cta-band">
      <div className="container cta-content reveal">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <CTAButton className="btn btn-primary" href={primaryHref}>
            {primaryLabel}
          </CTAButton>
          <CTAButton
            className="btn btn-whatsapp"
            href={secondaryHref}
            external={secondaryHref.startsWith("http")}
          >
            {secondaryLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
