import { useState } from "react";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [degree, setDegree] = useState("");
  return (
    <form action="" className="m-5 w-full">
      <p className="font-medium text-lg mb-3">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        {/* Header image section */}
        <div className="flex items-center gap-4 mb-6 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={
                docImg
                  ? URL.createObjectURL(docImg)
                  : "../src/assets/upload_area.svg"
              }
              alt="Upload"
            />
          </label>
          <input
            type="file"
            name=""
            id="doc-img"
            onChange={(e) => setDocImg(e.target.files[0])}
            hidden
          />
          <p>
            Upload Doctor <br />
            Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-6 text-gray-600">
          {/* Left Column */}
          <div className="flex lg:flex-1 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                id=""
                className="border rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                required
                className="border rounded px-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                required
                className="border rounded px-3 py-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 year">8 Year</option>
                <option value="9 Year">9 Year</option>
              </select>
            </div>

          </div>
          {/* Right column */}
          <div className="flex lg:flex-1 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p>Speciality</p>
              <select
                onChange={(e) => {
                  setSpeciality(e.target.value);
                }}
                className="border rounded px-3 py-2"
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <p>Degree</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Education"
                type="text"
                className="border rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Fees</p>
              <input
              placeholder="Fees"
                type="Number"
                onChange={(e) => {
                  setFees(e.target.value);
                }}
                className="px-3 py-2 border rounded"
              />
            </div>
          </div>
        </div>
        {/* About section */}
        <div className="flex flex-col gap-6 mb-6">
                  <p>About Doctor</p>
                  <textarea className="border rounded w-full py-2" placeholder="Write about doctor..." rows={5} name="" id=""></textarea>
        </div>
<button type="submit" className=" text-white font-semibold px-10 py-3 bg-blue-500 hover:bg-blue-600 rounded-full ">Add Doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
