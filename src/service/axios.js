import axios from "axios";
import { API_URL } from "../config";

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = token;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (error) => {
    const status = error.response.status;
    if (status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
