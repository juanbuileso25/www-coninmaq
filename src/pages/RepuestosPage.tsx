import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { CTABanner } from "../components/Sections";
import { PARTS_DATA, BRAND_LABELS, PART_CATEGORIES } from "../data/detailData";
import type { Part } from "../types";
import SEO from "../components/SEO";

const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFC837' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`;

const TYPE_STYLE: Record<string, string> = {
  OEM: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Aftermarket: "bg-blue-50 text-blue-700 border-blue-200",
};

/* ── Part card for listings ──────────────────────────────────────────────── */
function PartCard({ part }: { part: Part }) {
  const { t } = useTranslation();

  return (
    <Link
      to={`/repuestos/${part.brand}/${part.slug}`}
      className="bg-white border border-zinc-200 hover:border-brand-accent hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
    >
      {/* Visual header */}
      <div className="h-32 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: DOT_PATTERN }} />
        <Icon
          icon="mdi:cog-outline"
          width={60}
          className="text-brand-accent/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`text-[9px] font-bold tracking-wide uppercase px-2 py-1 border ${TYPE_STYLE[part.type]}`}>
            {part.type}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-zinc-900/50 backdrop-blur-sm px-2 py-1">
          <span className="text-white text-[10px] font-bold">{part.code}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-brand-accent text-[10px] font-bold tracking-[2px] uppercase mb-1">
          {part.category}
        </p>
        <h3 className="font-bold text-[16px] uppercase text-zinc-900 mb-2 group-hover:text-brand-accent-dark transition-colors leading-tight">
          {part.name}
        </h3>
        <p className="text-[12px] text-zinc-500 leading-relaxed mb-3 flex-1 line-clamp-2">
          {part.desc}
        </p>

        {/* Compatibility chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {part.compatibility.slice(0, 3).map((c) => (
            <span key={c} className="bg-zinc-100 text-zinc-600 text-[10px] font-semibold px-2 py-0.5">
              {c}
            </span>
          ))}
          {part.compatibility.length > 3 && (
            <span className="bg-zinc-100 text-zinc-400 text-[10px] px-2 py-0.5">
              +{part.compatibility.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 border-t border-zinc-100 pt-3">
          <span className="text-brand-accent font-bold text-[12px] uppercase tracking-wide group-hover:text-amber-700 transition-colors flex-1">
            {t("pages.parts.viewDetail")}
          </span>
          <a
            href="https://wa.me/573163815694"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[10px] tracking-wide uppercase px-2.5 py-1.5 hover:from-[#25D366] hover:to-[#1aaa50] transition-all duration-200"
          >
            <Icon icon="mdi:whatsapp" width={13} />
            {t("pages.parts.quote")}
          </a>
        </div>
      </div>
    </Link>
  );
}

/* ── Parts listing page ──────────────────────────────────────────────────── */
export function RepuestosListPage() {
  const { t } = useTranslation();
  const { marca } = useParams<{ marca?: string }>();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const brands = ["Todos", "caterpillar", "case", "bobcat", "komatsu"];
  const activeBrand = marca && brands.includes(marca) ? marca : "Todos";

  const filtered = PARTS_DATA.filter((p) => {
    const brandMatch = activeBrand === "Todos" || p.brand === activeBrand;
    const catMatch = activeCategory === "Todos" || p.category === activeCategory;
    return brandMatch && catMatch;
  });

  const brandLabel = activeBrand !== "Todos" ? BRAND_LABELS[activeBrand] : t("pages.parts.allBrands");

  const partsMeta = activeBrand === "caterpillar"
    ? { title: "Repuestos Caterpillar en Colombia — Originales y Aftermarket", description: "Repuestos Caterpillar originales y aftermarket en Colombia. +10.000 referencias disponibles. Entrega en 24-48h a todo el país. Coninmaq S.A.S — Antioquia.", keywords: "repuestos Caterpillar Colombia, partes Caterpillar Colombia, repuestos CAT Colombia, filtros Caterpillar Colombia", path: "/repuestos/caterpillar" }
    : activeBrand === "case"
    ? { title: "Repuestos CASE Construction en Colombia — Originales y Aftermarket", description: "Repuestos CASE Construction originales y aftermarket en Colombia. +10.000 referencias disponibles. Entrega en 24-48h a todo el país. Coninmaq S.A.S.", keywords: "repuestos CASE Colombia, partes CASE Colombia, repuestos CASE Construction Colombia, filtros CASE Colombia", path: "/repuestos/case" }
    : activeBrand === "komatsu"
    ? { title: "Repuestos Komatsu en Colombia — Originales y Aftermarket", description: "Repuestos Komatsu originales y aftermarket en Colombia. +10.000 referencias disponibles. Entrega en 24-48h a todo el país. Coninmaq S.A.S.", keywords: "repuestos Komatsu Colombia, partes Komatsu Colombia, filtros Komatsu Colombia, repuestos maquinaria Komatsu", path: "/repuestos/komatsu" }
    : activeBrand === "bobcat"
    ? { title: "Repuestos Bobcat en Colombia — Originales y Aftermarket", description: "Repuestos Bobcat originales y aftermarket en Colombia. +10.000 referencias disponibles. Entrega en 24-48h a todo el país. Coninmaq S.A.S.", keywords: "repuestos Bobcat Colombia, partes Bobcat Colombia, filtros Bobcat Colombia, repuestos minicargador Colombia", path: "/repuestos/bobcat" }
    : { title: "Repuestos Maquinaria Pesada en Colombia — Caterpillar, CASE, Komatsu, Bobcat", description: "Repuestos de maquinaria pesada en Colombia. +10.000 referencias Caterpillar, CASE, Komatsu, Bobcat. Originales y aftermarket. Entrega 24-48h todo el país. Coninmaq S.A.S.", keywords: "repuestos maquinaria pesada Colombia, repuestos Caterpillar Colombia, repuestos CASE Colombia, repuestos Komatsu Colombia, repuestos Bobcat Colombia, repuestos excavadoras Colombia, partes maquinaria Colombia", path: "/repuestos" };

  const resultsText = `${filtered.length} ${filtered.length === 1 ? t("pages.parts.resultsOne") : t("pages.parts.resultsMany")}`;

  return (
    <>
      <SEO
        title={partsMeta.title}
        description={partsMeta.description}
        keywords={partsMeta.keywords}
        path={partsMeta.path}
      />
      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: DOT_PATTERN }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-zinc-500 mb-4">
            <Link to="/" className="hover:text-brand-accent transition-colors">
              {t("pages.parts.breadHome")}
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <span className="text-zinc-300">{t("pages.parts.breadParts")}</span>
          </nav>
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2">
            {t("pages.parts.refs")}
          </span>
          <h1 className="font-black text-[30px] md:text-[48px] uppercase text-white leading-tight">
            {t("pages.parts.breadParts")}{" "}
            <span className="text-brand-accent">{brandLabel}</span>
          </h1>
        </div>
      </div>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Todos", ...PART_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white"
                    : "bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[13px] text-zinc-500">
              <span className="font-bold text-zinc-800">{resultsText}</span>
            </p>
            <p className="text-[12px] text-zinc-400">
              {t("pages.parts.cantFind")}{" "}
              <a
                href="https://wa.me/573163815694"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent font-semibold hover:underline"
              >
                {t("pages.parts.consultUs")}
              </a>
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((part) => (
                <PartCard key={part.slug} part={part} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Icon icon="mdi:package-variant-closed-remove" width={48} className="text-zinc-300 mx-auto mb-4" />
              <p className="text-zinc-500 text-[15px]">{t("pages.parts.noResults")}</p>
              <button
                onClick={() => setActiveCategory("Todos")}
                className="mt-4 text-brand-accent font-semibold text-[13px] hover:underline"
              >
                {t("pages.parts.clearFilters")}
              </button>
            </div>
          )}

          {/* Callout */}
          <div className="mt-14 bg-zinc-900 p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: DOT_PATTERN }} />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-1">
                  {t("pages.parts.calloutEyebrow")}
                </span>
                <h3 className="font-black text-[24px] uppercase text-white">
                  {t("pages.parts.calloutTitle")}{" "}
                  <span className="text-brand-accent">{t("pages.parts.calloutHighlight")}</span>
                </h3>
                <p className="text-zinc-400 text-[13px] mt-1">{t("pages.parts.calloutDesc")}</p>
              </div>
              <a
                href="https://wa.me/573163815694"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[13px] tracking-wider uppercase px-6 py-3.5 hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon icon="mdi:whatsapp" width={18} />
                {t("pages.parts.calloutCta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

/* ── Part detail page ────────────────────────────────────────────────────── */
export function RepuestoDetailPage() {
  const { t } = useTranslation();
  const { marca, codigo } = useParams<{ marca: string; codigo: string }>();
  const part = PARTS_DATA.find((p) => p.brand === marca && p.slug === codigo);

  if (!part) {
    return (
      <div className="bg-zinc-900 min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <span className="font-black text-[80px] text-brand-accent/20 block">?</span>
          <h1 className="font-black text-[28px] uppercase text-white mb-4">
            {t("pages.parts.notFoundTitle")}
          </h1>
          <Link
            to="/repuestos"
            className="inline-flex items-center gap-2 bg-brand-accent text-zinc-900 font-bold text-[13px] uppercase px-6 py-3"
          >
            <Icon icon="mdi:arrow-left" width={16} />
            {t("pages.parts.viewCatalog")}
          </Link>
        </div>
      </div>
    );
  }

  const related = PARTS_DATA.filter((p) => p.brand === marca && p.slug !== codigo).slice(0, 4);

  const partSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: part.name,
    description: part.desc,
    brand: { "@type": "Brand", name: part.brandLabel },
    sku: part.code,
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Coninmaq S.A.S" },
    },
  };

  return (
    <>
      <SEO
        title={`${part.name} (${part.code}) — Repuesto ${part.brandLabel} en Colombia`}
        description={`${part.name} — Repuesto ${part.type} ${part.brandLabel}. ${part.desc} En stock, entrega 24-48h en todo Colombia. Coninmaq S.A.S.`}
        keywords={`${part.name} Colombia, ${part.code} repuesto Colombia, repuesto ${part.brandLabel} Colombia, ${part.category} ${part.brandLabel} Colombia`}
        path={`/repuestos/${marca}/${part.slug}`}
        ogType="product"
        jsonLd={partSchema}
      />
      {/* Dark header */}
      <div className="bg-zinc-900 py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: DOT_PATTERN }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-zinc-500 mb-4 flex-wrap">
            <Link to="/" className="hover:text-brand-accent transition-colors">
              {t("pages.parts.breadHome")}
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <Link to="/repuestos" className="hover:text-brand-accent transition-colors">
              {t("pages.parts.breadParts")}
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <Link to={`/repuestos/${marca}`} className="hover:text-brand-accent transition-colors">
              {part.brandLabel}
            </Link>
            <Icon icon="mdi:chevron-right" width={12} />
            <span className="text-zinc-300 font-semibold">{part.code}</span>
          </nav>
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-1">
            {part.brandLabel} — {part.category}
          </span>
          <h1 className="font-black text-[36px] md:text-[44px] uppercase text-white leading-tight">
            {part.name}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
            {/* Left */}
            <div>
              {/* Part visual */}
              <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden flex items-center justify-center mb-6">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: DOT_PATTERN }} />
                <Icon icon="mdi:cog" width={120} className="text-brand-accent/15" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 bg-brand-accent text-zinc-900">
                    {part.brandLabel}
                  </span>
                  <span className={`text-[10px] font-bold tracking-wide uppercase px-3 py-1 border ${TYPE_STYLE[part.type]}`}>
                    {part.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-zinc-900/60 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-white text-[13px] font-bold tracking-wider">{part.code}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-zinc-600 leading-relaxed mb-6">{part.desc}</p>

              {/* Technical specs */}
              <h3 className="font-black text-[18px] uppercase text-zinc-900 mb-4">
                {t("pages.parts.techSpecs")} <span className="text-brand-accent">{t("pages.parts.techSpecsHighlight")}</span>
              </h3>
              <div className="border border-zinc-200 divide-y divide-zinc-100">
                {part.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-3 ${i % 2 === 0 ? "bg-zinc-50/60" : "bg-white"}`}
                  >
                    <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wide">{spec.label}</span>
                    <span className="text-[13px] font-bold text-zinc-800">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <h3 className="font-black text-[18px] uppercase text-zinc-900 mt-8 mb-4">
                {t("pages.parts.highlights")} <span className="text-brand-accent">{t("pages.parts.highlightsHighlight")}</span>
              </h3>
              <div className="space-y-2.5">
                {part.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon icon="mdi:check" width={12} className="text-zinc-900" />
                    </div>
                    <p className="text-[13px] text-zinc-700">{h}</p>
                  </div>
                ))}
              </div>

              {/* Compatibility */}
              <h3 className="font-black text-[18px] uppercase text-zinc-900 mt-8 mb-4">
                {t("pages.parts.compatibility")} <span className="text-brand-accent">{t("pages.parts.compatibilityHighlight")}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {part.compatibility.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-700 text-[12px] font-semibold px-3 py-1.5 border border-zinc-200"
                  >
                    <Icon icon="mdi:check-circle-outline" width={13} className="text-brand-accent" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
              <div className="bg-zinc-900 p-5">
                <p className="text-brand-accent text-[10px] font-bold tracking-[3px] uppercase mb-1">
                  {t("pages.parts.partNumber")}
                </p>
                <p className="font-black text-[28px] text-white">{part.code}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 bg-brand-accent text-zinc-900">
                    {part.brandLabel}
                  </span>
                  <span className={`text-[10px] font-bold tracking-wide uppercase px-3 py-1 border ${TYPE_STYLE[part.type]}`}>
                    {part.type}
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white border border-zinc-200 p-5 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100">
                  <Icon icon="mdi:package-variant-closed" width={20} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">
                      {t("pages.parts.availability")}
                    </p>
                    <p className="text-[13px] font-bold text-emerald-800">{t("pages.parts.availabilityVal")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100">
                  <Icon icon="mdi:truck-delivery-outline" width={20} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-blue-700 font-bold uppercase tracking-wide">
                      {t("pages.parts.shipping")}
                    </p>
                    <p className="text-[13px] font-bold text-blue-800">{t("pages.parts.shippingVal")}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-zinc-400 uppercase tracking-wide font-semibold mb-0.5">
                    {t("pages.parts.price")}
                  </p>
                  <p className="text-[22px] font-black text-zinc-900">{t("pages.parts.priceVal")}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{t("pages.parts.priceNote")}</p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <a
                    href="https://wa.me/573163815694"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[13px] tracking-wider uppercase py-3.5 hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon icon="mdi:whatsapp" width={18} />
                    {t("pages.parts.quoteWhatsapp")}
                  </a>
                  <a
                    href="/contacto"
                    className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[13px] tracking-wider uppercase py-3.5 hover:from-[#FFE07A] hover:to-brand-accent-light hover:shadow-[0_6px_20px_rgba(255,200,55,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon icon="mdi:file-document-outline" width={18} />
                    {t("pages.parts.requestQuote")}
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
          </div>
        </div>
      </section>

      {/* Related parts */}
      {related.length > 0 && (
        <section className="py-14 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="font-black text-[26px] uppercase text-zinc-900 mb-7">
              {t("pages.parts.morePartsLabel")}{" "}
              <span className="text-brand-accent">{part.brandLabel}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <PartCard key={p.slug} part={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
