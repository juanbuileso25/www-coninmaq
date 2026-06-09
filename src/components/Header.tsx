import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { NavItem } from "../types";
import LanguageSwitcher from "./LanguageSwitcher";

function useNavItems(): NavItem[] {
  const { t } = useTranslation();
  return [
    { label: t("nav.home"), href: "/" },
    {
      label: t("nav.about"),
      href: "/nosotros",
      sub: [
        { label: t("nav.aboutWhoWeAre"), href: "/nosotros" },
        { label: t("nav.aboutWork"), href: "/trabaja-con-nosotros" },
      ],
    },
    {
      label: t("nav.machinery"),
      href: "/maquinaria-pesada",
      sub: [
        { label: t("nav.machineryNew"), href: "/maquinaria-pesada/nueva" },
        { label: t("nav.machineryUsed"), href: "/maquinaria-pesada/usada" },
      ],
    },
    { label: t("nav.parts"), href: "/repuestos" },
    { label: t("nav.rental"), href: "/renta" },
    { label: t("nav.virtualStore"), href: "/tienda" },
    { label: t("nav.contact"), href: "/contacto" },
  ];
}

interface DesktopNavItemProps {
  item: NavItem;
}

function DesktopNavItem({ item }: DesktopNavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `relative inline-flex items-center gap-1 font-semibold text-[14px] tracking-wider uppercase px-4 py-2 transition-colors group ${
            isActive ? "text-brand-accent" : "text-zinc-700 hover:text-brand-accent"
          }`
        }
      >
        {item.label}
        {item.sub && (
          <Icon
            icon="mdi:chevron-down"
            width={14}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      </NavLink>

      {item.sub && open && (
        <ul className="absolute top-full left-0 min-w-[210px] bg-zinc-900 border-t-[3px] border-brand-accent shadow-[0_20px_60px_rgba(0,0,0,0.25)] z-50 animate-fade-in">
          {item.sub.map((sub) => (
            <li key={sub.label}>
              <Link
                to={sub.href}
                className="flex items-center gap-2 px-5 py-[10px] text-[13px] text-zinc-400 hover:bg-brand-accent hover:text-zinc-900 transition-all duration-150 border-b border-white/5 group/sub"
                onClick={() => setOpen(false)}
              >
                <Icon icon="mdi:chevron-right" width={14} className="text-brand-accent group-hover/sub:text-zinc-900 transition-colors" />
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.sub) {
    return (
      <Link
        to={item.href}
        className="block text-zinc-300 py-3 text-sm border-b border-zinc-800 hover:text-brand-accent transition-colors font-semibold uppercase tracking-wide"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-zinc-800">
      <button
        type="button"
        className="w-full flex items-center justify-between text-zinc-300 py-3 text-sm font-semibold uppercase tracking-wide hover:text-brand-accent transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Icon
          icon="mdi:chevron-down"
          width={16}
          className={`transition-transform duration-200 ${open ? "rotate-180 text-brand-accent" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {item.sub.map((sub) => (
          <Link
            key={sub.label}
            to={sub.href}
            className="flex items-center gap-1.5 pl-4 text-zinc-400 py-2.5 text-[13px] hover:text-brand-accent transition-colors border-b border-zinc-800/50 last:border-0"
            onClick={onClose}
          >
            <Icon icon="mdi:chevron-right" width={14} className="text-brand-accent/60 flex-shrink-0" />
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const { t } = useTranslation();
  const navItems = useNavItems();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const update = () => {
      if (headerRef.current) {
        setMenuTop(headerRef.current.getBoundingClientRect().bottom);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b-[3px] border-brand-accent transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "bg-white shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Coninmaq"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navItems.map((item) => (
                  <DesktopNavItem key={item.href} item={item} />
                ))}
              </ul>
            </nav>

            {/* CTA + Language switcher */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <LanguageSwitcher />
              <a
                href="tel:3163815694"
                className="inline-flex items-center gap-2 bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[12px] tracking-wider uppercase px-4 py-2 hover:from-[#FFE07A] hover:to-brand-accent-light hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(255,200,55,0.45)] transition-all duration-200"
              >
                <Icon icon="mdi:phone" width={14} />
                {t("header.callUs")}
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-zinc-700 hover:text-brand-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={t("header.openMenu")}
            >
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: menuTop }}
      >
        <div
          className="absolute inset-0 bg-zinc-900/50"
          onClick={closeMenu}
        />

        <div
          className="relative bg-zinc-900 overflow-y-auto"
          style={{ maxHeight: `calc(100dvh - ${menuTop}px)` }}
        >
          <div className="px-6 py-4">
            {navItems.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={closeMenu} />
            ))}

            <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-800 items-center">
              <a
                href="tel:3163815694"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[13px] tracking-wide uppercase py-3 hover:from-[#FFE07A] hover:to-brand-accent-light transition-all duration-200"
              >
                <Icon icon="mdi:phone" width={15} />
                {t("header.call")}
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
