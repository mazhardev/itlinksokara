"use client";

import { useRef } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

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
        {products.filter((product) => product.featured).map((product) => (
          <ProductCard key={product.id} product={product} />
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
