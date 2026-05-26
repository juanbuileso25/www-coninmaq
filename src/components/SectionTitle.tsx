import { useInView } from "../hooks/useInView";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`mb-12 ${isCenter ? "text-center" : "text-left"}`}>
      <span
        className={`block text-amber-500 text-[11px] font-bold tracking-[3px] uppercase mb-3 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {eyebrow}
      </span>
      {title && (
        <h2
          className={`text-[36px] font-bold uppercase tracking-wide leading-tight transition-all duration-500 delay-100 ${
            light ? "text-white" : "text-zinc-900"
          } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-3 text-[15px] font-light max-w-xl leading-relaxed transition-all duration-500 delay-200 ${
            isCenter ? "mx-auto" : ""
          } ${light ? "text-zinc-400" : "text-zinc-500"} ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-[3px] bg-amber-500 mt-4 transition-all duration-700 delay-300 ${
          isCenter ? "mx-auto" : ""
        } ${inView ? "w-14" : "w-0"}`}
      />
    </div>
  );
}
