import Item from "../Item";
import "../ItemList/index.css";

function ItenList({ productos }) {
  return (
    <div className="contenedorProductos">
      <ul className="productList">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </ul>
    </div>
  );
}

export default ItenList;