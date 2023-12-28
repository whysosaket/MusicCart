import React from "react";
import "../css/Home/ProductItem.css";
import ProductImage from "../assets/product.png";
import { MdAddShoppingCart } from "react-icons/md";

const ProductItem = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default ProductItem;
