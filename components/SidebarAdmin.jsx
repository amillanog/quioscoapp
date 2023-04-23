import useQuiosco from "@/hook/useQuiosco";
import Image from "next/image";
import s from "@/styles/Layout.module.css";

const navdata = [
  { id: 1, nombre: "Pendientes", icono: "orden" },
  { id: 2, nombre: "Completadas", icono: "orden_c" },
];

const SidebarAdmin = () => {
  const { handleOrdenesAdmin, ordenesAdmin } = useQuiosco();

  return (
    <>
      <Image
        width="0"
        height="0"
        style={{ width: "300px", height: "150px" }}
        src="/assets/img/logo_quiosco.svg"
        alt="imagen logotipo"
        priority={true}
        className="p-3 mx-auto"
      />

      <nav className={`${s.main_aside_nav} scroll`}>
        {navdata.map((ordenes) => (
          <div
            key={ordenes.id}
            className={`${
              ordenes.id === ordenesAdmin.id ? `bg-amber-300` : ""
            } flex items-center gap-0 w-full border p-3 h-100% hover:bg-amber-300 flex-col sm:gap-2 sm:flex-row h-24 `}
          >
            <Image
              width="0"
              height="0"
              style={{ width: "70px", height: "70px" }}
              src={`/assets/img/icono_${ordenes.icono}.svg`}
              alt="Imagen icono"
            />
            <button
              type="button"
              className="text-2xl font-bold hover:cursor-pointer "
              onClick={() => handleOrdenesAdmin(ordenes.id)}
            >
              {ordenes.nombre}
            </button>
          </div>
        ))}
      </nav>
    </>
  );
};

export default SidebarAdmin;
