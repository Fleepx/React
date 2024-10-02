import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [user, setUser] = useState(null);

    //LOGIN
    const Login = (userData) => {
        setUser(userData);  // Se actualiza el estado del usuario
      };
    const login = async (email, password) => {
        try {
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          if (response.ok) {
            setToken(data.token);
            setEmail(data.email);
          } else {
            console.error('Login error:', data);
          }
        } catch (error) {
          console.error('Error datos incorrectos:', error);
        }
      };

      //REGISTER
      const register = async (email, password) => {
        try {
          const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });

          const data = await response.json();
          if (response.ok) {
            setToken(data.token);
            setEmail(data.email);
          } else {
            console.error('Registration error:', data);
          }
        } catch (error) {
          console.error('Error datos incorrectos:', error);
        }
      };

      //LOGOUT
      const Logout = () => {
        setUser(null); // Al hacer logout, se limpia el estado del usuario
      };
      const logout = () => {
        setToken(null);
        setEmail(null);
      };

      //PROFILE
      const getProfile = async () => {
        if (!token) return;
        try {
          const response = await fetch('http://localhost:5000/api/auth/me', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error al cargar datos:', error);
        }
      };






    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile, Login, Logout, user }}>
        {children}
        </UserContext.Provider>
);
}

export const useUser = () => useContext(UserContext);

export default UserProvider

