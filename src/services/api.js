import axios from "axios";

const api = axios.create({
  baseURL: "https://chatty.doodle-test.com/api/chatty/v1.0",
});

export default api;
