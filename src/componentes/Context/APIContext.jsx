import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();


const ApiProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])

    useEffect (() => {
        fetch("http://localhost:5000/api/pizzas")
          .then(res => res.json())
          .then(res => setPizzas(res))
    },[])


    return (
        <ApiContext.Provider value={{ pizzas, setPizzas }}>
          {children}
        </ApiContext.Provider>
      );
}

export const useApi = () => useContext(ApiContext);

export default ApiProvider