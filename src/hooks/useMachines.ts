import { useState, useEffect } from "react";
import type { ApiMachine } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL ?? "https://api.coninmaqsas.com";

export function useMachines(opts: {
  machine_type?: string;
  visible_web?: boolean;
  featured?: boolean;
  category?: string;
  enabled?: boolean;
} = {}) {
  const [machines, setMachines] = useState<ApiMachine[]>([]);
  const [loading, setLoading] = useState(opts.enabled !== false);
  const [error, setError] = useState<string | null>(null);

  const { machine_type, visible_web, featured, category, enabled = true } = opts;

  useEffect(() => {
    if (!enabled) {
      setMachines([]);
      setLoading(false);
      return;
    }

    const params = new URLSearchParams();
    if (machine_type !== undefined) params.set("machine_type", machine_type);
    if (visible_web !== undefined) params.set("visible_web", String(visible_web));
    if (featured !== undefined) params.set("featured", String(featured));
    if (category !== undefined) params.set("category", category);

    const qs = params.toString();
    const url = `${BASE_URL}/machines/${qs ? `?${qs}` : ""}`;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then((data: ApiMachine[]) => setMachines(data))
      .catch(() => setError("No se pudo cargar el inventario"))
      .finally(() => setLoading(false));
  }, [machine_type, visible_web, featured, category, enabled]);

  return { machines, loading, error };
}

export function useMachineBySlug(slug: string | undefined) {
  const [machine, setMachine] = useState<ApiMachine | null>(null);
  const [loading, setLoading] = useState(!!slug);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) { setLoading(false); return; }
    setLoading(true);
    setError(null);
    fetch(`${BASE_URL}/machines/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.json();
      })
      .then((data: ApiMachine) => setMachine(data))
      .catch(() => setError("not_found"))
      .finally(() => setLoading(false));
  }, [slug]);

  return { machine, loading, error };
}
