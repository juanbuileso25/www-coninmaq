import { Link } from "react-router-dom";
import { FOOTER_LINKS, CONTACT_ITEMS, SOCIAL_LINKS } from "../data";

const SOCIAL_ICONS: Record<string, JSX.Element> = {
  Facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  LinkedIn: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-zinc-500 pt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <span
                className="block font-black text-[22px] tracking-[2px] text-white mb-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                CON<span className="text-amber-500">INMAQ</span>
              </span>
            </Link>
            <p className="text-[14px] text-zinc-400 font-light leading-relaxed mb-5">
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
                  className="w-9 h-9 bg-white/[0.06] flex items-center justify-center hover:bg-amber-500 hover:text-zinc-900 transition-colors"
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-bold text-[15px] uppercase text-white tracking-wider mb-5 pb-2.5 border-b-2 border-amber-500 inline-block"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      to="#"
                      className="flex items-center gap-2 text-[14px] text-zinc-400 hover:text-amber-500 transition-colors"
                    >
                      <span className="text-amber-500 text-[16px]">›</span>
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
              className="font-bold text-[15px] uppercase text-white tracking-wider mb-5 pb-2.5 border-b-2 border-amber-500 inline-block"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contacto
            </h4>
            <ul className="space-y-3">
              {CONTACT_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-zinc-400">
                  <span className="text-amber-500 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] py-5 flex flex-col md:flex-row justify-between items-center text-[13px] text-zinc-400 gap-2">
          <span>© {new Date().getFullYear()} Coninmaq S.A.S — Todos los derechos reservados</span>
          <div className="flex gap-4">
            <Link to="/politica-privacidad" className="hover:text-amber-500 transition-colors">Política de privacidad</Link>
            <Link to="/terminos" className="hover:text-amber-500 transition-colors">Términos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
