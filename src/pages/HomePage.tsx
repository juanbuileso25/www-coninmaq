import Hero from "../components/Hero";
import {
  ServicesStrip,
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
        title="Maquinaria Pesada en Colombia — Excavadoras, Cargadores, Retrocargadoras"
        description="Coninmaq S.A.S — Distribuidor oficial LONKING y líderes en maquinaria pesada en Colombia. Venta, importación y renta de excavadoras, miniexcavadoras, cargadores, minicargadores y retrocargadoras nuevas y usadas. Repuestos CASE, Caterpillar, Komatsu, Bobcat. Antioquia."
        keywords="Coninmaq, maquinaria pesada Colombia, maquinaria amarilla Colombia, excavadoras venta Colombia, miniexcavadoras Colombia, cargadores Colombia, minicargadores Colombia, retrocargadoras Colombia, LONKING Colombia, maquinaria nueva usada Antioquia, importacion maquinaria Colombia, maquinaria construccion Colombia, maquinaria mineria Colombia"
        path="/"
        jsonLd={[LOCAL_BUSINESS_LD, homeSchema]}
      />
      <Hero />
      <ServicesStrip />
      <About />
      <Products />
      <CTABanner />
      <Testimonials />
    </>
  );
}
