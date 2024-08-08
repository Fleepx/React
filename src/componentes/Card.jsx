import React from "react";
import { formatearNumero } from "../helpers/format";

const Card = (props) => {
  return (
    <div>
      <figure class="card">
        <div class="img">
          <img src={props.img} className="card-img-top" alt={props.name} />
        </div>
        <figcaption className="cuerpo">
          <h5 class="titulo">{props.name}</h5>
          <hr />
          <p>Ingredientes</p>

          <p class="ingredientes">{props.ingredients.join(", ")}</p>
          <h4 className="precio">Precio ${formatearNumero(props.price)}</h4>
          <div className="container">

          <div className="botones">
            <button className="more">Ver Más</button>
            <button className="add">Añadir <i class="fa-solid fa-cart-shopping"></i></button>
          </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
