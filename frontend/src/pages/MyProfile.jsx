import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const MyProfile = () => {
  const { userData,setUserData } = useAppContext();

  const [isEdit, setIsEdit] = useState(false);
  console.log(userData);
  return (
    <div className="h-screen">
      <div className="max-w-5xl mx-auto mt-10">
        <div className="w-1/2">
          <img className="w-[150px] h-[150px]" src={userData?.image} alt="" />
          <p className="mt-5 font-semibold text-4xl mb-5">{userData?.name}</p>
          <p className="bg-black h-[1px]"></p>

          <div className="mt-5">
            <p className="mb-3 text-xl text-gray-600 font-medium underline outline-offset-1">
              Information
            </p>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p>Email:</p>
              <p>{userData?.email}</p>
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p>Gender:</p>
              <p>{userData?.gender ? userData?.gender : "Gender"}</p>
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p>DOB:</p>
              <p>{userData?.dob ? userData?.dob : "dd-mm-yy"}</p>
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-20 m-2">
              <p>CreatedAt:</p>
              <p>{userData?.createdAt ? userData?.createdAt.date : "Date"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
