import React from 'react';
import Navbar from './componentes/Navbar';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Register from './componentes/Register';
import Login from './componentes/Login';
import CartContainer from './componentes/CartContainer';
import Pizza from './componentes/Pizza';
import Footer from './componentes/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        {/*
        <Home /> 
        <Login/>
        <Register/>
        <CartContainer/>
        */} 
        <Pizza />
        <Footer />
      </div>
    </>
  )
}

export default App;