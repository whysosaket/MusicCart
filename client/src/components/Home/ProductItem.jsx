import React, {useContext} from "react";
import "../../css/Home/ProductItem.css";
import { MdAddShoppingCart } from "react-icons/md";
import {useNavigate} from "react-router-dom";


const ProductItem = (props) => {
  const product = props.item;
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/product/${product._id}`);
  }

  return (
    <div>
      <div className="productitem">
        <img onClick={handleClick} src={`data:image/png;base64, ${product.image}`} alt="product" className="productimage" />
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
