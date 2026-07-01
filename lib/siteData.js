export const business = {
  name: "I.T LINKS CCTV CAMERA AND NETWORK SOLUTIONS",
  shortName: "I.T LINKS",
  tagline: "CCTV & Network Solutions",
  description:
    "Professional CCTV camera installation, maintenance, network setup, and security solutions in Okara, Pakistan. Contact I.T LINKS for reliable home and business surveillance services.",
  keywords:
    "CCTV installation Okara, security camera store Okara, network solutions, DVR NVR setup, solar energy service Okara",
  phone: "0307-5692928",
  phoneHref: "tel:03075692928",
  whatsapp: "https://wa.me/923075692928",
  whatsappNumber: "923075692928",
  email: "itlinksokr@gmail.com",
  emailHref: "mailto:itlinksokr@gmail.com",
  address:
    "Opposite MZ Mobilz, near Alfalah Bank, Church Road, Okara, Pakistan 56300",
  streetAddress: "Opposite MZ Mobilz, near Alfalah Bank, Church Road",
  locality: "Okara",
  postalCode: "56300",
  country: "PK",
  hours: "9:00 AM - 8:00 PM",
  openingHours: "Mo-Su 09:00-20:00",
  founder: "Rana Hassan",
  logo: "/images/it-links-logo.jpeg"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    number: "01",
    title: "CCTV Camera Installation",
    text: "Professional indoor and outdoor camera placement with clean wiring and reliable coverage."
  },
  {
    number: "02",
    title: "CCTV Maintenance & Repair",
    text: "Inspection, troubleshooting, lens cleaning, wiring checks, and system performance support."
  },
  {
    number: "IP",
    title: "IP Camera Setup",
    text: "High-definition IP camera configuration for clear monitoring and remote access."
  },
  {
    number: "NVR",
    title: "DVR / NVR Configuration",
    text: "Recording setup, storage planning, playback configuration, and mobile app connection."
  },
  {
    number: "LAN",
    title: "Network Cabling",
    text: "Structured cabling for CCTV, offices, routers, switches, and business networks."
  },
  {
    number: "Wi",
    title: "WiFi & Router Setup",
    text: "Router installation, coverage improvement, and stable connectivity for daily work."
  },
  {
    number: "MON",
    title: "Security Monitoring Setup",
    text: "Mobile viewing, alerts, monitoring screens, and multi-camera surveillance layouts."
  },
  {
    number: "SUN",
    title: "Solar Energy Service",
    text: "Solar security support for efficient and dependable camera power solutions."
  }
];

export const products = [
  {
    title: "Bullet Cameras",
    text: "Durable outdoor security cameras for shops, gates, and property boundaries.",
    art: "camera-art"
  },
  {
    title: "Dome Cameras",
    text: "Clean indoor and covered-area surveillance with discreet professional styling.",
    art: "dome-art"
  },
  {
    title: "IP Cameras",
    text: "Network-connected HD cameras for advanced monitoring and flexible setups.",
    art: "ip-art"
  },
  {
    title: "DVR / NVR Systems",
    text: "Reliable recording systems for playback, storage, and mobile viewing.",
    art: "recorder-art"
  },
  {
    title: "CCTV Monitors",
    text: "Clear monitoring displays for shops, offices, schools, and control rooms.",
    art: "monitor-art"
  },
  {
    title: "Network Switches",
    text: "Stable switching hardware for IP cameras and business network expansion.",
    art: "switch-art"
  },
  {
    title: "Cables & Connectors",
    text: "Quality cabling, connectors, adapters, and accessories for clean installs.",
    art: "cable-art"
  },
  {
    title: "Solar Security Solutions",
    text: "Energy-conscious security support for locations needing dependable power.",
    art: "solar-art"
  }
];

export const packages = [
  {
    title: "Basic Security Package",
    featured: false,
    items: ["2 CCTV Cameras", "DVR Setup", "Mobile View", "Basic Installation"]
  },
  {
    title: "Business Security Package",
    featured: true,
    badge: "Most Requested",
    items: [
      "4 to 8 CCTV Cameras",
      "DVR / NVR Setup",
      "Remote Mobile Access",
      "Professional Wiring",
      "Maintenance Support"
    ]
  },
  {
    title: "Premium Surveillance Package",
    featured: false,
    items: [
      "HD/IP CCTV Cameras",
      "Advanced Monitoring",
      "Network Setup",
      "Large Property Coverage",
      "Priority Support"
    ]
  }
];

export const galleryItems = [
  {
    title: "CCTV Monitor Setup",
    subtitle: "Control room preview",
    text: "Monitoring display setup for shops, offices, schools, and control rooms.",
    art: "monitor-art"
  },
  {
    title: "Multi-Camera Surveillance",
    subtitle: "Live camera layout",
    text: "Multiple camera views configured for practical site coverage.",
    art: "recorder-art"
  },
  {
    title: "Shop Security Setup",
    subtitle: "Retail protection",
    text: "CCTV planning for counters, entrances, storage spaces, and customer areas.",
    art: "camera-art"
  },
  {
    title: "Outdoor Bullet Camera",
    subtitle: "Boundary coverage",
    text: "Weather-ready outdoor camera placement for gates, streets, and property boundaries.",
    art: "camera-art"
  },
  {
    title: "Office Camera Installation",
    subtitle: "Business monitoring",
    text: "Professional camera coverage for offices, reception areas, and workspaces.",
    art: "dome-art"
  },
  {
    title: "DVR/NVR Configuration",
    subtitle: "Recording setup",
    text: "Recording, playback, storage, and mobile viewing setup for CCTV systems.",
    art: "ip-art"
  }
];

export const serviceAreas = [
  "Okara",
  "MZ Mobilz Area",
  "Church Road",
  "Alfalah Bank Area",
  "City Area",
  "Commercial Markets",
  "Homes",
  "Offices",
  "Shops",
  "Schools",
  "Warehouses"
];

export const testimonials = [
  {
    quote:
      "The team explained the camera positions clearly and completed the installation neatly.",
    name: "Shop Owner",
    area: "Okara"
  },
  {
    quote:
      "Mobile viewing and recording playback were set up properly, which made daily monitoring easier.",
    name: "Office Client",
    area: "Church Road Area"
  },
  {
    quote: "Good local support for maintenance and CCTV troubleshooting.",
    name: "Home Customer",
    area: "Okara City"
  }
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description:
    "CCTV camera store, security camera installation, network solutions, and solar energy service in Okara, Pakistan.",
  image: "images/it-links-logo.jpeg",
  telephone: "+923075692928",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.locality,
    postalCode: business.postalCode,
    addressCountry: business.country
  },
  email: business.email,
  openingHours: business.openingHours,
  areaServed: "Okara, Pakistan",
  founder: business.founder,
  priceRange: "Custom Quote"
};
