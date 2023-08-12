import axios from "axios";
export const myAxios = axios.create({
  baseURL: process.env.WP_API,
});
