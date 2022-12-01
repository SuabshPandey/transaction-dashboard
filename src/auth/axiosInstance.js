import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jp-dev.cityremit.global/web-api",
});

export default axiosInstance;
