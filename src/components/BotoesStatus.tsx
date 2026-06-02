export default function BotoesStatus({
  status,
  setStatus
}: {
  status: string;
  setStatus: (s: string) => void;
}) {
  return (
    <>
      <button onClick={() => setStatus("")}>Todos</button>
      <button onClick={() => setStatus("Alive")}>Alive</button>
      <button onClick={() => setStatus("Dead")}>Dead</button>
      <button onClick={() => setStatus("unknown")}>Unknown</button>
    </>
  );
}