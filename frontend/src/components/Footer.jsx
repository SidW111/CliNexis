import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-6 py-16 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 ">

          <div className="col-span-2 pl-10">

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-4xl text-white"/>
              <div> 
                <h1 className="text-4xl font-bold leading-tight">
                  <span className="text-blue-600 ">Cli</span><span className="text-white">Nexis</span>
                </h1>
                <p className=" text-white text-[90%] -mt-1">Find your doctor here</p>{" "}
              </div>
            </div>
            <p className= "pt-5 text-white">Easily find and book appointments with top doctors <br />near you.Your path to better health begins with a<br />simple click.</p>

          </div>

          <div className="col-span-1 text-white pl-10">
            <h1 className="text-xl font-bold mb-5">Menu</h1>
            <div className="space-y-3">
             <Link className="block hover:text-blue-600 transition" to="/home">Home</Link>
             <Link className="block hover:text-blue-600 transition" to="/doctor">All Doctors</Link>
             <Link className="block hover:text-blue-600 transition" to="/about"><p>About</p></Link>
             <Link className="block hover:text-blue-600 transition" to="/contact"><p>Contact us</p></Link>
             </div>
          </div>

          <div className="col-span-1 text-white pl-10">
            <h1 className="text-xl font-bold mb-5">Contact</h1>
            <div className="space-y-3">
                <Link className="block hover:text-blue-600 transition">Savior@gmail.com</Link>
                <Link className="block hover:text-blue-600 transition">+ 22 12345 67891</Link>
                <Link className="block hover:text-blue-600 transition">Washington DC-1230</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
