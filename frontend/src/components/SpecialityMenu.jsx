import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="py-20 px-6 md:px-16">
      <div className="rounded-2xl bg-gray-100  max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 pl-16 pb-20 pt-20">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-snug">
            More than a clinic, <br />
            it's a caring place
          </h1>

          <p className="text-gray-700 mb-6 text-base">
            Easily find and book appointments with top <br /> doctors near you. Your
            path to better health <br /> begins with a simple click.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Find doctors and book appointments easily</li>
            <li>See top-rated doctors near you</li>
            <li>Book appointments instantly</li>
          </ul>
          <div className="">
            <Link to="/about">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium">
                About Us
              </button>
            </Link>
          </div>
        </div>

        <div className=" flex-1 relative flex justify-start items-center h-[350px]">
          <img
            className="rounded-xl -top-20 h-2/3 object-cover z-10 relative "
            src="/docCheck1.jpg"
            alt="docCheck1"
          />
          <img
            className="rounded-xl h-2/3 object-cover absolute top-32 left-36"
            src="/docCheck2.jpg"
            alt="docCheck2"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;
