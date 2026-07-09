import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS, CONTACT_ITEMS } from "../data";

const SOCIAL_ICON: Record<string, string> = {
  Facebook: "mdi:facebook",
  Instagram: "mdi:instagram",
  LinkedIn: "mdi:linkedin",
};

export default function Footer() {
  const { t } = useTranslation();
  const linkColumns = [
    {
      title: t("footer.machineryCol"),
      links: [
        { label: t("nav.machineryNew"), href: "/maquinaria-pesada/nueva" },
        { label: t("nav.machineryUsed"), href: "/maquinaria-pesada/usada" },
        { label: t("nav.rental"), href: "/renta" },
      ],
    },
    {
      title: t("footer.partsCol"),
      links: [
        { label: "Lonking", href: "/repuestos" },
      ],
    },
  ];

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
              {t("footer.tagline")}
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

            {/* RIT */}
            <a
              href="https://pub-6140276489b44c2fa4eb130bd186943d.r2.dev/rit/1ace38d9-af4c-45ff-be89-d9e612c15c1b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-5 group"
              aria-label="Ver RIT - Reglamento interno del trabajo"
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent("https://pub-6140276489b44c2fa4eb130bd186943d.r2.dev/rit/1ace38d9-af4c-45ff-be89-d9e612c15c1b.pdf")}&bgcolor=FFFFFF&color=111111&margin=2`}
                alt="QR RIT Coninmaq"
                width={48}
                height={48}
                className="w-12 h-12 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div>
                <p className="text-[12px] font-bold text-white uppercase tracking-wider leading-tight">RIT</p>
                <p className="text-[11px] text-zinc-500 leading-tight">Reglamento interno del trabajo</p>
              </div>
            </a>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-[15px] uppercase text-white tracking-wider mb-5 pb-2.5 border-b-2 border-brand-accent inline-block">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 text-[14px] text-zinc-400 hover:text-brand-accent transition-colors group"
                    >
                      <Icon icon="mdi:chevron-right" width={16} className="text-brand-accent group-hover:translate-x-0.5 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[15px] uppercase text-white tracking-wider mb-5 pb-2.5 border-b-2 border-brand-accent inline-block">
              {t("footer.contactCol")}
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
          <span>© {new Date().getFullYear()} Coninmaq S.A.S — {t("footer.rights")}</span>
          <div className="flex gap-4">
            <Link to="/politica-privacidad" className="hover:text-brand-accent transition-colors">{t("footer.privacy")}</Link>
            <Link to="/terminos" className="hover:text-brand-accent transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
