import { useState, useEffect } from "react";

interface ProductImageProps {
  slug: string;      // e.g. "cdm6225"
  code: string;      // e.g. "CDM6225"  — shown on fallback
  gradient: string;  // tailwind gradient classes
  badge?: string;
  badgeUsed?: boolean;
  anio?: number;
  className?: string;
}

/**
 * Shows the machine WebP photo when available (/machines/<slug>.webp),
 * falling back to the gradient + code placeholder if not found.
 */
export default function ProductImage({
  slug,
  code,
  gradient,
  badge,
  badgeUsed = false,
  anio,
  className = "h-52",
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [slug]);

  return (
    <div
      className={`${className} bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center group-img`}
    >
      {!failed ? (
        <img
          src={`${import.meta.env.BASE_URL}machines/${slug}.webp`}
          alt={code}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <span
          className="font-black text-[48px] text-brand-accent/20 select-none group-hover:scale-110 transition-transform duration-500"
          aria-hidden="true"
        >
          {code}
        </span>
      )}

      {/* Badge */}
      {badge && (
        <span
          className={`absolute top-3 left-3 font-bold text-[11px] tracking-wider uppercase px-3 py-1 z-10 ${
            badgeUsed ? "bg-zinc-600 text-white" : "bg-brand-accent text-zinc-900"
          }`}
        >
          {badge}
        </span>
      )}

      {/* Year badge for used machines */}
      {badgeUsed && anio && (
        <span className="absolute top-3 right-3 bg-zinc-900/60 text-white text-[11px] font-bold px-2 py-1 backdrop-blur-sm z-10">
          {anio}
        </span>
      )}
    </div>
  );
}
