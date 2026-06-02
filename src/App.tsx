import { useMemo, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { useDebounce } from "./hooks/useDebounce";
import CartaoPersonagem from "./components/CartaoPersonagem";
import BarraBusca from "./components/BarraBusca";
import BotoesStatus from "./components/BotoesStatus";
import Paginacao from "./components/Paginacao";
import { useFavoritos } from "./contexts/FavoritosContext";

export default function App() {
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("");
  const [pagina, setPagina] = useState(1);

  const buscaDebounce = useDebounce(busca, 400);

  const url = `https://rickandmortyapi.com/api/character?page=${pagina}&name=${buscaDebounce}&status=${status}`;

  const { dados, loading } = useFetch<any>(url);
  const { totalFavoritos } = useFavoritos();

  const personagens = useMemo(() => dados?.results || [], [dados]);

  return (
    <div>
      <h1>{totalFavoritos} favoritos</h1>

      <BarraBusca valor={busca} onChange={setBusca} />
      <BotoesStatus status={status} setStatus={setStatus} />

      {loading && <p>loading</p>}

      {personagens.map((p: any) => (
        <CartaoPersonagem key={p.id} personagem={p} />
      ))}

      <Paginacao pagina={pagina} setPagina={setPagina} />
    </div>
  );
}