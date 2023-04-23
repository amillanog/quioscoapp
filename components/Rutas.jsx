import { useRouter } from "next/router";
const rutas = [
  { ruta: 1, nombre: "Menú", url: "/" },
  { ruta: 2, nombre: "Resumen", url: "/resumen" },
  { ruta: 3, nombre: "Datos y Total", url: "/total" },
];

const Rutas = () => {
  const router = useRouter();

  const progresoBar = () => {
    switch (router.pathname) {
      case "/":
        return 2;
      case "/resumen":
        return 50;
      case "/total":
        return 100;

      default:
        return 2;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-5 sm:flex-row sm:justify-between">
        {rutas.map((ruta) => (
          <button
            onClick={() => {
              router.push(ruta.url);
            }}
            key={ruta.ruta}
            className="text-2xl font-bold"
          >
            {ruta.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10 ">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${progresoBar()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Rutas;
