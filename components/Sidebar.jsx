import { useState } from "react";
import Image from "next/image";
import useQuiosco from "../hook/useQuiosco";
import s from "@/styles/Layout.module.css";
import Categoria from "./Categoria";
import BtnHamburguesa from "./BtnHamburguesa";

const Sidebar = () => {
  const { categories } = useQuiosco();
  const [open, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="grid gap-2  p-5 grid-cols-[1fr_25px] items-end md:grid-cols-1">
        <Image
          width="0"
          height="0"
          style={{ width: "300px", height: "150px" }}
          src="/assets/img/logo_quiosco.svg"
          alt="imagen logotipo"
          priority={true}
        />
        <div className="md:invisible">
          <BtnHamburguesa
            onclick={handleMenu}
            color="rgb(245 158 11)"
            initOpen={open}
          />
        </div>
      </div>
      <nav
        className={`${s.main_aside_nav} scroll ${
          open ? "visible" : "invisible h-0"
        } md:visible md:h-full `}
      >
        {categories.map((categorie) => (
          <Categoria key={categorie.id} categorie={categorie} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
