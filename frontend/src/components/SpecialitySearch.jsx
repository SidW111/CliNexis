import {
  FaThLarge,
  FaMapMarkerAlt,
  FaSearch,
  FaWatchmanMonitoring,
  FaStopwatch,
  FaCalendar,
  FaCalendarAlt,
  FaTh,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
const SpecialitySearch = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto pt-10">

        <div className="bg-gray-100 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-14 shadow">
          <div className="flex items-center bg-white rounded-lg px-5 py-3 w-full md:w-1/2 ">
            <div>
              <FaThLarge className="text-gray-500 mr-2 mt-0.5 w-5 h-5" />
            </div>
            <select
              className="w-full bg-transparent outline-none "
              name=""
              id=""
            >
              <option value="">Select Speciality</option>
              <option value="dentist">Dentist</option>
              <option value="neurologist">Neurologist</option>
              <option value="cardiologist">Cardiologist</option>
            </select>
          </div>

          <div className="flex items-center px-5 py-3 w-full md:w-1/2 bg-white rounded-lg">
            <FaCalendarAlt className="w-5 h-5 mr-2 text-gray-500" />
            <input type="date" className="outline-none w-full text-gray-800" />
          </div>

          <button className="bg-blue-600 text-white rounded-lg px-4 py-4 hover:bg-blue-700 transition-all">
            <FaSearch size={18} />
          </button>
        </div>

        <div className="pt-10 pb-10 flex flex-col md:flex-row justify-between text-center gap-8">
          <div className="pl-20">
            {" "}
            <h3 className="text-5xl font-bold text-gray-800">20K+</h3>
            <p className="text-gray-600 mt-2">Happy Patients</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-gray-800">99%</h3>
            <p className="text-gray-600 mt-2">Patient Satisfaction</p>
          </div>
          <div className="pr-20">
            <h3 className="text-5xl font-bold text-gray-800">3K+</h3>
            <p className="text-gray-600 mt-2">Certified Doctors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitySearch;

//  <section className="w-full bg-white py-10 px-4">
//       <div className="max-w-5xl mx-auto">

//         {/* Search Box */}
//         <div className="bg-[#F5F7FA] p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-14 shadow">
//           {/* Speciality */}
//           <div className="flex items-center bg-white px-4 py-3 rounded-xl w-full md:w-1/2">
//             <FaThLarge className="text-gray-400 mr-2" />
//             <select className="w-full bg-transparent outline-none">
//               <option value="">Select Speciality</option>
//               <option value="dentist">Dentist</option>
//               <option value="cardiologist">Cardiologist</option>
//               <option value="neurologist">Neurologist</option>
//             </select>
//           </div>

//           {/* Custom Field Instead of Location */}
//           <div className="flex items-center bg-white px-4 py-3 rounded-xl w-full md:w-1/2">
//             <FaCalendarAlt className="text-gray-400 mr-2" />
//             <input
//               type="date"
//               placeholder="da"
//               className="w-full bg-transparent outline-none"
//             />
//           </div>

//           {/* Search Button */}
//           <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all">
//             <FaSearch size={18} />
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col md:flex-row justify-between text-center gap-8">
//           <div>
//             <h3 className="text-3xl font-bold text-gray-800">20K+</h3>
//             <p className="text-gray-600 mt-2">Happy Patients</p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-gray-800">99%</h3>
//             <p className="text-gray-600 mt-2">Patient Satisfaction</p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-gray-800">3K+</h3>
//             <p className="text-gray-600 mt-2">Certified Doctors</p>
//           </div>
//         </div>
//       </div>
//     </section>
