import { useAdminContext } from "../../context/AdminContext";

const ListDoctors = () => {
  const { doctors,changeAvailability } = useAdminContext();
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-3 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="border border-blue-300 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
          >
            <img
              src={item.image}
              className=" bg-blue-50  group-hover:bg-blue-500 transition-all duration-500"
              alt={item.name || "Doctor"}
            />
            <div className="p-4">
              <p className="font-medium text-lg">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <div className="mt-2 flex gap-1 items-center text-sm">
                <input onChange={() => changeAvailability(item._id)} type="checkbox" id="check" checked={item.available} />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDoctors;
