import React from "react";
import { formatearNumero } from "./functions/format";
import { Link } from "react-router-dom";

const Card = (pizza) => {

  const capPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div  className="col">
      <figure className="card">
        <div className="img">
          <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        </div>
        <figcaption className="cuerpo">
              <h5 className="titulo">{pizza.name}</h5>
              <hr />
              <p>Ingredientes</p>
              <ul className="ingredientes">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{capPrimeraLetra(ingredient)}</li>
                ))}
              </ul>
              <div className="container">
                <div className="botones">
                  <Link to={`/pizza/${pizza.id}`} key={pizza.id} className="more btn">
                    Ver Más
                  </Link>

                  <a
                    className="btn add"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={pizza.agregarAlCarro}
                  >
                    Añadir <i className="fa-solid fa-cart-shopping"></i>
                  </a>

                  <h5 className="precio">
                    Precio ${formatearNumero(pizza.price)}
                  </h5>
                </div>
              </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
