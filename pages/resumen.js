import useQuiosco from "@/hook/useQuiosco";
import Layout from "@/layout/Layout";
import Resumenproducto from "@/components/Resumenproducto";

export default function Resumen() {
  const { pedido } = useQuiosco();

  return (
    <Layout pagina="Resumen">
      <h1 className="text-3xl font-bold">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>

      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos en tu pedido</p>
      ) : (
        pedido.map((producto) => (
          <Resumenproducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
