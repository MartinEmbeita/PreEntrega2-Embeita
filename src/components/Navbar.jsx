import CartWidget from "../components/CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="NavContainer">
      <h2>Compañeros Peludos - Tienda Online</h2>
      <div className="links-container">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/category/perros">Perros</a>
          <a href="/category/gatos">Gatos</a>
        </div>
        <CartWidget cartCount={10} />
      </div>
    </div>
  )
}

export default NavBar;


