import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SectionTitle from "./SectionTitle";
import { useInView } from "../hooks/useInView";
import {
  SERVICES,
  CATEGORIES,
  CAT_GRADIENTS,
  BRANDS,
  ABOUT_FEATURES,
  PRODUCTS,
  PRODUCT_GRADIENTS,
  TESTIMONIALS,
} from "../data";

/* ── Services Strip ──────────────────────────────────────────────────────── */
export function ServicesStrip() {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className="bg-white border-b border-zinc-100 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-5 sm:px-6 py-6 sm:py-7 cursor-pointer group hover:bg-zinc-50 transition-all duration-300
                ${i % 2 === 0 ? "border-r border-zinc-100" : ""}
                ${i < 2 ? "border-b border-zinc-100 md:border-b-0" : ""}
                ${i < SERVICES.length - 1 ? "md:border-r md:border-zinc-100" : "md:border-r-0"}
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 bg-amber-500 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(245,158,11,0.4)] transition-all duration-300 text-zinc-900">
                <Icon icon={s.icon} width={24} />
              </div>
              <div>
                <h3
                  className="font-bold text-[14px] uppercase tracking-wide text-zinc-900 group-hover:text-amber-600 transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[12px] text-zinc-500 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Categories ──────────────────────────────────────────────────────────── */
