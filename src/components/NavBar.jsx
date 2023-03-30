import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="NavContainer">
      <NavLink exact to="/">Compañeros Peludos - Tienda Online</NavLink>
      <div className="links-container">
        <div className="nav-links">
          <NavLink exact to="/">Catalogo</NavLink>
          <NavLink to="/category/perros">Perros</NavLink>
          <NavLink to="/category/gatos">Gatos</NavLink>
        </div>
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar;
