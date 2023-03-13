import Item from "../Item";
import "../ItemList/index.css";

function ItemList({ products }) {
  return (
    <div className="productConteiner">
      <ul className="productList">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;


