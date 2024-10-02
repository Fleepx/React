import { useEffect, useState } from 'react';
import { useUser } from '../componentes/Context/UserContext';

const Profile = () => {
  const { getProfile, Logout, email } = useUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, [getProfile]);

  const handleLogout = () => {
    Logout(); // Llamar a la función de Logout del contexto
    navigate("/React"); // Redirigir al Home después de cerrar sesión
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-2">
      <div className="card w-50 m-5">
        <div className="card-header bg-primary text-white text-center">
          <h4>Perfil de Usuario</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3 ">
            <div className="col-sm-8">
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
                  <p>{email}</p>
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
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary m-1">Editar Perfil</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
