"use client";

import { useState } from "react";
import { business } from "@/lib/siteData";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "I.T LINKS CCTV quote request",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Service: ${formData.get("service")}`,
      `Message: ${formData.get("message") || "Not provided"}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    setStatus("Opening WhatsApp with your inquiry. You can also email us directly.");
    window.open(whatsappUrl, "_blank", "noopener");
    event.currentTarget.reset();
  };

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <p className="eyebrow">Quick Inquiry</p>
      <h2>Request a CCTV quote</h2>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your name" required />
      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
      <label htmlFor="service">Service Needed</label>
      <select id="service" name="service" required defaultValue="">
        <option value="" disabled>
          Select a service
        </option>
        <option>CCTV Camera Installation</option>
        <option>CCTV Maintenance &amp; Repair</option>
        <option>DVR / NVR Configuration</option>
        <option>Network Cabling</option>
        <option>Solar Energy Service</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Tell us about your property, camera count, or issue"
      ></textarea>
      <button className="btn btn-primary" type="submit">
        Send via WhatsApp
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
      <a className="form-email-link" href={business.emailHref}>
        Or email {business.email}
      </a>
    </form>
  );
}
