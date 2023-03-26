import React, { useContext } from "react";
import { Context } from "../context/index";

function CartWidget() {
  const { productAdded } = useContext(Context);

  return (
    <button style={{ backgroundColor: "transparent" }}>
      <img src="../src/assets/imagenes/carrito.png" style={{ backgroundColor: "none" }} />
      {productAdded.length}
    </button>
  );
}

export default CartWidget;