import { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/axiosInstance";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("/user/get-profile");
      if (data) {
        setUserData(data.user);
        console.log("Fetched user:", data.user);
      }
    } catch (error) {
      console.log(error.message);
      console.log("from get User Data");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(token);
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      getUserData();
      console.log("rerfreshed");
    } else {
      setUserData(null);
    }
  }, [token]);

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
    getUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
