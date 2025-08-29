import axios from "axios";

const Axios = axios.create({
    baseURL: process.env.VITE_API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

Axios.interceptors.request((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
}, (error) => {
    return Promise.reject(error)
})


Axios.interceptors.response((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})


export default Axios;