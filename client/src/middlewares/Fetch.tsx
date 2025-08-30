import axios from "axios";

const token = localStorage.getItem("token");

export const Fetch = axios.create({
  baseURL: "https://portfolio.mukammal-crm.uz/api/",
  headers: {
    Authorization: token,
  },
});
