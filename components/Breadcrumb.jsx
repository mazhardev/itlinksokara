import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/siteData";

function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href === "/" ? "" : item.href}`
    }))
  };
}

export default function Breadcrumb({ items }) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="container">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <li key={item.href}>
                {isCurrent ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <StructuredData data={getBreadcrumbSchema(items)} />
    </>
  );
}
