import React from "react";

const ProductAbout = (props) => {
  return (
    <div className="about">
      <p className="title">About this item</p>
      <ul className="items">
        {props.about.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductAbout;
