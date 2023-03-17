import { Link } from "react-router-dom";
import Products from "../../mocks/products";
import "./item.css";
import { ItemCount } from "../ItemCount/index";

const product = Products;

const Item = ({ product }) => {
  return (
    <div className="product-container">
      <Link to={`/product/${product.id}`}>
        <div className="product-card">
          <img className="product-image" src={product.image} alt={product.name} />
          <div className="product-name">
            <h1>{product.name}</h1>
          </div>
          <div className="product-description">
            <h2>{product.description}</h2>
          </div>
          <div className="product-price">
            <h2>${product.price}</h2>
          </div>
          <ItemCount stock={product.stock} />
          <button className="product-button">Comprar</button>
        </div>
      </Link>
    </div>
  );
};

export default Item;