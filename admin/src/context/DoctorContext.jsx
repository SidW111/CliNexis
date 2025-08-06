import { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/axiosInstance";

const doctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [dToken, setDToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  const [dashData, setDashData] = useState([]);

  // const getProfile = async()=>{
  //   try {
  //     const {data} = await axios.get('/doctor/profile',{headers:{Authorization:`Bearer ${dToken}`}})
  //     console.log(data.doctor);
  //     setProfile(data.doctor)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getDashData = async () => {
    try {
      const { data } = await axios.get("/doctor/dashboard", {
        headers: { Authorization: `Bearer ${dToken}` },
      });
      if (data.success) {
        setDashData(data);
      } else {
        console.log("Error :", data.message);
      }
    } catch (error) {
      console.log("error fetching dashData", error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  const value = {
    dToken,
    setDToken,
  };
  return (
    <doctorContext.Provider value={value}>{children}</doctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  return useContext(doctorContext);
};
