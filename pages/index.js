import Layout from "../layout/Layout";
import useQuiosco from "@/hook/useQuiosco";
import Producto from "../components/Producto";

export default function Home() {
  const { currentCategorie } = useQuiosco();

  return (
    <Layout pagina={`Menú ${currentCategorie?.nombre}`}>
      <h1 className="text-3xl font-bold">{currentCategorie?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-1 md:gird-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategorie?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
