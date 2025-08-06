import { useAppContext } from "../../context/AppContext";
import { useDoctorContext } from "../../context/DoctorContext";

const DocDashboard = () => {
  const { dashData,cancelAppointment,completeAppointment } = useDoctorContext();
  const { slotDateFormat } = useAppContext();
  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-4">
          {/* Top side */}
          <div className="flex min-w-52 items-center gap-3 bg-white border  rounded-xl p-4 hover:scale-110 transition-all duration-500">
            <img src="../src/assets/cash.png" className="w-16 -mb-1" alt="" />
            <div>
              <p className="text-xl font-medium text-gray-600">
                ${dashData?.earnings}
              </p>
              <p className="font-medium text-gray-700">Earning</p>
            </div>
          </div>

          <div className="flex min-w-52 items-center gap-3 bg-white border  rounded-xl p-4 hover:scale-110 transition-all duration-500">
            <img
              src="../src/assets/appointment.png"
              className="w-16 -mb-1"
              alt=""
            />
            <div>
              <p className="text-xl font-medium text-gray-600">
                {dashData?.appointments}
              </p>
              <p className="font-medium text-gray-700">Appointments</p>
            </div>
          </div>

          <div className="flex min-w-52 items-center gap-3 bg-white border  rounded-xl p-4 hover:scale-110 transition-all duration-500">
            <img
              src="../src/assets/hospitalisation.png"
              className="w-16 -mb-1"
              alt=""
            />
            <div>
              <p className="text-xl font-medium text-gray-600">
                {dashData?.patients}
              </p>
              <p className="font-medium text-gray-700">Patients</p>
            </div>
          </div>
        </div>
        {/* Bottom side */}
        <div className=" bg-white ">
          <div className="flex gap-2 mt-10 border p-4 rounded-t-xl ">
            <img src="../src/assets/recent.png" className="w-8" alt="" />{" "}
            <p className="font-bold text-gray-900">Latest Bookings</p>
          </div>
          <div className=" pt-4 border border-t-0">
            {dashData.latestAppointments?.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
              >
                <img
                  src={item?.userData?.image}
                  className="rounded-full w-10"
                  alt={item.userData?.name}
                />
                <div className="flex-1">
                  <p className="text-lg font-medium">{item.userData?.name}</p>
                  <p className="text-xs text-gray-500 -mt-[0.5]">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-600 font-medium text-xs">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-600 font-medium text-xs">
                    Completed
                  </p>
                ) : (
                  <div className="flex">
                    <img src="../src/assets/cancel_icon.svg" alt="cancel icon" 
                    className="w-10 cursor-pointer"
                    onClick={()=> cancelAppointment(item._id)}
                    />
                    <img src="../src/assets/tick_icon.svg" alt="cancel icon" 
                    className="w-10 cursor-pointer"
                    onClick={() => completeAppointment(item._id)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DocDashboard;
