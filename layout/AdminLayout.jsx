import SidebarAdmin from "@/components/SidebarAdmin";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <SidebarAdmin />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 md:h-screen md:overflow-y-scroll">
          <div className="p-5">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
