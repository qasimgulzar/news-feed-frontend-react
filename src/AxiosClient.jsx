import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});
instance.interceptors.request.use((config) => {
    const AUTH_TOKEN = `Bearer ${localStorage.getItem("site")}`;
    if (AUTH_TOKEN)
        config.headers.Authorization = AUTH_TOKEN;
    return config;
});
export default instance;
