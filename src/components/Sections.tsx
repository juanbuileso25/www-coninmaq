import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import ProductImage from "./ProductImage";
import { useInView } from "../hooks/useInView";
import {
  SERVICES,
  CATEGORIES,
  CAT_GRADIENTS,
  BRANDS,
  ABOUT_FEATURES,
  PRODUCTS,
  PRODUCT_GRADIENTS,
} from "../data";

const BASE_URL = import.meta.env.VITE_API_URL ?? "https://api.coninmaqsas.com";

/* ── Services Strip ──────────────────────────────────────────────────────── */
export function ServicesStrip() {
  const { t } = useTranslation();
  const { ref, inView } = useInView(0.1);
  const serviceLabels = t("services", { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <div ref={ref} className="bg-white border-b border-zinc-100 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-5 sm:px-6 py-6 sm:py-7 cursor-pointer group hover:bg-zinc-50 transition-all duration-300 border-b border-zinc-100 lg:border-b-0 lg:border-r last:border-r-0
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 bg-brand-accent flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent-light group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(255,200,55,0.4)] transition-all duration-300 text-zinc-900">
                <Icon icon={s.icon} width={24} />
              </div>
              <div>
                <h3 className="font-bold text-[14px] uppercase tracking-wide text-zinc-900 group-hover:text-brand-accent-dark transition-colors">
                  {serviceLabels[i]?.title ?? s.title}
                </h3>
                <p className="text-[12px] text-zinc-500 mt-0.5">{serviceLabels[i]?.desc ?? s.desc}</p>
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
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const catItems = t("categories.items", { returnObjects: true }) as Array<{ label: string; desc: string }>;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow={t("categories.eyebrow")}
          title={t("categories.title")}
          subtitle={t("categories.subtitle")}
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
              <div className={`absolute inset-0 bg-gradient-to-br ${CAT_GRADIENTS[i]}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/75 transition-all duration-400" />
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-accent/40 transition-all duration-300" />
              <div
                className="absolute inset-0 flex items-center justify-center font-black text-[80px] text-brand-accent/[0.1] select-none leading-none tracking-tighter group-hover:text-brand-accent/[0.18] transition-all duration-500"
                aria-hidden="true"
              >
                {cat.code}
              </div>
              <div className="relative z-10 p-6 w-full">
                <h3 className="font-bold text-[22px] text-white uppercase tracking-wide mb-1 group-hover:text-brand-accent-light transition-colors duration-300">
                  {catItems[i]?.label ?? cat.label}
                </h3>
                <p className="text-white/60 text-[13px] font-normal mb-3">{catItems[i]?.desc ?? cat.desc}</p>
                <span className="inline-flex items-center gap-2 bg-brand-accent text-zinc-900 font-bold text-[11px] tracking-wider uppercase px-3.5 py-[6px] group-hover:bg-brand-accent-light group-hover:gap-3 transition-all duration-300">
                  {t("categories.viewEquipment")}
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
  const { t } = useTranslation();
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-zinc-900 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow={t("brands.eyebrow")}
          title={t("brands.title")}
          subtitle={t("brands.subtitle")}
          light
        />
      </div>
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-4 px-8 py-5 border-r border-white/[0.06] group cursor-default hover:bg-brand-accent/10 transition-colors duration-300"
            >
              <span className="font-bold text-[15px] text-zinc-500 group-hover:text-brand-accent-light transition-colors duration-300 uppercase tracking-widest">
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
  const { t } = useTranslation();
  const { ref, inView } = useInView(0.1);
  const features = t("about.features", { returnObjects: true }) as string[];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div
            className={`relative pb-8 lg:pb-0 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="w-full h-[400px] bg-zinc-900 overflow-hidden relative">
              <img
                src={`${import.meta.env.BASE_URL}about-machine.webp`}
                alt="Cargador de ruedas Lonking CDM835 en obra"
                className="w-full h-full object-cover object-bottom"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-brand-accent" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-brand-accent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-[110px] h-[110px] bg-brand-accent flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(255,200,55,0.5)] hover:scale-105 transition-transform duration-300">
              <span className="font-black text-[36px] text-zinc-900 leading-none">+10</span>
              <span className="text-[10px] font-bold text-black/60 uppercase text-center tracking-wide leading-tight px-2 whitespace-pre-line">
                {t("about.yearsLabel")}
              </span>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <SectionTitle eyebrow={t("about.eyebrow")} title="" align="left" />
            <h2 className="font-extrabold text-[36px] uppercase tracking-wide text-zinc-900 leading-tight mb-5 -mt-8">
              {t("about.title")}{" "}
              <span className="text-brand-accent">{t("about.titleHighlight")}</span>{" "}
              {t("about.title2")}
            </h2>
            <p className="text-zinc-500 font-normal text-[16px] leading-relaxed mb-4">
              {t("about.p1")}
            </p>
            <p className="text-zinc-500 font-normal text-[16px] leading-relaxed mb-6">
              {t("about.p2")}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {(features.length ? features : ABOUT_FEATURES).map((f, i) => (
                <div
                  key={f}
                  className={`flex items-center gap-2 text-[14px] text-zinc-700 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 60}ms` }}
                >
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Link
              to="/nosotros"
              className="inline-block bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-[#FFE07A] hover:to-brand-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,200,55,0.5)] transition-all duration-200"
            >
              {t("about.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Products ────────────────────────────────────────────────────────────── */
export function Products() {
  const { t } = useTranslation();
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-20 bg-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow={t("products.eyebrow")}
          title={t("products.title")}
          subtitle={t("products.subtitle")}
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => {
            const desc = t(`productDesc.${p.code}`, { defaultValue: p.desc });
            const badge = p.badge === "Nueva" ? t("products.badgeNew") : t("products.badgeUsed");
            return (
              <div
                key={i}
                className={`bg-white border border-zinc-200 hover:border-brand-accent hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ProductImage
                  slug={p.href.split("/").pop() ?? p.code.toLowerCase()}
                  code={p.code}
                  gradient={PRODUCT_GRADIENTS[i]}
                  badge={badge}
                  className="h-52"
                />

                <div className="p-5">
                  <p className="text-brand-accent text-[11px] font-bold tracking-[2px] uppercase mb-1">
                    {p.brand}
                  </p>
                  <h3 className="font-bold text-[18px] uppercase tracking-wide text-zinc-900 mb-2 group-hover:text-brand-accent-dark transition-colors duration-200">
                    {p.model}
                  </h3>
                  <p className="text-[13px] text-zinc-500 font-normal leading-relaxed mb-4">
                    {desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                    <Link
                      to={p.href}
                      className="text-brand-accent font-bold text-[13px] uppercase tracking-wide hover:text-brand-accent-dark hover:gap-2 transition-all duration-200 flex items-center gap-1"
                    >
                      {t("products.viewSpecs")}
                    </Link>
                    <a
                      href="https://wa.me/573163815694"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[12px] tracking-wide uppercase px-3 py-[6px] hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_4px_12px_rgba(37,211,102,0.45)] hover:-translate-y-px transition-all duration-200"
                    >
                      <Icon icon="mdi:whatsapp" width={15} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/maquinaria-pesada"
            className="inline-block bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-10 py-4 hover:from-[#FFE07A] hover:to-brand-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,200,55,0.5)] transition-all duration-200"
          >
            {t("products.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ──────────────────────────────────────────────────────────── */
export function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent py-16 overflow-hidden">
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
            <h2 className="font-extrabold text-[34px] uppercase tracking-wide text-zinc-900 leading-tight mb-2">
              {t("cta.title")}
            </h2>
            <p className="text-black/60 font-normal text-[16px]">
              {t("cta.desc")}
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0 flex-wrap">
            <a
              href="tel:3163815694"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-zinc-700 hover:to-zinc-800 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-200"
            >
              <Icon icon="mdi:phone" width={18} />
              316 381 5694
            </a>
            <a
              href="https://wa.me/573163815694"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-zinc-900/80 text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-zinc-900 transition-all duration-200"
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
type ApiTestimonial = {
  id: number;
  comment: string | null;
  reviewer_name: string | null;
  reviewer_role: string | null;
  average_score: number;
};

const PAGE_SIZE = 3;

function getInitials(name: string | null): string {
  if (!name) return "—";
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function TestimonialCard({ item, visible }: { item: ApiTestimonial; visible: boolean }) {
  return (
    <div
      className={`bg-white border-l-4 border-brand-accent shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 p-7 relative group transition-all duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span
        className="absolute top-3 right-5 font-black text-[64px] text-brand-accent/20 leading-none select-none group-hover:text-brand-accent/30 transition-colors duration-300"
        aria-hidden="true"
      >
        "
      </span>
      <div className="flex gap-0.5 text-brand-accent mb-4">
        {[...Array(5)].map((_, j) => (
          <Icon key={j} icon={j < Math.round(item.average_score) ? "mdi:star" : "mdi:star-outline"} width={14} />
        ))}
      </div>
      <p className="text-[14px] text-zinc-500 font-normal leading-relaxed mb-5">
        {item.comment ?? ""}
      </p>
      <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
        <div className="w-11 h-11 bg-zinc-900 flex items-center justify-center font-black text-[15px] text-brand-accent flex-shrink-0 group-hover:bg-brand-accent group-hover:text-zinc-900 transition-all duration-300">
          {getInitials(item.reviewer_name)}
        </div>
        <div>
          <div className="font-bold text-[14px] uppercase text-zinc-900">
            {item.reviewer_name ?? "Cliente"}
          </div>
          <div className="text-[12px] text-zinc-400">{item.reviewer_role ?? ""}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useTranslation();
  const { ref } = useInView(0.1);

  const [items, setItems] = useState<ApiTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/reviews/testimonials`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data: ApiTestimonial[]) => setItems(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const hasCarousel = totalPages > 1;

  // Auto-advance every 6 s when there are multiple pages
  useEffect(() => {
    if (!hasCarousel) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPage((p) => (p + 1) % totalPages);
        setVisible(true);
      }, 350);
    }, 6000);
    return () => clearInterval(id);
  }, [hasCarousel, totalPages]);

  const goTo = (p: number) => {
    if (p === page) return;
    setVisible(false);
    setTimeout(() => { setPage(p); setVisible(true); }, 350);
  };

  // Don't render anything while loading or if no API testimonials
  if (loading || items.length === 0) return null;

  const pageItems = items.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageItems.map((item) => (
            <TestimonialCard key={item.id} item={item} visible={visible} />
          ))}
        </div>

        {/* Dot indicators — only when carousel */}
        {hasCarousel && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Página ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === page
                    ? "w-6 h-2.5 bg-brand-accent"
                    : "w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
