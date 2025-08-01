import { createContext, useContext } from "react";

const adminContext = createContext();

export const AdminProvider = ({ children }) => {
  const value = {

  };

  return (
    <adminContext.Provider value={value}>
        {children}
    </adminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(adminContext);
};