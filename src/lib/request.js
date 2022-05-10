import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:5000",
});
// process.env.NODE_ENV === "production"
//   ? process.env.REACT_APP_BACKEND
//   : process.env.REACT_APP_BACKEND_DEV,

backend.interceptors.request.use(
  (config) => {
    let token = "";
    token = window.localStorage.getItem("token");

    if (!token) token = window.localStorage.getItem("token");
    if (token) config.headers = { Authorization: `bearer ${token}` };
    return config;
  },
  (error) => Promise.reject(error)
);

export default backend;
