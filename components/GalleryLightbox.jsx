"use client";

import { useEffect, useRef, useState } from "react";

function CameraLoader() {
  return (
    <span className="gallery-loader" role="status" aria-label="Loading gallery media">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M15 13l3-5h12l3 5h5a6 6 0 016 6v17a6 6 0 01-6 6H10a6 6 0 01-6-6V19a6 6 0 016-6h5z" />
        <circle cx="24" cy="27" r="9" />
        <circle cx="38" cy="19" r="2" />
      </svg>
    </span>
  );
}

function GalleryMedia({ item, immediate = false, lightbox = false }) {
  const sentinelRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(immediate);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (immediate) {
      setShouldLoad(true);
      return undefined;
    }

    const target = sentinelRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <span ref={sentinelRef} className="gallery-media-sentinel">
      {!loaded ? <CameraLoader /> : null}
      {shouldLoad && item.video ? (
        <video
          className={loaded ? "is-loaded" : ""}
          src={item.video}
          muted={!lightbox}
          controls={lightbox}
          autoPlay={lightbox}
          playsInline
          preload={lightbox ? "auto" : "metadata"}
          onLoadedData={() => setLoaded(true)}
        />
      ) : shouldLoad && item.image ? (
        <img
          className={loaded ? "is-loaded" : ""}
          src={item.image}
          alt={item.imageAlt || item.title}
          loading={lightbox ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
        />
      ) : null}
      {item.video && !lightbox && loaded ? (
        <span className="gallery-play" aria-hidden="true">Play</span>
      ) : null}
    </span>
  );
}

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
            aria-label={`View ${item.title}`}
            onClick={() => setActiveItem(item)}
          >
            <span className={`gallery-visual ${item.art || ""}`}>
              <GalleryMedia item={item} />
            </span>
            <span className="gallery-card-copy">
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
              <small>{item.text}</small>
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
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
            <button
              className="lightbox-close"
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close gallery preview"
            >
              Close
            </button>
            <div className={`lightbox-preview ${activeItem.art || ""}`}>
              <GalleryMedia item={activeItem} immediate lightbox />
            </div>
            <div className="lightbox-copy">
              <h2 id="lightbox-title">{activeItem.title}</h2>
              <p>{activeItem.text}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
