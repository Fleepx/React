import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import CartContainer from "./componentes/CartContainer";
import Register from "./views/Register";
import Login from "./views/Login";
import Pizza from "./views/Pizza";
import Footer from "./componentes/Footer";
import "./App.css";
import NotFound from "./views/NotFound";

// se añade /React para poder realizar el deploy

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/React" element={<CartContainer></CartContainer>}></Route>
          <Route path="/React/Register" element={<Register></Register>}></Route>
          <Route path="/React/Login" element={<Login></Login>}></Route>
          <Route path="/React/Login" element={<Pizza></Pizza>}></Route>
          <Route path='/404' element={<NotFound/>} />
          <Route path='*' element={<Navigate replace to='/404'/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
