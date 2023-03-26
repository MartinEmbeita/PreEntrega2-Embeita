import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/index";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

export default function itemRoot() {
  const [product, setProduct] = useState();

  useEffect (() => {
    const db = getFirestore()
    const itemRef = doc(db, "Items", "19H4bTg0DOl07dlAC5RU")

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({id: snapshot.id, ...snapshot.data() })
      }
    }).catch((error) => console.log((error)))
  }, [])

  const params = useParams()

  return (
      <>
          <NavBar />
          <ItemDetailContainer idCategoria={params.id} categoria={params.category}/>
      </>
  )
}

