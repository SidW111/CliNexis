import { useEffect } from "react";
import { useAdminContext } from "../../context/AdminContext";
import { useAppContext } from "../../context/AppContext";
import { MdCancelPresentation } from "react-icons/md";

const AdminDashboard = () => {
  const { dashData, cancelAppointment } = useAdminContext();
  const { slotDateFormat } = useAppContext();


  return (
    dashData && (
      <div className=" h-screen">
        <div className="p-2">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-3 p-4 min-w-52 bg-white border-gray-100 border cursor-pointer rounded-2xl hover:scale-105 transition-all duration-200">
              <img
                src="/doctor.png"
                className="w-12 rounded-full"
              />
              <div>
                <p className="text-xl text-black font-semibold">
                  {dashData.doctors}
                </p>
                <p className="text-gray-500 font-semibold">Doctors</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 min-w-52 bg-white border-gray-100 border cursor-pointer rounded-2xl hover:scale-105 transition-all duration-200">
              <img src="/book.png" className="w-12  lg:rounded-none" />
              <div>
                <p className="text-xl text-black font-semibold">
                  {dashData.appointments}
                </p>
                <p className="text-gray-500 font-semibold">Appointments</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 min-w-52 bg-white border-gray-100 border cursor-pointer rounded-2xl hover:scale-105 transition-all duration-200">
              <img src="/teamwork.png" className="w-14" />
              <div>
                <p className="text-xl text-black font-semibold">
                  {dashData.patients}
                </p>
                <p className="text-gray-500 font-semibold">Patients</p>
              </div>
            </div>
          </div>
          {/* Latest Appointments */}
          <div className="mt-10 bg-white">
            <div className="flex items-center gap-2.5 px-4 py-4 rounded-t border">
              <img
                src="/calendar-time.png"
                className="w-10"
                alt="calendar"
              />
              <div className="font-semibold">Latest Bookings</div>
            </div>
            <div className="pt-4 border border-t-0">
              {dashData.latestAppointments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-6 py-2 gap-3 hover:bg-gray-100"
                >
                  <img
                    src={item.docData?.image}
                    className="w-12 rounded-full"
                    alt={item.docData?.name}
                  />
                  <div className="flex-1 w-10 text-sm ">
                    <p className="text-gray-800 font-medium">{item.docData?.name}</p>
                    <p className="text-sm">{slotDateFormat(item.slotDate)}</p>
                  </div>

                  {item.cancelled 
                  ? <p className="text-red-500 text-xs font-semibold">Cancelled</p>
                  : item.isCompleted 
                  ? <p className="text-green-500 text-xs font-semibold">Completed</p>
                  : <MdCancelPresentation
                      onClick={() => cancelAppointment(item?._id)} className="w-14 cursor-pointer text-red-500"
                    />
                    }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AdminDashboard;
