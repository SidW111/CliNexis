import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
import {  useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Navbar = () => {
  const { user, isLoggedIn, setIsLoggedIn, setUser, setAccessToken } =
    useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;
  const Links = [
    { name: "HOME", path: "/" },
    { name: "ALL DOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const navigate = useNavigate();
  const dropDownRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setUser(null);
    setAccessToken(null);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-pink-50 border-b-4">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between  rounded-b-xl">
        <div onClick={() => navigate("/")} className="flex items-center space-x-2 cursor-pointer">
          <FaMapMarkerAlt className="text-blue-600 text-4xl" />
          <div className="leading-tight">
            <h1 className="text-4xl font-semibold text-blue-600">
              Cli<span className="text-black font-semibold">Nexis</span>
            </h1>
            <p className="text-[90%] text-gray-500 -mt-1">Find your doctor here</p>
          </div>
        </div>

        <div className="flex items-center  space-x-8 font-medium text-sm text-gray-700">
          {Links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative transition ${
                currentPath === link.path ? "text-black" : "text-gray-800"
              }`}
            >
              {link.name}
              {currentPath === link.path && (
                <span className="absolute -bottom-1 left-0 flex items-center w-full h-[2px] bg-black"></span>
              )}
            </Link>
          ))}
          {/* <Link to="/">HOME</Link>
        <Link to="/doctor">ALL DOCTOR</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT US</Link> */}
        </div>

        <div className="relative" ref={dropDownRef}>
          {isLoggedIn ? (
            <div
              className="flex items-center justify-center space-x-2 cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <img
                src={user.image}
                alt="profile pic"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-medium">Welocme, {user.name}</span>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-white px-6 py-3 rounded-full font-medium text-gray-800 shadow-lg hover:bg-gray-100 transition">
                Sign In
              </button>
            </Link>
          )}

          {isLoggedIn && showDropdown && (
            <div className="absolute bg-pink-50 mt-4 w-48 rounded-md shadow-lg py-2 z-50">
              <Link
                to="/profile"
                onClick={() =>setShowDropdown(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </Link>
              <Link
                to="/my-appointments"
                 onClick={() =>setShowDropdown(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Appointments
              </Link>
              <button  onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
