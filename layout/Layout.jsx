import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Rutas from "@/components/Rutas";
import Modal from "@/components/modal/Modal";
import ModalProducto from "@/components/ModalProducto";
import useQuiosco from "@/hook/useQuiosco";
import { ToastContainer } from "react-toastify";

import s from "../styles/Layout.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children, pagina }) {
  const { modal, handleChangeModal } = useQuiosco();

  return (
    <>
      <Head>
        <title>Café - {pagina || ""}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className={`${s.main_layout}`}>
        <aside className={`${s.main_aside} scroll`}>
          <Sidebar />
        </aside>
        <main className={`${s.main_main} scroll bg-[url('/assets/img/bg_pizza.svg')]`}>
          <div className="">
            <Rutas />
            {children}
          </div>
        </main>
      </div>

      <Modal isOpen={modal} closetModal={() => handleChangeModal()}>
        <ModalProducto />
      </Modal>
      <ToastContainer />
    </>
  );
}
