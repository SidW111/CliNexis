const Contact = () => {
  return (
    <div className="w-full h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center p-10">
          <p className="text-2xl font-semibold text-gray-500">
            CONTACT <span className="text-black">US</span>
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2">
            <div className="flex justify-center pr-5">
              <img
                className="object-cover w-[400px] h-[350px]"
                src="/Doc4.jpg"
                alt=""
              />
            </div>
            <div className="pl-8">
              <p className="text-lg font-semibold pt-5">OUR OFFICE</p>
              <p className="text-sm pt-5">
                54709 Wilms Station <br />
                Suite 350, Washington, USA
              </p>
              <p className="pt-5 text-sm">
                Tel:(312)520-2322 <br />
                Email:siddhantwainngade@gmail.com
              </p>
              <p className="text-lg font-semibold pt-5">Careers at CliNexis</p>
              <p className="pt-5 pb-5 text-sm">
                Learn more about our teams and job openings
              </p>
              <button className="border border-black px-4 py-3  hover:bg-blue-500 hover:text-white transition-all duration-500">
                Explore jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
