import { useState } from "react";
import axios from "../services/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [state, setState] = useState("Doctor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state === "Admin") {
      try {
        const { data } = await axios.post("/admin/login", { email, password });
        if (data) {
          console.log("admin logged in successfully");
          const AToken = data.token;
          localStorage.setItem("AToken", AToken);
          localStorage.removeItem("token");
          toast.success("Admin logged in successfully");
          navigate("/admin/dashboard");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
      try {
        const { data } = await axios.post("/doctor/login", { email, password });
        if (data) {
          console.log("doctor logged in successfully");
          const token = data.accessToken;
          localStorage.setItem("token", token);
          localStorage.removeItem("AToken");
          toast.success("Doctor logged in successfully");
          navigate("/doctor/dashboard");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" border shadow-lg bg-white p-6 rounded-xl w-[90%] max-w-md"
      >
        <h2 className="text-3xl text-blue-500  flex justify-center items-center mb-4 font-bold">
          {state === "Doctor" ? "Doctor" : "Admin"}
        </h2>

        <div className="p-2">
          <div>
            <label>Email</label>
            <input
              className="shadow-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-300 p-2 border w-full rounded-md bg-gray-"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="shadow-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-300 p-2 border w-full rounded-md bg-gray-"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center ">
          <button
            type="submit"
            className="bg-blue-600 font-semibold hover:bg-blue-700 text-white w-full px-6 py-2 border rounded-md"
          >
            {state === "Doctor" ? "Doctor" : "Admin"}
          </button>
        </div>
        <div className="mt-3">
          {state === "Doctor" ? (
            <p className="flex justify-center">
              Admin Login?&nbsp;{" "}
              <span
                onClick={() => setState("Admin")}
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="flex justify-center">
              Doctor Login?&nbsp;{" "}
              <span
                onClick={() => setState("Doctor")}
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
