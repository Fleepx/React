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
            <h5 className="titulo">{props.name}</h5>
            <hr />
              <p className="descripcion">{props.desc}</p>
              <button className="more btn" onClick={usarVerMasClick}>
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
                  <button className="more btn" onClick={usarVerMasClick}>
                    Ver Más
                  </button>

<a className="btn add" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={props.onAddToCart}>
Añadir <i className="fa-solid fa-cart-shopping"></i>
</a>



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
