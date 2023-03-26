// import NavBar from "../components/NavBar";
// import ItemDetailContainer from "../components/ItemDetailConteiner/index";

// function Cart() {
//   return (
//     <div>
//       <NavBar />
//     </div>
//   );
// }

// export default Cart;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Cart() {
  const [showMessage, setShowMessage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
        navigate("/");
      }, 3000);
    }
  }, [showMessage, navigate]);

  return (
    <div>
      <NavBar />
      {showMessage && (
        <div className="message">
          GRACIAS POR SU COMPRA, VUELVA PRONTO
        </div>
      )}
    </div>
  );
}

export default Cart;
