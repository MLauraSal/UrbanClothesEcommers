import ProductContext from "../context/ProductsContext.jsx"
import { useContext } from "react";

export const useProducts = () => useContext(ProductContext);
  


 export default useProducts