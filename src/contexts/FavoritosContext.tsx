import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FavoritosContextType = {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  isFavorito: (id: number) => boolean;
  totalFavoritos: number;
};

const FavoritosContext = createContext<FavoritosContextType | null>(null);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useLocalStorage<number[]>("fav", []);

  function toggleFavorito(id: number) {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  function isFavorito(id: number) {
    return favoritos.includes(id);
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        toggleFavorito,
        isFavorito,
        totalFavoritos: favoritos.length
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const ctx = useContext(FavoritosContext);
  if (!ctx) throw new Error("erro");
  return ctx;
}