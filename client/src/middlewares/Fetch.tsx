import axios from "axios";

const token = localStorage.getItem("token");

export const Fetch = axios.create({
  baseURL: "https://node.umars.faith/api/",
  headers: {
    Authorization: token,
  },
});
