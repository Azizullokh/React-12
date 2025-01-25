import axios from "axios"

export const BackendAPI = axios.create({
    baseURL: 'https://strapi-store-server.onrender.com/api'
})