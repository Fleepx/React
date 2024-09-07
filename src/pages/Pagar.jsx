import React, { useState } from 'react';
import { formatearNumero } from '../componentes/functions/format';
import { useCart } from '../componentes/Context/CartContext';

const Pagar = () => {
  const { total } = useCart();

  return (
    <div className='metodoPago'>
        <div className="pago">
          <h5 className='montoPagar'>${formatearNumero(total)}</h5>
        </div>
    </div>
  );
};

export default Pagar;