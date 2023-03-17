import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailConteiner/index";
import Products from "../mocks/products";
import { useParams } from "react-router-dom";

export default function itemRoot() {
  const params = useParams()

  return (
      <>
          <NavBar />
          <ItemDetailContainer idCategoria={params.id} categoria={params.category}/>
      </>
  )
}






// function ItemRoot() {
//   const params = useParams();
//   const isItemRoute = Boolean(params.id);

//   return (
//     <div className="App">
//       <NavBar />
//       <ItemDetailContainer isItemRoute={isItemRoute} itemId={params.id} />
//     </div>
//   );
// }

// export default ItemRoot;