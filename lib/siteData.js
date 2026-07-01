export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://itlinksokara.com",
  locale: "en_PK",
  themeColor: "#07182f",
  tileColor: "#07182f",
  ogImage: "/og-image.png"
};

export const business = {
  name: "I.T LINKS CCTV Camera & Network Solutions",
  legalName: "I.T LINKS CCTV CAMERA AND NETWORK SOLUTIONS",
  shortName: "I.T LINKS",
  tagline: "CCTV & Network Solutions",
  description:
    "Professional CCTV camera installation, maintenance, network setup, and security solutions in Okara, Punjab, Pakistan. Contact I.T LINKS for reliable home and business surveillance services.",
  keywords:
    "CCTV Installation Okara, CCTV Camera Shop Okara, Security Camera Installation Okara, CCTV Camera Dealer Okara, CCTV Maintenance Okara, IP Camera Installation Okara, DVR Installation Okara, CCTV Near Me, CCTV Services Okara, Network Solutions Okara",
  phone: "0307-5692928",
  phoneInternational: "+923075692928",
  phoneHref: "tel:03075692928",
  whatsapp: "https://wa.me/923075692928",
  whatsappNumber: "923075692928",
  email: "itlinksokr@gmail.com",
  emailHref: "mailto:itlinksokr@gmail.com",
  address:
    "Opposite MZ Mobilz, near Alfalah Bank, Church Road, Okara, Punjab, Pakistan 56300",
  streetAddress: "Opposite MZ Mobilz, near Alfalah Bank, Church Road",
  locality: "Okara",
  region: "Punjab",
  postalCode: "56300",
  country: "PK",
  hours: "9:00 AM - 8:00 PM",
  openingHours: "Mo-Su 09:00-20:00",
  founder: "Rana Hassan",
  logo: "/images/it-links-logo.jpeg",
  mapQuery:
    "Opposite MZ Mobilz near Alfalah Bank Church Road Okara Punjab Pakistan",
  geo: {
    latitude: "30.8138",
    longitude: "73.4534"
  },
  priceRange: "Custom Quote"
};

