export default function Paginacao({
  pagina,
  setPagina
}: {
  pagina: number;
  setPagina: (n: number) => void;
}) {
  return (
    <>
      <button onClick={() => setPagina(p => Math.max(p - 1, 1))}>
        anterior
      </button>
      <button onClick={() => setPagina(p => p + 1)}>proxima</button>
    </>
  );
}