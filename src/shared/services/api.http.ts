import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_SERVE_URL || "http://localhost:3333",
  validateStatus: (status) => status !== 500,
});
