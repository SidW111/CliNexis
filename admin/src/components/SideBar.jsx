import { NavLink } from "react-router-dom"
import { useAdminContext } from "../context/AdminContext"
import { RxDashboard } from "react-icons/rx";

import { useEffect } from "react";

const SideBar = () =>{

    const {aToken} = useAdminContext();



    return <div className="min-h-screen bg-white border-r">
       {
        aToken && 
            <ul className="text-[#515151] mt-5 ">
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : '' }`} to={'/admin-dashboard'}>
                {/* <img src={assets.home_icon} alt="" /> */}
                <p className='hidden md:block'>Dashboard</p>
            </NavLink>
                <NavLink className={'md:min-w-72 md:px-9 px-3 py-3.5 gap-3 flex '}>
                    Appointments
                </NavLink>
                <NavLink className={"flex px-3 py-3.5 md:px-9"}>
                    Add Doctors
                </NavLink>
                <NavLink>
                    Doctors List
                </NavLink>
            </ul>
        
       }
    </div>
}

export default SideBar