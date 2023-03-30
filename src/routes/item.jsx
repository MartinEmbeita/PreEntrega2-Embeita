import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/index";
import { useParams } from "react-router-dom";

export default function itemRoot() {
  const params = useParams();

  return (
    <>
      <NavBar />
      <ItemDetailContainer itemId={params.id} />
    </>
  );
}
