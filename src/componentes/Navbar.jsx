import React from "react";
import { formatearNumero } from "./functions/format";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./Context/CartContext";
import { useUser } from "./Context/UserContext";

const Navbar = () => {
  const { total } = useCart(); // Total del carrito desde el contexto
  const { user, Logout } = useUser(); // Información del usuario y método de logout desde el UserContext
  const navigate = useNavigate(); // Hook de navegación para redirigir después de logout

  // Función para mostrar el carrito de compras
  const manejoCarrito = () => {
    const offcanvasElement = document.getElementById("offcanvasExample");
    const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
  };

  // Función para establecer la clase activa en los NavLinks
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "notActive");

  // Función para cerrar sesión y redirigir al home
  const handleLogout = () => {
    Logout(); // Llamar a la función de Logout del contexto
    navigate("/React"); // Redirigir al Home después de cerrar sesión
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
                // Mostrar 'Perfil' y 'Logout' si el usuario ha iniciado sesión
                <>
                  <li className="nav-item">
                    <NavLink to="/React/Profile" className={setActiveClass}>
                      Perfil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                // Mostrar 'Ingresar' y 'Registrarse' si el usuario no ha iniciado sesión
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
              {/* Botón para abrir el carrito de compras */}
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
