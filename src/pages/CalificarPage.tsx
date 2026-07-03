import { useState } from "react";
import { Icon } from "@iconify/react";
import SEO from "../components/SEO";

const BASE_URL = import.meta.env.VITE_API_URL ?? "https://api.coninmaqsas.com";

const QUESTIONS = [
  {
    key: "q1_attention" as const,
    text: "¿Cómo califica la atención recibida por nuestro equipo comercial?",
    labels: ["Muy mala", "Mala", "Regular", "Buena", "Excelente"],
  },
  {
    key: "q2_information" as const,
    text: "¿La información suministrada fue clara y suficiente?",
    labels: ["Muy mala", "Mala", "Regular", "Buena", "Excelente"],
  },
  {
    key: "q3_response_time" as const,
    text: "¿Cómo califica el tiempo de respuesta a su solicitud?",
    labels: ["Muy lento", "Lento", "Aceptable", "Rápido", "Muy rápido"],
  },
  {
    key: "q4_quality" as const,
    text: "¿Cómo califica la calidad de nuestros productos o servicios?",
    labels: ["Muy mala", "Mala", "Regular", "Buena", "Excelente"],
  },
  {
    key: "q5_understanding" as const,
    text: "¿Nuestro equipo entendió sus necesidades y le ofreció una solución adecuada?",
    labels: ["Totalmente en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Totalmente de acuerdo"],
  },
  {
    key: "q6_value" as const,
    text: "¿Cómo califica la relación entre calidad y precio?",
    labels: ["Muy mala", "Mala", "Regular", "Buena", "Excelente"],
  },
  {
    key: "q7_overall" as const,
    text: "¿Qué tan satisfecho(a) está con la experiencia general con CONINMAQ?",
    labels: ["Muy insatisfecho", "Insatisfecho", "Neutral", "Satisfecho", "Muy satisfecho"],
  },
];

type FormData = {
  q1_attention:     number;
  q2_information:   number;
  q3_response_time: number;
  q4_quality:       number;
  q5_understanding: number;
  q6_value:         number;
  q7_overall:       number;
  q8_nps:           number;
  comment:          string;
  reviewer_name:    string;
  reviewer_role:    string;
};

function StarRating({
  value,
  labels,
  onChange,
}: {
  value: number;
  labels: string[];
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  return (
    <div className="space-y-3">
      <div className="flex gap-1 sm:gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`${n} — ${labels[n - 1]}`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            className="flex flex-col items-center gap-0.5 group"
          >
            <Icon
              icon="mdi:star"
              width={32}
              className={`transition-all duration-150 ${
                active >= n
                  ? "text-brand-accent drop-shadow-[0_0_6px_rgba(255,200,55,0.6)]"
                  : "text-zinc-300 group-hover:text-zinc-400"
              }`}
            />
            <span className="text-[10px] text-zinc-400 hidden sm:block">{n}</span>
          </button>
        ))}
      </div>
      {active > 0 && (
        <p className="text-[13px] font-semibold text-brand-accent">
          {"★".repeat(active)} — {labels[active - 1]}
        </p>
      )}
    </div>
  );
}

function NpsSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const getColor = (n: number) => {
    if (value === n) {
      if (n <= 6)  return "bg-red-500 text-white border-red-500";
      if (n <= 8)  return "bg-yellow-400 text-zinc-900 border-yellow-400";
      return "bg-green-500 text-white border-green-500";
    }
    return "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400";
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 11 }, (_, i) => i).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`w-10 h-10 rounded border-2 font-bold text-sm transition-all duration-150 ${getColor(n)}`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[11px] text-zinc-400">
        <span>0 — Nada probable</span>
        <span>10 — Muy probable</span>
      </div>
    </div>
  );
}

