import useQuiosco from "@/hook/useQuiosco";
import AdminLayout from "@/layout/AdminLayout";
import Orden from "@/components/Orden";

export default function Admin() {
  const { ordenesAdmin } = useQuiosco();

  return (
    <AdminLayout pagina="admin">
      <h1 className="text-3xl font-bold">Panel de administración</h1>
      <p className="text-2xl my-10">Administra las Ordenes</p>  
      {ordenesAdmin.data && ordenesAdmin.data.length ? (
        ordenesAdmin.data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : ordenesAdmin.id === 1 ? (
        <p>No hay ordenes pendientes</p>
      ) : (
        <p>No hay ordenes Completadas</p>
      )}
    </AdminLayout>
  );
}
