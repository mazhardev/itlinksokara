import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { business } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <img
              className="brand-logo"
              src={assetPath(business.logo)}
              alt="I.T LINKS logo"
              width="58"
              height="58"
            />
            <span>
              <strong>{business.shortName}</strong>
              <small>CCTV Camera &amp; Network Solutions</small>
            </span>
          </Link>
          <p>
            Professional CCTV installation, maintenance, networking, and solar
            security support for homes and businesses in Okara.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <h3>Services</h3>
          <Link href="/services">CCTV Installation</Link>
          <Link href="/services">CCTV Maintenance</Link>
          <Link href="/services">Network Setup</Link>
          <Link href="/services">Solar Energy Service</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={business.phoneHref}>{business.phone}</a>
          <a href={business.emailHref}>{business.email}</a>
          <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">
            {business.streetAddress}, Okara
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 {business.name}. All rights reserved.
        </p>
        <p className="developer-credit">
          Developed by{" "}
          <a
            href="https://web.facebook.com/protechnologiespvt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pro Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
