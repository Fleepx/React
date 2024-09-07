import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CartContainer from "./componentes/CartContainer";
import Pizza from "./pages/Pizza";
import Footer from "./componentes/Footer";
import NotFound from "./pages/NotFound";
import Pagar from "./pages/Pagar";
import "./App.css";
import ApiProvider from "./componentes/Context/APIContext";


// *se añade /React a cada ruta para poder realizar el deploy, puesto que se usa de base el repositorio de Github
// *mi carro lo deje configurado como "offCanvas" por lo que se abre sin tener que direccionar directamente al componente,
// en cambio deje una ruta hacia el metodo de pago para continuar con la ruta.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ApiProvider>

        <Navbar />
          <Routes>
            <Route path="/React" element={<CartContainer></CartContainer>}></Route>
            <Route path="/React/Pizza" element={<Pizza></Pizza>}></Route>
            <Route path="/React/Register" element={<Register></Register>}></Route>
            <Route path="/React/Login" element={<Login></Login>}></Route>
            <Route path="/React/Profile" element={<Profile></Profile>}></Route>
            <Route path="/React/Pagar" element={<Pagar></Pagar>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        <Footer />
        </ApiProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
