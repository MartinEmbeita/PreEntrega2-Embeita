import React from "react";
import { ItemCount } from "../ItemCount/index";
import Products from "../../mocks/products";
import "./itemDetail.css";
import { useParams } from "react-router-dom";
import { Button } from "../Button/index";

const ItemDetail = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));

  const handleClick = () => {
    alert("¡Has hecho clic en el botón Comprar!");
  };

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail-container">
        <div className="item-detail-image-container">
          <img className="item-detail-image" src={product.image} alt={product.name} />
        </div>
        <div className="item-detail-info-container">
          <h2>{product.name} - ${product.price}</h2>
          <p className="item-detail-description">{product.detail}</p>
          <ItemCount stock={product.stock} />
          <Button onClick={handleClick} className="buy-button">Comprar</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
