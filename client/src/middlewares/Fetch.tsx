import axios from "axios";

const token = localStorage.getItem("token");

export const Fetch = axios.create({
  baseURL: "http://portfolio.mukammal-crm.uz/api/",
  headers: {
    Authorization: token,
  },
});
