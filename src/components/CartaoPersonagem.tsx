import { memo } from "react";
import { useFavoritos } from "../contexts/FavoritosContext";

type Personagem = {
  id: number;
  name: string;
  status: string;
  image: string;
};

const CartaoPersonagem = memo(function CartaoPersonagem({
  personagem
}: {
  personagem: Personagem;
}) {
  const { toggleFavorito, isFavorito } = useFavoritos();
  const fav = isFavorito(personagem.id);

  return (
    <div style={{ border: fav ? "2px solid red" : "1px solid #ccc" }}>
      <img src={personagem.image} width={100} />
      <h3>{personagem.name}</h3>
      <p>{personagem.status}</p>
      <button onClick={() => toggleFavorito(personagem.id)}>
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
});

export default CartaoPersonagem;