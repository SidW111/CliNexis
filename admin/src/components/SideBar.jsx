import { NavLink } from "react-router-dom";
import { useAdminContext } from "../context/AdminContext";
import { RxDashboard } from "react-icons/rx";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineGroupAdd } from "react-icons/md";
import { PiUserList } from "react-icons/pi";
import { useDoctorContext } from "../context/DoctorContext";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  const { aToken } = useAdminContext();
  const {dToken} = useDoctorContext();

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5 ">
          <NavLink
            className={({ isActive }) =>
              `font-medium flex gap-3 md:px-9 items-center px-3 py-3.5 md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500 " : " "
              }`
            }
            to={"/admin-dashboard"}
          >
            <RxDashboard size={22} />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500" : ""
              }`
            }
            to={"/all-appointments"}
          >
            <RiCalendarScheduleLine size={22}/>
            <p className="md:block hidden">Appointment</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500" : ""
              }`
            }
            to={"/add-doctor"}
          >
            <MdOutlineGroupAdd  size={22}/>
            <p className="md:block hidden">Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500" : ""
              }`
            }
            to={"/doctors-list"}
          >
            <PiUserList  size={22}/>
            <p className="md:block hidden">Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && <ul className="text-[#515151] mt-5 ">
          <NavLink
            className={({ isActive }) =>
              `font-medium flex gap-3 md:px-9 items-center px-3 py-3.5 md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500 " : " "
              }`
            }
            to={"/doctor-dashboard"}
          >
            <RxDashboard size={22} />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5  md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500" : ""
              }`
            }
            to={"/doctor-appointments"}
          >
            <RiCalendarScheduleLine size={22}/>
            <p className="md:block hidden">Appointment</p>
          </NavLink>
          
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 md:min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500" : ""
              }`
            }
            to={"/doctor-profile"}
          >
            <CgProfile  size={22}/>
            <p className="md:block hidden">Doctors Profile</p>
          </NavLink>
        </ul>}
    </div>
  );
};

export default SideBar;
