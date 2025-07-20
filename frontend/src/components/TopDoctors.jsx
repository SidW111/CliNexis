import { useAppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctor } = useAppContext();

  return (
    <div className="px-20 py-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Top div  */}
        <div className="flex justify-between pb-16">
          <h1 className="text-5xl leading-tight font-semibold">
            Meet Our Featured <br /> Specialists
          </h1>
          <div className="flex items-center justify-center ">
            <button className=" px-10 py-4 border border-black rounded-full">
              View All
            </button>
          </div>
        </div>
        {/* dOCTORS dIV */}
        <div className="w-full grid grid-cols-4 gap-6 pt-5 gap-y-6 px-3 sm:px-0 pb-10">
          {doctor.slice(1, 9).map((list) => (
            <div
              className="bg-white border-blue-200 border-2 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500"
              key={list.name}
            >
              <img className=" bg-blue-50" src={list.image} alt={list.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center">
                  <p
                    className={`${
                      list.available ? "bg-green-500" : "bg-gray-500"
                    } h-2 w-2 rounded-full`}
                  ></p>{" "}
                  <p
                    className={`${
                      list.available ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    {list.available ? "Available" : "Not Available"}
                  </p>
                </div>
                <p className="font-medium text-lg text-gray-900">{list.name}</p>
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
