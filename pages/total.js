import { useCallback, useEffect } from "react";
import useQuiosco from "@/hook/useQuiosco";
import Layout from "@/layout/Layout";
import { formatMoney } from "@/helpers";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);
  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-3xl font-bold">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form onSubmit={colocarOrden}>
        <div className="mb-10">
          <label
            htmlFor="nombre"
            className="block uppercase font-bold text-slate-800 text-xl mb-5"
          >
            Nombre
          </label>
          <input
            id="nombre"
            className="bg-gray-200 w-full lg:w-1/3 p-2 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <p className="text-2xl">
            Total a pagar{" "}
            <span className="font-bold">{formatMoney(total)}</span>
          </p>
        </div>
        <div>
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-indigo-200"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            } w-ful lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center `}
            value="confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
