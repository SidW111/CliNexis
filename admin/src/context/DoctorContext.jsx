import { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/axiosInstance";
import { toast } from "react-toastify";

const doctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [dToken, setDToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [dashData, setDashData] = useState([]);
  const [appointments,setAppointments] = useState([])

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
        console.log(data.dashData);
        setDashData(data.dashData);
      } else {
        console.log("Error :", data.message);
      }
    } catch (error) {
      console.log("error fetching dashData", error);
    }
  };


  const cancelAppointment = async(appointmentId) => {
    try {
      const {data} =await axios.post('/doctor/cancel-appointment',{appointmentId})
      
      if(data.success){
        toast.success("Appointment Cancelled Successfully")
        getDashData()
      }else {
        toast.error(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const completeAppointment = async(appointmentId) => {
    try {
      const {data} =await axios.post('/doctor/complete-appointment',{appointmentId})
      if(data.success){
        toast.success("Appointment Completed Successfully")
        getDashData()
      }else {
        toast.error(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAppointments = async() => {
    try {
      const {data} = await axios.get('/doctor/get-appointments');
      if(data){
        setAppointments(data.appointment)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (dToken) {
      getDashData();
      getAppointments();
    }
  }, [dToken]);

  const value = {
    dToken,
    setDToken,
    dashData,
    cancelAppointment,
    completeAppointment,
    appointments
  };
  return (
    <doctorContext.Provider value={value}>{children}</doctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  return useContext(doctorContext);
};
