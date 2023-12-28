import React from "react";
import "../../css/Home/ProductItem.css";
import ProductImage from "../../assets/product.png";
import { MdAddShoppingCart } from "react-icons/md";
import {Link} from "react-router-dom";

const ProductItem = (props) => {
  const product = props.item;
  return (
    <div>
      <div className="productitem">
        <img src={`data:image/png;base64, ${product.image}`} alt="product" className="productimage" />
        {localStorage.getItem("token") && (
          <div className="carticoncontainer">
            <MdAddShoppingCart className="carticon" />
          </div>
        )}
      </div>
      <div className="productdetails">
        <span className="name">{product.name}</span>
        <span className="price">Price - ₹ {product.price}</span>
        <span className="type">{product.color} | {product.type}</span>
      </div>
    </div>
  );
};

export default ProductItem;
