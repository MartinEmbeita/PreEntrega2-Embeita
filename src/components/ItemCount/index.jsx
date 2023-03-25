import { Button } from "react-bootstrap";
import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="addRemove-Button">
      <button className="add-button" onClick={() => setCounter(counter - 1)} disabled={counter <=0}> - </button>
      <p>{counter}</p>
      <button className="remove-button" onClick={() => setCounter(counter + 1)} disabled={counter>= stock}> + </button>
      <div className="buy-button-container">
        <Button onClick={() => onAdd(count)}>
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
