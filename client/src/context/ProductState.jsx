import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import ProductContext from "./productContext";
import GlobalContext from "./GlobalContext";

let url = import.meta.env.VITE_URL;

const ProductState = (props) => {
  const {setProgress} = useContext(GlobalContext);
  const [isList, setIsList] = useState(true);

  return (
    <ProductContext.Provider
      value={{ isList, setIsList }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;