import React from "react";
import MiniImage from "./MiniImage";
import ProductImage from "../../assets/lg.png";

const MiniImages = (props) => {
  return (
    <>
      <div className="productimagecontainer">
        <img src={`data:image/png;base64, ${props.image}`} className="productimage" alt="product" />
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
