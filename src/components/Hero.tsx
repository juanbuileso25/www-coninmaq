import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const stats = t("stats", { returnObjects: true }) as Array<{ num: string; label: string }>;

  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Animated amber glow orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[130px] animate-float pointer-events-none" />
      <div className="absolute bottom-16 -left-24 w-[400px] h-[400px] bg-brand-accent-dark/8 rounded-full blur-[100px] animate-float-slow pointer-events-none" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px] animate-float pointer-events-none" style={{ animationDelay: "-7s" }} />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFC837' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero machine image */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}hero-machine.webp`}
          alt="Excavadora Lonking"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Mobile: full dark overlay so text is readable */}
        <div className="absolute inset-0 bg-zinc-900/70 lg:hidden" />
        {/* Desktop: left fade only */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900/60 to-transparent" />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-16 sm:pt-24 pb-14 sm:pb-20 w-full min-h-[420px] flex items-center">
        <div className="max-w-[640px] w-full">
          {/* Pill badge */}
          <div
            className={`inline-flex items-center gap-2 border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm px-4 py-2 mb-6 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "50ms" }}
          >
            <span className="w-1.5 h-1.5 bg-brand-accent-light rounded-full animate-pulse" />
            <span className="text-brand-accent-light font-bold text-[11px] tracking-[2.5px] uppercase">
              {t("hero.badge")}
            </span>
          </div>

          <h1
            className={`font-extrabold uppercase text-white leading-[1.05] mb-5 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
              transitionDelay: "180ms",
            }}
          >
            {t("hero.title1")}<br />
            <span className="text-brand-accent drop-shadow-[0_0_30px_rgba(255,200,55,0.35)]">
              {t("hero.title2")}
            </span>
          </h1>

          <p
            className={`text-zinc-400 font-normal text-[15px] sm:text-[17px] mb-8 max-w-[500px] leading-relaxed transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "320ms" }}
          >
            {t("hero.desc")}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "460ms" }}
          >
            <Link
              to="/maquinaria-pesada"
              className="bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:from-[#FFE07A] hover:to-brand-accent-light hover:shadow-[0_8px_28px_rgba(255,200,55,0.5)]"
            >
              {t("hero.cta1")}
            </Link>
            <Link
              to="/contacto"
              className="border border-white/25 text-white font-semibold text-[14px] tracking-wider uppercase px-8 py-4 text-center hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 backdrop-blur-sm transition-all duration-200"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-brand-accent/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center py-5 px-3 group hover:bg-zinc-900/10 transition-colors cursor-default border-r border-zinc-900/10 last:border-r-0`}
              >
                <span className="block font-black text-[28px] sm:text-[30px] text-zinc-900 leading-none group-hover:scale-105 transition-transform duration-200 origin-bottom">
                  {s.num}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-black/60 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
