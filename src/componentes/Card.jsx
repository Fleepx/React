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

          <div className="container">
          <p class="descripcion">{props.desc}</p>

          <div className="botones">
            <button className="more">Ver Más</button>
            <button className="add">Añadir <i class="fa-solid fa-cart-shopping"></i></button>
          <h5 className="precio">Precio ${formatearNumero(props.price)}</h5>
          </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
