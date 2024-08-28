import React from 'react';
import { formatearNumero } from "./functions/format";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const total = 25000;
    const token  = false;

    return (
    <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/React" className="navbar-brand">

            <i class="fa-solid fa-pizza-slice"></i> Mamma Mia</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                <a className="nav-link" href="#">Perfil</a>
                </li>
                <li className="nav-item">

                    <Link to="/React/Login" className="nav-link" role="button">Ingresar</Link>

                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Salir</a>
                </li>
                <li className="nav-item">

                    <Link to="/React/Register" className="nav-link">Registrarse</Link>

                </li>
            </ul>
            <form className="d-flex" role="search">
                <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-cart-shopping"></i> Total: ${formatearNumero(total)}</button>
            </form>
            </div>
        </div>
        </nav>  
    </div>
  );
};

export default Navbar;