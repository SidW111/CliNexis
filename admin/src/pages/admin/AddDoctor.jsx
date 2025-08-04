import { useState } from "react";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
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
          <div className="flex lg:flex-1 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p>Doctor Name</p>
              <input type="text" placeholder="Name" id="" className="border rounded px-3 py-2 required" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
