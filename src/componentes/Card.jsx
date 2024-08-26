import React, { useState } from "react";
import { formatearNumero } from "./functions/format";

const Card = (pizzas) => {
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
          <img src={pizzas.img} className="card-img-top" alt={pizzas.name} />
        </div>
        <figcaption className="cuerpo">
          {mostrarDescripcion ? (
            <>
              <h5 className="titulo">{pizzas.name}</h5>
              <hr />
              <p className="descripcion">{pizzas.desc}</p>
              <button className="more btn" onClick={usarVerMasClick}>
                Ver Menos
              </button>
            </>
          ) : (
            <>
              <h5 className="titulo">{pizzas.name}</h5>
              <hr />
              <p>Ingredientes</p>
              <ul className="ingredientes">
                {pizzas.ingredients.map((ingredient, index) => (
                  <li key={index}>{capPrimeraLetra(ingredient)}</li>
                ))}
              </ul>
              <div className="container">
                <div className="botones">
                  <button className="more btn" onClick={usarVerMasClick}>
                    Ver Más
                  </button>

                  <a
                    className="btn add"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={pizzas.onAddToCart}
                  >
                    Añadir <i className="fa-solid fa-cart-shopping"></i>
                  </a>

                  <h5 className="precio">
                    Precio ${formatearNumero(pizzas.price)}
                  </h5>
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
