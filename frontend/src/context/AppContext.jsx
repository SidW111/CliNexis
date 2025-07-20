import { createContext, useContext, useEffect, useState } from "react";
import axios from "../services/axiosInstance"
const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [accessToken,setAccessToken] = useState(null);
    const [user,setUser] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [doctor,setDoctor] = useState([]);

    const getDoctors = async () => {
        try {
            
            const {data} = await axios.get(`/doctor/get-doctor`)
            if(data){
                setDoctor(data.doctor);
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getDoctors()
    },[])

    const value ={
        accessToken,setAccessToken,user,setUser,isLoggedIn,setIsLoggedIn,doctor,setDoctor
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);