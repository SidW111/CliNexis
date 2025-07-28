import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyAppointment = () => {
  const { user, getDoctors } = useAppContext();
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
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const getAppointment = async () => {
    try {
      const res = await axios.get("/user/all-appointments");
      if (res) {
        setAppointments(res.data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    const res = await axios.post("/user/cancel-appointment", { appointmentId });
    try {
      if (res) {
        toast.success("appointment cancelled");
        getDoctors();
        getAppointment();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const payment = async (appointmentId) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Appointment payment",
      description: "Appointment payment",
      order_id: order.id,
      reciept: order.reciept,
      handler: async (response) => {
        console.log(response);
        try {
          const res = await axios.post("/user/verify-razorpay", {
            appointmentId,
          });

          if (res.data.success) {
            getAppointment();
            toast.message("payment successful");
            console.log("payment successful");
            navigate("/my-appointments");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options)
    rzp.open();
  };

  const appointmentRazorpay = async(appointmentId) => {
try {
  const {data} = await axios.post('/user/payment-razorpay',{appointmentId})

  if(data.success){
    payment(data.order)
  }else{
    toast.error(data.message)
  }
} catch (error) {
  console.log(error.message);
  toast.error(error.message)
}
  }

  useEffect(() => {
    getAppointment();
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

                  <div className="font-semibold mt-1">
                    Date: {slotDateFormat(item.slotDate)}
                  </div>
                  <div className="font-semibold mt-1">
                    Time: {item.slotTime}
                  </div>
                </div>
                <div></div>
                <div className="flex flex-col gap-2 justify-center">
                  {!item.cancelled && item.payment && !item.isCompleted && (
                    <button className="sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-100">
                      Paid
                    </button>
                  )}
                  {!item.cancelled && !item.payment && !item.isCompleted && (
                    <button onClick={() => appointmentRazorpay(item._id)} className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-blue-500 hover:text-white transition-all duration-300">
                      Pay Online
                    </button>
                  )}
                  {!item.cancelled && !item.isCompleted && (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      Cancel Appointment
                    </button>
                  )}
                  {item.cancelled && !item.isCompleted && (
                    <button className="sm:min-w-48 py-2 border border-red-600 rounded text-red-600">
                      Appointment Cancelled
                    </button>
                  )}
                  {item.isCompleted && (
                    <button className="sm:min-w-48 py-2 border border-green-600 text-green-600">
                      Completed
                    </button>
                  )}
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
