import { use, useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "../services/axiosInstance";
import {toast} from "react-toastify"

const MyProfile = () => {
  const { userData, setUserData ,getUserData} = useAppContext();
  const [isEdit, setIsEdit] = useState(false);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const save = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("image", image);

    try {
      const data = await axios.post("/user/update-profile", formData);
      if (data) {
        getUserData()
        setIsEdit(false);
        setImage(false)
        toast.success("Profile updated!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message)
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <div className="max-w-5xl mx-auto mt-10">
        <div className="w-1/2">
          {isEdit ? (
            <div className="w-[150px]">
              <label htmlFor="image">
                <div className="w-[150px]">
                  <img
                    className="w-36 rounded opacity-75"
                    src={image ? URL.createObjectURL(image) : userData.image}
                    alt=""
                  />
                  <img
                    className="w-10 absolute top-44 left-72"
                    src={image ? " " : "/upload_icon.png"}
                    alt=""
                  />
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                  />
                </div>
              </label>
            </div>
          ) : (
            <img className="w-44 object-cover" src={userData?.image} alt="" />
          )}
          <p className="mt-5 font-semibold text-4xl mb-5">{userData?.name}</p>
          <p className="bg-black h-[1px]"></p>

          <div className="mt-5">
            <p className="mb-3 text-xl text-gray-600 font-medium underline outline-offset-1">
              Information
            </p>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p className="font-semibold">Email:</p>
              <p>{userData?.email}</p>
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p className="font-semibold">Gender:</p>
              {isEdit ? (
                <select
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  value={gender || userData?.gender}
                  className="w-[150px]"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p>{userData?.gender ? userData?.gender : "Gender"}</p>
              )}
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p className="font-semibold">DOB:</p>
              {isEdit ? (
                <input
                  onChange={(e) => setDob(e.target.value)}
                  className="w-[150px]"
                  value={userData?.dob || dob}
                  type="date"
                />
              ) : (
                <p>{userData?.dob ? userData?.dob : "dd-mm-yy"}</p>
              )}
            </div>

            {isEdit ? (
              <div className="pt-5">
                <button
                  onClick={() => save()}
                  className="px-10 py-3 border border-black bg-blue-100 rounded-full"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="pt-5">
                <button
                  onClick={() => setIsEdit(true)}
                  className="px-10 py-3 border border-black bg-blue-100 rounded-full"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

{
  /* <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
  <p className="font-semibold">CreatedAt:</p>
  <p>{userData?.createdAt ? userData?.createdAt.date : "Date"}</p>
</div> */
}
