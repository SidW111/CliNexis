import React from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../services/axiosInstance";
import { toast } from "react-toastify";
import { RelatedDoc } from "../components/RelatedDoc";

const Appointment = () => {
  const { docId } = useParams();
  const { doctor, currencySymbol, getDoctors } = useAppContext();
  const navigate = useNavigate();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = () => {
    const docInfo = doctor.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();
    
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        
        let endTime = new Date();
        endTime.setDate(today.getDate() + i);
        endTime.setHours(21, 0, 0, 0);
        
        if (today.getDate() === currentDate.getDate()) {
            currentDate.setHours(
                currentDate.getDate() > 10 ? currentDate.getHours() + 1 : 10
            );
            currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
            currentDate.setHours(10);
            currentDate.setMinutes(0);
        }
        let timeSlots = [];
        
        while (currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            
            let day = currentDate.getDate();
            let month = currentDate.getMonth() + 1;
            let year = currentDate.getFullYear();
            
        const slotDate = day + "_" + month + "_" + year;
//  const slotDate = currentDate.toISOString().split("T")[0]; // "YYYY-MM-DD"

        const slotTime = formattedTime;

        const isSlotAvailable = docInfo?.slot_booked?.[slotDate]?.includes(
          slotTime
        )
          ? false
          : true;

        if (isSlotAvailable) {
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    try {

        const date = docSlots[slotIndex][0].dateTime
        let day = date.getDate()
        let month = date.getMonth()+1;
        let year  = date.getFullYear()

        let slotDate = day + "_" + month + "_" + year
        
        const appointment = await axios.post('/user/book-appointment',{docId,slotTime,slotDate})
        if(appointment.data.success){
                toast.success("Appointment booked")
                getDoctors();
                navigate("/my-appointments")
        }else {
            toast.error(appointment.data.message)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctor, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo || docSlots.length === 0) {
  return <p className="text-center mt-10">Loading doctor slots...</p>;
}

  return (
    <div className="mt-5">
      <div className="max-w-6xl mx-auto">
        {/* Doc Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              className="w-full border border-gray-400  bg-blue-500 sm:max-w-72 rounded-lg"
              src={docInfo?.image}
              alt={docInfo?.name}
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80] sm:mt-0 ">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo?.name} <img src="/verified_icon.svg" alt="" />
            </p>
            <div className="flex items-center gap-3 text-sm font-medium mt-1 text-gray-600">
              <p>
                {docInfo?.degree} - {docInfo?.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo?.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm mt-3 text-gray-900 font-medium">
                About
              </p>
              <p className="text-sm mt-1 text-gray-600 max-w-[650px]">
                {docInfo?.about}
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-medium mt-3">
                Appointment fee:{" "}
                <span className="text-gray-900">
                  {currencySymbol}
                  {docInfo?.fees}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Booking slots */}
        <div className="sm:ml-72 sm:pl-4 font-medium text-gray-700 mt-8">
          <p className="mb-8">Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 hide-scrollbar">
            {docSlots?.length > 0 &&
              docSlots?.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`font-medium text-center py-8 min-w-20 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-blue-500 text-white border border-gray-400"
                      : " border border-gray-400 text-black hover:bg-blue-100"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <div className="flex gap-1 justify-center">
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                    <p>{item[0] && month[item[0].dateTime.getMonth()]}</p>
                    {/* <p>{item[0] && item[0].dateTime.getFullYear()}</p> */}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots?.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-medium flex-shrink-0 px-7 py-3 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-blue-500 text-white border border-gray-500"
                      : "border border-gray-400 text-black hover:bg-blue-100"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button onClick={bookAppointment} className="mt-5 my-6 px-14 py-3 bg-blue-500 rounded-full text-white border border-gray-400 hover:bg-blue-700 ">Book an Appointment</button>
        </div>

      </div>
      <RelatedDoc docId={docId} speciality={docInfo?.speciality}  />
    </div>
  );
};

export default Appointment;
