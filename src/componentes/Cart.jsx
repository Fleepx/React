import React from 'react';
import { formatearNumero } from '../helpers/format';

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <div className="cart-item-controls">
                  <button onClick={() => onRemove(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onAdd(item)}>+</button>
                </div>
                <p>Precio: ${formatearNumero(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
          <h3>Total: ${formatearNumero(totalPrice)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
