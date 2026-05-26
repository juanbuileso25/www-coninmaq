import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import type { NavItem } from "../types";
import { NAV_ITEMS } from "../data";

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
          `relative font-semibold text-[14px] tracking-wider uppercase px-3 py-2 block transition-colors group ${
            isActive ? "text-amber-500" : "text-zinc-700 hover:text-amber-500"
          }`
        }
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {item.label}
        {item.sub && <span className="ml-1 text-[10px] opacity-60">▾</span>}
        {/* Underline indicator */}
        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      </NavLink>

      {item.sub && open && (
        <ul className="absolute top-full left-0 min-w-[210px] bg-zinc-900 border-t-[3px] border-amber-500 shadow-[0_20px_60px_rgba(0,0,0,0.25)] z-50 animate-fade-in">
          {item.sub.map((sub) => (
            <li key={sub.label}>
              <Link
                to={sub.href}
                className="flex items-center gap-2 px-5 py-[10px] text-[13px] text-zinc-400 hover:bg-amber-500 hover:text-zinc-900 transition-all duration-150 border-b border-white/5 group/sub"
                onClick={() => setOpen(false)}
              >
                <span className="text-amber-500 group-hover/sub:text-zinc-900 transition-colors">›</span>
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b-[3px] border-amber-500 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-white shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <span
              className="font-black text-[26px] tracking-[2px] text-zinc-900 group-hover:text-zinc-700 transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              CON<span className="text-amber-500 group-hover:text-amber-400 transition-colors">INMAQ</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex flex-col gap-1 flex-shrink-0">
            <a
              href="tel:3163815694"
              className="bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-900 font-bold text-[12px] tracking-wider uppercase px-4 py-2 hover:from-amber-300 hover:to-amber-400 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(245,158,11,0.45)] transition-all duration-200 text-center"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              📞 Llámanos
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-zinc-700 hover:text-amber-500 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-zinc-900 border-t border-zinc-800 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                className="block text-zinc-300 py-2.5 text-sm border-b border-zinc-800 hover:text-amber-500 transition-colors font-semibold uppercase tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.sub?.map((sub) => (
                <Link
                  key={sub.label}
                  to={sub.href}
                  className="block pl-4 text-zinc-500 py-2 text-[13px] hover:text-amber-500 transition-colors border-b border-zinc-800/50"
                  onClick={() => setMobileOpen(false)}
                >
                  › {sub.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-800">
            <a href="tel:3176707071" className="flex-1 bg-gradient-to-b from-amber-400 to-amber-500 text-zinc-900 font-bold text-[13px] tracking-wide uppercase py-3 text-center hover:from-amber-300 hover:to-amber-400 transition-all duration-200" style={{ fontFamily: "'Oswald', sans-serif" }}>
              📞 Llamar
            </a>
            <a href="https://tienda.coninmaq.com" className="flex-1 bg-zinc-800 text-white font-bold text-[13px] tracking-wide uppercase py-3 text-center hover:bg-zinc-700 transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
              🛒 Tienda
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
