import React from "react";
import { useCartContext } from "../context/CartContextProvider";
import Cart from "../components/Cart/Cart";

export default function CartPage() {
  const cartContext = useCartContext();

  return (
    <div>
   <h1 style={{ 
  color: '#333',      
  fontSize: '36px',    
  fontWeight: 'bold',  
 fontFamily: "Montserrat",
  marginTop: '50px',
  marginBottom: "50px" 
 
}}>  Корзина
</h1 >
      <hr style={{
        color:"#EAEAEA",
        border: "1px solid "
      }}
      ></hr>
      <Cart />

    </div>
  );
}
