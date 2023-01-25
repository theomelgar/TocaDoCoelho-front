import axios from "axios";
export const api = axios.create({
  baseURL: "https://mywallet-api-gm38.onrender.com",
});