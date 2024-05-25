import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

const AUTH_TOKEN = `Bearer ${localStorage.getItem("site")}`;
if (AUTH_TOKEN)
    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export default instance;
