import React, { useState } from "react";
import CartContext from "./cartContext";
import { toast } from "react-toastify";

let url = import.meta.env.VITE_URL;

const CartState = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const toastMessage = (message, type) => {
    if (type === "success") toast.success(message);
    else if (type === "error") toast.error(message);
    else if (type === "warning") toast.warning(message);
    else toast.info(message);
  };

  const getCart = async () => {
    try {
      const response = await fetch(`${url}/api/product/getcart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.success) {
        setCart(data.products);
        setTotal(data.total);
        return true;
      } else {
        toastMessage(data.error, "warning");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const addToCart = async (id) => {
    try {
      const response = await fetch(`${url}/api/product/addtocart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        toastMessage("Item Added", "success");
        return true;
      } else {
        toastMessage(data.error, "warning");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const checkout = async () => {
    try {
      const response = await fetch(`${url}/api/product/checkout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.success) {
        toastMessage(data.info, "success");
        return true;
      } else {
        toastMessage(data.error, "warning");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const response = await fetch(`${url}/api/product/updatequantity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ id, quantity }),
      });
      const data = await response.json();
      if (data.success) {
        toastMessage(data.info, "success");
        return true;
      } else {
        toastMessage(data.error, "warning");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      getCart();
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, checkout, getCart, total, updateQuantity }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
