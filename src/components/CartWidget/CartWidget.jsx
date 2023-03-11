import React from "react";

function CartWidget(props) {
  return (
    <div className="cart-widget">
      <img src="../src/assets/imagenes/carrito.png" />
      <span className="cart-count">{props.cartCount}</span>
    </div>
  );
}

export default CartWidget;
