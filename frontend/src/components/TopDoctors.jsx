import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctor } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-10 gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-800 leading-snug">
            Meet Our Featured <br className="hidden sm:block" /> Specialists
          </h1>
          <button
            onClick={() => navigate("/doctors")}
            className="px-6 sm:px-8 py-3 sm:py-4 border border-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
          >
            View All
          </button>
        </div>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-10">
          {doctor.slice(0, 10).map((list) => (
            <div
              key={list.name}
              className="flex flex-col h-full bg-white border-2 border-blue-200 rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-500"
            >
              {/* Fixed Height Image */}
              <div className=" bg-blue-50 ">
                <img
                  src={list.image}
                  alt={list.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      list.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></span>
                  <span
                    className={`${
                      list.available ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {list.available ? "Available" : "Not Available"}
                  </span>
                </div>

                <p className="font-semibold text-lg text-gray-900">
                  {list.name}
                </p>
                <p className="text-sm text-gray-700">{list.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
