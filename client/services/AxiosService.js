import Axios from 'axios'

const dev = window.location.origin.includes('localhost')

export const api = Axios.create({
    baseURL: dev ? 'http://localhost:3000' : '',
    timeout: 8000
})


