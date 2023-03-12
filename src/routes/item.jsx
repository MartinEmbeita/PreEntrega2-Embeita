import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailConteiner/index";

function ItemRoot() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}

export default ItemRoot;