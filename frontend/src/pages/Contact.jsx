const Contact = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="flex justify-center items-center py-6">
          <p className="text-2xl font-semibold text-gray-500">
            CONTACT <span className="text-black">US</span>
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                className="object-cover lg:w-[75%] w-full max-w-[400px] h-auto rounded-lg shadow"
                src="/Doc4.jpg"
                alt="Doctor"
              />
            </div>

            {/* Info Section */}
            <div className="text-gray-700">
              <p className="text-lg font-semibold pt-2">OUR OFFICE</p>
              <p className="text-sm pt-3">
                54709 Wilms Station <br />
                Suite 350, Washington, USA
              </p>

              <p className="pt-5 text-sm">
                Tel: (312) 520-2322 <br />
                Email: siddhantwainngade@gmail.com
              </p>

              <p className="text-lg font-semibold pt-6">Careers at CliNexis</p>
              <p className="pt-3 pb-5 text-sm">
                Learn more about our teams and job openings
              </p>

              <button className="border border-black px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition-all duration-300">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
