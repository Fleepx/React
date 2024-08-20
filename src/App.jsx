import React from 'react';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Register from './componentes/Register';
import Login from './componentes/Login';
import CartContainer from './componentes/CartContainer';
import Footer from './componentes/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        {/*
        <Home /> 
        <Login/>
        <Register/>
        */} 
        <CartContainer/>
        <Footer />
      </div>
    </>
  )
}

export default App;