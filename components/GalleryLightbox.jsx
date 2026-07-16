"use client";

import { useEffect, useState } from "react";

export default function GalleryLightbox({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("lightbox-open", Boolean(activeItem));
    return () => document.body.classList.remove("lightbox-open");
  }, [activeItem]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") setActiveItem(null);
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <button
            className="gallery-card reveal"
            type="button"
            key={item.title}
            onClick={() => setActiveItem(item)}
          >
            <span className={`gallery-visual ${item.art || ""}`}>
              {item.video ? (
                <video src={item.video} muted playsInline preload="metadata" />
              ) : item.image ? (
                <img src={item.image} alt={item.imageAlt || item.title} loading="lazy" />
              ) : null}
              {item.video ? <span className="gallery-play" aria-hidden="true">Play</span> : null}
            </span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="lightbox">
          <button
            className="lightbox-backdrop"
            type="button"
            onClick={() => setActiveItem(null)}
            aria-label="Close gallery preview"
          ></button>
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Project media preview">
            <button
              className="lightbox-close"
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close gallery preview"
            >
              Close
            </button>
            <div className={`lightbox-preview ${activeItem.art || ""}`}>
              {activeItem.video ? (
                <video src={activeItem.video} controls autoPlay playsInline />
              ) : activeItem.image ? (
                <img src={activeItem.image} alt={activeItem.imageAlt || activeItem.title} />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
