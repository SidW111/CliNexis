import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import DocDashboard from "./pages/doctor/DocDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAdminContext } from "./context/AdminContext";
import { useDoctorContext } from "./context/DoctorContext";
import AllAppointments from "./pages/admin/AllAppointment";

const App = () => {
  const {aToken} = useAdminContext()
  const {token} = useDoctorContext()
  return aToken || token ? (  
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <SideBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/all-appointments" element={<AllAppointments/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />


          
          <Route path="/doctor-dashboard" element={<DocDashboard />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
    <Login />
    <ToastContainer/>
    </>
  )
};

export default App;
