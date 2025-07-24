import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const {setAccessToken,setUser,setIsLoggedIn}= useAppContext()
  const [state, setState] = useState("Sign Up");
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
          toast.success("sign Up successfull")
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        return console.log(error.message);
      }
    } else {
      try {
        const res = await axios.post(`/user/signin`, { email, password });
        if (res) {
          localStorage.setItem("token", res.data.accessToken);
          console.log("Sign In SuccessFull");
          toast.done("sign In successfull")
          navigate('/')
          setAccessToken(res.data.accessToken)
          setUser(res.data.user)
          setIsLoggedIn(true)
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        return console.log(error.message);
      }
    }
  }
  return (
    <div className="overflow-y-hidden h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-800 to-cyan-400">
      <form className=" border shadow-lg bg-white p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-3xl text-blue-500  flex justify-center items-center mb-4 font-bold">
          {state === "Sign Up" ? "Sign Up" : "Sign In"}
        </h2>

        {/* {state === "Sign Up" && (
          <p className="pl-2 ">Create an account to book appointment</p>
        )} */}
        <div className="p-2">
          {state === "Sign Up" && (
            <div>
              <label>Name</label>
              <input
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

// import { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/user/signin",
//         { email, password },
//         { withCredentials: true }
//       );
//       localStorage.setItem("token", res.data.accessToken);
//       alert("Login successful!");
//     } catch (error) {
//       alert("Login failed");
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-600">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
//         <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Welcome Back</h2>
//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="text-sm text-center text-gray-500 mt-4">
//           Don’t have an account? <span className="text-blue-600 cursor-pointer hover:underline">Register</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
