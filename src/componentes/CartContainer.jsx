import React from 'react';
import Home from './Home';
import { useCart } from './Context/CartContext';

const CartContainer = () => {
  const { agregarAlCarro } = useCart();

  return (
    <div>
      
      <Home agregarAlCarro={agregarAlCarro} />
    </div>
  );
};

export default CartContainer;