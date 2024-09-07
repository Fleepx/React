import React from "react";
import CardPizza from "./Card";
import Header from "./Header";
import { useApi } from "./Context/APIContext";


function Home({ agregarAlCarro }) {
  
  const {pizzas} = useApi()

  const capPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <Header></Header>
      <main className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id} 
            id={pizza.id}
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
