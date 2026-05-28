import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { CTABanner } from "../components/Sections";
import SEO from "../components/SEO";
import { ORGANIZATION_LD } from "../seo/config";

export default function NosotrosPage() {
  const { t } = useTranslation();
  const features = t("about.features", { returnObjects: true }) as string[];
  const stats = t("pages.nosotros.stats", { returnObjects: true }) as Array<{ num: string; label: string }>;

  const statColors = [
    "bg-zinc-900 text-white",
    "bg-brand-accent text-zinc-900",
    "bg-brand-accent text-zinc-900",
    "bg-zinc-900 text-white",
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre Nosotros — Coninmaq S.A.S",
    url: "https://coninmaqsas.com/nosotros",
    description:
      "CONINMAQ S.A.S nació con el propósito de brindar soluciones integrales al sector de la construcción y la minería en Colombia. Más de 7 años de experiencia en maquinaria pesada.",
    mainEntity: {
      "@id": "https://coninmaqsas.com/#organization",
    },
  };

  return (
    <>
      <SEO
        title="Nosotros — Empresa de Maquinaria Pesada en Colombia"
        description="Conoce a Coninmaq S.A.S: más de 7 años de experiencia en venta, importación y mantenimiento de maquinaria pesada en Colombia. Distribuidores CASE, Caterpillar, Hitachi, DYNAPAC en Antioquia."
        keywords="Coninmaq empresa, sobre Coninmaq, empresa maquinaria pesada Colombia, distribuidor CASE Colombia, distribuidor Caterpillar Colombia, maquinaria Antioquia, Copacabana maquinaria"
        path="/nosotros"
        jsonLd={[ORGANIZATION_LD, aboutSchema]}
      />

      {/* Page header */}
      <div className="bg-zinc-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFC837' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent text-[11px] font-bold tracking-[3px] uppercase block mb-2">
            {t("pages.nosotros.eyebrow")}
          </span>
          <h1 className="font-black text-[30px] md:text-[48px] uppercase text-white leading-tight">
            {t("pages.nosotros.title")}{" "}
            <span className="text-brand-accent">{t("pages.nosotros.titleHighlight")}</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle
                eyebrow={t("pages.nosotros.historyEyebrow")}
                title={t("pages.nosotros.historyTitle")}
                align="left"
              />
              <p className="text-zinc-500 font-normal text-[16px] leading-relaxed mb-4">
                {t("pages.nosotros.p1")}
              </p>
              <p className="text-zinc-500 font-normal text-[16px] leading-relaxed mb-6">
                {t("pages.nosotros.p2")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-[14px] text-zinc-700">
                    <span className="text-brand-accent mt-1 text-[10px]">▶</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div key={i} className={`${statColors[i]} p-8 flex flex-col justify-center`}>
                  <span className="font-black text-[42px] leading-none block mb-1">
                    {stat.num}
                  </span>
                  <span className="text-[13px] font-semibold uppercase tracking-wide opacity-70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
