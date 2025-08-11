import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setAccessToken, setUser, setIsLoggedIn } = useAppContext();
  const [state, setState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (state === "Sign Up") {
      try {
        const res = await axios.post("/user/signup", { name, email, password });
        if (res) {
          console.log("Sign Up SuccessFull");

          toast.success("sign Up successfull");
          navigate("/login");
          setState("Sign In");
        } else {
          toast.error(res.data.message || "Something went wrong");
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
        return console.log(error.message);
      }
    } else {
      try {
        const res = await axios.post(`/user/signin`, { email, password });
        if (res) {
          localStorage.setItem("token", res.data.accessToken);
          console.log("Sign In SuccessFull");
          toast.success("sign In successfull");
          navigate("/");
          setAccessToken(res.data.accessToken);
          setUser(res.data.user);
          setIsLoggedIn(true);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
        return console.log(error.message);
      }
    }
  }
  return (
    <div className=" h-[90vh] flex flex-col justify-center items-center ">
      <form className=" border shadow-lg bg-white p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-3xl text-blue-500  flex justify-center items-center mb-4 font-bold">
          {state === "Sign Up" ? "Sign Up" : "Sign In"}
        </h2>

        <div className="p-2">
          {state === "Sign Up" && (
            <div>
              <label>Name</label>
              <input
                required
                className="shadow-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-300 p-2 border w-full rounded-md bg-gray-"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div>
            <label>Email</label>
            <input
              required
              className="shadow-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black-300 p-2 border w-full rounded-md bg-gray-"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label required>Password</label>
            <input
              required
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
            onClick={handleSubmit}
            className="bg-blue-600 font-semibold hover:bg-blue-700 text-white w-full px-6 py-2 border rounded-md"
          >
            {state === "Sign Up" ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <div className="mt-3">
          {state === "Sign Up" ? (
            <p className="flex justify-center">
              Already have an Account?&nbsp;{" "}
              <span
                onClick={() => setState("Sign In")}
                className="cursor-pointer text-blue-600 hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="flex justify-center">
              Don't have an Account?&nbsp;{" "}
              <span
                onClick={() => setState("Sign Up")}
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

