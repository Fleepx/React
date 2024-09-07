import React, { useState } from 'react';
import Home from './Home';
import Cart from './Cart';
import { useCart } from './Context/CartContext';

const CartContainer = () => {
  const { cartItems, agregarAlCarro, eliminarDelCarro } = useCart();

  return (
    <div>
      <Cart cartItems={cartItems} agregarAlCarro={agregarAlCarro} eliminarDelCarro={eliminarDelCarro} />
      <Home agregarAlCarro={agregarAlCarro} />
    </div>
  );
};

export default CartContainer;