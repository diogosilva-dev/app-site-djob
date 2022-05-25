import axios from 'axios';

const axiosInstance= axios.create({
    // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
    baseURL: 'http://localhost:3000/api/v1',
})

export const api = {
  get(endpoint){
    return axiosInstance.get(endpoint)
  },
  post(endpoint, body){
      return axiosInstance.post(endpoint, body)
  }
}
