import axios from 'axios'

const api = axios.create({
  baseURL: '192.168.1.110/8080'
})

export default api