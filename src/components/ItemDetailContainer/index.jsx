import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import Products from "../../mocks/products";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs } from "firebase/firestore";

function ItemDetailContainer({ isItemRoute, itemId }) {


  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log(error));
  }, []);

  const params = useParams()




  // const [detalles, setDetalles] = useState({});

  // useEffect(() => {
  //   const promiseDetail = new Promise((resolve, reject) => {
  //     resolve(Products);
  //   });

  //   promiseDetail
  //     .then((response) => {
  //       if (isItemRoute) {
  //         const productFind = response.find(
  //           (item) => item.id === itemId
  //         );
  //         setDetalles(productFind);
  //       } else {
  //         setDetalles(<h2>Por favor reingrese su petición</h2>);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [itemId, isItemRoute]);

  return (
    <div>
      <ItemDetail />
    </div>
  );
}

export default ItemDetailContainer;