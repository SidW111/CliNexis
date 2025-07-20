import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-full w-full z-0 bg-gradient-to-r from-blue-100 to-pink-100 
                  [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]"
      ></div>

      <div className="relative z-10 max-w-6xl h-[95vh] mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className=" w-full md:w-1/2 text-center md:text-left ">
          <p className=" text-5xl leading-[1.3] font-bold text-gray-600">
            Feeling Better Starts <br /> Here. Find And Book <br />
            Your Doctor.
          </p>

          <p className="mt-4 text-gray-600 text-base sm:text-lg ">
            Easily find and book appointments with top doctors near you. <br />
            Your path to better health begins with a simple click.
          </p>

          <div className=" mt-6 gap-3 md:justify-start flex justify-center items-center">
            <div className=" flex -space-x-6">
              <img
                src="/Doc1.jpg"
                alt="Doc1"
                className="w-14 h-14 object-cover border-4 border-white rounded-full"
              />
              <img
                src="/Doc2.jpg"
                alt="Doc2"
                className="w-14 h-14 object-cover border-4 border-white rounded-full"
              />
              <img
                src="/Doc3.jpg"
                alt="Doc3"
                className="w-14 h-14 object-cover border-4 border-white rounded-full"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">
              1500+ Doctors are{" "}
              <span className="text-green-600 font-semibold">Online Now</span>
            </p>
          </div>
          <div className="mt-8 flex gap-5 justify-center md:justify-start">
            <Link to="/doctors">
              <button className=" text-white px-6 py-4 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition">
                Book an Appointment
              </button>
            </Link>
            <Link to="/about">
              <button className="px-6 py-4 rounded-full border-black border font-semibold hover:bg-gray-100 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center pb-10 pr-10  mb-10 md:mb-0">
          <img
            src="/HeroImg.png"
            alt=""
            className=" w-[850px] md:max-w-[950px] transform scale-x-[-1] [mask-image:linear-gradient(to_bottom,white_80%,transparent)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
