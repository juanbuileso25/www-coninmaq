import SectionTitle from "../components/SectionTitle";
import { CTABanner } from "../components/Sections";
import { ABOUT_FEATURES } from "../data";

export default function NosotrosPage() {
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
          <span className="text-amber-500 text-[11px] font-bold tracking-[3px] uppercase block mb-2" >
            La empresa
          </span>
          <h1 className="font-black text-[48px] uppercase text-white leading-tight" >
            Sobre <span className="text-amber-500">Nosotros</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle eyebrow="Nuestra historia" title="Más de 20 años de trayectoria" align="left" />
              <p className="text-zinc-500 font-normal text-[16px] leading-relaxed mb-4">
                CONINMAQ S.A.S nació con el propósito de brindar soluciones
                integrales al sector de la construcción y la minería en Colombia.
                Desde nuestros inicios hemos construido relaciones de largo plazo
                con los principales fabricantes de maquinaria pesada del mundo.
              </p>
              <p className="text-zinc-500 font-normal text-[16px] leading-relaxed mb-6">
                Hoy somos reconocidos como uno de los distribuidores más confiables
                del país, con presencia en todas las regiones y un equipo humano
                comprometido con la excelencia técnica y comercial.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ABOUT_FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-[14px] text-zinc-700">
                    <span className="text-amber-500 mt-1 text-[10px]">▶</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "+7", label: "Años de experiencia", color: "bg-zinc-900 text-white" },
                { num: "+500", label: "Máquinas vendidas", color: "bg-amber-500 text-zinc-900" },
                { num: "+8", label: "Marcas distribuidas", color: "bg-amber-500 text-zinc-900" },
                { num: "100%", label: "Compromiso con el cliente", color: "bg-zinc-900 text-white" },
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} p-8 flex flex-col justify-center`}>
                  <span className="font-black text-[42px] leading-none block mb-1" >
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
