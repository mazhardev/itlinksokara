import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "I.T LINKS Okara",
    description:
      "CCTV camera installation, maintenance, network setup, and security solutions in Okara, Pakistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#12345f",
    icons: [
      {
        src: "/images/it-links-logo.jpeg",
        sizes: "720x711",
        type: "image/jpeg"
      }
    ]
  };
}
