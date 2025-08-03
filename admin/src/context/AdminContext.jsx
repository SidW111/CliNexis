import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const adminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [aToken, setAToken] = useState(() =>
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );

  const [dashData, setDashData] = useState(false);

  const getDashData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/admin/dashboard",
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
          },
        }
      );

      if (data.success) {
        setDashData(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDashData();
  }, [aToken]);

  const value = {
    aToken,
    setAToken,
    getDashData,
    dashData,
  };

  return (
    <adminContext.Provider value={value}>{children}</adminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(adminContext);
};
