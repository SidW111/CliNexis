import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="rounded-2xl bg-gray-100 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6 md:p-10">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-snug text-gray-800">
            More than a clinic, <br />
            it's a caring place
          </h1>

          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            Easily find and book appointments with top doctors near you. <br />
            Your path to better health begins with a simple click.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Find doctors and book appointments easily</li>
            <li>See top-rated doctors near you</li>
            <li>Book appointments instantly</li>
          </ul>

          <Link to="/about">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium transition">
              About Us
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative w-full h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
          {/* First Image */}
          <img
            className="rounded-xl object-cover w-2/3 h-[70%] z-10 relative shadow-lg"
            src="/docCheck1.jpg"
            alt="Doctor Checking"
          />

          {/* Overlapping Image */}
          <img
            className="rounded-xl object-cover w-2/3 h-[70%] absolute top-28 left-28 hidden sm:block shadow-lg"
            src="/docCheck2.jpg"
            alt="Doctor Checking 2"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
