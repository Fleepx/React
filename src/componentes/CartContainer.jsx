import React, { useState } from 'react';
import Cart from './Cart';
import { detallesPizza } from "../pizzas";
import Card from './Card';

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
      <div className="cards-container">
        {detallesPizza.map(pizza => (
          <Card
            key={pizza.id}
            {...pizza}
            onAddToCart={() => agregarAlCarro(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default CartContainer;

