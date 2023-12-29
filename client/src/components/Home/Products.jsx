import React, { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import "../../css/Home/Products.css";
import ProductItemListView from "./ProductItemListView";
import ProductContext from "../../context/productContext";
import Spinner from "../ProductPage/Spinner";

const Products = () => {
  const { isList, getAllProducts, products, isLoading } =
    useContext(ProductContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            className={`${isList ? "productlist" : "productsgrid"} products `}
          >
            {products.map((item, index) => {
              if (isList)
                return <ProductItemListView item={item} key={index} />;
              else return <ProductItem item={item} key={index} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
