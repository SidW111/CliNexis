import { createContext, useContext, useState } from "react";

const adminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem('AToken')?localStorage.getItem("AToken"):"");
  const value = {
    aToken,
    setAToken,
  };

  return (
    <adminContext.Provider value={value}>{children}</adminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(adminContext);
};
