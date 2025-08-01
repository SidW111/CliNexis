import { createContext, useContext, useState } from "react";

const adminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [aToken, setAToken] = useState(null);
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
