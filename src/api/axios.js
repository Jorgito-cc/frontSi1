import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://backend-si1-production-0e10.up.railway.app/',
    withCredentials: true
})

export default instance