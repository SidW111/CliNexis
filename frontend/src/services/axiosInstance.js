import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { getAccessTokenMemory, setAccessTokenMemory } from "../utils/auth";



const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.post(
          "http://localhost:3000/api/user/refresh",
          {},
          { withCredentials: true }
        );
        const newAccessToken = res.data.accessToken;
        localStorage.setItem("token",newAccessToken);
        originalRequest.headers.Authorization === `Bearer ${newAccessToken}`
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error.message  + "Refresh token failed");
        window.location.href= "/login"
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
