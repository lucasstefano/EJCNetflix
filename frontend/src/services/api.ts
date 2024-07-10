//api.ts
import axios from 'axios';
export const UrlBase = 'http://localhost:3333'

const api = axios.create({
    baseURL: UrlBase,
})

export default api;