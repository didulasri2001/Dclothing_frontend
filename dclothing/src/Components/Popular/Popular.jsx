import React from "react";
import "./Popular.css";
import Item from "../Items/Item";
import data_product from "../Assets/data";

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
