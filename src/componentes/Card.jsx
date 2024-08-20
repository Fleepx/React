import React, { useState } from 'react';
import { formatearNumero } from '../helpers/format';

const Card = (props) => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const usarVerMasClick = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  const capPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <figure className="card">
        <div className="img">
          <img src={props.img} className="card-img-top" alt={props.name} />
        </div>
        <figcaption className="cuerpo">
          {mostrarDescripcion ? (
            <>
              <p className="descripcion">{props.desc}</p>
              <button className="more" onClick={usarVerMasClick}>
                Ver Menos
              </button>
            </>
          ) : (
            <>
              <h5 className="titulo">{props.name}</h5>
              <hr />
              <p>Ingredientes</p>
              <ul className="ingredientes">
                {props.ingredients.map((ingredient, index) => (
                  <li key={index}>{capPrimeraLetra(ingredient)}</li>
                ))}
              </ul>
              <div className="container">
                <div className="botones">
                  <button className="more" onClick={usarVerMasClick}>
                    Ver Más
                  </button>
                  <button className="add" onClick={props.onAddToCart}>
                    Añadir <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  <h5 className="precio">Precio ${formatearNumero(props.price)}</h5>
                </div>
              </div>
            </>
          )}
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
