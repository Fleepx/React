import React from "react";
import { formatearNumero } from "./functions/format";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./Context/CartContext";
import { useUser } from "./Context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { user, Login, Logout } = useUser();
  const navigate = useNavigate();

  const manejoCarrito = () => {
    const offcanvasElement = document.getElementById("offcanvasExample");
    const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
  };

  const setActiveClass = ({isActive}) => isActive ? `active` : 'notActive';

  // El desafio me está pidiendo cosas que me parecen incongruentes, asi que lo hice de esta forma
  // Si no mostraré Profile cuando el token es false, para  que lo voy a redirigir si no será visible
  // Asi que lo implementé de igual forma pero para cuando  el usuario hhaga Logout lo lleve al Home con  esta formula.
  const Salir = () => {
    Logout();
    navigate("/React");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/React" className="navbar-brand">
            <i className="fa-solid fa-pizza-slice"></i> Mamma Mia
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">



              {user ? (
              <li className="nav-item">
                <NavLink to="/React/Profile" className={setActiveClass}>
                  Perfil
                </NavLink>
              </li>
              ) : (
                <>
                <li className="nav-item">
                <NavLink to="/React/Login" className={setActiveClass}>
                  Ingresar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/React/Register" className={setActiveClass}>
                  Registrarse
                </NavLink>
              </li>
              </>
              )}
            </ul>
            <div className="d-flex gap-3">
              {user ? (

                <button onClick={Salir} className="btn btn-outline-danger">
                  Logout
                </button>

              ) : (
                <button onClick={Login} className="btn btn-outline-primary">
                  Login
                </button>
              )}

              <button
                type="button"
                className="btn btn-outline-success"
                onClick={manejoCarrito}
                aria-label="Abrir carrito de compras"
              >
                Total ${formatearNumero(total)}{" "}
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