export default function CalificarPage() {
  const [form, setForm] = useState<FormData>({
    q1_attention: 0,
    q2_information: 0,
    q3_response_time: 0,
    q4_quality: 0,
    q5_understanding: 0,
    q6_value: 0,
    q7_overall: 0,
    q8_nps: -1,
    comment: "",
    reviewer_name: "",
    reviewer_role: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const starKeys = QUESTIONS.map((q) => q.key);
  const allStarsFilled = starKeys.every((k) => form[k] > 0);
  const npsFilled = form.q8_nps >= 0;
  const canSubmit = allStarsFilled && npsFilled && !loading;

  const handleStarChange = (key: keyof FormData, value: number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const payload = {
        q1_attention:     form.q1_attention,
        q2_information:   form.q2_information,
        q3_response_time: form.q3_response_time,
        q4_quality:       form.q4_quality,
        q5_understanding: form.q5_understanding,
        q6_value:         form.q6_value,
        q7_overall:       form.q7_overall,
        q8_nps:           form.q8_nps,
        comment:          form.comment || undefined,
        reviewer_name:    form.reviewer_name || undefined,
        reviewer_role:    form.reviewer_role || undefined,
      };
      const res = await fetch(`${BASE_URL}/reviews/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setError("No se pudo enviar la calificación. Por favor intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <SEO title="¡Gracias por calificarnos! — Coninmaq" description="Gracias por calificar tu experiencia con CONINMAQ." path="/calificar" />
        <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-zinc-50">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto shadow-[0_8px_32px_rgba(255,200,55,0.4)]">
              <Icon icon="mdi:check-bold" width={40} className="text-zinc-900" />
            </div>
            <h1 className="font-extrabold text-3xl uppercase text-zinc-900 tracking-wide">
              ¡Gracias por calificarnos!
            </h1>
            <p className="text-zinc-500 text-[15px] leading-relaxed">
              Su opinión es muy valiosa para nosotros. Seguiremos trabajando para brindarle el mejor servicio.
            </p>
            <a
              href="/"
              className="inline-block bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[14px] tracking-wider uppercase px-8 py-4 hover:from-[#FFE07A] hover:to-brand-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,200,55,0.5)] transition-all duration-200"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Califícanos — Coninmaq"
        description="Comparta su experiencia con CONINMAQ. Su opinión nos ayuda a mejorar."
        path="/calificar"
      />

      {/* Hero */}
      <div className="bg-zinc-900 py-16 px-6 text-center">
        <p className="text-brand-accent text-[12px] font-bold uppercase tracking-[0.2em] mb-3">
          Su opinión importa
        </p>
        <h1 className="font-extrabold text-3xl sm:text-4xl uppercase text-white tracking-wide leading-tight">
          Califique su experiencia con{" "}
          <span className="text-brand-accent">CONINMAQ</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-[15px] max-w-xl mx-auto">
          Responda las siguientes preguntas para ayudarnos a mejorar nuestro servicio. Solo toma 2 minutos.
        </p>
      </div>

      {/* Form */}
      <div className="bg-zinc-50 py-16 px-6">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-10">

          {/* Star questions */}
          {QUESTIONS.map((q, i) => (
            <div key={q.key} className="bg-white border border-zinc-100 shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 bg-brand-accent text-zinc-900 font-black text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="font-semibold text-zinc-800 text-[15px] leading-snug">{q.text}</p>
              </div>
              <StarRating
                value={form[q.key] as number}
                labels={q.labels}
                onChange={(v) => handleStarChange(q.key, v)}
              />
            </div>
          ))}

          {/* NPS question */}
          <div className="bg-white border border-zinc-100 shadow-sm p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 bg-brand-accent text-zinc-900 font-black text-[13px] flex items-center justify-center flex-shrink-0 mt-0.5">
                8
              </span>
              <p className="font-semibold text-zinc-800 text-[15px] leading-snug">
                En una escala de 0 a 10, ¿qué tan probable es que recomiende CONINMAQ a un colega o empresa?
              </p>
            </div>
            <NpsSelector value={form.q8_nps} onChange={(v) => setForm((p) => ({ ...p, q8_nps: v }))} />
          </div>

          {/* Comment */}
          <div className="bg-white border border-zinc-100 shadow-sm p-6 space-y-3">
            <p className="font-semibold text-zinc-800 text-[15px]">
              Comentarios adicionales <span className="text-zinc-400 font-normal">(opcional)</span>
            </p>
            <textarea
              rows={4}
              maxLength={800}
              placeholder="Cuéntenos más sobre su experiencia..."
              value={form.comment}
              onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
              className="w-full border border-zinc-200 px-4 py-3 text-[14px] text-zinc-700 placeholder:text-zinc-300 focus:outline-none focus:border-brand-accent resize-none"
            />
            <p className="text-[11px] text-zinc-400 text-right">{form.comment.length}/800</p>
          </div>

          {/* Optional identity */}
          <div className="bg-white border border-zinc-100 shadow-sm p-6 space-y-4">
            <p className="font-semibold text-zinc-800 text-[15px]">
              ¿Desea que su testimonio aparezca en nuestra página?{" "}
              <span className="text-zinc-400 font-normal">(opcional)</span>
            </p>
            <p className="text-[13px] text-zinc-400">
              Si autoriza, podemos mostrar su nombre y rol junto a su comentario como testimonio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                maxLength={100}
                placeholder="Su nombre"
                value={form.reviewer_name}
                onChange={(e) => setForm((p) => ({ ...p, reviewer_name: e.target.value }))}
                className="border border-zinc-200 px-4 py-3 text-[14px] text-zinc-700 placeholder:text-zinc-300 focus:outline-none focus:border-brand-accent"
              />
              <input
                type="text"
                maxLength={100}
                placeholder="Cargo / Empresa"
                value={form.reviewer_role}
                onChange={(e) => setForm((p) => ({ ...p, reviewer_role: e.target.value }))}
                className="border border-zinc-200 px-4 py-3 text-[14px] text-zinc-700 placeholder:text-zinc-300 focus:outline-none focus:border-brand-accent"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-[14px] text-center">{error}</p>
          )}

          {!allStarsFilled && (
            <p className="text-zinc-400 text-[13px] text-center">
              Por favor responda todas las preguntas de calificación para continuar.
            </p>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-gradient-to-b from-brand-accent-light to-brand-accent text-zinc-900 font-bold text-[15px] tracking-wider uppercase py-4 hover:from-[#FFE07A] hover:to-brand-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,200,55,0.5)] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {loading ? "Enviando..." : "Enviar calificación"}
          </button>
        </form>
      </div>
    </>
  );
}
