import { createContext, useContext, useState } from "react";

const doctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [ dToken, setDToken ] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  const value = {
    dToken,
    setDToken,
  };
  return (
    <doctorContext.Provider value={value}>
        {children}
        </doctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  return useContext(doctorContext);
};
