import Hero from "../components/Hero";
import {
  ServicesStrip,
  Categories,
  Brands,
  About,
  Products,
  CTABanner,
  Testimonials,
} from "../components/Sections";
import SEO from "../components/SEO";
import { LOCAL_BUSINESS_LD, SITE_URL } from "../seo/config";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Coninmaq S.A.S",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/repuestos?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Maquinaria Pesada en Colombia — Excavadoras, Bulldozers, Compactadores"
        description="Coninmaq S.A.S — Líderes en maquinaria pesada en Colombia. Venta e importación de excavadoras, bulldozers, compactadores, motoniveladoras nuevas y usadas. Marcas CASE, Caterpillar, Hitachi, DYNAPAC. Repuestos originales. Antioquia."
        keywords="Coninmaq, maquinaria pesada Colombia, excavadoras venta Colombia, bulldozers Colombia, compactadores Colombia, motoniveladoras Colombia, maquinaria CASE Colombia, Caterpillar Colombia, Hitachi Colombia, DYNAPAC Colombia, maquinaria nueva usada Antioquia, importacion maquinaria Colombia, maquinaria construccion Colombia, maquinaria mineria Colombia"
        path="/"
        jsonLd={[LOCAL_BUSINESS_LD, homeSchema]}
      />
      <Hero />
      <ServicesStrip />
      <Categories />
      <Brands />
      <About />
      <Products />
      <CTABanner />
      <Testimonials />
    </>
  );
}
