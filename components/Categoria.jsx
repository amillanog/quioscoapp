import useQuiosco from "../hook/useQuiosco";
import Image from "next/image";

const Categoria = ({ categorie }) => {
  const { currentCategorie, handleClickCategorie } = useQuiosco();

  const { nombre, icono, id } = categorie;
  return (
    <div
      className={`${
        currentCategorie?.id === id ? `bg-amber-300` : ""
      } flex items-center gap-0 w-full border p-3 h-100% hover:bg-amber-300 flex-col sm:gap-2 sm:flex-row `}     
    >
      <Image
        width="0"
        height="0"
        style={{ width: "70px", height: "70px" }}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer "
        onClick={() => handleClickCategorie(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
