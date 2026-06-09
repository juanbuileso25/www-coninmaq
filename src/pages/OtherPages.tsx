import { useParams, useLocation, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { CTABanner } from "../components/Sections";
import ProductImage from "../components/ProductImage";
import { NEW_PRODUCTS, USED_PRODUCTS, PRODUCT_GRADIENTS } from "../data";
import { useMachines } from "../hooks/useMachines";
import type { ApiMachine, Product } from "../types";
import SEO from "../components/SEO";

const DOT_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFC837' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`;

const CATEGORY_PATH: Record<string, string> = {
  "Excavadora": "excavadoras",
  "Miniexcavadora": "miniexcavadoras",
  "Cargador de Ruedas": "cargadores",
  "Minicargador": "minicargadores",
  "Retrocargadora": "retrocargadoras",
};

function apiMachineToProduct(m: ApiMachine): Product & { imageUrl?: string } {
  const catPath = CATEGORY_PATH[m.category] ?? "maquinaria-pesada";
  return {
    brand: m.brand,
    model: m.model,
    desc: m.description,
    code: m.code,
    badge: m.is_new ? "Nueva" : "Usada",
    href: `/maquinaria-pesada/${catPath}/${m.slug}`,
    imageUrl: m.image_url || undefined,
  };
}

/* ── Maquinaria Page ─────────────────────────────────────────────────────── */
export function MaquinariaPage() {
  const { t } = useTranslation();
  const { categoria } = useParams<{ categoria?: string }>();
  const location = useLocation();
  const isRenta = location.pathname.startsWith("/renta");
  const isUsada = categoria === "usada";
  const isNueva = categoria === "nueva";
  const useApi = !isUsada && !isRenta;

  const { machines: apiMachines, loading: apiLoading } = useMachines({
    is_new: true,
    visible_web: true,
    enabled: useApi,
  });

  const products: (Product & { imageUrl?: string })[] =
    isUsada || isRenta
      ? USED_PRODUCTS
      : apiMachines.length > 0
      ? apiMachines.map(apiMachineToProduct)
      : NEW_PRODUCTS;

  const pageTitle = isRenta
    ? {
        eyebrow: t("pages.machinery.rentalEyebrow"),
        title: t("pages.machinery.titleBase"),
        highlight: t("pages.machinery.rentalHighlight"),
        sectionTitle: t("pages.machinery.rentalSectionTitle"),
        sectionSub: t("pages.machinery.rentalSectionSub"),
      }
    : isUsada
    ? {
        eyebrow: t("pages.machinery.usedEyebrow"),
        title: t("pages.machinery.titleBase"),
        highlight: t("pages.machinery.usedHighlight"),
        sectionTitle: t("pages.machinery.usedSectionTitle"),
        sectionSub: t("pages.machinery.usedSectionSub"),
      }
    : isNueva
    ? {
        eyebrow: t("pages.machinery.newEyebrow"),
        title: t("pages.machinery.titleBase"),
        highlight: t("pages.machinery.newHighlight"),
        sectionTitle: t("pages.machinery.newSectionTitle"),
        sectionSub: t("pages.machinery.newSectionSub"),
      }
    : {
        eyebrow: t("pages.machinery.allEyebrow"),
        title: t("pages.machinery.titleBase"),
        highlight: t("pages.machinery.allHighlight"),
        sectionTitle: t("pages.machinery.allSectionTitle"),
        sectionSub: t("pages.machinery.allSectionSub"),
      };

  const machineryMeta = isRenta
    ? {
        title: "Renta de Maquinaria Pesada en Colombia — Alquiler de Excavadoras y Bulldozers",
        description: "Alquiler y renta de maquinaria pesada en Colombia. Excavadoras, bulldozers, compactadores y más equipos certificados disponibles. Coninmaq S.A.S.",
        keywords: "renta maquinaria pesada Colombia, alquiler excavadoras Colombia, renta bulldozers Colombia, arriendo maquinaria construccion Colombia, Coninmaq renta",
        path: "/renta",
      }
    : isUsada
    ? {
        title: "Maquinaria Pesada Usada en Colombia — Excavadoras, Bulldozers Certificados",
        description: "Compra maquinaria pesada usada certificada en Colombia. Excavadoras, bulldozers, compactadores y motoniveladoras revisadas con garantía. Entrega inmediata en todo Colombia. Coninmaq S.A.S.",
        keywords: "maquinaria usada Colombia, excavadoras usadas Colombia, bulldozers usados Colombia, maquinaria pesada segunda mano Colombia, maquinaria certificada Colombia",
        path: "/maquinaria-pesada/usada",
      }
    : isNueva
    ? {
        title: "Maquinaria Pesada Nueva en Colombia — Importación Directa CASE, Caterpillar",
        description: "Maquinaria pesada nueva con garantía de fábrica en Colombia. Importación directa de excavadoras, bulldozers, compactadores y motoniveladoras. CASE, Caterpillar, Hitachi, DYNAPAC. Coninmaq S.A.S.",
        keywords: "maquinaria nueva Colombia, excavadoras nuevas Colombia, bulldozers nuevos Colombia, importacion maquinaria pesada Colombia, maquinaria garantia fabrica Colombia",
        path: "/maquinaria-pesada/nueva",
      }
    : categoria === "excavadoras"
    ? {
        title: "Excavadoras en Venta Colombia — Nuevas y Usadas CASE, Caterpillar, Hitachi",
        description: "Venta de excavadoras en Colombia. Modelos nuevos y usados CASE, Caterpillar, Hitachi. Equipos certificados con garantía y servicio técnico. Coninmaq S.A.S — Antioquia.",
        keywords: "excavadoras Colombia, excavadoras venta Colombia, excavadoras CASE Colombia, excavadoras Caterpillar Colombia, excavadoras Hitachi Colombia, excavadoras nuevas usadas Colombia, precio excavadoras Colombia",
        path: "/maquinaria-pesada/excavadoras",
      }
    : categoria === "bulldozers"
    ? {
        title: "Bulldozers en Venta Colombia — CASE Construction Serie 1150M, 1650M",
        description: "Bulldozers CASE Construction en Colombia. Modelos 1150M, 1650M, 2050M. Nuevos y usados con garantía de fábrica. Expertos en movimiento de tierra. Coninmaq S.A.S.",
        keywords: "bulldozers Colombia, bulldozers CASE Colombia, bulldozers venta Colombia, topadora Colombia, tractor oruga Colombia, maquinaria movimiento tierra Colombia",
        path: "/maquinaria-pesada/bulldozers",
      }
    : categoria === "compactadores"
    ? {
        title: "Compactadores DYNAPAC en Colombia — Rodillos Vibratorios Venta",
        description: "Compactadores y rodillos vibratorios DYNAPAC en Colombia. Suelo, doble rodillo y neumáticos. Nuevos y usados con soporte técnico. Coninmaq S.A.S — Antioquia.",
        keywords: "compactadores Colombia, rodillos vibratorios Colombia, compactadores DYNAPAC Colombia, rodillo compactador Colombia, maquinaria vial Colombia",
        path: "/maquinaria-pesada/compactadores",
      }
    : categoria === "motoniveladoras"
    ? {
        title: "Motoniveladoras CASE en Colombia — 845C, 865C Tier 4 Venta",
        description: "Motoniveladoras CASE Construction en Colombia. Modelos 845C y 865C Tier 4. Nuevas y usadas, ideales para proyectos viales y minería. Coninmaq S.A.S.",
        keywords: "motoniveladoras Colombia, motoniveladora CASE Colombia, motoniveladoras venta Colombia, maquinaria vial Colombia, niveladora Colombia",
        path: "/maquinaria-pesada/motoniveladoras",
      }
    : categoria === "minicargadores"
    ? {
        title: "Minicargadores Bobcat y CASE en Colombia — Skid Steer Venta",
        description: "Minicargadores Bobcat y CASE en Colombia. Alta maniobrabilidad para obra civil y minería. Nuevos y usados con garantía. Coninmaq S.A.S — Antioquia.",
        keywords: "minicargadores Colombia, Bobcat Colombia, minicargador CASE Colombia, skid steer Colombia, minicargador venta Colombia",
        path: "/maquinaria-pesada/minicargadores",
      }
    : {
        title: "Maquinaria Pesada en Colombia — Excavadoras, Bulldozers, Compactadores",
        description: "Coninmaq S.A.S — Venta e importación de maquinaria pesada en Colombia. Excavadoras, bulldozers, compactadores y motoniveladoras nuevas y usadas. CASE, Caterpillar, Hitachi, DYNAPAC.",
        keywords: "maquinaria pesada Colombia, excavadoras Colombia, bulldozers Colombia, compactadores Colombia, motoniveladoras Colombia, Coninmaq, maquinaria construccion Colombia",
        path: "/maquinaria-pesada",
      };

  const machineryListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: machineryMeta.title,
    url: `https://coninmaqsas.com${machineryMeta.path}`,
    description: machineryMeta.description,
    itemListElement: products.slice(0, 6).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${p.brand} ${p.model}`,
      url: `https://coninmaqsas.com${p.href}`,
    })),
  };

  return (
    <>
      <SEO
        title={machineryMeta.title}
        description={machineryMeta.description}
        keywords={machineryMeta.keywords}
        path={machineryMeta.path}
        jsonLd={machineryListSchema}
      />
      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: DOT_PATTERN }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2">
            {pageTitle.eyebrow}
          </span>
          <h1 className="font-black text-[30px] md:text-[48px] uppercase text-white leading-tight">
            {pageTitle.title} <span className="text-brand-accent">{pageTitle.highlight}</span>
          </h1>
        </div>
      </div>

      <section className="py-20 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow={t("pages.machinery.inventoryLabel")}
            title={pageTitle.sectionTitle}
            subtitle={pageTitle.sectionSub}
          />
          {apiLoading && useApi && (
            <div className="flex items-center justify-center py-16 text-zinc-500 gap-3">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-sm font-medium">Cargando inventario...</span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => {
              const desc = t(`productDesc.${p.code}`, { defaultValue: p.desc });
              const badge = isRenta ? t("products.badgeRental") : p.badge === "Nueva" ? t("products.badgeNew") : t("products.badgeUsed");
              return (
                <div key={i} className="bg-white border border-zinc-200 hover:border-brand-accent hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 group">
                  <ProductImage
                    slug={p.href.split("/").pop() ?? p.code.toLowerCase()}
                    code={p.code}
                    gradient={PRODUCT_GRADIENTS[i % 3]}
                    imageUrl={(p as Product & { imageUrl?: string }).imageUrl}
                    badge={badge}
                    badgeUsed={isUsada || isRenta}
                    anio={p.anio}
                    className="h-52"
                  />

                  <div className="p-5">
                    <p className="text-brand-accent text-[11px] font-bold tracking-[2px] uppercase mb-1">{p.brand}</p>
                    <h3 className="font-bold text-[18px] uppercase tracking-wide text-zinc-900 mb-2 group-hover:text-brand-accent-dark transition-colors">
                      {p.model}
                    </h3>
                    <p className="text-[13px] text-zinc-500 font-normal leading-relaxed mb-3">{desc}</p>

                    {(isUsada || isRenta) && (
                      <div className="flex items-center gap-4 py-3 mb-1 border-y border-zinc-100">
                        {p.anio && (
                          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-zinc-600">
                            <Icon icon="mdi:calendar-outline" width={15} className="text-brand-accent" />
                            {t("pages.machinery.yearLabel")} {p.anio}
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
                      <Link to={p.href} className="text-brand-accent font-bold text-[13px] uppercase tracking-wide hover:text-amber-700 transition-colors">
                        {t("pages.machinery.viewSpecs")}
                      </Link>
                      <a href="https://wa.link/bax4s3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gradient-to-b from-[#2edb71] to-[#25D366] text-white font-bold text-[12px] tracking-wide uppercase px-3 py-[6px] hover:from-[#25D366] hover:to-[#1aaa50] hover:shadow-[0_4px_12px_rgba(37,211,102,0.45)] hover:-translate-y-px transition-all duration-200">
                        <Icon icon="mdi:whatsapp" width={15} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

/* ── Contacto Page ───────────────────────────────────────────────────────── */
export function ContactoPage() {
  const { t } = useTranslation();

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto — Coninmaq S.A.S",
    url: "https://coninmaqsas.com/contacto",
    mainEntity: { "@id": "https://coninmaqsas.com/#localbusiness" },
  };

  const contactItems = [
    { icon: "mdi:map-marker", title: t("pages.contact.addr"), text: "KM 20 Autopista norte Copacabana a Girardota" },
    { icon: "mdi:phone", title: t("pages.contact.phone"), text: "316 381 5694" },
    { icon: "mdi:email-outline", title: t("pages.contact.email"), text: "comercial@coninmaq.com" },
    { icon: "mdi:clock-outline", title: t("pages.contact.hours"), text: "Lun – Vie: 7am – 5pm | Sáb: 8am – 12pm" },
  ];

  const formFields = [
    { id: "nombre", label: t("pages.contact.nameLabel"), type: "text", placeholder: t("pages.contact.namePlaceholder") },
    { id: "empresa", label: t("pages.contact.companyLabel"), type: "text", placeholder: t("pages.contact.companyPlaceholder") },
    { id: "email", label: t("pages.contact.emailLabel"), type: "email", placeholder: t("pages.contact.emailPlaceholder") },
    { id: "telefono", label: t("pages.contact.phoneLabel"), type: "tel", placeholder: t("pages.contact.phonePlaceholder") },
  ];

  return (
    <>
      <SEO
        title="Contacto — Cotice Maquinaria Pesada y Repuestos"
        description="Contáctenos para cotizar maquinaria pesada nueva o usada, o repuestos en Colombia. Respondemos en menos de 2 horas. KM 20 Autopista norte Copacabana a Girardota, Antioquia. Tel: 316 381 5694."
        keywords="contacto Coninmaq, cotizar maquinaria pesada Colombia, cotizar excavadoras Colombia, telefono Coninmaq, Copacabana Antioquia maquinaria, solicitar cotizacion maquinaria"
        path="/contacto"
        jsonLd={contactSchema}
      />
      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFC837' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2">
            {t("pages.contact.eyebrow")}
          </span>
          <h1 className="font-black text-[30px] md:text-[48px] uppercase text-white leading-tight">
            {t("pages.contact.title")}
          </h1>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <SectionTitle
                eyebrow={t("pages.contact.infoEyebrow")}
                title={t("pages.contact.infoTitle")}
                align="left"
              />
              <div className="space-y-5 mt-2">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 border border-zinc-100 hover:border-brand-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-brand-accent flex items-center justify-center flex-shrink-0">
                      <Icon icon={item.icon} width={22} className="text-zinc-900" />
                    </div>
                    <div>
                      <p className="font-bold text-[13px] uppercase tracking-wide text-zinc-400 mb-0.5">{item.title}</p>
                      <p className="text-zinc-800 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-zinc-50 border border-zinc-200 p-5 md:p-8">
              <h3 className="font-black text-[22px] uppercase text-zinc-900 mb-6">
                {t("pages.contact.formTitle")}
              </h3>
              <div className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-[12px] font-bold uppercase tracking-wide text-zinc-500 mb-1.5">
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
                  <label className="block text-[12px] font-bold uppercase tracking-wide text-zinc-500 mb-1.5">
                    {t("pages.contact.messageLabel")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("pages.contact.messagePlaceholder")}
                    className="w-full border border-zinc-200 px-4 py-3 text-[14px] text-zinc-800 focus:outline-none focus:border-brand-accent transition-colors bg-white resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase py-4 hover:from-[#FFE07A] hover:to-brand-accent-light hover:shadow-[0_6px_20px_rgba(255,200,55,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t("pages.contact.submitBtn")}
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
  const { t } = useTranslation();

  return (
    <div className="bg-zinc-900 min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <span className="font-black text-[72px] md:text-[120px] text-brand-accent/20 select-none block leading-none">
          404
        </span>
        <h1 className="font-black text-[36px] uppercase text-white mb-4">
          {t("pages.notFound.title")}
        </h1>
        <p className="text-zinc-400 font-normal mb-8">{t("pages.notFound.desc")}</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-[#FFE07A] hover:to-brand-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,200,55,0.5)] transition-all duration-200"
        >
          {t("pages.notFound.back")}
        </Link>
      </div>
    </div>
  );
}
