import React from "react";

function CartWidget(props) {
  return (
    <div className="cart-widget">
      <img src={props.cartIcon} alt="Cart Icon" />
      <span className="cart-count">{props.cartCount}</span>
    </div>
  );
}

export default CartWidget;