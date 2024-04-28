// useAuth.js
import { createContext, useContext, useState, useEffect } from 'react';
import  {jwtDecode}  from 'jwt-decode';
import instance from '../../component/common/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize the authed state with the value from session storage
 // Add userRole state
  const [authed, setAuthed] = useState(() => {
    const token = sessionStorage.getItem('token');
    return token ? true : false; // If there's a token, authed is true, otherwise false
  });
  const [userRole, setUserRole] = useState(() => {
    const token = sessionStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    return decodedToken["authorities"];

  }); 
  

  useEffect(() => {
    // Check if the user is authenticated
    const token = sessionStorage.getItem('token');
    if (token) {
      // Decode the token to extract user role
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken['authorities']);
    } else {
      setUserRole(null);
    }
  }, []);

  const login = async (formData) => {
    try {
      const response = await instance.post('/api/v1/auth/authenticate', formData);
      // If successful, set authed to true and extract user role
      setAuthed(true);
      sessionStorage.setItem('token', response.data.token);
  
    
     
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    try {
      // Clear the authentication token and set authed to false
      sessionStorage.removeItem('token');
      setAuthed(false);
      setUserRole(null);
    } catch (error) {
      console.error('Error logging out:', error);
      throw new Error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ authed, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
