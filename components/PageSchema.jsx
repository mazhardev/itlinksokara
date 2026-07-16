import JsonLd from "@/components/JsonLd";
import { createPageSchema } from "@/lib/seo";

export default function PageSchema(props) {
  return <JsonLd data={createPageSchema(props)} />;
}
