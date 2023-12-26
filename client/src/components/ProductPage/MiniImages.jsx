import React from "react";
import MiniImage from "./MiniImage";
import ProductImage from "../../assets/lg.png";

const MiniImages = () => {
  return (
    <>
      <div className="productimagecontainer">
        <img src={ProductImage} className="productimage" alt="product" />
      </div>
      <div className="miniimages">
        <MiniImage />
        <MiniImage />
        <MiniImage />
      </div>
    </>
  );
};

export default MiniImages;
