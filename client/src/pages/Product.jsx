import React, {useContext, useState, useEffect} from "react";
import "../css/Product/Product.css";
import MiniImages from "../components/ProductPage/MiniImages";

import ProductDescription from "../components/ProductPage/ProductDescription";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import ProductContext from "../context/productContext";

const Product = () => {

  const {getProductById} = useContext(ProductContext);
  const {id} = useParams();
  console.log(id);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    color: "",
    type: "",
    brand: "",
    rating: "",
    reviews: "",
    stock: 0,
    _id: "",
    about: [],
  });

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
    };
    getProduct();
  }, []);

  return (
    <div className="product">
      <div className="goback">
        <Link to="/" className="gobackbtn">Back to Products</Link>
      </div>
      <div className="productcontainer">
      <div className="producttitle">
        {product.description}
    </div>
        <div className="container">
          <div className="containerleft">
            <MiniImages image={product.image} />
          </div>
          <div className="containerright">
            <ProductDescription item={product}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
