import { useAdminContext } from "../../context/AdminContext"

const AdminDashboard = () => {
   const {dashData} = useAdminContext();
   console.log("dashData :",JSON.stringify(dashData,null,2))
 return <div>
    HII FROM ADMIN DASHBOARdD
 </div>
}

export default AdminDashboard