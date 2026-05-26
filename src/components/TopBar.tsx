import { Icon } from "@iconify/react";
import { SOCIAL_LINKS } from "../data";

const SOCIAL_ICON: Record<string, string> = {
  Facebook: "mdi:facebook",
  Instagram: "mdi:instagram",
  LinkedIn: "mdi:linkedin",
};

export default function TopBar() {
  return (
    <div className="bg-zinc-900 text-zinc-400 text-[13px]">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-[6px]">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1.5">
            <Icon icon="mdi:phone" width={14} className="text-brand-accent" />
            <a href="tel:3176707071" className="text-white font-semibold hover:text-brand-accent transition-colors">
              316 381 5694
            </a>
          </span>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span className="hidden md:flex items-center gap-1.5">
            <Icon icon="mdi:email-outline" width={14} className="text-brand-accent" />
            <a href="mailto:comercioexterior@coninmaqsas.com" className="text-white font-semibold hover:text-brand-accent transition-colors">
              comercioexterior@coninmaqsas.com
            </a>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-accent transition-colors"
            >
              <Icon icon={SOCIAL_ICON[s.label] ?? "mdi:link"} width={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
