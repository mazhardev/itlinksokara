"use client";

import Link from "next/link";
import { useRef } from "react";
import { products } from "@/lib/siteData";

export default function ProductCarousel() {
  const trackRef = useRef(null);

  const scrollProducts = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.max(track.clientWidth * 0.8, 260);
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div className="carousel-shell reveal">
      <button
        className="carousel-btn prev"
        type="button"
        onClick={() => scrollProducts(-1)}
        aria-label="Previous products"
      >
        Prev
      </button>
      <div className="product-track" ref={trackRef}>
        {products.slice(0, 5).map((product) => (
          <article className="product-card" key={product.title}>
            <div className={`product-visual ${product.art}`}></div>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
            <Link href="/contact">Request Price</Link>
          </article>
        ))}
      </div>
      <button
        className="carousel-btn next"
        type="button"
        onClick={() => scrollProducts(1)}
        aria-label="Next products"
      >
        Next
      </button>
    </div>
  );
}
