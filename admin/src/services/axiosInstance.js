import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
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
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/doctor/refresh`,
          {
            withCredentials: true,
          }
        );

        if (res) {
          console.log("ok from acxxios instance");
        }
        const newToken = res.data.accessToken;
        localStorage.setItem("token", newToken);

        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }
        originalRequest.default.headers.common[
          "Authorization"
        ] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log("errorrrrrrrr froma axios instanceee");
        localStorage.removeItem("token");
        console.log(error.message + "Refresh token failed");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
