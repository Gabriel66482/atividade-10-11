import { useState } from "react";

export function useLocalStorage<T>(chave: string, valorInicial: T) {
  const [valor, setValor] = useState<T>(() => {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : valorInicial;
  });

  function setValorEPersistir(v: T | ((prev: T) => T)) {
    setValor(prev => {
      const novo = v instanceof Function ? v(prev) : v;
      localStorage.setItem(chave, JSON.stringify(novo));
      return novo;
    });
  }

  return [valor, setValorEPersistir] as const;
}