export const targetLocations = [
  "Okara",
  "Depalpur",
  "Renala Khurd",
  "Haveli Lakha",
  "Sahiwal",
  "Pattoki",
  "Nearby cities"
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const primaryKeywords = [
  "CCTV Installation Okara",
  "CCTV Camera Shop Okara",
  "Security Camera Installation Okara",
  "CCTV Camera Dealer Okara",
  "CCTV Maintenance Okara",
  "IP Camera Installation Okara",
  "DVR Installation Okara",
  "CCTV Near Me",
  "CCTV Services Okara",
  "Network Solutions Okara"
];

export const services = [
  {
    number: "01",
    title: "CCTV Camera Installation",
    slug: "cctv-installation",
    href: "/services/cctv-installation",
    keywords: "CCTV installation Okara, security camera installation Okara",
    text: "Professional indoor and outdoor camera placement with clean wiring and reliable coverage.",
    longText:
      "Plan, install, configure, and test CCTV camera systems for homes, shops, offices, schools, warehouses, and commercial buildings in Okara and nearby cities."
  },
  {
    number: "02",
    title: "CCTV Camera Maintenance",
    slug: "cctv-maintenance",
    href: "/services/cctv-maintenance",
    keywords: "CCTV maintenance Okara, CCTV AMC services Okara",
    text: "Inspection, troubleshooting, lens cleaning, wiring checks, and system performance support.",
    longText:
      "Keep existing CCTV systems healthy with camera checks, cable inspection, DVR/NVR review, storage checks, and planned maintenance support."
  },
  {
    number: "IP",
    title: "IP Camera Installation",
    slug: "ip-camera",
    href: "/services/ip-camera",
    keywords: "IP camera installation Okara, IP CCTV cameras Okara",
    text: "High-definition IP camera configuration for clear monitoring and remote access.",
    longText:
      "Install network-connected IP cameras with stable PoE/network setup, recorder configuration, and mobile viewing support."
  },
  {
    number: "DVR",
    title: "DVR/NVR Setup",
    slug: "dvr-nvr-setup",
    href: "/services/dvr-nvr-setup",
    keywords: "DVR installation Okara, NVR setup Okara",
    text: "Recording setup, storage planning, playback configuration, and mobile app connection.",
    longText:
      "Configure DVR and NVR systems for recording quality, storage duration, playback, remote access, and multi-camera monitoring."
  },
  {
    number: "REP",
    title: "Security Camera Repair",
    slug: "security-camera-repair",
    href: "/services/security-camera-repair",
    keywords: "security camera repair Okara, CCTV camera repair Okara",
    text: "Repair support for camera display issues, loose wiring, power faults, and recording problems.",
    longText:
      "Troubleshoot faulty cameras, blank video feeds, weak connections, power issues, recorder problems, and mobile view errors."
  },
  {
    number: "NET",
    title: "WiFi & Network Installation",
    slug: "networking",
    href: "/services/networking",
    keywords: "network solutions Okara, WiFi installation Okara",
    text: "Router setup, office networking, WiFi coverage improvement, and business connectivity support.",
    longText:
      "Install routers, switches, structured cabling, access points, and office networks for reliable CCTV and internet connectivity."
  },
  {
    number: "LAN",
    title: "Network Cabling",
    slug: "network-cabling",
    href: "/services/network-cabling",
    keywords: "network cabling Okara, office networking Okara",
    text: "Structured cabling for CCTV, offices, routers, switches, and business networks.",
    longText:
      "Run clean network cable routes for cameras, computers, routers, switches, printers, and business network equipment."
  },
  {
    number: "SUN",
    title: "Solar Camera Solutions",
    slug: "solar-camera-solutions",
    href: "/services/solar-camera-solutions",
    keywords: "solar camera solutions Okara, solar CCTV camera Okara",
    text: "Solar security support for efficient and dependable camera power solutions.",
    longText:
      "Support camera power planning for remote or power-sensitive locations with solar security options and practical backup planning."
  }
];

export const products = [
  {
    title: "Bullet Cameras",
    text: "Durable outdoor security cameras for shops, gates, and property boundaries.",
    art: "camera-art",
    keywords: "outdoor CCTV cameras Okara"
  },
  {
    title: "Dome Cameras",
    text: "Clean indoor and covered-area surveillance with discreet professional styling.",
    art: "dome-art",
    keywords: "dome CCTV cameras Okara"
  },
  {
    title: "IP Cameras",
    text: "Network-connected HD cameras for advanced monitoring and flexible setups.",
    art: "ip-art",
    keywords: "IP cameras Okara"
  },
  {
    title: "DVR / NVR Systems",
    text: "Reliable recording systems for playback, storage, and mobile viewing.",
    art: "recorder-art",
    keywords: "DVR NVR systems Okara"
  },
  {
    title: "CCTV Monitors",
    text: "Clear monitoring displays for shops, offices, schools, and control rooms.",
    art: "monitor-art",
    keywords: "CCTV monitoring setup Okara"
  },
  {
    title: "Network Switches",
    text: "Stable switching hardware for IP cameras and business network expansion.",
    art: "switch-art",
    keywords: "network switches Okara"
  },
  {
    title: "Cables & Connectors",
    text: "Quality cabling, connectors, adapters, and accessories for clean installs.",
    art: "cable-art",
    keywords: "CCTV cable connectors Okara"
  },
  {
    title: "Solar Security Solutions",
    text: "Energy-conscious security support for locations needing dependable power.",
    art: "solar-art",
    keywords: "solar security cameras Okara"
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
  "Depalpur",
  "Renala Khurd",
  "Haveli Lakha",
  "Sahiwal",
  "Pattoki",
  "MZ Mobilz Area",
  "Church Road",
  "Alfalah Bank Area",
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

export const faqs = [
  {
    question: "Do you provide CCTV installation in Okara?",
    answer:
      "Yes. I.T LINKS provides CCTV camera installation in Okara for homes, shops, offices, schools, warehouses, and commercial properties. We also support Depalpur, Renala Khurd, Haveli Lakha, Sahiwal, Pattoki, and nearby areas."
  },
  {
    question: "Can you repair existing security cameras?",
    answer:
      "Yes. We troubleshoot common CCTV issues including blank camera feeds, weak video, loose wiring, power faults, DVR/NVR recording problems, and mobile view errors."
  },
  {
    question: "Do you install IP cameras and NVR systems?",
    answer:
      "Yes. We install IP cameras, configure NVR systems, plan network cabling, and set up remote mobile viewing for supported camera systems."
  },
  {
    question: "Do you configure DVR recording and mobile view?",
    answer:
      "Yes. We configure DVR and NVR recording, playback, storage settings, camera channels, and mobile app access where supported by the device."
  },
  {
    question: "Do you provide CCTV maintenance or AMC services?",
    answer:
      "Yes. CCTV maintenance and AMC support can include camera inspection, lens cleaning, cable checks, recorder health review, storage checks, and system troubleshooting."
  },
  {
    question: "Can you set up WiFi, routers, and office networks?",
    answer:
      "Yes. I.T LINKS provides WiFi installation, router configuration, network cabling, office networking, switches, and connectivity support for CCTV and business networks."
  },
  {
    question: "Do you provide home security systems?",
    answer:
      "Yes. We help homeowners choose practical CCTV coverage for entrances, gates, rooms, driveways, rooftops, and other important areas."
  },
  {
    question: "Do you provide solar camera solutions?",
    answer:
      "Yes. We can discuss solar camera and power support options for locations where dependable camera uptime or remote placement is important."
  },
  {
    question: "How can I get a CCTV quote?",
    answer:
      "Call 0307-5692928, WhatsApp 923075692928, email itlinksokr@gmail.com, or visit I.T LINKS opposite MZ Mobilz near Alfalah Bank on Church Road, Okara."
  }
];

export const pageSeo = {
  home: {
    path: "/",
    title: "CCTV Installation Okara | I.T LINKS CCTV Camera & Network Solutions",
    description:
      "I.T LINKS provides CCTV installation, CCTV camera shop services, security camera repair, DVR/NVR setup, IP cameras, networking, and maintenance in Okara, Punjab.",
    keywords: primaryKeywords
  },
  services: {
    path: "/services",
    title: "CCTV Services Okara | Installation, Maintenance, IP Cameras",
    description:
      "Explore CCTV installation, CCTV maintenance, IP camera installation, DVR/NVR setup, camera repair, networking, router configuration, and solar camera services in Okara.",
    keywords: [
      "CCTV Services Okara",
      "CCTV Maintenance Okara",
      "IP Camera Installation Okara",
      "DVR Installation Okara",
      "Network Solutions Okara"
    ]
  },
  products: {
    path: "/products",
    title: "CCTV Camera Shop Okara | Cameras, DVR, NVR, Cables",
    description:
      "Shop CCTV cameras, IP cameras, DVR/NVR systems, monitors, cables, connectors, switches, and solar security products from I.T LINKS in Okara.",
    keywords: [
      "CCTV Camera Shop Okara",
      "CCTV Camera Dealer Okara",
      "Security Camera Shop Okara",
      "DVR NVR Okara"
    ]
  },
  packages: {
    path: "/packages",
    title: "CCTV Packages Okara | Home, Shop & Business Security",
    description:
      "Request custom CCTV packages for homes, shops, offices, schools, warehouses, and commercial properties in Okara and nearby cities.",
    keywords: [
      "CCTV Packages Okara",
      "Home Security Systems Okara",
      "Business CCTV Okara"
    ]
  },
  gallery: {
    path: "/gallery",
    title: "CCTV Installation Gallery Okara | I.T LINKS Work Samples",
    description:
      "View CCTV installation, monitoring, camera placement, DVR/NVR setup, and security product gallery previews from I.T LINKS Okara.",
    keywords: [
      "CCTV Installation Gallery Okara",
      "Security Camera Work Okara",
      "CCTV Monitoring Setup Okara"
    ]
  },
  about: {
    path: "/about",
    title: "About I.T LINKS | CCTV Camera & Network Solutions Okara",
    description:
      "Learn about I.T LINKS CCTV Camera & Network Solutions, a local Okara provider for CCTV installation, maintenance, networking, and solar camera support.",
    keywords: [
      "I.T LINKS Okara",
      "CCTV Camera Dealer Okara",
      "Network Solutions Okara"
    ]
  },
  contact: {
    path: "/contact",
    title: "Contact I.T LINKS Okara | CCTV Installation Near Me",
    description:
      "Contact I.T LINKS for CCTV installation, security camera repair, DVR/NVR setup, networking, and CCTV maintenance in Okara and nearby cities.",
    keywords: [
      "CCTV Near Me",
      "Contact CCTV Installer Okara",
      "CCTV Installation Okara"
    ]
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: business.name,
  legalName: business.legalName,
  description:
    "CCTV camera store, security camera installation, network solutions, and solar energy service in Okara, Punjab, Pakistan.",
  image: `${site.url}${business.logo}`,
  logo: `${site.url}${business.logo}`,
  url: site.url,
  telephone: business.phoneInternational,
  email: business.email,
  priceRange: business.priceRange,
  founder: business.founder,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude
  },
  openingHours: business.openingHours,
  areaServed: targetLocations.map((name) => ({
    "@type": "City",
    name
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.phoneInternational,
    contactType: "customer service",
    areaServed: business.country,
    availableLanguage: ["English", "Urdu", "Punjabi"]
  },
  sameAs: [business.whatsapp]
};
