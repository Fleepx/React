import React, { useState } from 'react';
import { formatearNumero } from "./functions/format";
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';

const Navbar = () => {
    const { total } = useCart();
    const token = false;
  
    const manejoCarrito = () => {
      const offcanvasElement = document.getElementById('offcanvasExample');
      const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
      offcanvas.show();
    };
    
    return (
    <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/React" className="navbar-brand">

            <i className="fa-solid fa-pizza-slice"></i> Mamma Mia</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <Link to="/React/Profile" className="nav-link">Perfil</Link>
                </li>
                <li className="nav-item">

                    <Link to="/React/Login" className="nav-link" role="button">Ingresar</Link>

                </li>
                <li className="nav-item">
                <a className="nav-link">Salir</a>
                </li>
                <li className="nav-item">

                    <Link to="/React/Register" className="nav-link">Registrarse</Link>

                </li>
            </ul>
            <div className="d-flex" role="search">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={manejoCarrito}
            >
              Total ${formatearNumero(total)} <i className="fa-solid fa-cart-shopping"></i>
            </button>
                  </div>
            </div>
        </div>
        </nav>
    </div>
  );
};

export default Navbar;