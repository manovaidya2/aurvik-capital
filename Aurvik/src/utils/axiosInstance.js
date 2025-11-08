// src/utils/axiosInstance.js
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // change when deploying

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // optional: 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Optional: global response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
