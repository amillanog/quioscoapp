import Image from "next/image";
import useQuiosco from "../hook/useQuiosco";
import s from "@/styles/Layout.module.css";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categories } = useQuiosco();

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
        {categories.map((categorie) => (
          <Categoria key={categorie.id} categorie={categorie} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
