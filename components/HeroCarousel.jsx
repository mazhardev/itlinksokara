"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { business } from "@/lib/siteData";

const slides = [
  {
    eyebrow: "Okara CCTV Camera Store & Installation Experts",
    title: "Professional CCTV Camera & Network Solutions in Okara",
    text: "Secure your home, office, shop, school, warehouse, or business with reliable CCTV installation, maintenance, networking, and security monitoring services.",
    primary: { label: "Call Now", href: business.phoneHref },
    secondary: { label: "WhatsApp Quote", href: business.whatsapp },
    tertiary: { label: "View Services", href: "/services" },
    tags: ["24/7 capable surveillance", "Clean wiring", "Mobile view support"],
    visual: "camera"
  },
  {
    eyebrow: "Security Monitoring Setup",
    title: "Clear camera coverage for shops, homes, offices, and schools.",
    text: "From camera placement to DVR/NVR configuration and mobile app access, I.T LINKS sets up practical surveillance systems built for everyday use.",
    primary: { label: "Explore Packages", href: "/packages" },
    secondary: { label: "Chat on WhatsApp", href: business.whatsapp },
    tags: ["DVR / NVR setup", "Remote access", "After-sales support"],
    visual: "monitor"
  },
  {
    eyebrow: "Network & Solar Security Support",
    title: "Stable networking, clean cabling, and dependable camera power.",
    text: "Get structured cabling, router setup, network switches, CCTV accessories, and solar security support from a local Okara-based provider.",
    primary: { label: "View Products", href: "/products" },
    tertiary: { label: "Request Site Visit", href: "/contact" },
    tags: ["Network cabling", "Router setup", "Solar support"],
    visual: "network"
  }
];

function HeroAction({ action, className }) {
  if (!action) return null;

  if (action.href.startsWith("/")) {
    return (
      <Link className={className} href={action.href}>
        {action.label}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={action.href}
      target={action.href.startsWith("http") ? "_blank" : undefined}
      rel={action.href.startsWith("http") ? "noopener" : undefined}
    >
      {action.label}
    </a>
  );
}

function SecurityVisual({ type }) {
  if (type === "monitor") {
    return (
      <div className="security-visual visual-monitor" aria-hidden="true">
        <div className="monitor-frame">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="recording-pill">Recording ready</div>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className="security-visual visual-network" aria-hidden="true">
        <div className="network-rack">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="network-lines"></div>
      </div>
    );
  }

  return (
    <div className="security-visual" aria-hidden="true">
      <div className="visual-grid"></div>
      <div className="camera-device">
        <span></span>
      </div>
      <div className="signal-bars">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="mini-dashboard">
        <b>LIVE</b>
        <span>Home</span>
        <span>Shop</span>
        <span>Office</span>
        <span>Gate</span>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const showSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section className="hero-carousel" aria-label="I.T LINKS featured security solutions">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <article
            className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}
            key={slide.title}
          >
            <div className="container hero-layout">
              <div className="hero-copy reveal">
                <p className="eyebrow">{slide.eyebrow}</p>
                {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
                <p>{slide.text}</p>
                <div className="hero-actions">
                  <HeroAction action={slide.primary} className="btn btn-primary" />
                  <HeroAction action={slide.secondary} className="btn btn-whatsapp" />
                  <HeroAction action={slide.tertiary} className="btn btn-light" />
                </div>
                <div className="trust-strip" aria-label="Service highlights">
                  {slide.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <SecurityVisual type={slide.visual} />
            </div>
          </article>
        ))}
      </div>

      <div className="hero-controls" aria-label="Hero carousel controls">
        <button
          className="slider-arrow"
          type="button"
          onClick={() => showSlide(activeIndex - 1)}
          aria-label="Previous slide"
        >
          Prev
        </button>
        <div className="slider-dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              className={index === activeIndex ? "is-active" : undefined}
              type="button"
              key={slide.title}
              onClick={() => showSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-selected={index === activeIndex}
            ></button>
          ))}
        </div>
        <button
          className="slider-arrow"
          type="button"
          onClick={() => showSlide(activeIndex + 1)}
          aria-label="Next slide"
        >
          Next
        </button>
      </div>
    </section>
  );
}
