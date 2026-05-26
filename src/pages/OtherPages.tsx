import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SectionTitle from "../components/SectionTitle";
import { CTABanner } from "../components/Sections";
import { NEW_PRODUCTS, USED_PRODUCTS, PRODUCT_GRADIENTS } from "../data";

const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235AAF00' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`;

/* ── Maquinaria Page ─────────────────────────────────────────────────────── */
export function MaquinariaPage() {
  const { categoria } = useParams<{ categoria?: string }>();
  const isUsada = categoria === "usada";
  const isNueva = categoria === "nueva";

  const products = isUsada ? USED_PRODUCTS : NEW_PRODUCTS;

  const pageTitle = isUsada
    ? { eyebrow: "Maquinaria certificada", sub: "Usada", title: "Maquinaria", highlight: "Usada", sectionTitle: "Equipos Usados en Stock", sectionSub: "Maquinaria usada certificada lista para entrega inmediata en todo Colombia" }
    : isNueva
    ? { eyebrow: "Importación directa", sub: "Nueva", title: "Maquinaria", highlight: "Nueva", sectionTitle: "Equipos Nuevos en Stock", sectionSub: "Maquinaria nueva con garantía de fábrica lista para entrega en todo Colombia" }
    : { eyebrow: "Nuestro inventario", sub: "", title: "Maquinaria", highlight: "Pesada", sectionTitle: "Equipos en Stock", sectionSub: "Maquinaria nueva y usada lista para entrega inmediata en todo Colombia" };

  return (
    <>
      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: DOT_PATTERN }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2" >
            {pageTitle.eyebrow}
          </span>
          <h1 className="font-black text-[48px] uppercase text-white leading-tight" >
            {pageTitle.title} <span className="text-brand-accent">{pageTitle.highlight}</span>
          </h1>
        </div>
      </div>

      <section className="py-20 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle eyebrow="Inventario disponible" title={pageTitle.sectionTitle} subtitle={pageTitle.sectionSub} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-white border border-zinc-200 hover:border-[#7CD300] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group">
                <div className={`h-52 bg-gradient-to-br ${PRODUCT_GRADIENTS[i % 3]} relative overflow-hidden flex items-center justify-center`}>
                  <span className="font-black text-[48px] text-brand-accent/20 select-none group-hover:scale-110 transition-transform duration-500"  aria-hidden="true">
                    {p.code}
                  </span>
                  {/* Badge: ámbar para nueva, zinc para usada */}
                  <span
                    className={`absolute top-3 left-3 font-bold text-[11px] tracking-wider uppercase px-3 py-1 ${
                      isUsada ? "bg-zinc-600 text-white" : "bg-brand-accent text-zinc-900"
                    }`}
                    
                  >
                    {p.badge}
                  </span>
                  {/* Año en la esquina superior derecha para usados */}
                  {isUsada && p.anio && (
                    <span className="absolute top-3 right-3 bg-zinc-900/50 text-white text-[11px] font-bold px-2 py-1 backdrop-blur-sm">
                      {p.anio}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-brand-accent text-[11px] font-bold tracking-[2px] uppercase mb-1">{p.brand}</p>
                  <h3 className="font-bold text-[18px] uppercase tracking-wide text-zinc-900 mb-2 group-hover:text-brand-accent-dark transition-colors" >
                    {p.model}
                  </h3>
                  <p className="text-[13px] text-zinc-500 font-normal leading-relaxed mb-3">{p.desc}</p>

                  {/* Info extra solo en /usada */}
                  {isUsada && (
                    <div className="flex items-center gap-4 py-3 mb-1 border-y border-zinc-100">
                      {p.anio && (
                        <span className="flex items-center gap-1.5 text-[12px] font-semibold text-zinc-600">
                          <Icon icon="mdi:calendar-outline" width={15} className="text-brand-accent" />
                          Año {p.anio}
                        </span>
                      )}
                      {p.horasUso && (
                        <span className="flex items-center gap-1.5 text-[12px] font-semibold text-zinc-600">
                          <Icon icon="mdi:clock-outline" width={15} className="text-brand-accent" />
                          {p.horasUso}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                    <Link to={p.href} className="text-brand-accent font-bold text-[13px] uppercase tracking-wide hover:text-amber-700 transition-colors" >
                      Ver specs →
                    </Link>
                    <a href="https://wa.link/bax4s3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[12px] tracking-wide uppercase px-3 py-[6px] hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_4px_12px_rgba(37,211,102,0.45)] hover:-translate-y-px transition-all duration-200" >
                      <Icon icon="mdi:whatsapp" width={15} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

/* ── Contacto Page ───────────────────────────────────────────────────────── */
export function ContactoPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235AAF00' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2" >
            Estamos para servirle
          </span>
          <h1 className="font-black text-[48px] uppercase text-white leading-tight" >
            Contáctenos
          </h1>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <SectionTitle eyebrow="Información de contacto" title="Hablemos" align="left" />
              <div className="space-y-5 mt-2">
                {[
                  { icon: "📍", title: "Dirección", text: "KM 20 Autopista norte Copacabana a Girardota" },
                  { icon: "📞", title: "Teléfono", text: "316 381 5694" },
                  { icon: "✉", title: "Email", text: "comercioexterior@coninmaqsas.com" },
                  { icon: "🕐", title: "Horario", text: "Lun – Vie: 7am – 5pm | Sáb: 8am – 12pm" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 border border-zinc-100 hover:border-brand-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-brand-accent flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-[13px] uppercase tracking-wide text-zinc-400 mb-0.5" >{item.title}</p>
                      <p className="text-zinc-800 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <h3 className="font-black text-[22px] uppercase text-zinc-900 mb-6" >
                Solicitar Cotización
              </h3>
              <div className="space-y-4">
                {[
                  { id: "nombre", label: "Nombre completo", type: "text", placeholder: "Juan García" },
                  { id: "empresa", label: "Empresa", type: "text", placeholder: "Constructora XYZ S.A.S" },
                  { id: "email", label: "Correo electrónico", type: "email", placeholder: "juan@empresa.com" },
                  { id: "telefono", label: "Teléfono", type: "tel", placeholder: "300 123 4567" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-zinc-500 mb-1.5" >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-zinc-200 px-4 py-3 text-[14px] text-zinc-800 focus:outline-none focus:border-brand-accent transition-colors bg-white"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wide text-zinc-500 mb-1.5" >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describa el equipo o repuesto que necesita..."
                    className="w-full border border-zinc-200 px-4 py-3 text-[14px] text-zinc-800 focus:outline-none focus:border-brand-accent transition-colors bg-white resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase py-4 hover:from-[#7CD300] hover:to-brand-accent-light hover:shadow-[0_6px_20px_rgba(90,175,0,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                  
                >
                  Enviar Solicitud →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── 404 Not Found ───────────────────────────────────────────────────────── */
export function NotFoundPage() {
  return (
    <div className="bg-zinc-900 min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <span className="font-black text-[120px] text-brand-accent/20 select-none block leading-none" >
          404
        </span>
        <h1 className="font-black text-[36px] uppercase text-white mb-4" >
          Página no encontrada
        </h1>
        <p className="text-zinc-400 font-normal mb-8">La página que buscas no existe o fue movida.</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-[#7CD300] hover:to-brand-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(90,175,0,0.5)] transition-all duration-200"
          
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
