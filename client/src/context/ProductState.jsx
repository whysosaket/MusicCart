import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import ProductContext from "./productContext";
import GlobalContext from "./GlobalContext";

let url = import.meta.env.VITE_URL;

const ProductState = (props) => {
  const {setProgress} = useContext(GlobalContext);
  const [isList, setIsList] = useState(true);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);

  const toastMessage = (message, type) => {
    if(type === "success") toast.success(message);
    else if(type === "error") toast.error(message);
    else if(type === "warning") toast.warning(message);
    else toast.info(message);
  }

  const getAllProducts = async () =>{
    try {
      const response = await fetch(`${url}/api/view/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
      return true;
      } else {
        toastMessage(data.error, "warning");
      return false;
      }
      
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const getProductById = async (id) =>{
    try {
      const response = await fetch(`${url}/api/view/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
      return data.product;
      } else {
        toastMessage(data.error, "warning");
      return false;
      }
      
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <ProductContext.Provider
      value={{ isList, setIsList, products, getAllProducts, getProductById, id, setId }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;