import axios from 'axios'

const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT
const instance = axios.create({
  baseURL: API_ENDPOINT,
})
