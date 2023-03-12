import NavBar from "../components/Navbar";
import ItemListContainer from "../components/ItemListContainer";
import {useParams} from "react-router-dom";

function App() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  console.log(isCategoryRoute);

  return (
    <div>
      <NavBar />
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id} />
    </div>
  )
}

export default App;


