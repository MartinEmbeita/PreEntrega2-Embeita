import React from "react";
import Products from "../../mocks/products";

function ItemListContainer(props) {
  const productsList = Products

  return (
    <div className="container">
      <ul>
        {Products.map((product, index) => (
          <li key={product.id}>
            {product.name} #{index}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
