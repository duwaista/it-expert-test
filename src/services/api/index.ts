import axios from "axios";

const baseURL = process.env.SERVICE_URL || "";

const instance = axios.create({
  baseURL,
});

export default instance;
