import { Icon } from "@iconify/react";

interface Faq {
  q: string;
  a: string;
}

interface CategoryContent {
  /** Párrafos de introducción (contenido SEO fijo, no API) */
  intro: string[];
  whyTitle: string;
  why: string[];
  faqs: Faq[];
}

/**
 * Contenido SEO editorial por categoría de maquinaria.
 * Es texto fijo (evergreen) que NO viene del API — su propósito es dar a
 * Google contexto real para posicionar cada página de categoría.
 */
export const CATEGORY_SEO: Record<string, CategoryContent> = {
  excavadoras: {
    intro: [
      "En Coninmaq S.A.S importamos, vendemos y rentamos excavadoras para construcción, minería y obra civil en toda Colombia. Como distribuidor oficial y autorizado de LONKING, ofrecemos equipos nuevos de importación directa.",
      "Con más de 10 años de experiencia en el mercado colombiano, respaldamos cada equipo con repuestos originales y servicio técnico certificado. Desde nuestra sede en Copacabana, Antioquia, atendemos proyectos en todo el país.",
    ],
    whyTitle: "¿Por qué comprar tu excavadora en Coninmaq?",
    why: [
      "Distribuidor oficial LONKING — importación directa, sin intermediarios",
      "Maquinaria usada certificada y revisada",
      "Repuestos originales y servicio técnico propio",
      "Entrega en todo Colombia",
      "+10 años respaldando al sector construcción y minería",
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta una excavadora en Colombia?",
        a: "El precio varía según la marca, el tamaño y si es nueva o usada. En Coninmaq te damos una cotización personalizada sin costo; contáctanos con los requerimientos de tu proyecto.",
      },
      {
        q: "¿Las excavadoras usadas tienen garantía?",
        a: "Sí. Toda nuestra maquinaria usada es certificada y revisada técnicamente antes de la entrega para que compres con tranquilidad.",
      },
      {
        q: "¿Hacen entregas fuera de Antioquia?",
        a: "Sí, despachamos a todo el territorio colombiano desde nuestra sede en Copacabana, Antioquia.",
      },
    ],
  },
};

/** Genera el JSON-LD de FAQPage para que las preguntas salgan en Google. */
export function categoryFaqSchema(categoria?: string) {
  const content = categoria ? CATEGORY_SEO[categoria] : undefined;
  if (!content || content.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function CategorySeo({ categoria }: { categoria?: string }) {
  const content = categoria ? CATEGORY_SEO[categoria] : undefined;
  if (!content) return null;

  return (
    <section className="py-16 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Intro */}
        <div className="mb-12">
          {content.intro.map((p, i) => (
            <p key={i} className="text-[15px] text-zinc-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>

        {/* ¿Por qué comprar aquí? */}
        <h2 className="font-black text-[22px] md:text-[28px] uppercase text-zinc-900 mb-5">
          {content.whyTitle}
        </h2>
        <ul className="space-y-3 mb-14">
          {content.why.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-zinc-700">
              <Icon icon="mdi:check-circle" width={22} className="text-brand-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Preguntas frecuentes */}
        {content.faqs.length > 0 && (
          <>
            <h2 className="font-black text-[22px] md:text-[28px] uppercase text-zinc-900 mb-6">
              Preguntas frecuentes
            </h2>
            <div className="space-y-5">
              {content.faqs.map((f, i) => (
                <div key={i} className="border-b border-zinc-200 pb-5">
                  <h3 className="font-bold text-[16px] text-zinc-900 mb-2">{f.q}</h3>
                  <p className="text-[14px] text-zinc-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
