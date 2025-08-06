const About = () => {
  return (
    <div className="w-full bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Heading */}
        <div className="flex justify-center items-center pb-8">
          <p className="text-3xl sm:text-4xl font-semibold text-center text-gray-900">
            ABOUT <span className="text-gray-500">US</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-16">
          <div className="flex justify-center">
            <img
              className="w-full  max-w-sm sm:max-w-sm md:max-w-[400px] h-auto object-cover rounded-xl"
              src="/Doc1.jpg"
              alt="Doctor"
            />
          </div>
          <div className="space-y-5 p-2">
            <p className="text-base  leading-relaxed">
              Welcome to <span className="font-semibold">CliNexis</span>, your trusted partner
              in simplifying healthcare access. We’re a team dedicated to
              transforming how people connect with healthcare professionals
              making doctor appointments faster, easier, and stress free.
            </p>
            {/* <p className="text-base leading-relaxed">
              CliNexis is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service.
            </p> */}
            <h3 className="font-bold text-lg text-gray-800">Our Vision</h3>
            <p className="text-base leading-relaxed">
              Our vision at CliNexis is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="md:pt-8">
          <div className="flex md:justify-center items-center pb-10">
            <p className="text-2xl sm:text-3xl font-semibold text-center">
              WHY CHOOSE US
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {[
              {
                title: "EFFICIENCY",
                desc: "Streamlined appointment scheduling that fits into your busy lifestyle.",
              },
              {
                title: "CONVENIENCE",
                desc: "Access to a network of trusted healthcare professionals in your area.",
              },
              {
                title: "PERSONALIZATION",
                desc: "Tailored recommendations and reminders to help you stay on top of your health.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 px-6 py-8 text-center border rounded-xl shadow-sm hover:bg-blue-500 hover:text-white transition-all duration-500"
              >
                <h4 className="font-bold mb-3 text-lg">{item.title}</h4>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
