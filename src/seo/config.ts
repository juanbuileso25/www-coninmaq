export const SITE_URL = "https://coninmaqsas.com";
export const SITE_NAME = "Coninmaq S.A.S";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+573163815694",
  email: "comercioexterior@coninmaqsas.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "KM 20 Autopista norte Copacabana a Girardota",
    addressLocality: "Copacabana",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/coninmaq/",
    "https://www.linkedin.com/company/coninmaq/",
    "https://www.facebook.com/Coninmaq",
  ],
  description:
    "Coninmaq S.A.S — Más de 7 años como líderes en maquinaria pesada en Colombia. Venta, importación y mantenimiento de excavadoras, bulldozers, compactadores, motoniveladoras y más. Repuestos CASE, Caterpillar, Komatsu, Bobcat.",
};

export const LOCAL_BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+573163815694",
  email: "comercioexterior@coninmaqsas.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "KM 20 Autopista norte Copacabana a Girardota",
    addressLocality: "Copacabana",
    addressRegion: "Antioquia",
    postalCode: "050010",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.3468,
    longitude: -75.5081,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/coninmaq/",
    "https://www.linkedin.com/company/coninmaq/",
    "https://www.facebook.com/Coninmaq",
  ],
  description:
    "Coninmaq S.A.S — Líderes en maquinaria pesada en Colombia. Excavadoras, bulldozers, compactadores, motoniveladoras nuevas y usadas. Repuestos CASE, Caterpillar, Komatsu, Bobcat y más.",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Maquinaria Pesada y Repuestos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Excavadoras CASE y Caterpillar" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bulldozers CASE Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Compactadores DYNAPAC" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Motoniveladoras CASE" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Repuestos Originales y Aftermarket" } },
    ],
  },
};
