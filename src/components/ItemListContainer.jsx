import React from "react";
import {useEffect, useState} from "react";
import Products from "../mocks/products";
import ItemList from "../components/ItemList";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) => 
      setTimeout(() => resolve(Products), 2000)
    );

    productsPromise
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  console.log({products});

  return (
    <div className="container">
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
