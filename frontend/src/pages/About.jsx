const About = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto ">
        {/* center about us */}
        <div className="flex justify-center items-center p-10">
          <p className="text-2xl font-semibold text-center text-gray-900">
            ABOUT <span className="text-gray-500">US</span>
          </p>
        </div>

        <div className=" grid grid-cols-2 ">
          <div className=" flex justify-center">
            <img
              className="w-full max-w-[400px] h-[400px] object-cover"
              src="/Doc1.jpg"
              alt="Doc1"
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm">
              Welcome to CliNexis, your trusted partner in simplifying
              healthcare access. We’re a team dedicated to transforming how
              people connect with healthcare professionals—making doctor
              appointments faster, easier, and stress-free.
            </p>
            <p className=" text-sm ">
              CliNexis is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, CliNexis is here to support you every step
              of the way.
            </p>
            <p className="font-bold text-sm ">Our Vision</p>

            <p className="text-sm">
              Our vision at CliNexis is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
        {/* WHY choose us part */}
        <div className=" pt-5">
          <div className="p-10 flex justify-center items-center">
            <p className="text-2xl font-semibold">WHY CHOOSE US</p>
          </div>
          <div className=" flex flex-row md:flex-row  border  mb-20">
            <div className=" border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-r from-blue-100 to-pink-100  hover:text-black transition-all duration-500 text-gray-600 cursor-pointer">
              <b>EFFICIENCY</b>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
            <div className=" border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-r from-blue-100 to-pink-100  hover:text-black transition-all duration-500 text-gray-600 cursor-pointer">
              <b>CONVINIENCE</b>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
            <div className=" border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gradient-to-r from-blue-100 to-pink-100  hover:text-black transition-all duration-500 text-gray-600 cursor-pointer">
              <b>PERSONALIZATION</b>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
