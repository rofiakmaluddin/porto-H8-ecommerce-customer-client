import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-customer-441aa.web.app/'
})

export default instance
