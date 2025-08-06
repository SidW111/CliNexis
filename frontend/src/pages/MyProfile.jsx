import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import axios from "../services/axiosInstance";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, getUserData } = useAppContext();
  const [isEdit, setIsEdit] = useState(false);
  const [gender, setGender] = useState(userData?.gender || "");
  const [dob, setDob] = useState(userData?.dob || "");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const save = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("gender", gender);
    formData.append("dob", dob);
    if (image) formData.append("image", image);

    try {
      const { data } = await axios.post("/user/update-profile", formData);
      if (data) {
        getUserData();
        setIsEdit(false);
        setImage(null);
        toast.success("Profile updated!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            {isEdit ? (
              <label htmlFor="image" className="relative cursor-pointer block w-36 h-36">
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : userData?.image || "/placeholder.png"
                  }
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <img
                    src="/upload_icon.png"
                    alt="Upload"
                    className="w-full h-full"
                  />
                </div>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  hidden
                />
              </label>
            ) : (
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={userData?.image || "/placeholder.png"}
                alt="Profile"
              />
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{userData?.name}</h1>
            <hr className="mb-6" />

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-semibold w-28">Email:</span>
                <span>{userData?.email}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-semibold w-28">Gender:</span>
                {isEdit ? (
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border px-2 py-1 w-40 rounded"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <span>{userData?.gender || "Not set"}</span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-semibold w-28">DOB:</span>
                {isEdit ? (
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="border px-2 py-1 w-40 rounded"
                  />
                ) : (
                  <span>{userData?.dob || "Not set"}</span>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8">
              {isEdit ? (
                <button
                  onClick={save}
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
