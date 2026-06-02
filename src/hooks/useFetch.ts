import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [dados, setDados] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setErro(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("erro");
        const json = await res.json();
        setDados(json);
      } catch (e: any) {
        if (e.name !== "AbortError") setErro(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url]);

  return { dados, loading, erro };
}