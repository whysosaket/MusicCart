import React from "react";
import "../../css/Home/ProductItem.css";
import ProductImage from "../../assets/product.png";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProductItemListView = (props) => {
  const navigate = useNavigate();
  const handleGotoProduct = () => {
    navigate("/product");
  };

  const product = props.item;
  return (
    <div className="listview">
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
        <p className="detials">
          {product.description}
        </p>
        <button onClick={handleGotoProduct} className="detailsbutton">
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductItemListView;
