import React, { useContext } from "react";
import "../../css/Home/ProductItem.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

const ProductItemListView = (props) => {
  const navigate = useNavigate();
  const handleGotoProduct = () => {
    navigate(`/product/${props.item._id}`);
  };

  const { isAuthenticated } = useContext(GlobalContext);

  const product = props.item;
  return (
    <div className="listview">
      <div onClick={handleGotoProduct} className="productitem">
        <img src={`data:image/png;base64, ${product.image}`} alt="product" className="productimage" />
        {isAuthenticated && (
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
