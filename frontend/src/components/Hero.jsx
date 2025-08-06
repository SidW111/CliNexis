import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 h-full w-full z-0 bg-gradient-to-r from-blue-100 to-pink-100 [mask-image:linear-gradient(to_bottom,white_85%,transparent)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 pt-12 md:pt-20">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-700">
            Feeling Better Starts <br /> Here. Find And Book <br />
            Your Doctor.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            Easily find and book appointments with top doctors near you.
            <br className="hidden sm:block" />
            Your path to better health begins with a simple click.
          </p>

          {/* Avatars */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex -space-x-6">
              <img
                src="/Doc1.jpg"
                alt="Doc1"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover border-4 border-white rounded-full"
              />
              <img
                src="/Doc2.jpg"
                alt="Doc2"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover border-4 border-white rounded-full"
              />
              <img
                src="/Doc3.jpg"
                alt="Doc3"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover border-4 border-white rounded-full"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">
              1500+ Doctors are{" "}
              <span className="text-green-600 font-semibold">Online Now</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/doctors">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:py-4 rounded-full font-semibold transition">
                Book an Appointment
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-black hover:bg-gray-100 px-6 py-3 sm:py-4 rounded-full font-semibold transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <img
            src="/HeroImg.png"
            alt="Doctor Illustration"
            className="w-[80%] sm:w-[70%] md:w-[90%] max-w-[550px] transform scale-x-[-1] [mask-image:linear-gradient(to_bottom,white_80%,transparent)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
