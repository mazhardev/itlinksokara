import StructuredData from "@/components/StructuredData";
import { localBusinessSchema } from "@/lib/siteData";

export function buildLocalBusinessSchema() {
  return localBusinessSchema;
}

export default function LocalBusinessSchema() {
  return <StructuredData data={buildLocalBusinessSchema()} />;
}
