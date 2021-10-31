import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3333",
  validateStatus: (status) => status !== 500,
});
