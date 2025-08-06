import { FaMapMarkerAlt } from "react-icons/fa";
import { useAdminContext } from "../context/AdminContext";
import { useDoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const {setAToken} = useAdminContext();
    const { setDToken} = useDoctorContext(); 
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
        localStorage.removeItem("token")
        setDToken("")
        localStorage.removeItem("AToken")
        setAToken("")
    }
  return (
    <div className="w-full ">
      <div className="flex justify-between w-full md:pl-10 md:pr-10 p-3 border border-b-2 ">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-blue-600 text-3xl" />
          <div>
            <p className="text-3xl text-blue-600 font-semibold">
              Cli<span className="text-black">Nexis</span>
            </p>
            <p className="text-xs text-gray-500 -mt-1">Find your doctor here</p>
          </div>
        </div>
        <button onClick={handleLogout} className="px-6 h-10 text-white bg-blue-500 font-medium hover:bg-blue-600 rounded-full transition-all duration-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
