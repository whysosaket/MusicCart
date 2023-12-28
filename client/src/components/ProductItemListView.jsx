import React from "react";
import "../css/Home/ProductItem.css";
import ProductImage from "../assets/product.png";
import { MdAddShoppingCart } from "react-icons/md";

const ProductItemListView = () => {
  return (
    <div className="listview">
      <div className="productitem">
        <img src={ProductImage} alt="product" className="productimage" />
        {localStorage.getItem("token") && (
          <div className="carticoncontainer">
            <MdAddShoppingCart className="carticon" />
          </div>
        )}
      </div>
      <div className="productdetails">
        <span className="name">boAt Rockerz 551ANC</span>
        <span className="price">Price - ₹ 2,999</span>
        <span className="type">Blue | On-ear headphone</span>
        <p className="detials">
          Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones
          with Mic, up to 50 Hours Playtime, Multi-Point Connection, App
          Support, AUX & Voice Assistant Support for Mobile Phones (Black)
        </p>
        <button className="detailsbutton">Details</button>
      </div>
    </div>
  );
};

export default ProductItemListView;
