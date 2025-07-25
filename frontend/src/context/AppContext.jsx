import { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/axiosInstance";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading,setLoading] = useState(true)

  const getDoctors = async () => {
    try {
      const { data } = await axios.get(`/doctor/get-doctor`);
      if (data) {
        setDoctor(data.doctor);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/user/get-profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data) {
        setUserData(data.user);
        console.log("Fetched user:", data.user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAccessToken(token);
      setIsLoggedIn(true)
    }
    setLoading(false);

  }, [])

  useEffect(() => {
    if (accessToken) {
      getUserData();
    } else {
      setUserData(null);
    }
  }, [accessToken]);

  useEffect(() => {
    getDoctors();
  }, []);

  const value = {
    accessToken,
    setAccessToken,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    doctor,
    setDoctor,
    userData,
    setUserData,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
