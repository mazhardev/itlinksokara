import { assetPath } from "@/lib/paths";
import { business } from "@/lib/siteData";

export default function ProductCard({ product }) {
  const inquiryUrl = `${business.whatsapp}?text=${encodeURIComponent(
    `Hello I.T LINKS, please share the current price and availability for ${product.title} (${product.model}).`
  )}`;

  return (
    <article className="product-card dahua-product-card">
      <div className="product-visual has-product-image">
        <img
          src={assetPath(product.image)}
          alt={product.imageAlt}
          width="600"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="product-card-body">
        <div className="product-labels">
          <span className="product-brand">{product.brand}</span>
          <span>{product.category}</span>
        </div>
        <h3>{product.title}</h3>
        <p className="product-model">{product.model}</p>
        <p className="product-description">{product.text}</p>
        <a className="product-inquiry" href={inquiryUrl} target="_blank" rel="noopener noreferrer" aria-label={`Request price for ${product.title}, ${product.model} on WhatsApp (opens in a new tab)`}>
          Request Price <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
