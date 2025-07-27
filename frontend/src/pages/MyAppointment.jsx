import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyAppointment = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate?.split("_");
    return (
      dateArray[0]+ " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const handlAppointment = async () => {
    try {
      const res = await axios.get("/user/all-appointments", {
        userId: user?._id,
      });
      if (res) {
        setAppointments(res.data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    handlAppointment();
  }, []);
  return (
    <div className="">
      <div className="max-w-5xl h-screen mx-auto">
        <div className="">
          <p className="pb-3 mt-10 font-medium border-b text-zinc-700">
            My Appointments
          </p>
          <div>
            {appointments.slice(0, 4).map((item, index) => (
              <div
                className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
                key={index}
              >
                <div>
                  <img
                    className="w-32 bg-indigo-50"
                    src={item.docId.image}
                    alt={item.docId.name}
                  />
                </div>
                <div className="flex-1 text-sm text-zinc-600">
                  <p className="text-neutral-950 font-semibold ">
                    {item.docId.name}
                  </p>
                  <p>{item.docId.speciality}</p>

                  <div className="flex items-center mt-1 gap-2">
                    <p
                      className={`w-2 h-2 rounded-full ${
                        item.docId.available ? "bg-green-600" : "bg-gray-500"
                      }`}
                    ></p>
                    <p>
                      {item.docId.available ? "Available" : "Not Available"}
                    </p>
                  </div>

                  <div className="font-semibold mt-1">Date: {slotDateFormat(item.slotDate)}</div>
                  <div className="font-semibold mt-1">Time: {item.slotTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
