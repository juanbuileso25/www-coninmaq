import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  const toggle = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("coninmaq-lang", lang);
  };

  return (
    <div className="flex items-center gap-0.5 border border-zinc-200 overflow-hidden flex-shrink-0">
      <button
        onClick={() => toggle("es")}
        className={`px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase transition-colors duration-150 ${
          current === "es"
            ? "bg-brand-accent text-zinc-900"
            : "bg-white text-zinc-500 hover:text-brand-accent-dark"
        }`}
        aria-label="Español"
      >
        ES
      </button>
      <button
        onClick={() => toggle("en")}
        className={`px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase transition-colors duration-150 ${
          current === "en"
            ? "bg-brand-accent text-zinc-900"
            : "bg-white text-zinc-500 hover:text-brand-accent-dark"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
