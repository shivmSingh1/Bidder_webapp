import axios from "axios";

const Axios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})


Axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})


export default Axios;