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
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
        {currentCategorie?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
