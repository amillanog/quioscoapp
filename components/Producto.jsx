import Image from "next/image";
import { formatMoney } from "@/helpers";
import useQuiosco from "@/hook/useQuiosco";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio, id } = producto;
  const { handleSetProduct, handleChangeModal } = useQuiosco();

  return (
    <div className="border  bg-white/[.6] rounded grid gap-4 p-3 grid-rows-[max-content _1fr]">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${nombre}`}
        width={300}
        height={400}
        className="w-full h-auto rounded"
        priority={true}
      />

      <div className="grid gap-3 grid-rows-[1fr_2rem_3rem]">
        <h3 className="text-xl font-bold ">{nombre}</h3>
        <p className="font-bold text-3xl text-amber-500">
          {formatMoney(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full p-3 uppercase font-bold rounded"
          onClick={() => {
            handleSetProduct(producto);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
