import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import ProductContext from "./productContext";
import GlobalContext from "./GlobalContext";

let url = import.meta.env.VITE_URL;

const ProductState = (props) => {
  const {setProgress} = useContext(GlobalContext);
  const [isList, setIsList] = useState(true);
  const [products, setProducts] = useState([]);

  const toastMessage = (message, type) => {
    if(type === "success") toast.success(message);
    else if(type === "error") toast.error(message);
    else if(type === "warning") toast.warning(message);
    else toast.info(message);
  }

  const getAllProducts = async () =>{
    // console.log(setProgress);
    // setProgress(20);
    try {
      const response = await fetch(`${url}/api/view/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setProgress(40);
      const data = await response.json();
      // setProgress(60);
      if (data.success) {
        setProducts(data.products);
        // setProgress(100);
      return true;
      } else {
        toastMessage(data.error, "warning");
        // setProgress(100);
      return false;
      }
      
    } catch (error) {
      // setProgress(100);
      console.log(error);
      return false;
    }
  }

  return (
    <ProductContext.Provider
      value={{ isList, setIsList, products, getAllProducts }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;