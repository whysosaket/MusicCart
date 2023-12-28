import React from "react";
import "../css/Cart/Cart.css";
import CartTitle from "../components/Cart/CartTitle";
import CartItems from "../components/Cart/CartItems";
import CartPriceDetails from "../components/Cart/CartPriceDetails";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <div className="goback">
        <Link to="/" className="gobackbtn">Back to Products</Link>
      </div>
      <CartTitle />
      <div className="cartdiv">
        <div className="cartleft">
          <CartItems />
        </div>
        <div className="cartright">
          <CartPriceDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
