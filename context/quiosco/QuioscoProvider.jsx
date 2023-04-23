import { useState, useEffect, createContext } from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategorie, setCurrentCategorie] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);
  const [ordenesAdmin, setOrdenesAdmin] = useState([]);

  const router = useRouter();

  const getCategories = async () => {
    const { data } = await axios("/api/categorias");
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategorie(categories[0]);
  }, [categories]);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );

    setTotal(nuevoTotal);
  }, [pedido]);

  const handleClickCategorie = (id) => {
    const categorie = categories.filter((cat) => cat.id === id);
    setCurrentCategorie(categorie[0]);
    router.push("/");
  };

  const handleSetProduct = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      // Actualizar la cantidad
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);

      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido");
    }

    setModal(false);
  };

  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizar[0]);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/ordenes", {
        pedido,
        nombre,
        total,
        fecha: Date.now().toString(),
      });

      // Resetear la app
      setCurrentCategorie(categories[0]);
      setPedido([]);
      setNombre("");
      setTotal(0);

      toast.success("Pedido Realizado Correctamente");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const fetcher = async () => {
    return await axios("/api/ordenes").then((datos) => datos.data);
  };
  const { data } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 50,
  });

  const pendientes = data?.filter((orden) => orden.estado === false);
  useEffect(() => {
    setOrdenesAdmin({ data: pendientes, id: 1 });
  }, [data]);

  const handleOrdenesAdmin = (id) => {
    switch (id) {
      case 1:
        setOrdenesAdmin({ data: pendientes, id: 1 });
        break;
      case 2:
        const completas = data?.filter((orden) => orden.estado === true);

        setOrdenesAdmin({ data: completas, id: 2 });
        break;

      default:
        break;
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategorie,
        handleClickCategorie,
        producto,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
        ordenesAdmin,
        setOrdenesAdmin,
        handleOrdenesAdmin,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
