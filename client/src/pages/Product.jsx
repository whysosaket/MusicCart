import React from "react";
import "../css/Product/Product.css";
import MiniImages from "../components/ProductPage/MiniImages";
import ProductTitle from "../components/ProductPage/ProductTitle";
import ProductDescription from "../components/ProductPage/ProductDescription";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <div className="goback">
        <Link to="/" className="gobackbtn">Back to Products</Link>
      </div>
      <div className="productcontainer">
        <ProductTitle />
        <div className="container">
          <div className="containerleft">
            <MiniImages />
          </div>
          <div className="containerright">
            <ProductDescription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
