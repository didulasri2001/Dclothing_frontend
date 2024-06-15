import React from "react";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
import Item from "../Items/Item";
function NewCollections() {
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="newCollections-items">
        {new_collection.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;
