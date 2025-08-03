import { MdCancelPresentation } from "react-icons/md";
import { useAdminContext } from "../../context/AdminContext";
import { useAppContext } from "../../context/AppContext";

const AllAppointments = () => {
  const { appointments, cancelAppointment } = useAdminContext();
  const { calculateAge, slotDateFormat } = useAppContext();

  return (
    <div className="w-full max-w-6xl m-5">
      <h1 className="mb-3 text-lg font-medium">All Appointments</h1>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p></p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fee</p>
          <p>Actions</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-100"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex gap-3 items-center">
              <img
                src={item?.userData?.image}
                className="w-6 rounded-full"
                alt=""
              />
              <p className="font-medium">{item.userData?.name}</p>
            </div>
            <p>{calculateAge(item?.userData?.dob)}</p>
            <p className="">
              {slotDateFormat(item?.slotDate)},{item?.slotTime}
            </p>
            <div className="flex items-center gap-2">
              <img
                src={item?.docData?.image}
                className="w-8 rounded-full"
                alt=""
              />
              <p> {item?.docData?.name}</p>
            </div>
            <p>{item?.amount}</p>
            <div className="flex items-center justify-center">
              {item.cancelled ? (
                <p className="text-red-500 font-medium">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-500 font-medium">Completed</p>
              ) : (
                <MdCancelPresentation
                  onClick={() => cancelAppointment(item._id)}
                  className="text-red-500 "
                  size={20}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
