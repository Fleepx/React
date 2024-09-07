import React from 'react';
import { formatearNumero } from './functions/format';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';

const Cart = () => {
  const { cartItems, agregarAlCarro, eliminarDelCarro, total } = useCart();

  const capPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    
    <div className="cart">
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Mamma Mia</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div>
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} >
                <img src={item.img} alt={item.name} className="card-img-top" />
                  <div>
                    <h4>{capPrimeraLetra(item.name)}</h4>
                    <div className="cart-item-controls btn">
                      <button onClick={() => eliminarDelCarro(item)} className='agregar'>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => agregarAlCarro(item)} className='restar'>+</button>
                    <p>Precio: ${formatearNumero(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <h3>Total: ${formatearNumero(total)}</h3>
              <Link to="/React/Pagar" className="btn add">
                Pagar
              </Link>
            </div>
          )}
        </div>  
      </div>
      </div>
    </div>
  );
};

export default Cart;