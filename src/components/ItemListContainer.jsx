import Productos from "../mocks/products";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList/index";

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Productos), 2000)
    );

    productsPromise
      .then((response) => {
        if(isCategoryRoute) {
        const productsFiltered = response.filter(
          (product) => product.category === categoryId
        );
        setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [isCategoryRoute]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;


