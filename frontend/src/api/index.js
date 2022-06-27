import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => API.post("/api/send-otp", data);
export const verifyOtp = (data) => API.post("/api/verify-otp", data);
