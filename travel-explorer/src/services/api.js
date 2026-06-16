import axios from "axios";

const api = axios.create({
    baseURL: "https://travel-react-ifqu.onrender.com/"
});

export default api;