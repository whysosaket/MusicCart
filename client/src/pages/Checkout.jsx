import React from 'react'
import "../css/Checkout.css"
import CheckoutDeliveryAddress from '../components/Checkout/CheckoutDeliveryAddress'
import CheckoutPayment from '../components/Checkout/CheckoutPayment'
import CheckoutReviewItems from '../components/Checkout/CheckoutReviewItems'
import CheckOutMiniOrder from '../components/Checkout/CheckOutMiniOrder'
import PlaceOrderWidget from '../components/Checkout/PlaceOrderWidget'
import { Link } from 'react-router-dom'
import CartContext from '../context/cartContext';
import { useContext } from 'react';

const Checkout = () => {
  const {cart, total, checkout} = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="goback">
        <Link to="/cart" className="gobackbtn">Back to cart</Link>
      </div>
      <div className='title'>Checkout</div>
      <div className="checkoutdiv">
        <div className="checkoutleft">
          <CheckoutDeliveryAddress />
          <hr />
          <CheckoutPayment  />
          <hr />
          <CheckoutReviewItems cart={cart} />
          <hr />
          <CheckOutMiniOrder total={total} />
        </div>
        <div className="checkoutright">
          <PlaceOrderWidget total={total} checkout={checkout} />
        </div>
      </div>
    </div>
  )
}

export default Checkout