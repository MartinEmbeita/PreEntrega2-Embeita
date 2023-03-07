import React from "react";

function CartWidget(props) {
  return (
    <div className="cart-widget">
      <img src="https://i.pinimg.com/originals/31/3c/11/313c1187480abab29cbfabfc39c8b9be.png" alt="Cart Icon" />
      <span className="cart-count">{props.cartCount}</span>
    </div>
  );
}

export default CartWidget;