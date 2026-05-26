import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { CTABanner } from "../components/Sections";
import { PRODUCTS, PRODUCT_GRADIENTS } from "../data";

/* ── Maquinaria Page ─────────────────────────────────────────────────────── */
export function MaquinariaPage() {
  const allProducts = [
    ...PRODUCTS,
    {
      brand: "CASE Construction",
      model: "Retrocargadora 580N Tier4",
      desc: "Motor de 95 HP, transmisión PowerShift. La elección ideal para proyectos de construcción medianos.",
      code: "580N",
      badge: "Nueva",
      href: "/maquinaria-pesada/retrocargadoras/580n",
    },
    {
      brand: "DYNAPAC",
      model: "Compactador CA1500D",
      desc: "Rodillo vibratorio de 15 ton. Alta frecuencia para compactación de suelos en proyectos viales.",
      code: "CA15",
      badge: "Nueva",
      href: "/maquinaria-pesada/compactadores/ca1500d",
    },
    {
      brand: "Hitachi",
      model: "Excavadora ZX210LC-5B",
      desc: "Motor Isuzu de 157 HP, alta eficiencia de combustible. Rendimiento superior en movimiento de tierra.",
      code: "ZX210",
      badge: "Nueva",
      href: "/maquinaria-pesada/excavadoras/zx210lc",
    },
  ];

  return (
    <>
      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F5A800' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-amber-500 text-[11px] font-bold tracking-[3px] uppercase block mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Nuestro inventario
          </span>
          <h1 className="font-black text-[48px] uppercase text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Maquinaria <span className="text-amber-500">Pesada</span>
          </h1>
        </div>
      </div>

      <section className="py-20 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle eyebrow="Inventario disponible" title="Equipos en Stock" subtitle="Maquinaria nueva y usada lista para entrega inmediata en todo Colombia" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((p, i) => (
              <div key={i} className="bg-white border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`h-52 bg-gradient-to-br ${PRODUCT_GRADIENTS[i % 3]} relative overflow-hidden flex items-center justify-center`}>
                  <span className="font-black text-[48px] text-amber-500/20 select-none group-hover:scale-110 transition-transform duration-500" style={{ fontFamily: "'Oswald', sans-serif" }} aria-hidden="true">
                    {p.code}
                  </span>
                  <span className="absolute top-3 left-3 bg-amber-500 text-zinc-900 font-bold text-[11px] tracking-wider uppercase px-3 py-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {p.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-amber-500 text-[11px] font-bold tracking-[2px] uppercase mb-1">{p.brand}</p>
                  <h3 className="font-bold text-[18px] uppercase tracking-wide text-zinc-900 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.model}</h3>
                  <p className="text-[13px] text-zinc-500 font-light leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                    <Link to={p.href} className="text-amber-500 font-bold text-[13px] uppercase tracking-wide hover:text-amber-700 transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      Ver specs →
                    </Link>
                    <a href="https://wa.link/bax4s3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[12px] tracking-wide uppercase px-3 py-[6px] hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_4px_12px_rgba(37,211,102,0.45)] hover:-translate-y-px transition-all duration-200" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F5A800' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-amber-500 text-[11px] font-bold tracking-[3px] uppercase block mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Estamos para servirle
          </span>
          <h1 className="font-black text-[48px] uppercase text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
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
                  <div key={item.title} className="flex items-start gap-4 p-4 border border-zinc-100 hover:border-amber-500/30 transition-colors">
                    <div className="w-10 h-10 bg-amber-500 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-[13px] uppercase tracking-wide text-zinc-400 mb-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.title}</p>
                      <p className="text-zinc-800 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <h3 className="font-black text-[22px] uppercase text-zinc-900 mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
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
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-zinc-500 mb-1.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-zinc-200 px-4 py-3 text-[14px] text-zinc-800 focus:outline-none focus:border-amber-500 transition-colors bg-white"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wide text-zinc-500 mb-1.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describa el equipo o repuesto que necesita..."
                    className="w-full border border-zinc-200 px-4 py-3 text-[14px] text-zinc-800 focus:outline-none focus:border-amber-500 transition-colors bg-white resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-900 font-bold text-[14px] tracking-wider uppercase py-4 hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_6px_20px_rgba(245,158,11,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
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
        <span className="font-black text-[120px] text-amber-500/20 select-none block leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
          404
        </span>
        <h1 className="font-black text-[36px] uppercase text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Página no encontrada
        </h1>
        <p className="text-zinc-400 font-light mb-8">La página que buscas no existe o fue movida.</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-amber-300 hover:to-amber-400 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(245,158,11,0.5)] transition-all duration-200"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
