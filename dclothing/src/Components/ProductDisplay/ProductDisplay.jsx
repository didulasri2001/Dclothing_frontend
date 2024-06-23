import React from "react";
import "./ProductDisplay.css";
function ProductDisplay(props) {
  const { product } = props;
  return (
    <div className="productDisplay">
      <div className="displayLeft">
        <div className="leftImages">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="rightImages"></div>
      </div>
      <div className="displayRight"></div>
    </div>
  );
}

export default ProductDisplay;
