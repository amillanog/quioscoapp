import { useContext } from "react";
import QuioscoContext from "../context/quiosco/QuioscoProvider";

const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;
