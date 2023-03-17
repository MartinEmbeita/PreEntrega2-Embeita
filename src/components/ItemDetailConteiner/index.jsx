import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import Products from "../../mocks/products";

function ItemDetailContainer({ isItemRoute, itemId }) {
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const promiseDetail = new Promise((resolve, reject) => {
      resolve(Products);
    });

    promiseDetail
      .then((response) => {
        if (isItemRoute) {
          const productFind = response.find(
            (item) => item.id === itemId
          );
          setDetalles(productFind);
        } else {
          setDetalles(<h2>Por favor reingrese su petición</h2>);
        }
      })
      .catch((err) => console.log(err));
  }, [itemId, isItemRoute]);

  return (
    <div>
      <ItemDetail items={detalles} />
    </div>
  );
}

export default ItemDetailContainer;