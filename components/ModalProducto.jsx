import { useEffect, useState } from "react";
import Image from "next/image";
import useQuiosco from "@/hook/useQuiosco";
import { formatMoney } from "@/helpers";

const ModalProducto = () => {
  const { producto, handleAgregarPedido, pedido } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const editProduct = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      );
      setCantidad(editProduct.cantidad);
      setEditar(true);
    } else {
      setCantidad(1);
      setEditar(false);
    }
  }, [producto, pedido]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          src={`/assets/img/${producto?.imagen}.jpg`}
          alt={`Imagen producto ${producto?.nombre}`}
          width={300}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-bold text-5xl text-amber-500">
          {formatMoney(producto?.precio)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button type="button" onClick={() => setCantidad(cantidad + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
          {editar ? "Guardar" : "Añadir al pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
