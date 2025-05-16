// src/Components/Utils/AuthProvider.jsx
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("Users");
    return savedUser ? JSON.parse(savedUser) : null; 
  });

  

 // AuthProvider.jsx
const logout = () => {
    localStorage.removeItem("Users");
    setUser(null);
  };
  const login = (userdata) => {
    localStorage.setItem("Users", JSON.stringify(userdata));
    setUser(userdata); 
  };

  return (
    <AuthContext.Provider value={{ user,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy use
export const useAuth = () => useContext(AuthContext);


