import axios from "axios";

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
        const res = await axios.get("http://localhost:3000/api/user/refresh", {
          withCredentials: true,
        });
        if (res) {
          console.log("ok from axios instance:" + res);
        }
        const newAccessToken = res.data.accessToken;
        console.log(newAccessToken)
        localStorage.setItem("token", newAccessToken);
        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;      
        return axiosInstance(originalRequest);
      } catch (error) {
        localStorage.removeItem("token");
        console.log(error.message + "Refresh token failed");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
