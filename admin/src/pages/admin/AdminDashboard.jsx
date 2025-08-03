import { useAdminContext } from "../../context/AdminContext"

const AdminDashboard = () => {
   const {dashData,cancelAppointment,appointment} = useAdminContext();
   console.log("dashData :",dashData)
 return <div>
    HII FROM ADMIN DASHBOARdD
 </div>
}

export default AdminDashboard