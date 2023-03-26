import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:7000"})

export const uploadImage = (data) => API.post('/upload/',data)
