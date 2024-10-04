import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
    //this base url, it imports the backend url from .env 
})
//https://console.choreo.dev/organizations/fortunecode/projects/1955a9cd-f349-47f1-a55a-47aebb2c19af/components/frontend/dependencies/connections/new/service
//use this api for production
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, 
    (error) => {
        return Promise.reject(error)
    }
)

export default api