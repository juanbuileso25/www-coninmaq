import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CTABanner } from "../components/Sections";
import { NEW_PRODUCTS, USED_PRODUCTS, PRODUCT_GRADIENTS } from "../data";
import { MACHINE_DETAIL_MAP } from "../data/detailData";
import type { Product, MachineDetailData } from "../types";

const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235AAF00' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`;

const CONDITION_COLOR: Record<string, string> = {
  Excelente: "text-emerald-600 bg-emerald-50 border-emerald-200",
  "Muy bueno": "text-blue-600 bg-blue-50 border-blue-200",
  Bueno: "text-brand-accent-dark bg-amber-50 border-amber-200",
};

const CONDITION_BAR: Record<string, number> = {
  Excelente: 95,
  "Muy bueno": 80,
  Bueno: 65,
};

/* ── Carousel ────────────────────────────────────────────────────────────── */
function MachineCarousel({
  code,
  gradient,
  slideLabels,
  isUsada,
}: {
  code: string;
  gradient: string;
  slideLabels: string[];
  isUsada: boolean;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main slide */}
      <div
        className={`h-72 md:h-[400px] bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center group`}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: DOT_PATTERN }}
        />
        <span
          className="font-black text-[90px] md:text-[130px] text-brand-accent/15 select-none group-hover:scale-105 transition-transform duration-700"
          
          aria-hidden="true"
        >
          {code}
        </span>

        {/* View label */}
        <div className="absolute bottom-4 left-4 bg-zinc-900/60 backdrop-blur-sm px-3 py-1.5">
          <span className="text-white text-[11px] font-bold tracking-[2px] uppercase">
            {slideLabels[active]}
          </span>
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 bg-zinc-900/50 backdrop-blur-sm px-2.5 py-1">
          <span className="text-white text-[11px] font-semibold">
            {active + 1} / {slideLabels.length}
          </span>
        </div>

        {/* Condition overlay for used */}
        {isUsada && (
          <div className="absolute top-4 left-4 bg-zinc-800/80 backdrop-blur-sm border border-brand-accent/30 px-3 py-1.5">
            <span className="text-brand-accent-light text-[10px] font-bold tracking-[2px] uppercase flex items-center gap-1.5">
              <Icon icon="mdi:shield-check-outline" width={13} />
              Certificada
            </span>
          </div>
        )}

        {/* Arrows */}
        <button
          onClick={() => setActive((active - 1 + slideLabels.length) % slideLabels.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-900/40 hover:bg-brand-accent flex items-center justify-center transition-colors duration-200"
          aria-label="Anterior"
        >
          <Icon icon="mdi:chevron-left" width={22} className="text-white" />
        </button>
        <button
          onClick={() => setActive((active + 1) % slideLabels.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-900/40 hover:bg-brand-accent flex items-center justify-center transition-colors duration-200"
          aria-label="Siguiente"
        >
          <Icon icon="mdi:chevron-right" width={22} className="text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {slideLabels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 transition-all duration-200 ${
                i === active ? "bg-brand-accent w-5" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {slideLabels.map((label, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 h-[72px] bg-gradient-to-br ${gradient} relative overflow-hidden border-2 transition-all duration-200 ${
              i === active ? "border-brand-accent" : "border-transparent opacity-60 hover:opacity-80"
            }`}
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: DOT_PATTERN }}
            />
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[18px] text-brand-accent/30 select-none"
              
            >
              {code}
            </span>
            <span className="absolute bottom-1.5 left-2 text-white/70 text-[9px] font-bold uppercase tracking-wide leading-tight">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Tabs: Descripción / Especificaciones ────────────────────────────────── */
function DetailTabs({ product, detail }: { product: Product; detail: MachineDetailData | undefined }) {
  const [tab, setTab] = useState<"desc" | "specs">("desc");

  return (
    <div className="mt-6">
      {/* Tab switcher */}
      <div className="flex border-b border-zinc-200">
        {(["desc", "specs"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-[2px] ${
              tab === t
                ? "border-brand-accent text-brand-accent-dark"
                : "border-transparent text-zinc-400 hover:text-zinc-700"
            }`}
            
          >
            {t === "desc" ? "Descripción" : "Especificaciones técnicas"}
          </button>
        ))}
      </div>

      {tab === "desc" ? (
        <div className="pt-5 space-y-4">
          <p className="text-[14px] text-zinc-600 leading-relaxed">{product.desc}</p>
          <div className="space-y-2.5">
            {detail?.highlights.map((h: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon icon="mdi:check" width={12} className="text-zinc-900" />
                </div>
                <p className="text-[13px] text-zinc-700 leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="pt-5">
          <div className="divide-y divide-zinc-100">
            {detail?.specs.map((spec: { label: string; value: string; icon?: string }, i: number) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3 px-2 ${
                  i % 2 === 0 ? "bg-zinc-50/50" : ""
                }`}
              >
                <span className="flex items-center gap-2 text-[12px] font-semibold text-zinc-500 uppercase tracking-wide">
                  {spec.icon && (
                    <Icon icon={spec.icon} width={14} className="text-brand-accent" />
                  )}
                  {spec.label}
                </span>
                <span className="text-[13px] font-bold text-zinc-800 text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Sidebar info card ───────────────────────────────────────────────────── */
function SidebarCard({
  product,
  detail,
  isUsada,
}: {
  product: Product;
  detail: MachineDetailData | undefined;
  isUsada: boolean;
}) {
  const waLink = "https://wa.link/bax4s3";
  const condicion = detail?.condicion;
  const barWidth = condicion ? CONDITION_BAR[condicion] ?? 70 : 0;

  return (
    <div className="bg-white border border-zinc-200 shadow-sm">
      {/* Header */}
      <div className="bg-zinc-900 p-5">
        <p className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase mb-1">
          {product.brand}
        </p>
        <h2
          className="font-black text-[22px] uppercase text-white leading-tight"
          
        >
          {product.model}
        </h2>
        <div className="mt-2 flex gap-2 flex-wrap">
          <span
            className={`inline-block text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 ${
              isUsada ? "bg-zinc-600 text-white" : "bg-brand-accent text-zinc-900"
            }`}
            
          >
            {product.badge}
          </span>
          {isUsada && product.anio && (
            <span className="inline-flex items-center gap-1 bg-zinc-700 text-zinc-300 text-[10px] font-bold tracking-wide uppercase px-3 py-1">
              <Icon icon="mdi:calendar-outline" width={11} />
              {product.anio}
            </span>
          )}
        </div>
      </div>

      {/* Key stats */}
      <div className="p-5 space-y-4">
        {/* Year & Hours for used */}
        {isUsada && (
          <div className="grid grid-cols-2 gap-3">
            {product.anio && (
              <div className="bg-zinc-50 border border-zinc-100 p-3 text-center">
                <Icon icon="mdi:calendar-outline" width={20} className="text-brand-accent mx-auto mb-1" />
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Año</p>
                <p className="text-[18px] font-black text-zinc-900" >
                  {product.anio}
                </p>
              </div>
            )}
            {product.horasUso && (
              <div className="bg-zinc-50 border border-zinc-100 p-3 text-center">
                <Icon icon="mdi:clock-outline" width={20} className="text-brand-accent mx-auto mb-1" />
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Horas</p>
                <p className="text-[18px] font-black text-zinc-900" >
                  {product.horasUso}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Condition bar for used */}
        {isUsada && condicion && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wide">
                Condición general
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 border ${CONDITION_COLOR[condicion]}`}
              >
                {condicion}
              </span>
            </div>
            <div className="h-2 bg-zinc-100 w-full">
              <div
                className="h-2 bg-brand-accent transition-all duration-700"
                style={{ width: `${barWidth}%` }}
              />
            </div>
            {detail?.inspeccion && (
              <p className="text-[11px] text-zinc-400 mt-2 flex items-center gap-1.5">
                <Icon icon="mdi:shield-check-outline" width={13} className="text-emerald-500" />
                {detail.inspeccion}
              </p>
            )}
          </div>
        )}

        {/* Warranty / delivery for new */}
        {!isUsada && (
          <div className="space-y-2">
            {detail?.garantia && (
              <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100">
                <Icon icon="mdi:shield-check-outline" width={18} className="text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">Garantía de fábrica</p>
                  <p className="text-[13px] font-bold text-emerald-800">{detail.garantia}</p>
                </div>
              </div>
            )}
            {detail?.entrega && (
              <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100">
                <Icon icon="mdi:truck-delivery-outline" width={18} className="text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-blue-700 font-bold uppercase tracking-wide">Tiempo de entrega</p>
                  <p className="text-[13px] font-bold text-blue-800">{detail.entrega}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100">
              <Icon icon="mdi:airplane" width={18} className="text-brand-accent-dark flex-shrink-0" />
              <div>
                <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wide">Importación directa</p>
                <p className="text-[13px] font-bold text-amber-800">Sin intermediarios</p>
              </div>
            </div>
          </div>
        )}

        {/* Price */}
        <div className="border-t border-zinc-100 pt-4">
          <p className="text-[11px] text-zinc-400 uppercase tracking-wide font-semibold mb-0.5">
            Precio
          </p>
          <p
            className="text-[22px] font-black text-zinc-900"
            
          >
            Consultar precio
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            Financiación disponible — cuotas personalizadas
          </p>
        </div>

        {/* CTA buttons */}
        <div className="space-y-2.5 pt-1">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[13px] tracking-wider uppercase py-3.5 hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200"
            
          >
            <Icon icon="mdi:whatsapp" width={18} />
            Consultar por WhatsApp
          </a>
          <a
            href="/contacto"
            className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[13px] tracking-wider uppercase py-3.5 hover:from-[#7CD300] hover:to-brand-accent-light hover:shadow-[0_6px_20px_rgba(90,175,0,0.45)] hover:-translate-y-0.5 transition-all duration-200"
            
          >
            <Icon icon="mdi:file-document-outline" width={18} />
            Solicitar cotización
          </a>
          <a
            href="tel:3163815694"
            className="flex items-center justify-center gap-2 w-full border border-zinc-200 text-zinc-600 font-semibold text-[12px] tracking-wide uppercase py-2.5 hover:border-brand-accent hover:text-brand-accent-dark transition-all duration-200"
          >
            <Icon icon="mdi:phone" width={15} />
            316 381 5694
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Related machines ────────────────────────────────────────────────────── */
function RelatedMachines({ currentHref, isUsada }: { currentHref: string; isUsada: boolean }) {
  const pool = isUsada ? USED_PRODUCTS : NEW_PRODUCTS;
  const related = pool.filter((p) => p.href !== currentHref).slice(0, 3);
  if (!related.length) return null;

  return (
    <section className="py-16 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3
          className="font-black text-[28px] uppercase text-zinc-900 mb-8"
          
        >
          También te puede{" "}
          <span className="text-brand-accent">interesar</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((p, i) => (
            <Link
              key={i}
              to={p.href}
              className="bg-white border border-zinc-200 hover:border-[#7CD300] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`h-36 bg-gradient-to-br ${PRODUCT_GRADIENTS[i % 3]} flex items-center justify-center relative overflow-hidden`}
              >
                <span
                  className="font-black text-[44px] text-brand-accent/15 select-none group-hover:scale-110 transition-transform duration-500"
                  
                >
                  {p.code}
                </span>
                <span
                  className={`absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 ${
                    isUsada ? "bg-zinc-600 text-white" : "bg-brand-accent text-zinc-900"
                  }`}
                >
                  {p.badge}
                </span>
              </div>
              <div className="p-4">
                <p className="text-brand-accent text-[10px] font-bold tracking-[2px] uppercase mb-0.5">
                  {p.brand}
                </p>
                <h4
                  className="font-bold text-[15px] uppercase text-zinc-900 group-hover:text-brand-accent-dark transition-colors"
                  
                >
                  {p.model}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why-us strip ────────────────────────────────────────────────────────── */
const WHY_ITEMS = [
  { icon: "mdi:shield-check-outline", label: "Garantía respaldada", desc: "Soporte postventa en todo Colombia" },
  { icon: "mdi:truck-delivery-outline", label: "Entrega a domicilio", desc: "Coordinamos el transporte hasta la obra" },
  { icon: "mdi:finance", label: "Financiación disponible", desc: "Cuotas adaptadas a su proyecto" },
  { icon: "mdi:headset", label: "Asesoría técnica", desc: "Ingenieros especializados disponibles" },
];

function WhyUsStrip() {
  return (
    <div className="bg-white border-y border-zinc-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {WHY_ITEMS.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon icon={item.icon} width={20} className="text-brand-accent" />
              </div>
              <div>
                <p
                  className="font-bold text-[13px] uppercase tracking-wide text-zinc-800"
                  
                >
                  {item.label}
                </p>
                <p className="text-[12px] text-zinc-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────────────────── */
export default function MaquinaDetailPage() {
  const { categoria, modelo } = useParams<{ categoria: string; modelo: string }>();
  const isUsada = modelo?.endsWith("-usada") ?? false;

  const allProducts: Product[] = [...NEW_PRODUCTS, ...USED_PRODUCTS];
  const product = allProducts.find((p) => p.href.endsWith(`/${modelo}`));
  const detail = modelo ? MACHINE_DETAIL_MAP[modelo] : undefined;

  // Fallback if not found
  if (!product) {
    return (
      <div className="bg-zinc-900 min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <span
            className="font-black text-[80px] text-brand-accent/20 block"
            
          >
            ?
          </span>
          <h1
            className="font-black text-[28px] uppercase text-white mb-4"
            
          >
            Equipo no encontrado
          </h1>
          <Link
            to="/maquinaria-pesada"
            className="inline-flex items-center gap-2 bg-brand-accent text-zinc-900 font-bold text-[13px] uppercase px-6 py-3"
          >
            <Icon icon="mdi:arrow-left" width={16} />
            Ver inventario
          </Link>
        </div>
      </div>
    );
  }

  const gradientIndex = NEW_PRODUCTS.findIndex((p) => p.href.endsWith(`/${modelo}`));
  const gradient = PRODUCT_GRADIENTS[Math.abs(gradientIndex) % 3];
  const slideLabels = detail?.slideLabels ?? ["Vista General", "Vista Lateral", "Detalle Técnico"];

  // Breadcrumb label for category
  const catLabel =
    categoria === "excavadoras"
      ? "Excavadoras"
      : categoria === "bulldozers"
      ? "Bulldozers"
      : categoria === "compactadores"
      ? "Compactadores"
      : categoria === "minicargadores"
      ? "Minicargadores"
      : categoria === "motoniveladoras"
      ? "Motoniveladoras"
      : categoria === "miniexcavadoras"
      ? "Miniexcavadoras"
      : categoria === "retrocargadoras"
      ? "Retrocargadoras"
      : "Maquinaria";

  return (
    <>
      {/* Dark header */}
      <div className="bg-zinc-900 py-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: DOT_PATTERN }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-zinc-500 mb-4 flex-wrap">
            <Link to="/" className="hover:text-brand-accent transition-colors">
              Inicio
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <Link to="/maquinaria-pesada" className="hover:text-brand-accent transition-colors">
              Maquinaria Pesada
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <Link
              to={`/maquinaria-pesada/${categoria}`}
              className="hover:text-brand-accent transition-colors"
            >
              {catLabel}
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <span className="text-zinc-300 font-semibold">{product.code}</span>
          </nav>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span
                className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-1"
                
              >
                {product.brand}
              </span>
              <h1
                className="font-black text-[36px] md:text-[48px] uppercase text-white leading-tight"
                
              >
                {product.model}
              </h1>
            </div>
            <span
              className={`inline-block text-[12px] font-bold tracking-[2px] uppercase px-4 py-2 self-end ${
                isUsada ? "bg-zinc-600 text-white" : "bg-brand-accent text-zinc-900"
              }`}
              
            >
              {product.badge}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
            {/* Left: carousel + tabs */}
            <div>
              <MachineCarousel
                code={product.code}
                gradient={gradient}
                slideLabels={slideLabels}
                isUsada={isUsada}
              />
              {detail && (
                <DetailTabs product={product} detail={detail} />
              )}
            </div>

            {/* Right: sticky info card */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SidebarCard product={product} detail={detail} isUsada={isUsada} />
            </div>
          </div>
        </div>
      </section>

      <WhyUsStrip />
      <RelatedMachines currentHref={product.href} isUsada={isUsada} />
      <CTABanner />
    </>
  );
}
