import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Icon } from "@iconify/react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <TopBar />
      <Header scrolled={scrolled} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/573163815694"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1aaa50] text-white flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-110 transition-all duration-300"
      >
        <Icon icon="mdi:whatsapp" width={30} />
      </a>
    </div>
  );
}
