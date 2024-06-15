import React from "react";
import "./Item.css";
function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="new-price">$ {props.new_price}</div>
        <div className="old-price">$ {props.old_price}</div>
      </div>
      <p></p>
    </div>
  );
}

export default Item;
