import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

// ✅ REQUEST INTERCEPTOR (attach token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

// ✅ RESPONSE INTERCEPTOR (handle expiry)
api.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response && error.response.status === 403) {

      console.log("⛔ Token expired or unauthorized");

      // ✅ clear old token
      localStorage.clear();

      // ✅ redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;