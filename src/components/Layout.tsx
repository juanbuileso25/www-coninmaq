import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
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
    </div>
  );
}
