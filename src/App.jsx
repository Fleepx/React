import React from 'react';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Register from './componentes/Register';
import Login from './componentes/Login';
import Footer from './componentes/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        {/*
          <Home /> 
          <Register/>
          */} 
          <Login/>
        <Footer />
      </div>
    </>
  )
}

export default App
