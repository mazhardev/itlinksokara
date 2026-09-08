"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, productCategories } from "@/lib/products";

export default function ProductCatalog() {
  const [category, setCategory] = useState("All Products");
  const visibleProducts = category === "All Products"
    ? products
    : products.filter((product) => product.category === category);

  return (
    <>
      <div className="product-filters" role="group" aria-label="Filter Dahua products by category">
        {["All Products", ...productCategories].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            aria-controls="dahua-product-grid"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="product-results" role="status" aria-live="polite">
        {visibleProducts.length} Dahua {visibleProducts.length === 1 ? "product" : "products"}
        {category !== "All Products" ? ` · ${category}` : ""}
      </p>
      <div className="product-grid" id="dahua-product-grid">
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}
