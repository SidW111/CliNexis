import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const adminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [aToken, setAToken] = useState(() =>
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );

  const [dashData, setDashData] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

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
        setDashData(data.dashboard);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/admin/allappointment",
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
          },
        }
      );
      setAppointments(data.appointments);
      getDashData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/admin/cancel",
        { appointmentId },
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
          },
        }
      );
      if (data) {
        getAllAppointments();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/admin/all-doctors",
        { headers: { Authorization: `Bearer ${aToken}` } }
      );
      console.log(data.doctor);
      setDoctors(data.doctor);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeAvailability = async(docId) => {
    try {
      const {data} = await axios.post('http://localhost:3000/api/admin/available',{docId},{headers:{Authorization:`Bearer ${aToken}`}})
      if(data){
        toast.success(data.message)
        console.log(data);
      }
      getAllDoctors()

    } catch (error) {
     console.log(error.message) 
    }
  }

  useEffect(() => {
    if (aToken) {
      getDashData();
      getAllAppointments();
      getAllDoctors();
    }
  }, [aToken]);

  const value = {
    aToken,
    setAToken,
    getDashData,
    dashData,
    cancelAppointment,
    appointments,
    doctors,
    changeAvailability,
    getAllDoctors,
  };

  return (
    <adminContext.Provider value={value}>{children}</adminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(adminContext);
};
