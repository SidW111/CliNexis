import { FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("token")
    }
  return (
    <div className="w-full h-screen">
      <div className="flex justify-between w-full pl-10 pr-10 p-4 border border-b-2 ">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-blue-600 text-4xl" />
          <div>
            <p className="text-4xl text-blue-600 font-semibold">
              Cli<span className="text-black">Nexis</span>
            </p>
            <p className="text-sm text-gray-500 -mt-1">Find your doctor here</p>
          </div>
        </div>
        <button onClick={handleLogout} className="px-8 h-12 text-white bg-blue-500 font-medium hover:bg-blue-600 rounded-full transition-all duration-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
