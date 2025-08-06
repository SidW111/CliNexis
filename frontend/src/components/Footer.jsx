import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 py-16 lg:bg-gray-900 lg:text-white md:bg-gray-900 md:text-white bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FaMapMarkerAlt className="text-4xl lg:text-white text-blue-500" />
              <div>
                <h1 className="text-3xl font-bold leading-tight">
                  <span className="text-blue-600">Cli</span>
                  <span className="lg:text-white md:text-white text-black">Nexis</span>
                </h1>
                <p className="text-sm -mt-1">Find your doctor here</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Easily find and book appointments with top doctors near you.
              <br />
              Your path to better health begins with a simple click.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h1 className="text-xl font-bold mb-4">Menu</h1>
            <div className="space-y-2 text-sm">
              <Link className="block hover:text-blue-600 transition" to="/">
                Home
              </Link>
              <Link
                className="block hover:text-blue-600 transition"
                to="/doctors"
              >
                All Doctors
              </Link>
              <Link
                className="block hover:text-blue-600 transition"
                to="/about"
              >
                About
              </Link>
              <Link
                className="block hover:text-blue-600 transition"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h1 className="text-xl font-bold mb-4">Contact</h1>
            <div className="space-y-2 text-sm">
              <p className="hover:text-blue-600 transition cursor-pointer">
                savior@gmail.com
              </p>
              <p className="hover:text-blue-600 transition cursor-pointer">
                +22 12345 67891
              </p>
              <p className="hover:text-blue-600 transition cursor-pointer">
                Washington DC - 1230
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
