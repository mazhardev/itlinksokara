export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  return (
    <section className="section alt-section faq-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">SEO FAQ</p>
          <h2>{title}</h2>
          <p>
            Answers to common questions about CCTV installation, camera repair,
            networking, DVR/NVR setup, and security systems in Okara.
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <details className="faq-item reveal" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
