import { NavLink } from "react-router-dom";
import { useAdminContext } from "../context/AdminContext";
import { RxDashboard } from "react-icons/rx";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlineGroupAdd } from "react-icons/md";
import { PiUserList } from "react-icons/pi";
import { useEffect } from "react";

const SideBar = () => {
  const { aToken } = useAdminContext();

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5 ">
          <NavLink
            className={({ isActive }) =>
              `font-medium flex gap-3 md:px-9 items-center px-3 py-3.5 min-w-72 ${
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
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 min-w-72 ${
                isActive ? "bg-blue-50 border-r-4 border-blue-500" : ""
              }`
            }
            to={"/appointments"}
          >
            <RiCalendarScheduleLine size={22}/>
            <p className="md:block hidden">Appointment</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 min-w-72 ${
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
              `font-medium flex items-center gap-3 md:px-9 px-3 py-3.5 min-w-72 ${
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
    </div>
  );
};

export default SideBar;
