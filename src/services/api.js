import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexp-api.onrender.com'

})
