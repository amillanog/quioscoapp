import Image from "next/image";
import { formatMoney } from "@/helpers";
import useQuiosco from "@/hook/useQuiosco";

const Producto = ({ producto }) => {
  const { nombre, imagen, precio, id } = producto;
  const { handleSetProduct, handleChangeModal } = useQuiosco();

  return (
    <div className="border p-3 bg-white/[.8] rounded">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${nombre}`}
        width={300}
        height={400}
        className="w-full h-auto rounded"
        priority={true}
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-5">{nombre}</h3>
        <p className="mb-5 font-bold text-3xl text-amber-500">
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