export function Categories() {
  const { ref, inView } = useInView();
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Nuestro Portafolio"
          title="Categorías de Maquinaria"
          subtitle="Amplio inventario de maquinaria pesada para construcción, minería y obras civiles"
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={i}
              to={cat.href}
              className={`relative overflow-hidden flex items-end cursor-pointer group ${
                cat.span ? "lg:row-span-2" : "h-64"
              } transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                minHeight: cat.span ? "544px" : undefined,
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${CAT_GRADIENTS[i]}`} />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/75 transition-all duration-400" />
              {/* zoom layer */}
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
              {/* amber border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/40 transition-all duration-300" />
              {/* watermark text */}
              <div
                className="absolute inset-0 flex items-center justify-center font-black text-[80px] text-amber-500/[0.1] select-none leading-none tracking-tighter group-hover:text-amber-500/[0.18] transition-all duration-500"
                style={{ fontFamily: "'Oswald', sans-serif" }}
                aria-hidden="true"
              >
                {cat.code}
              </div>
              {/* content */}
              <div className="relative z-10 p-6 w-full">
                <h3
                  className="font-bold text-[22px] text-white uppercase tracking-wide mb-1 group-hover:text-amber-400 transition-colors duration-300"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {cat.label}
                </h3>
                <p className="text-white/60 text-[13px] font-light mb-3">{cat.desc}</p>
                <span
                  className="inline-flex items-center gap-2 bg-amber-500 text-zinc-900 font-bold text-[11px] tracking-wider uppercase px-3.5 py-[6px] group-hover:bg-amber-400 group-hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Ver equipos
                  <Icon icon="mdi:arrow-right" width={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Brands ──────────────────────────────────────────────────────────────── */
export function Brands() {
  const doubled = [...BRANDS, ...BRANDS];
  return (
    <section className="bg-zinc-900 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Marcas Representadas"
          title="Trabajamos con los Mejores"
          subtitle="Distribuidores autorizados de las marcas líderes en maquinaria pesada a nivel mundial"
          light
        />
      </div>
      {/* Marquee */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-4 px-8 py-5 border-r border-white/[0.06] group cursor-default hover:bg-amber-500/10 transition-colors duration-300"
            >
              <span
                className="font-bold text-[15px] text-zinc-500 group-hover:text-amber-400 transition-colors duration-300 uppercase tracking-widest"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About ───────────────────────────────────────────────────────────────── */
export function About() {
  const { ref, inView } = useInView(0.1);
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div
            className={`relative pb-8 lg:pb-0 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="w-full h-[400px] bg-zinc-900 flex items-center justify-center overflow-hidden relative">
              {/* Pulsing amber center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
              </div>
              <span
                className="relative font-black text-[110px] text-amber-500/[0.13] select-none tracking-tighter"
                style={{ fontFamily: "'Oswald', sans-serif" }}
                aria-hidden="true"
              >
                PART
              </span>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-500" />
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-5 w-[110px] h-[110px] bg-amber-500 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(245,158,11,0.5)] hover:scale-105 transition-transform duration-300">
              <span
                className="font-black text-[36px] text-zinc-900 leading-none"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                +7
              </span>
              <span className="text-[10px] font-bold text-black/60 uppercase text-center tracking-wide leading-tight px-2">
                años de<br />experiencia
              </span>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <SectionTitle eyebrow="Sobre Nosotros" title="" align="left" />
            <h2
              className="font-black text-[36px] uppercase tracking-wide text-zinc-900 leading-tight mb-5 -mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Líderes en{" "}
              <span className="text-amber-500">Maquinaria Pesada</span>{" "}
              en Colombia
            </h2>
            <p className="text-zinc-500 font-light text-[16px] leading-relaxed mb-4">
              Con más de dos décadas de experiencia en el sector, CONINMAQ
              se destaca como líder en soluciones integrales para maquinaria
              pesada en Colombia.
            </p>
            <p className="text-zinc-500 font-light text-[16px] leading-relaxed mb-6">
              Nuestro equipo de ingenieros y técnicos especializados garantiza
              el mejor servicio postventa, repuestos originales y mantenimiento
              preventivo para toda la vida útil de sus equipos.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {ABOUT_FEATURES.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-center gap-2 text-[14px] text-zinc-700 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 60}ms` }}
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Link
              to="/nosotros"
              className="inline-block bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-amber-300 hover:to-amber-400 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(245,158,11,0.5)] transition-all duration-200"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Conocer más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Products ────────────────────────────────────────────────────────────── */
export function Products() {
  const { ref, inView } = useInView(0.1);
  return (
    <section className="py-20 bg-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Equipos Destacados"
          title="Maquinaria Disponible"
          subtitle="Selección de equipos en stock listos para entrega inmediata"
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className={`bg-white border border-zinc-200 hover:border-amber-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`h-52 bg-gradient-to-br ${PRODUCT_GRADIENTS[i]} relative overflow-hidden flex items-center justify-center`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-all duration-300" />
                <span
                  className="font-black text-[52px] text-amber-500/20 select-none group-hover:scale-110 group-hover:text-amber-500/30 transition-all duration-500"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                  aria-hidden="true"
                >
                  {p.code}
                </span>
                <span
                  className="absolute top-3 left-3 bg-amber-500 text-zinc-900 font-bold text-[11px] tracking-wider uppercase px-3 py-1 shadow-lg"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {p.badge}
                </span>
              </div>

              <div className="p-5">
                <p className="text-amber-500 text-[11px] font-bold tracking-[2px] uppercase mb-1">
                  {p.brand}
                </p>
                <h3
                  className="font-bold text-[18px] uppercase tracking-wide text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors duration-200"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {p.model}
                </h3>
                <p className="text-[13px] text-zinc-500 font-light leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                  <Link
                    to={p.href}
                    className="text-amber-500 font-bold text-[13px] uppercase tracking-wide hover:text-amber-600 hover:gap-2 transition-all duration-200 flex items-center gap-1"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Ver specs →
                  </Link>
                  <a
                    href="https://wa.link/bax4s3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[12px] tracking-wide uppercase px-3 py-[6px] hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_4px_12px_rgba(37,211,102,0.45)] hover:-translate-y-px transition-all duration-200"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <Icon icon="mdi:whatsapp" width={15} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/maquinaria-pesada"
            className="inline-block bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-10 py-4 hover:from-amber-300 hover:to-amber-400 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(245,158,11,0.5)] transition-all duration-200"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Ver todo el catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ──────────────────────────────────────────────────────────── */
export function CTABanner() {
  return (
    <section className="relative bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-16 overflow-hidden">
      {/* Diagonal animated stripe */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            #000 20px,
            #000 21px
          )`,
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-black text-[34px] uppercase tracking-wide text-zinc-900 leading-tight mb-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              ¿Necesita una cotización?
            </h2>
            <p className="text-black/60 font-light text-[16px]">
              Nuestros asesores comerciales están listos. Respuesta en menos de 2 horas.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0 flex-wrap">
            <a
              href="tel:3176707071"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-zinc-700 hover:to-zinc-800 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-200"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Icon icon="mdi:phone" width={18} />
              316 381 5694
            </a>
            <a
              href="https://wa.link/bax4s3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-zinc-900/80 text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-zinc-900 transition-all duration-200"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Icon icon="mdi:whatsapp" width={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ────────────────────────────────────────────────────────── */
export function Testimonials() {
  const { ref, inView } = useInView(0.1);
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="Lo que dicen nuestros clientes" title="Clientes Satisfechos" />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`bg-white border-l-4 border-amber-500 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 p-7 relative group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote mark */}
              <span
                className="absolute top-3 right-5 font-black text-[64px] text-amber-500/20 leading-none select-none group-hover:text-amber-500/30 transition-colors duration-300"
                style={{ fontFamily: "'Oswald', sans-serif" }}
                aria-hidden="true"
              >
                "
              </span>
              <div className="flex gap-0.5 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" width={14} />)}
              </div>
              <p className="text-[14px] text-zinc-500 font-light leading-relaxed mb-5">
                {t.text}
              </p>
              <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
                <div
                  className="w-11 h-11 bg-zinc-900 flex items-center justify-center font-black text-[15px] text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-zinc-900 transition-all duration-300"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-bold text-[14px] uppercase text-zinc-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[12px] text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
