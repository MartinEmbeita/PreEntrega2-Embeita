import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/index";
import Products from "../../mocks/products";
import "./itemDetail.css";
import { useParams } from "react-router-dom";
import { Button } from "../Button/index";
import { Context } from "../context/index";

const ItemDetail = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));

  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(false);

  function onAddProduct(count) {
    onAdd(product, count);
    setAdded(true);
  }

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail-container">
        <div className="item-detail-image-container">
          <img className="item-detail-image" src={product.image} alt={product.name} />
        </div>
        <div className="item-detail-info-container">
          <h2>{product.name} - ${product.price}</h2>
          <p className="item-detail-description">{product.detail}</p>
          {!added && <ItemCount stock={product.stock} onAdd={onAddProduct} />}
        </div>
        <div>
          {added && (
            <Link to="/cart">
              <Button>Terminar compra</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
