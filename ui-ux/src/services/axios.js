import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4250/api",
    withCredentials: true
})

export default api;