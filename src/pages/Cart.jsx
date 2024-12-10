import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return <div>{cart.products.length > 0 ? <div> </div> : <div> </div>}</div>;
};

export default Cart;
