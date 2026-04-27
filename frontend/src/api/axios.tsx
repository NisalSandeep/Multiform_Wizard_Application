import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.BACKEND_URI 
    || "http://localhost:5000/api",
});

export default api;