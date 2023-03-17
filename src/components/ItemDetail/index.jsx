import { ItemCount } from "../ItemCount/index";
import Products from "../../mocks/products";
import "./itemDetail.css";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));

  return (
    <div className="item-detail-container">
      <div className="item-detail-image-container">
        <img className="item-detail-image" src={product.image} alt={product.name} />
      </div>
      <div className="item-detail-info-container">
        <h2>{product.name} - ${product.price}</h2>
        <p className="item-detail-description">{product.description}</p>
        <ItemCount stock={product.stock} />
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;

