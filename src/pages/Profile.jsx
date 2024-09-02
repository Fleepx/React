import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    // Fetch a random cat image from the API
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        setCatImage(data[0]?.url || '');
      })
      .catch(error => console.error('Error fetching the cat image:', error));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50">
        <div className="card-header bg-primary text-white text-center">
          <h4>Perfil de Usuario</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3 align-items-center">
            <div className="col-sm-3 text-center">
              {catImage ? (
                <img src={catImage} alt="Perfil" className="img-fluid rounded-circle" style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} />
              ) : (
                <p>Cargando imagen...</p>
              )}
            </div>
            <div className="col-sm-9">
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Nombre:</strong>
                </div>
                <div className="col-sm-8">
                  <p>Juan Pérez</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Correo Electrónico:</strong>
                </div>
                <div className="col-sm-8">
                  <p>juan.perez@example.com</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Teléfono:</strong>
                </div>
                <div className="col-sm-8">
                  <p>+569 68426596</p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Dirección:</strong>
                </div>
                <div className="col-sm-8">
                  <p>P. Sherman, 42 Wallaby Way, Sydney</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary m-1">Editar Perfil</button>
          <button className="btn btn-primary m-1">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
