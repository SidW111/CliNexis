import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import DocDashboard from "./pages/doctor/DocDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <SideBar/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="doctor/dashboard" element={<DocDashboard />} />
        <Route path="admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
