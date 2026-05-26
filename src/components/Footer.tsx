import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, CONTACT_ITEMS, SOCIAL_LINKS } from "../data";

const SOCIAL_ICON: Record<string, string> = {
  Facebook: "mdi:facebook",
  Instagram: "mdi:instagram",
  LinkedIn: "mdi:linkedin",
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-zinc-500 pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo-yellow.png`}
                alt="Coninmaq"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[14px] text-zinc-400 font-normal leading-relaxed mb-5">
              Impulsamos el progreso con soluciones en maquinaria pesada en Colombia. Más de 7 años ofreciendo respaldo, calidad y un servicio que marca la diferencia.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.06] flex items-center justify-center hover:bg-brand-accent hover:text-zinc-900 text-zinc-400 transition-all duration-200"
                >
                  <Icon icon={SOCIAL_ICON[s.label] ?? "mdi:link"} width={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-bold text-[15px] uppercase text-white tracking-wider mb-5 pb-2.5 border-b-2 border-brand-accent inline-block"
                
              >
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      to="#"
                      className="flex items-center gap-2 text-[14px] text-zinc-400 hover:text-brand-accent transition-colors group"
                    >
                      <Icon icon="mdi:chevron-right" width={16} className="text-brand-accent group-hover:translate-x-0.5 transition-transform" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-[15px] uppercase text-white tracking-wider mb-5 pb-2.5 border-b-2 border-brand-accent inline-block"
              
            >
              Contacto
            </h4>
            <ul className="space-y-3">
              {CONTACT_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-zinc-400">
                  <Icon icon={item.icon} width={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] py-5 flex flex-col md:flex-row justify-between items-center text-[13px] text-zinc-400 gap-2">
          <span>© {new Date().getFullYear()} Coninmaq S.A.S — Todos los derechos reservados</span>
          <div className="flex gap-4">
            <Link to="/politica-privacidad" className="hover:text-brand-accent transition-colors">Política de privacidad</Link>
            <Link to="/terminos" className="hover:text-brand-accent transition-colors">Términos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
