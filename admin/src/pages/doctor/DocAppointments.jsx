import { useAppContext } from "../../context/AppContext";
import { useDoctorContext } from "../../context/DoctorContext";

const DocAppointments = () => {
  const { appointments, cancelAppointment, completeAppointment } =
    useDoctorContext();

  const { slotDateFormat, calculateAge } = useAppContext();
  return (
    <div className="w-full max-w-5xl m-5">
      <h1 className="font-medium text-lg mb-3">All Appointments</h1>

      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div className="max-sm:hidden font-medium grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>No.</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {appointments.reverse().map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-100"
            key={index}
          >
            <p className="max-sm:hidden font-medium">{index + 1}</p>

            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={item.userData?.image}
                alt=""
              />{" "}
              <p>{item.userData?.name}</p>
            </div>
            <div className="flex items-center">
              <p className="text-xs inline  border border-blue-500 px-2 rounded-full">
                {item.payment ? "Online" : "Cash"}
              </p>
            </div>
            <p>{calculateAge(item.userData?.dob)}</p>
            <p className="text-md text-gray-400">
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            <p className="font-medium">$ {item.docData?.fees}</p>
            {item.cancelled ? (
              <p className="text-red-500 font-medium">cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 font-medium">Completed</p>
            ) : (
              <div className="flex">
                <img
                  onClick={() => cancelAppointment(item._id)}
                  src="../src/assets/cancel_icon.svg"
                  alt="cancel"
                  className="w-12 cursor-pointer"
                />
                <img
                  onClick={() => completeAppointment(item._id)}
                  src="../src/assets/tick_icon.svg"
                  alt="tick"
                  className="w-12 cursor-pointer"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocAppointments;
