import StructuredData from "@/components/StructuredData";

export function buildFAQSchema(faqs, id = "faq") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `#${id}`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export default function FAQSchema({ faqs, id }) {
  return <StructuredData data={buildFAQSchema(faqs, id)} />;
}
