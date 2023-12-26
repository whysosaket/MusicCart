import React from "react";
import "../css/Product/Product.css";
import MiniImages from "../components/ProductPage/MiniImages";
import ProductTitle from "../components/ProductPage/ProductTitle";
import ProductDescription from "../components/ProductPage/ProductDescription";

const Product = () => {
  return (
    <div className="product">
      <div className="goback">
        <button className="gobackbtn">Back to Products</button>
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
