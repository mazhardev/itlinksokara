import Link from "next/link";
import { assetPath } from "@/lib/paths";

export default function ResellerCertificate() {
  const certificateUrl = assetPath("/images/certificates/dahua-authorized-reseller-2026.jpeg");

  return (
    <section className="reseller-section" aria-labelledby="reseller-heading">
      <div className="container reseller-card">
        <div className="reseller-copy">
          <p className="reseller-eyebrow">Dahua Technology · Authorized Reseller</p>
          <h2 id="reseller-heading">Your local Dahua authorized reseller.</h2>
          <p className="reseller-description">
            I.T LINKS Okara is a Dahua authorized reseller in Pakistan.
            Explore Dahua security products with our local team and get guidance
            on camera selection, installation, and everyday monitoring.
          </p>
          <dl className="reseller-details">
            <div>
              <dt>Issued to</dt>
              <dd>IT Links Okara</dd>
            </div>
          </dl>
          <div className="reseller-actions">
            <Link className="btn btn-primary" href="/products">
              Explore Security Products
            </Link>
            <a className="reseller-certificate-link" href={certificateUrl} target="_blank" rel="noopener noreferrer">
              View full certificate <span aria-hidden="true">↗</span>
              <span className="reseller-sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <figure className="reseller-document">
          <a href={certificateUrl} target="_blank" rel="noopener noreferrer" aria-label="View Dahua authorized reseller certificate full size (opens in a new tab)">
            <img
              src={certificateUrl}
              alt="Dahua Technology certificate authorizing IT Links Okara as a reseller in Pakistan."
              width="1086"
              height="1448"
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>Dahua Authorized Reseller Certificate</figcaption>
        </figure>
      </div>
    </section>
  );
}
