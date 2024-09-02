import React, { useEffect, useState } from "react";
import CardPizza from "./Card";
import Header from "./Header";


function Home({ agregarAlCarro }) {
  const [pizzas, setPizzas] = useState([])

  useEffect (() => {
      fetch("http://localhost:5000/api/pizzas")
        .then(res => res.json())
        .then(res => setPizzas(res))
  },[])

  const capPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <Header></Header>
      <main className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={capPrimeraLetra(pizza.name)}
            price={pizza.price}
            ingredients={pizza.ingredients}
            desc={pizza.desc}
            img={pizza.img}
            onAddToCart={() => agregarAlCarro(pizza)}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
