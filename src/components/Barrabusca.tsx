export default function BarraBusca({
  valor,
  onChange
}: {
  valor: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      value={valor}
      onChange={e => onChange(e.target.value)}
      placeholder="buscar"
    />
  );
}