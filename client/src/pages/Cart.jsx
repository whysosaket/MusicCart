import React, {useContext, useEffect} from "react";
import "../css/Cart/Cart.css";
import CartTitle from "../components/Cart/CartTitle";
import CartItems from "../components/Cart/CartItems";
import CartPriceDetails from "../components/Cart/CartPriceDetails";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/cartContext";
import GlobalContext from "../context/GlobalContext";

const Cart = () => {
  const {cart,total, getCart} = useContext(CartContext);
  const {isAuthenticated} = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      navigate('/login');
      return;
    }
    getCart();
  }, []);

  return (
    <div className="cart">
      <div className="goback">
        <Link to="/" className="gobackbtn">Back to Products</Link>
      </div>
      <CartTitle />
      <div className="cartdiv">
        <div className="cartleft">
          <CartItems cart={cart} total={total} />
        </div>
        <div className="cartright">
          <CartPriceDetails total={total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
