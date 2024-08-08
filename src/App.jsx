import React from 'react';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
