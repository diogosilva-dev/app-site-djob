import axios from 'axios';

const url = 'https://api.djob.com.br/wp-json';

const axiosInstance = axios.create({
  baseURL: url + '/api/v1',
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return axios.post(url + '/jwt-auth/v1/token', body);
  },
  validateToken() {
    return axiosInstance.post(url + '/jwt-auth/v1/token/validate');
  },
};