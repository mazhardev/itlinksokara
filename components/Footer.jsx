import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { business, services, targetLocations } from "@/lib/siteData";

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
              loading="lazy"
              decoding="async"
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
          <Link href="/services/cctv-installation">CCTV Installation</Link>
          <Link href="/products">Products</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 5).map((service) => (
            <Link href={service.href} key={service.href}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>{business.phone}</p>
          <p>{business.email}</p>
          <p>{business.streetAddress}, Okara, Punjab</p>
          <p>Serving {targetLocations.slice(0, 6).join(", ")}</p>
          <Link href="/contact">Get Directions</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
