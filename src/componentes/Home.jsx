import React from "react";
import Header from "./Header";
import CardPizza from "./Card";
import { detallesPizza } from "../pizzas";

function Home() {
  return (
    <div>
      <Header />
      <main className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {detallesPizza.map((d, index) => (
          <CardPizza
            key={index}
            name={d.name}
            price={d.price}
            ingredients= {d.ingredients}
            desc= {d.desc}
            img={d.img}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;