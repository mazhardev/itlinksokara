import Link from "next/link";

export default function RelatedLinks({ title = "Related Services", items }) {
  return (
    <section className="section related-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Internal Links</p>
          <h2>{title}</h2>
          <p>Explore connected CCTV, networking, product, package, and contact pages.</p>
        </div>
        <div className="related-grid">
          {items.map((item) => (
            <Link className="related-card reveal" href={item.href} key={item.href}>
              <strong>{item.label}</strong>
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
