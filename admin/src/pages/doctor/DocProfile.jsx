import { useDoctorContext } from "../../context/DoctorContext";


const DocProfile = () => {

    const {handleAvailability} = useDoctorContext();
  const { profileData } = useDoctorContext();
  return (
    profileData && (
      <div className="">
        <div className="flex flex-col gap-4 ">
          <div className="flex-1 border-stone-100 rounded-lg p-8 py-7 bg-white">
          <div className="mb-5">
            <img
              src={profileData.image}
              alt=""
              className="bg-blue-500 w-full sm:max-w-64 rounded-lg"
            />
          </div>
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {profileData.name}
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-700">
              <p>
                {profileData.degree} - {profileData.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {profileData.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">
                About
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {profileData.about}
              </p>
            </div>
            <p className="text-gray-800 font-medium mt-4">
              Appointment Fee :{" "}
              <span className="text-gray-800">$ {profileData.fees}</span>
            </p>
            <div className="flex gap-1 pt-2">
              <input
              onChange={()=>handleAvailability()}
                checked={profileData.available}
                type="checkbox"
                
              />
              <label htmlFor="">Available</label>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DocProfile;
