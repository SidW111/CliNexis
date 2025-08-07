import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
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
    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/refresh`, {
          withCredentials: true,
        });
        if (res) {
          console.log("ok from axios instance:" + res);
        }
        const newAccessToken = res.data.accessToken;
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
