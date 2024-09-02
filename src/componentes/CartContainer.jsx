import React, { useState } from 'react';
import Home from './Home';
import Cart from './Cart';

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);

  const agregarAlCarro = (pizza) => {
    const existingItem = cartItems.find(item => item.id === pizza.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (pizza) => {
    const existingItem = cartItems.find(item => item.id === pizza.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== pizza.id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div>
      <Cart cartItems={cartItems} onAdd={agregarAlCarro} onRemove={handleRemoveFromCart} />
      <Home agregarAlCarro={agregarAlCarro} />
    </div>
  );
};

export default CartContainer;