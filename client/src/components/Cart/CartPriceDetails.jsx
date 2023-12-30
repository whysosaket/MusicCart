import React, {useEffect, useState} from "react";
import CartValueInfo from "./CartValueInfo";

const CartPriceDetails = (props) => {
  const [conv, setConv] = useState(0);
  useEffect(() => {
    if (props.total > 0) {
      setConv(45);
    } else {
      setConv(0);
    }
  }, [props.total]);
  return (
    <div className="cartpricedetails">
      <h4>PRICE DETAILS</h4>
      <div className="cartvalueinfo">
        <div className="totalmrp">
          <span>Total MRP</span>
          <span>₹{props.total}</span>
        </div>
        <div className="discount">
          <span>Discount on MRP</span>
          <span>₹0</span>
        </div>
        <div className="conv">
          <span>Convenience Fee</span>
          <span>₹{conv}</span>
        </div>
      </div>
      <div className="total">
        <span>Total Amount</span>
        <span>₹{props.total+conv}</span>
      </div>
      <button className="placeorder">PLACE ORDER</button>
    </div>
  );
};

export default CartPriceDetails;
