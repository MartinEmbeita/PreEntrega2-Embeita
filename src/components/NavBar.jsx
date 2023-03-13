import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="NavContainer">
      <h2>Compañeros Peludos - Tienda Online</h2>
      <div className="links-container">
        <div className="nav-links">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/category/perros">Perros</NavLink>
          <NavLink to="/category/gatos">Gatos</NavLink>
        </div>
        <CartWidget cartCount={10} />
      </div>
    </div>
  )
}

export default NavBar;
