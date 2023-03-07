import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="NavContainer">
      <h2>Tienda Online</h2>
      <div className="links-container">
        <div className="nav-links">
          <a href="*/">Home</a>
          <a href="*/">Productos</a>
          <a href="*/">Contacto</a>
        </div>
        <CartWidget cartIcon="https://i.pinimg.com/originals/31/3c/11/313c1187480abab29cbfabfc39c8b9be.png" cartCount={10} />
      </div>
    </div>
  )
}

export default NavBar;