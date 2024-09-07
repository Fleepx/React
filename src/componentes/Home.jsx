import React from "react";
import CardPizza from "./Card";
import Header from "./Header";
import { useApi } from "./Context/APIContext";
import { useCart } from "./Context/CartContext";


function Home() {
  const {pizzas, capPrimeraLetra} = useApi()
  const { agregarAlCarro } = useCart();



  return (
    <div>
      <Header></Header>
      <main>
        <div className="row px-4 mx-3">

        {pizzas.map((pizza) => (
          <CardPizza
          key={pizza.id} 
          id={pizza.id}
          name={capPrimeraLetra(pizza.name)}
          price={pizza.price}
          ingredients={pizza.ingredients}
          desc={pizza.desc}
          img={pizza.img}
          agregarAlCarro={() => agregarAlCarro(pizza)}
          />
        ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
