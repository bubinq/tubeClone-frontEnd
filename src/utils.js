import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://youtubeclone-react-api.onrender.com/api"
})